import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  website: string;
};

// initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

// handle POST requests to /api/contact
export async function POST(request: NextRequest) {
  try {
    // 1. read JSON from the client (your form)
    const body = (await request.json()) as Partial<ContactPayload>;

    // 2. normalize fields
    const firstName = (body.firstName ?? "").trim();
    const lastName = (body.lastName ?? "").trim();
    const email = (body.email ?? "").trim();
    const phone = (body.phone ?? "").trim();
    const message = (body.message ?? "").trim();
    const website = (body.website ?? "").trim(); // honeypot

    // 3. validate required fields
    if (!firstName || !lastName || !email || !phone || !message || !website) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }
    // if honeypot has ANY value, it's probably a bot
    if (website) {
      // return success to avoid teaching bots anything (silent fail)
      return NextResponse.json({ success: true, message: "OK" });
    }

    // 4. safety check: make sure Resend API key exists
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, message: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    // 5. notification email to admin
    const adminEmailSubject = "Kind Heart Services Website New Form Submission";
    const text = `
NO REPLY

New contact form submission from Kind Heart Services website sent at ${new Date().toISOString()}.

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}

Message:
${message}
`.trim();

    // send admin notification email
    const adminEmail = await resend.emails.send({
      from: "Kind Heart Services <contact@kindheartservicesllc.com>",
      to: "kindheartservicesllc@gmail.com", // send to business email
      subject: adminEmailSubject,
      replyTo: email,
      text: text,
    });

    // if Resend returns an error for admin notification email
    if (adminEmail.error) {
      console.error("Resend error:", adminEmail.error);
      return NextResponse.json(
        { success: false, message: "Email failed to send" },
        { status: 502 }
      );
    }

    // 6. confirmation email to user
    const userEmailSubject = "We Have Received Your Message";
    const userText = `
Hi ${firstName},

Thanks for reaching out to Kind Heart Services. We received your message and will get back to you within 24 hours!

Your message:
${message}

— Kind Heart Services
`.trim();

    // send user confirmation email
    const userEmail = await resend.emails.send({
      from: "Kind Heart Services <contact@kindheartservicesllc.com>",
      to: email, // send to the user
      subject: userEmailSubject,
      text: userText,
    });

    // if Resend returns an error for user confirmation email
    if (userEmail.error) {
      console.error("Resend user confirmation error:", userEmail.error);
      return NextResponse.json(
        {
          success: false,
          message: "Confirmation email failed to send to user",
        },
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
