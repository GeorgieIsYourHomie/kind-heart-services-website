import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

// initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

// handle POST requests to /api/contact
export async function POST(request: NextRequest) {
  try {
    // read JSON from the client (your form)
    const body = (await request.json()) as Partial<ContactPayload>;

    // normalize fields
    const firstName = (body.firstName ?? "").trim();
    const lastName = (body.lastName ?? "").trim();
    const email = (body.email ?? "").trim();
    const phone = (body.phone ?? "").trim();
    const message = (body.message ?? "").trim();

    // validate required fields
    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // safety check: make sure Resend API key exists
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, message: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    // compose email content
    const subject = "Kind Heart Services Website New Form Submission";
    const text = `
      NO REPLY

      New contact form submission from Kind Heart Services website sent at ${new Date().toISOString()}.

      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}

      Message:
      ${message}
      `.trim();

    // send email via Resend
    const result = await resend.emails.send({
      from: "Kind Heart Services <contact@kindheartservicesllc.com>",
      to: "kindheartservicesllc@gmail.com",
      subject: subject,
      replyTo: email,
      text: text,
    });

    // if Resend returns an error
    if (result.error) {
      console.error("Resend error:", result.error);
      return NextResponse.json(
        { success: false, message: "Email failed to send" },
        { status: 502 }
      );
    }

    // if all good
    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (err) {
    // catch unexpected errors
    console.error("Route error:", err);
    return NextResponse.json(
      { success: false, message: "Failed to process form submission" },
      { status: 500 }
    );
  }
}
