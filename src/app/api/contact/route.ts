import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, phone, address, projectType, budget } =
      (await req.json()) as {
        name: string;
        phone: string;
        address: string;
        projectType: string;
        budget: string;
      };

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone are required.' },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Silver Storey" <${process.env.SMTP_USER}>`,
      to: 'spidyanas7878@gmail.com',
      subject: `New Consultation Request from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;border:1px solid #e5e5e5;border-radius:12px">
          <h2 style="margin-top:0;font-size:20px">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#666;width:130px">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Phone</td><td style="padding:8px 0;font-weight:600">${phone}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Address</td><td style="padding:8px 0">${address || '—'}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Project Type</td><td style="padding:8px 0">${projectType || '—'}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Budget</td><td style="padding:8px 0">${budget ? `₹${budget}` : '—'}</td></tr>
          </table>
          <p style="margin-top:24px;font-size:12px;color:#999">Sent from Silver Storey website contact form</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact] email error:', err);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 },
    );
  }
}
