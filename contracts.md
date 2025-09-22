# API Contracts & Backend Integration Guide

## Overview
This document outlines the API contracts and backend implementation requirements for Rupan Dutta's portfolio website.

## Backend Features to Implement

### 1. Contact Form API
**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "string (required, min: 2 chars)",
  "email": "string (required, valid email)",
  "company": "string (optional)",
  "subject": "string (required, min: 5 chars)",
  "message": "string (required, min: 20 chars)",
  "projectType": "string (required)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully",
  "id": "unique_submission_id"
}
```

**Functionality:**
- Form validation on server-side
- Send email to: duttard27@gmail.com
- Auto-response email to sender
- Rate limiting: 3 submissions per hour per IP
- Store submissions in MongoDB (optional)

### 2. Resume Download API
**Endpoint:** `GET /api/resume/download`

**Response:**
- Content-Type: application/pdf
- Content-Disposition: attachment; filename="Rupan_Dutta_Resume.pdf"
- File: EuroPass CV.pdf from user's assets

**Functionality:**
- Serve the CV PDF file securely
- Optional: Track download statistics
- Cache headers for performance

### 3. Health Check API
**Endpoint:** `GET /api/health`

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2025-01-22T10:30:00Z",
  "services": {
    "database": "connected",
    "email": "operational"
  }
}
```

## Frontend Integration Points

### Mock Data Removal
- Remove mock contact form functionality
- Integrate with real backend APIs
- Add proper error handling
- Add loading states

### Form Enhancements
- Real-time validation with backend
- Success/error notifications
- Form submission tracking
- Proper loading states

### Resume Download
- Replace mock alert with actual file download
- Add download tracking (optional)
- Proper error handling if file unavailable

## Email Templates

### Admin Notification Email
**To:** duttard27@gmail.com
**Subject:** New Portfolio Contact: [Subject]
**Template:** Include all form fields, sender details, timestamp

### Auto-Response Email
**To:** [User's email]
**Subject:** Thank you for contacting Rupan Dutta
**Template:** Professional acknowledgment, response time expectation

## Error Handling
- Validation errors: 400 with detailed field errors
- Rate limiting: 429 with retry-after header
- Server errors: 500 with generic message
- File not found: 404 for resume download

## Security Considerations
- Input sanitization
- Rate limiting
- CORS configuration
- File serving security
- Email injection prevention

## Database Schema (Optional)

### Contact Submissions
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  company: String,
  subject: String,
  message: String,
  projectType: String,
  submittedAt: Date,
  ipAddress: String,
  emailSent: Boolean,
  responded: Boolean
}
```

## Environment Variables Required
```
EMAIL_SERVICE_API_KEY=your_email_service_key
EMAIL_FROM=noreply@rupandutta.com
EMAIL_TO=duttard27@gmail.com
RATE_LIMIT_REQUESTS=3
RATE_LIMIT_WINDOW_HOURS=1
```

## Testing Endpoints
- POST /api/contact (form submission)
- GET /api/resume/download (file download)
- GET /api/health (service status)