import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    const emailContent = `
      Car Information:
      Year: ${data.carYear}
      Brand: ${data.carBrand}
      Model: ${data.carModel}

      Vehicle Condition:
      Condition: ${data.condition}
      Vehicle Status: ${data.vehicleStatus}
      Mileage: ${data.mileage}
      Zip Code: ${data.zipCode}
      Features: ${data.features.join(', ')}
      ${data.otherFeatures ? `Other Features: ${data.otherFeatures}` : ''}
      Car Title: ${data.carTitle}
      Keys Available: ${data.hasKeys}

      Contact Information:
      Full Name: ${data.fullName}
      Email: ${data.email}
      Phone: ${data.phone}
      Asking Price: $${data.askingPrice}
    `;

    const recipients = ['bareeqdigitals@gmail.com', 'bhikhapurmustafa@gmail.com'];

    // In a real application, you would use a proper email service here
    // For demo purposes, we'll just log the email content
    console.log('Email Content:', emailContent);
    console.log('Recipients:', recipients);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}