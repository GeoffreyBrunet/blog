import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: "icloud",
    auth: {
      user: process.env.ICLOUD_EMAIL as string,
      pass: process.env.ICLOUD_APP_SPECIFIC_PASSWORD as string,
    },
  });

  const mailOptions = {
    from: process.env.ICLOUD_EMAIL as string,
    to: process.env.ICLOUD_EMAIL as string,
    subject: `Message from ${name} (${email})`,
    text: message,
  };

  try {
    await transport.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent" });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );
  }
}
