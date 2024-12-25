import EmailTemplate from '@/components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  if (req.method === 'POST') {
    try {
      const data = await req.json();

      // Ensure all required fields are present
      const {
        carYear,
        carBrand,
        carModel,
        condition,
        vehicleStatus,
        mileage,
        zipCode,
        features,
        otherFeatures,
        carTitle,
        hasKeys,
        fullName,
        email,
        phone,
        askingPrice,
      } = data;

      if (
        !carYear ||
        !carBrand ||
        !carModel ||
        !condition ||
        !vehicleStatus ||
        !mileage ||
        !zipCode ||
        !fullName ||
        !email ||
        !phone ||
        !askingPrice
      ) {
        return NextResponse.json(
          { error: 'Missing required fields' },
          { status: 400 }
        );
      }


      // Send email using Resend
      await resend.emails.send({
        from: 'Contact@mustafabhikhapur.me',
        to: ['bhikhapurmustafa@gmail.com', 'bareeqdigitals@gmail.com'],
        subject: 'New Car Submission Details',
        react: React.createElement(EmailTemplate,{
          carYear:carYear,
          carBrand:carBrand,
          carModel:carModel,
          condition:condition,
          vehicleStatus:vehicleStatus,
          mileage:mileage,
          zipCode:zipCode,
          features:features,
          otherFeatures:otherFeatures,
          carTitle:carTitle,
          hasKeys:hasKeys,
          fullName:fullName,
          email:email,
          phone:phone,
          askingPrice:askingPrice,
        }),
      });

      return NextResponse.json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
  } else {
    return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
  }
}
