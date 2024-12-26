import { Resend } from 'resend';
import { FormData } from './form-schema';
import { EMAIL_CONFIG } from './constants';
import CarInquiryEmail from '@/components/emails/car-inquiry';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendCarInquiryEmails(formData: FormData) {
  if (!process.env.RESEND_API_KEY) {
    console.error('Missing RESEND_API_KEY environment variable');
    throw new Error('Email service is not configured');
  }

  try {
    // Send email to each recipient sequentially to avoid rate limits
    for (const recipient of EMAIL_CONFIG.recipients) {
      await resend.emails.send({
        from: EMAIL_CONFIG.from,
        to: recipient,
        subject: EMAIL_CONFIG.subject(formData.fullName),
        react: CarInquiryEmail(formData),
      });
    }
    
    return { success: true };
  } catch (error) {
    console.error('Failed to send emails:', error);
    throw new Error('Failed to send email notification');
  }
}