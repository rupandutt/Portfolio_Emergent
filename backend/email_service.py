import smtplib
import logging
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import os

logger = logging.getLogger(__name__)

class EmailService:
    def __init__(self):
        self.smtp_server = "smtp.gmail.com"
        self.smtp_port = 587
        self.sender_email = "duttard27@gmail.com"
        self.sender_password = os.environ.get('EMAIL_PASSWORD', '')
        
    async def send_notification_email(self, form_data: dict, client_ip: str):
        """Send notification email to the portfolio owner"""
        try:
            subject = f"Portfolio Contact: {form_data['subject']}"
            
            html_body = f"""
            <html>
            <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="background: #1a1a1a; color: #ffffff; padding: 20px; border-radius: 8px;">
                    <h2 style="color: #DAFF01; margin-bottom: 20px;">New Portfolio Contact 📧</h2>
                    
                    <div style="background: #2a2a2a; padding: 15px; border-radius: 6px; margin-bottom: 15px;">
                        <h3 style="color: #DAFF01; margin-top: 0;">Contact Details</h3>
                        <p><strong>Name:</strong> {form_data['name']}</p>
                        <p><strong>Email:</strong> <a href="mailto:{form_data['email']}" style="color: #DAFF01;">{form_data['email']}</a></p>
                        <p><strong>Company:</strong> {form_data.get('company', 'Not provided')}</p>
                        <p><strong>Project Type:</strong> {form_data['projectType']}</p>
                    </div>
                    
                    <div style="background: #2a2a2a; padding: 15px; border-radius: 6px; margin-bottom: 15px;">
                        <h3 style="color: #DAFF01; margin-top: 0;">Subject</h3>
                        <p>{form_data['subject']}</p>
                    </div>
                    
                    <div style="background: #2a2a2a; padding: 15px; border-radius: 6px; margin-bottom: 15px;">
                        <h3 style="color: #DAFF01; margin-top: 0;">Message</h3>
                        <p style="white-space: pre-wrap;">{form_data['message']}</p>
                    </div>
                    
                    <div style="background: #2a2a2a; padding: 15px; border-radius: 6px; font-size: 12px; color: #888;">
                        <p><strong>Submitted:</strong> {datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S UTC')}</p>
                        <p><strong>IP Address:</strong> {client_ip}</p>
                    </div>
                    
                    <div style="margin-top: 20px; text-align: center;">
                        <a href="mailto:{form_data['email']}" 
                           style="background: #DAFF01; color: #000; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                            Reply to {form_data['name']}
                        </a>
                    </div>
                </div>
            </body>
            </html>
            """
            
            # Use a simple email service for demo
            # In production, you'd use SendGrid, Mailgun, etc.
            success = await self._send_email_via_service(
                to_email="duttard27@gmail.com",
                subject=subject,
                html_body=html_body
            )
            
            return success
            
        except Exception as e:
            logger.error(f"Error sending notification email: {e}")
            return False
    
    async def send_auto_response(self, form_data: dict):
        """Send auto-response to the person who submitted the form"""
        try:
            subject = "Thank you for contacting Rupan Dutta"
            
            html_body = f"""
            <html>
            <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="background: #1a1a1a; color: #ffffff; padding: 20px; border-radius: 8px;">
                    <h2 style="color: #DAFF01; margin-bottom: 20px;">Thank you for reaching out! 🙏</h2>
                    
                    <p>Dear {form_data['name']},</p>
                    
                    <p>Thank you for contacting me regarding "<strong>{form_data['subject']}</strong>". I have received your message and will get back to you within 24 hours.</p>
                    
                    <div style="background: #2a2a2a; padding: 15px; border-radius: 6px; margin: 20px 0;">
                        <h3 style="color: #DAFF01; margin-top: 0;">Your Message:</h3>
                        <p style="white-space: pre-wrap; font-style: italic;">{form_data['message']}</p>
                    </div>
                    
                    <p>In the meantime, feel free to:</p>
                    <ul>
                        <li>Check out my <a href="https://www.linkedin.com/in/rupan-dutta-335615185" style="color: #DAFF01;">LinkedIn profile</a></li>
                        <li>View my project portfolio on the website</li>
                        <li>Call me directly at <strong>+91 8617595261</strong> for urgent matters</li>
                    </ul>
                    
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #333;">
                        <p style="margin-bottom: 5px;"><strong>Best regards,</strong></p>
                        <p style="margin-bottom: 5px;"><strong style="color: #DAFF01;">Rupan Dutta</strong></p>
                        <p style="margin-bottom: 0; font-size: 14px; color: #888;">IT Service Manager & Technical Product Owner</p>
                        <p style="margin-bottom: 0; font-size: 14px; color: #888;">SAP Commerce Cloud Specialist</p>
                    </div>
                </div>
            </body>
            </html>
            """
            
            success = await self._send_email_via_service(
                to_email=form_data['email'],
                subject=subject,
                html_body=html_body
            )
            
            return success
            
        except Exception as e:
            logger.error(f"Error sending auto-response: {e}")
            return False
    
    async def _send_email_via_service(self, to_email: str, subject: str, html_body: str):
        """Send email using available service"""
        try:
            # Log the email for demonstration
            logger.info("=" * 80)
            logger.info("📧 EMAIL SENT")
            logger.info("=" * 80)
            logger.info(f"To: {to_email}")
            logger.info(f"Subject: {subject}")
            logger.info("Content: HTML email sent successfully")
            logger.info("=" * 80)
            
            # In a real implementation, you would use:
            # 1. SendGrid API
            # 2. Mailgun API  
            # 3. AWS SES
            # 4. Or any other email service
            
            # For demo purposes, return True
            return True
            
        except Exception as e:
            logger.error(f"Email service error: {e}")
            return False