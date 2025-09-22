import smtplib
import logging
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import os
import asyncio

logger = logging.getLogger(__name__)

class EmailService:
    def __init__(self):
        # Gmail SMTP configuration
        self.smtp_server = "smtp.gmail.com"
        self.smtp_port = 587
        self.sender_email = "duttard27@gmail.com"
        # You can set this via environment variable for security
        self.sender_password = os.environ.get('GMAIL_APP_PASSWORD', 'your_app_password_here')
        
    async def send_notification_email(self, form_data: dict, client_ip: str):
        """Send notification email to the portfolio owner"""
        try:
            subject = f"Portfolio Contact: {form_data['subject']}"
            
            # Create plain text version
            text_body = f"""
New Portfolio Contact Form Submission

Contact Details:
- Name: {form_data['name']}
- Email: {form_data['email']}
- Company: {form_data.get('company', 'Not provided')}
- Project Type: {form_data['projectType']}

Subject: {form_data['subject']}

Message:
{form_data['message']}

Submitted: {datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S UTC')}
IP Address: {client_ip}

---
Reply directly to: {form_data['email']}
            """
            
            html_body = f"""
            <html>
            <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f5f5f5; padding: 20px;">
                <div style="background: #1a1a1a; color: #ffffff; padding: 30px; border-radius: 10px;">
                    <h2 style="color: #DAFF01; margin-bottom: 20px; text-align: center;">📧 New Portfolio Contact</h2>
                    
                    <div style="background: #2a2a2a; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                        <h3 style="color: #DAFF01; margin-top: 0;">Contact Information</h3>
                        <table style="width: 100%; color: #ffffff;">
                            <tr><td style="padding: 5px 0;"><strong>Name:</strong></td><td>{form_data['name']}</td></tr>
                            <tr><td style="padding: 5px 0;"><strong>Email:</strong></td><td><a href="mailto:{form_data['email']}" style="color: #DAFF01;">{form_data['email']}</a></td></tr>
                            <tr><td style="padding: 5px 0;"><strong>Company:</strong></td><td>{form_data.get('company', 'Not provided')}</td></tr>
                            <tr><td style="padding: 5px 0;"><strong>Project Type:</strong></td><td>{form_data['projectType']}</td></tr>
                        </table>
                    </div>
                    
                    <div style="background: #2a2a2a; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                        <h3 style="color: #DAFF01; margin-top: 0;">Subject</h3>
                        <p style="margin: 0;">{form_data['subject']}</p>
                    </div>
                    
                    <div style="background: #2a2a2a; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                        <h3 style="color: #DAFF01; margin-top: 0;">Message</h3>
                        <p style="white-space: pre-wrap; margin: 0;">{form_data['message']}</p>
                    </div>
                    
                    <div style="background: #333; padding: 15px; border-radius: 8px; font-size: 12px; color: #888; margin-bottom: 20px;">
                        <p style="margin: 5px 0;"><strong>Submitted:</strong> {datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S UTC')}</p>
                        <p style="margin: 5px 0;"><strong>IP Address:</strong> {client_ip}</p>
                    </div>
                    
                    <div style="text-align: center;">
                        <a href="mailto:{form_data['email']}" 
                           style="background: #DAFF01; color: #000; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
                            Reply to {form_data['name']}
                        </a>
                    </div>
                </div>
            </body>
            </html>
            """
            
            success = await self._send_email_smtp(
                to_email="duttard27@gmail.com",
                subject=subject,
                text_body=text_body,
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
            
            text_body = f"""
Dear {form_data['name']},

Thank you for contacting me regarding "{form_data['subject']}". I have received your message and will get back to you within 24 hours.

Your Message:
{form_data['message']}

In the meantime, feel free to:
- Check out my LinkedIn profile: https://www.linkedin.com/in/rupan-dutta-335615185
- View my project portfolio on the website
- Call me directly at +91 8617595261 for urgent matters

Best regards,
Rupan Dutta
IT Service Manager & Technical Product Owner
SAP Commerce Cloud Specialist

Email: duttard27@gmail.com
Phone: +91 8617595261
            """
            
            html_body = f"""
            <html>
            <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f5f5f5; padding: 20px;">
                <div style="background: #1a1a1a; color: #ffffff; padding: 30px; border-radius: 10px;">
                    <h2 style="color: #DAFF01; margin-bottom: 20px; text-align: center;">🙏 Thank you for reaching out!</h2>
                    
                    <p style="font-size: 16px;">Dear <strong>{form_data['name']}</strong>,</p>
                    
                    <p style="font-size: 16px;">Thank you for contacting me regarding "<strong style="color: #DAFF01;">{form_data['subject']}</strong>". I have received your message and will get back to you within 24 hours.</p>
                    
                    <div style="background: #2a2a2a; padding: 20px; border-radius: 8px; margin: 25px 0;">
                        <h3 style="color: #DAFF01; margin-top: 0;">Your Message:</h3>
                        <p style="white-space: pre-wrap; font-style: italic; margin: 0; border-left: 3px solid #DAFF01; padding-left: 15px;">{form_data['message']}</p>
                    </div>
                    
                    <p style="font-size: 16px;">In the meantime, feel free to:</p>
                    <ul style="font-size: 16px;">
                        <li>Check out my <a href="https://www.linkedin.com/in/rupan-dutta-335615185" style="color: #DAFF01; text-decoration: none;">LinkedIn profile</a></li>
                        <li>View my project portfolio on the website</li>
                        <li>Call me directly at <strong style="color: #DAFF01;">+91 8617595261</strong> for urgent matters</li>
                    </ul>
                    
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #333; text-align: center;">
                        <p style="margin-bottom: 5px; font-size: 18px;"><strong>Best regards,</strong></p>
                        <p style="margin-bottom: 8px; font-size: 20px;"><strong style="color: #DAFF01;">Rupan Dutta</strong></p>
                        <p style="margin-bottom: 5px; font-size: 14px; color: #ccc;">IT Service Manager & Technical Product Owner</p>
                        <p style="margin-bottom: 15px; font-size: 14px; color: #ccc;">SAP Commerce Cloud Specialist</p>
                        
                        <div style="font-size: 14px; color: #888;">
                            <p style="margin: 3px 0;">📧 duttard27@gmail.com</p>
                            <p style="margin: 3px 0;">📱 +91 8617595261</p>
                        </div>
                    </div>
                </div>
            </body>
            </html>
            """
            
            success = await self._send_email_smtp(
                to_email=form_data['email'],
                subject=subject,
                text_body=text_body,
                html_body=html_body
            )
            
            return success
            
        except Exception as e:
            logger.error(f"Error sending auto-response: {e}")
            return False
    
    async def _send_email_smtp(self, to_email: str, subject: str, text_body: str, html_body: str = None):
        """Send email using SMTP"""
        try:
            # Create message
            msg = MIMEMultipart('alternative')
            msg['Subject'] = subject
            msg['From'] = self.sender_email
            msg['To'] = to_email
            
            # Add text version
            text_part = MIMEText(text_body, 'plain')
            msg.attach(text_part)
            
            # Add HTML version if provided
            if html_body:
                html_part = MIMEText(html_body, 'html')
                msg.attach(html_part)
            
            # Send email using SMTP
            def send_sync():
                server = smtplib.SMTP(self.smtp_server, self.smtp_port)
                server.starttls()  # Enable TLS encryption
                server.login(self.sender_email, self.sender_password)
                server.send_message(msg)
                server.quit()
                return True
            
            # Run in thread pool to avoid blocking
            loop = asyncio.get_event_loop()
            success = await loop.run_in_executor(None, send_sync)
            
            logger.info(f"✅ EMAIL SUCCESSFULLY SENT to {to_email}")
            logger.info(f"Subject: {subject}")
            
            return success
            
        except smtplib.SMTPAuthenticationError as e:
            logger.error(f"❌ SMTP Authentication failed. Please check email credentials: {e}")
            logger.error("💡 TIP: Use Gmail App Password, not your regular password")
            return False
        except smtplib.SMTPException as e:
            logger.error(f"❌ SMTP Error: {e}")
            return False
        except Exception as e:
            logger.error(f"❌ Unexpected error sending email: {e}")
            return False