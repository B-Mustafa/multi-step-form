import { NextResponse } from 'next/server';
import { sendEmail } from '@/action/sendEmail';

export async function POST(req: Request) {
  try {
    const formData = await req.json(); // Parse JSON request body
    const { error, data } = await sendEmail(formData);

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
