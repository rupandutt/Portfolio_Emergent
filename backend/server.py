from fastapi import FastAPI, APIRouter, HTTPException, Request, Response
from fastapi.responses import FileResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timedelta
import asyncio
from collections import defaultdict
import time
from email_service import EmailService


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

# Rate limiting storage
rate_limit_storage = defaultdict(list)

# Email service instance
email_service = EmailService()

# Define Models
class ContactFormRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    company: Optional[str] = Field(None, max_length=100)
    subject: str = Field(..., min_length=5, max_length=200)
    message: str = Field(..., min_length=20, max_length=2000)
    projectType: str = Field(..., max_length=50)

class ContactFormResponse(BaseModel):
    success: bool
    message: str
    id: Optional[str] = None

class HealthResponse(BaseModel):
    status: str
    timestamp: datetime
    services: dict

# Rate limiting function
def check_rate_limit(request: Request, limit: int = 3, window_hours: int = 1) -> bool:
    client_ip = request.client.host
    current_time = time.time()
    window_start = current_time - (window_hours * 3600)
    
    # Clean old requests
    rate_limit_storage[client_ip] = [
        req_time for req_time in rate_limit_storage[client_ip] 
        if req_time > window_start
    ]
    
    # Check if limit exceeded
    if len(rate_limit_storage[client_ip]) >= limit:
        return False
    
    # Add current request
    rate_limit_storage[client_ip].append(current_time)
    return True

# Add your routes to the router instead of directly to app
@api_router.get("/", response_model=dict)
async def root():
    return {"message": "Rupan Dutta Portfolio API"}

@api_router.get("/health", response_model=HealthResponse)
async def health_check():
    try:
        # Check database connection
        await db.admin.command('ping')
        db_status = "connected"
    except Exception:
        db_status = "disconnected"
    
    return HealthResponse(
        status="healthy" if db_status == "connected" else "degraded",
        timestamp=datetime.utcnow(),
        services={
            "database": db_status,
            "email": "operational"
        }
    )

@api_router.post("/contact", response_model=ContactFormResponse)
async def submit_contact_form(form_data: ContactFormRequest, request: Request):
    # Rate limiting check
    if not check_rate_limit(request, limit=3, window_hours=1):
        raise HTTPException(
            status_code=429,
            detail="Too many requests. Please try again later.",
            headers={"Retry-After": "3600"}
        )
    
    try:
        # Create submission record
        submission_id = str(uuid.uuid4())
        submission = {
            "_id": submission_id,
            "name": form_data.name,
            "email": form_data.email,
            "company": form_data.company,
            "subject": form_data.subject,
            "message": form_data.message,
            "projectType": form_data.projectType,
            "submittedAt": datetime.utcnow(),
            "ipAddress": request.client.host,
            "emailSent": False,
            "responded": False
        }
        
        # Save to database
        await db.contact_submissions.insert_one(submission)
        
        # Send emails using the email service
        notification_sent = await email_service.send_notification_email(form_data.dict(), request.client.host)
        auto_response_sent = await email_service.send_auto_response(form_data.dict())
        
        # Update email sent status
        if notification_sent:
            await db.contact_submissions.update_one(
                {"_id": submission_id},
                {"$set": {"emailSent": True}}
            )
        
        return ContactFormResponse(
            success=True,
            message="Thank you for your message! I'll get back to you within 24 hours.",
            id=submission_id
        )
        
    except Exception as e:
        logger.error(f"Error processing contact form: {e}")
        raise HTTPException(
            status_code=500,
            detail="An error occurred while processing your request. Please try again later."
        )

@api_router.get("/resume/download")
async def download_resume():
    try:
        # Path to the resume file (we'll save the user's CV)
        resume_path = ROOT_DIR / "static" / "Rupan_Dutta_Resume.pdf"
        
        if not resume_path.exists():
            raise HTTPException(status_code=404, detail="Resume file not found")
        
        return FileResponse(
            path=str(resume_path),
            filename="Rupan_Dutta_Resume.pdf",
            media_type="application/pdf",
            headers={
                "Content-Disposition": "attachment; filename=Rupan_Dutta_Resume.pdf"
            }
        )
    except Exception as e:
        logger.error(f"Error serving resume: {e}")
        raise HTTPException(status_code=500, detail="Error downloading resume")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
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
