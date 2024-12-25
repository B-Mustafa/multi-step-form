import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!); // Ensure this environment variable is set

export async function POST(req: Request) {
  // console.log("Api has been hit",req)
  try {
    const data = await req.json();
    
    const emailContent = `
      <p><strong>Car Information:</strong></p>
      <p>Year: ${data.carYear}</p>
      <p>Brand: ${data.carBrand}</p>
      <p>Model: ${data.carModel}</p>

      <p><strong>Vehicle Condition:</strong></p>
      <p>Condition: ${data.condition}</p>
      <p>Vehicle Status: ${data.vehicleStatus}</p>
      <p>Mileage: ${data.mileage}</p>
      <p>Zip Code: ${data.zipCode}</p>
      <p>Features: ${data.features.join(', ')}</p>
      ${data.otherFeatures ? `<p>Other Features: ${data.otherFeatures}</p>` : ''}
      <p>Car Title: ${data.carTitle}</p>
      <p>Keys Available: ${data.hasKeys}</p>

      <p><strong>Contact Information:</strong></p>
      <p>Full Name: ${data.fullName}</p>
      <p>Email: ${data.email}</p>
      <p>Phone: ${data.phone}</p>
      <p>Asking Price: $${data.askingPrice}</p>
    `;

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: 'Contact@mustafabhikhapur.me',
      to: ['bhikhapurmustafa@gmail.com','bareeqdigitals@gmail.com'],
      subject: 'New Car Submission Details',
      html: emailContent,
    });

    console.log('Email Response:', emailResponse);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
