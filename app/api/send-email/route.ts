import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import CarInquiryEmail from '@/emails/car-inquiry';
import { EMAIL_CONFIG } from '@/lib/constants';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'Email service is not configured' },
      { status: 500 }
    );
  }

  try {
    const data = await req.json();
    
    if (!data) {
      return NextResponse.json(
        { error: 'No data provided' },
        { status: 400 }
      );
    }

    // Send email to each recipient
    const emailPromises = EMAIL_CONFIG.recipients.map(recipient =>
      resend.emails.send({
        from: EMAIL_CONFIG.from,
        to: recipient,
        subject: EMAIL_CONFIG.subject(data.fullName),
        react: CarInquiryEmail(data),
      })
    );

    await Promise.all(emailPromises);
    
    return NextResponse.json({ 
      success: true,
      message: 'Email sent successfully' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}