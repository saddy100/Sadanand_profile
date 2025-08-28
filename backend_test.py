#!/usr/bin/env python3
"""
Comprehensive Backend API Testing for Sadanand's Portfolio
Tests all endpoints with realistic data and error scenarios
"""

import requests
import json
import time
from datetime import datetime
import sys
import os

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    base_url = line.split('=')[1].strip()
                    return f"{base_url}/api"
        return "https://talent-hub-83.preview.emergentagent.com/api"
    except:
        return "https://talent-hub-83.preview.emergentagent.com/api"

BASE_URL = get_backend_url()
print(f"Testing Backend API at: {BASE_URL}")

class PortfolioAPITester:
    def __init__(self):
        self.base_url = BASE_URL
        self.test_results = []
        self.contact_id = None
        
    def log_test(self, test_name, success, message, details=None):
        """Log test results"""
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} {test_name}: {message}")
        if details:
            print(f"   Details: {details}")
        
        self.test_results.append({
            'test': test_name,
            'success': success,
            'message': message,
            'details': details,
            'timestamp': datetime.now().isoformat()
        })
    
    def test_health_check(self):
        """Test the root endpoint health check"""
        try:
            response = requests.get(f"{self.base_url}/", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if "Portfolio API" in data.get("message", ""):
                    self.log_test("Health Check", True, "API is responding correctly")
                    return True
                else:
                    self.log_test("Health Check", False, f"Unexpected response: {data}")
                    return False
            else:
                self.log_test("Health Check", False, f"HTTP {response.status_code}: {response.text}")
                return False
                
        except requests.exceptions.RequestException as e:
            self.log_test("Health Check", False, f"Connection error: {str(e)}")
            return False
    
    def test_contact_form_valid(self):
        """Test contact form with valid data"""
        contact_data = {
            "name": "John Smith",
            "email": "john.smith@techcorp.com",
            "subject": "Collaboration Opportunity",
            "message": "Hi Sadanand, I came across your portfolio and I'm impressed with your work on full-stack applications. We have an exciting project that could benefit from your expertise in React and Python. Would you be interested in discussing a potential collaboration?"
        }
        
        try:
            response = requests.post(
                f"{self.base_url}/contact",
                json=contact_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            if response.status_code == 200:
                data = response.json()
                if data.get("success") and "id" in data:
                    self.contact_id = data["id"]
                    self.log_test("Contact Form Valid", True, "Contact form submitted successfully", f"ID: {self.contact_id}")
                    return True
                else:
                    self.log_test("Contact Form Valid", False, f"Invalid response structure: {data}")
                    return False
            else:
                self.log_test("Contact Form Valid", False, f"HTTP {response.status_code}: {response.text}")
                return False
                
        except requests.exceptions.RequestException as e:
            self.log_test("Contact Form Valid", False, f"Request error: {str(e)}")
            return False
    
    def test_contact_form_invalid_email(self):
        """Test contact form with invalid email"""
        contact_data = {
            "name": "Jane Doe",
            "email": "invalid-email-format",
            "subject": "Test Subject",
            "message": "Test message"
        }
        
        try:
            response = requests.post(
                f"{self.base_url}/contact",
                json=contact_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            # Should return 422 for validation error
            if response.status_code == 422:
                self.log_test("Contact Form Invalid Email", True, "Correctly rejected invalid email format")
                return True
            else:
                self.log_test("Contact Form Invalid Email", False, f"Expected 422, got {response.status_code}: {response.text}")
                return False
                
        except requests.exceptions.RequestException as e:
            self.log_test("Contact Form Invalid Email", False, f"Request error: {str(e)}")
            return False
    
    def test_contact_form_missing_fields(self):
        """Test contact form with missing required fields"""
        contact_data = {
            "name": "Test User",
            "email": "test@example.com"
            # Missing subject and message
        }
        
        try:
            response = requests.post(
                f"{self.base_url}/contact",
                json=contact_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            # Should return 422 for validation error
            if response.status_code == 422:
                self.log_test("Contact Form Missing Fields", True, "Correctly rejected missing required fields")
                return True
            else:
                self.log_test("Contact Form Missing Fields", False, f"Expected 422, got {response.status_code}: {response.text}")
                return False
                
        except requests.exceptions.RequestException as e:
            self.log_test("Contact Form Missing Fields", False, f"Request error: {str(e)}")
            return False
    
    def test_get_contact_messages(self):
        """Test retrieving contact messages"""
        try:
            response = requests.get(f"{self.base_url}/contact", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    # Check if our submitted message is in the list
                    found_message = False
                    if self.contact_id:
                        for msg in data:
                            if msg.get("id") == self.contact_id:
                                found_message = True
                                break
                    
                    if found_message or len(data) > 0:
                        self.log_test("Get Contact Messages", True, f"Retrieved {len(data)} contact messages")
                        return True
                    else:
                        self.log_test("Get Contact Messages", True, "No contact messages found (empty database)")
                        return True
                else:
                    self.log_test("Get Contact Messages", False, f"Expected list, got: {type(data)}")
                    return False
            else:
                self.log_test("Get Contact Messages", False, f"HTTP {response.status_code}: {response.text}")
                return False
                
        except requests.exceptions.RequestException as e:
            self.log_test("Get Contact Messages", False, f"Request error: {str(e)}")
            return False
    
    def test_analytics_tracking(self):
        """Test analytics event tracking"""
        analytics_data = {
            "section": "projects",
            "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
        
        try:
            response = requests.post(
                f"{self.base_url}/analytics",
                json=analytics_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            if response.status_code == 200:
                data = response.json()
                if data.get("success"):
                    self.log_test("Analytics Tracking", True, "Analytics event tracked successfully")
                    return True
                else:
                    self.log_test("Analytics Tracking", False, f"Analytics tracking failed: {data}")
                    return False
            else:
                self.log_test("Analytics Tracking", False, f"HTTP {response.status_code}: {response.text}")
                return False
                
        except requests.exceptions.RequestException as e:
            self.log_test("Analytics Tracking", False, f"Request error: {str(e)}")
            return False
    
    def test_analytics_tracking_minimal(self):
        """Test analytics tracking with minimal data"""
        analytics_data = {
            "section": "about"
            # userAgent is optional
        }
        
        try:
            response = requests.post(
                f"{self.base_url}/analytics",
                json=analytics_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            if response.status_code == 200:
                data = response.json()
                if data.get("success"):
                    self.log_test("Analytics Tracking Minimal", True, "Analytics tracking works with minimal data")
                    return True
                else:
                    self.log_test("Analytics Tracking Minimal", False, f"Analytics tracking failed: {data}")
                    return False
            else:
                self.log_test("Analytics Tracking Minimal", False, f"HTTP {response.status_code}: {response.text}")
                return False
                
        except requests.exceptions.RequestException as e:
            self.log_test("Analytics Tracking Minimal", False, f"Request error: {str(e)}")
            return False
    
    def test_get_analytics(self):
        """Test retrieving analytics data"""
        try:
            response = requests.get(f"{self.base_url}/analytics", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                required_fields = ["total_visits", "contact_submissions", "popular_sections"]
                
                if all(field in data for field in required_fields):
                    self.log_test("Get Analytics", True, 
                                f"Analytics retrieved: {data['total_visits']} visits, "
                                f"{data['contact_submissions']} submissions, "
                                f"Popular sections: {data['popular_sections']}")
                    return True
                else:
                    missing = [f for f in required_fields if f not in data]
                    self.log_test("Get Analytics", False, f"Missing fields: {missing}")
                    return False
            else:
                self.log_test("Get Analytics", False, f"HTTP {response.status_code}: {response.text}")
                return False
                
        except requests.exceptions.RequestException as e:
            self.log_test("Get Analytics", False, f"Request error: {str(e)}")
            return False
    
    def test_malformed_requests(self):
        """Test handling of malformed requests"""
        try:
            # Test invalid JSON
            response = requests.post(
                f"{self.base_url}/contact",
                data="invalid json data",
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            if response.status_code in [400, 422]:
                self.log_test("Malformed Request Handling", True, "Correctly handled malformed JSON")
                return True
            else:
                self.log_test("Malformed Request Handling", False, f"Expected 400/422, got {response.status_code}")
                return False
                
        except requests.exceptions.RequestException as e:
            self.log_test("Malformed Request Handling", False, f"Request error: {str(e)}")
            return False
    
    def test_performance(self):
        """Test API response times"""
        endpoints = [
            ("GET", "/"),
            ("GET", "/analytics"),
            ("GET", "/contact")
        ]
        
        performance_results = []
        
        for method, endpoint in endpoints:
            try:
                start_time = time.time()
                
                if method == "GET":
                    response = requests.get(f"{self.base_url}{endpoint}", timeout=10)
                
                end_time = time.time()
                response_time = (end_time - start_time) * 1000  # Convert to milliseconds
                
                performance_results.append({
                    'endpoint': endpoint,
                    'response_time_ms': response_time,
                    'status_code': response.status_code
                })
                
            except requests.exceptions.RequestException as e:
                performance_results.append({
                    'endpoint': endpoint,
                    'error': str(e)
                })
        
        # Check if all response times are reasonable (< 5 seconds)
        slow_endpoints = [r for r in performance_results if r.get('response_time_ms', 0) > 5000]
        
        if not slow_endpoints:
            avg_time = sum(r.get('response_time_ms', 0) for r in performance_results) / len(performance_results)
            self.log_test("Performance Test", True, f"All endpoints respond quickly (avg: {avg_time:.2f}ms)")
            return True
        else:
            self.log_test("Performance Test", False, f"Slow endpoints detected: {slow_endpoints}")
            return False
    
    def run_all_tests(self):
        """Run all backend API tests"""
        print("=" * 60)
        print("STARTING COMPREHENSIVE BACKEND API TESTING")
        print("=" * 60)
        
        tests = [
            self.test_health_check,
            self.test_contact_form_valid,
            self.test_contact_form_invalid_email,
            self.test_contact_form_missing_fields,
            self.test_get_contact_messages,
            self.test_analytics_tracking,
            self.test_analytics_tracking_minimal,
            self.test_get_analytics,
            self.test_malformed_requests,
            self.test_performance
        ]
        
        passed = 0
        total = len(tests)
        
        for test in tests:
            try:
                if test():
                    passed += 1
                time.sleep(0.5)  # Small delay between tests
            except Exception as e:
                self.log_test(test.__name__, False, f"Test execution error: {str(e)}")
        
        print("\n" + "=" * 60)
        print("BACKEND API TEST SUMMARY")
        print("=" * 60)
        print(f"Tests Passed: {passed}/{total}")
        print(f"Success Rate: {(passed/total)*100:.1f}%")
        
        if passed == total:
            print("🎉 ALL BACKEND TESTS PASSED - API IS PRODUCTION READY!")
        else:
            print("⚠️  SOME TESTS FAILED - REVIEW ISSUES ABOVE")
        
        return passed == total

def main():
    """Main test execution"""
    tester = PortfolioAPITester()
    success = tester.run_all_tests()
    
    # Return appropriate exit code
    sys.exit(0 if success else 1)

if __name__ == "__main__":
    main()