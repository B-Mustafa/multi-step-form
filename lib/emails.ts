import { Resend } from 'resend';
import { FormData } from './form-schema';
import CarInquiryEmail from '@/components/emails/car-inquiry';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Email recipients
const RECIPIENTS = ['bareeqdigitals@gmail.com', 'bhikhapurmustafa@gmail.com'];

export async function sendCarInquiryEmails(formData: FormData) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not configured');
  }

  try {
    // Send emails to all recipients in parallel
    const emailPromises = RECIPIENTS.map((recipient) => 
      resend.emails.send({
        from: 'Car Inquiry <onboarding@resend.dev>',
        to: recipient,
        subject: `New Car Inquiry from ${formData.fullName}`,
        react: CarInquiryEmail(formData),
      })
    );

    await Promise.all(emailPromises);
    return { success: true };
  } catch (error) {
    console.error('Failed to send emails:', error);
    throw error;
  }
}