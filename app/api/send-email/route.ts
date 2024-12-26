import CarInquiryEmail from '@/components/emails/car-inquiry';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    const recipients = ['bareeqdigitals@gmail.com', 'bhikhapurmustafa@gmail.com'];
    
    // Send email to each recipient
    await Promise.all(
      recipients.map(async (recipient) => {
        await resend.emails.send({
          from: 'Car Inquiry Contact@mustafabhikhapur.me',
          to: recipient,
          subject: `New Car Inquiry from ${data.fullName}`,
          react: CarInquiryEmail(data) as React.ReactElement,
        });
      })
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}