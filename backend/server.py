from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# Portfolio Models
class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    subject: str
    message: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    isRead: bool = False
    response: Optional[str] = None

class ContactMessageCreate(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

class ContactResponse(BaseModel):
    success: bool
    message: str
    id: str

class AnalyticsEvent(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    visitDate: datetime = Field(default_factory=datetime.utcnow)
    section: str
    userAgent: Optional[str] = None

class AnalyticsEventCreate(BaseModel):
    section: str
    userAgent: Optional[str] = None

class AnalyticsResponse(BaseModel):
    total_visits: int
    contact_submissions: int
    popular_sections: List[str]

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Sadanand Srivastava Portfolio API"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Portfolio API Routes
@api_router.post("/contact", response_model=ContactResponse)
async def submit_contact_form(contact_data: ContactMessageCreate):
    try:
        # Create contact message object
        contact_msg = ContactMessage(**contact_data.dict())
        
        # Insert into database
        result = await db.contact_messages.insert_one(contact_msg.dict())
        
        if result.inserted_id:
            return ContactResponse(
                success=True,
                message="Message sent successfully! I'll get back to you within 24 hours.",
                id=contact_msg.id
            )
        else:
            raise HTTPException(status_code=500, detail="Failed to save message")
            
    except Exception as e:
        logger.error(f"Error saving contact message: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.get("/contact", response_model=List[ContactMessage])
async def get_contact_messages():
    try:
        messages = await db.contact_messages.find().sort("timestamp", -1).to_list(100)
        return [ContactMessage(**msg) for msg in messages]
    except Exception as e:
        logger.error(f"Error fetching contact messages: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.post("/analytics")
async def track_analytics(analytics_data: AnalyticsEventCreate):
    try:
        # Create analytics event
        event = AnalyticsEvent(**analytics_data.dict())
        
        # Insert into database
        await db.analytics.insert_one(event.dict())
        
        return {"success": True, "message": "Analytics tracked"}
        
    except Exception as e:
        logger.error(f"Error tracking analytics: {str(e)}")
        return {"success": False, "message": "Failed to track analytics"}

@api_router.get("/analytics", response_model=AnalyticsResponse)
async def get_analytics():
    try:
        # Count total visits
        total_visits = await db.analytics.count_documents({})
        
        # Count contact submissions
        contact_submissions = await db.contact_messages.count_documents({})
        
        # Get popular sections
        pipeline = [
            {"$group": {"_id": "$section", "count": {"$sum": 1}}},
            {"$sort": {"count": -1}},
            {"$limit": 5}
        ]
        popular_sections_cursor = db.analytics.aggregate(pipeline)
        popular_sections = [doc["_id"] async for doc in popular_sections_cursor]
        
        return AnalyticsResponse(
            total_visits=total_visits,
            contact_submissions=contact_submissions,
            popular_sections=popular_sections
        )
        
    except Exception as e:
        logger.error(f"Error fetching analytics: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch analytics")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
