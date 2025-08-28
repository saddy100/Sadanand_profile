# Portfolio API Contracts & Integration Guide

## Overview
This document outlines the API contracts and integration plan for Sadanand Srivastava's portfolio website. The backend will handle contact form submissions, portfolio data management, and analytics.

## Current Mock Data
**Location**: `/app/frontend/src/data/mock.js`
**Mock Data Includes**:
- Personal information and contact details
- About me content and descriptions
- Skills categorized by domain
- Professional experience timeline
- Project showcase data
- Education and certifications

## API Endpoints to Implement

### 1. Contact Form API
**Endpoint**: `POST /api/contact`
**Purpose**: Handle contact form submissions
**Request Body**:
```json
{
  "name": "string (required)",
  "email": "string (required, email format)",
  "subject": "string (required)",
  "message": "string (required)",
  "timestamp": "datetime (auto-generated)"
}
```
**Response**:
```json
{
  "success": true,
  "message": "Message sent successfully",
  "id": "contact_id"
}
```

### 2. Portfolio Analytics API
**Endpoint**: `GET /api/analytics`
**Purpose**: Track portfolio visits and engagement
**Response**:
```json
{
  "total_visits": "number",
  "contact_submissions": "number",
  "popular_sections": ["array of section names"]
}
```

### 3. Portfolio Data API
**Endpoint**: `GET /api/portfolio`
**Purpose**: Serve portfolio data (future-proofing for CMS)
**Response**: Portfolio data structure matching mock.js format

## Database Schema

### Contact Messages Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  subject: String,
  message: String,
  timestamp: Date,
  isRead: Boolean (default: false),
  response: String (optional)
}
```

### Analytics Collection
```javascript
{
  _id: ObjectId,
  visitDate: Date,
  section: String,
  userAgent: String,
  ipAddress: String (hashed for privacy)
}
```

## Frontend Integration Plan

### Contact Form Integration
**File**: `/app/frontend/src/components/Contact.jsx`
**Changes Needed**:
- Replace mock form submission with actual API call
- Add proper error handling and loading states
- Implement success/error notifications

### Analytics Integration
**Files**: All main components
**Changes Needed**:
- Add section view tracking on scroll
- Track form submissions and interactions
- Add page visit analytics

## Environment Variables
**Backend .env additions needed**:
```
EMAIL_SERVICE_ENABLED=false  # For future email notifications
ANALYTICS_ENABLED=true
```

## Integration Steps
1. ✅ Create backend models and API endpoints
2. ✅ Update Contact.jsx to use real API
3. ✅ Add analytics tracking hooks
4. ✅ Remove mock.js imports where replaced with API calls
5. ✅ Test full-stack integration
6. ✅ Verify all interactions work end-to-end

## Error Handling Strategy
- **Frontend**: Toast notifications for success/error states
- **Backend**: Proper HTTP status codes and error messages
- **Database**: Validation at model level
- **Network**: Graceful fallbacks for API failures

## Testing Requirements
- Contact form submission and validation
- Error handling for invalid inputs
- Database connection and data persistence
- API response times and reliability
- Cross-browser compatibility for AJAX calls

## Future Enhancements (Optional)
- Email notifications for contact form submissions
- Admin dashboard for managing contact messages
- Portfolio content management system
- Advanced analytics and reporting
- Blog/article section with CMS