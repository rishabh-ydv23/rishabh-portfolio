import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const errors: string[] = [];
    if (!name || String(name).trim().length < 2) errors.push("Name must be at least 2 characters.");
    const emailStr = String(email || "");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(emailStr)) errors.push("Invalid email address.");
    if (!message || String(message).trim().length < 10) errors.push("Message must be at least 10 characters.");

    if (errors.length) {
      return NextResponse.json({ error: "Validation failed", details: errors }, { status: 400 });
    }

    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    const SENDGRID_FROM = process.env.SENDGRID_FROM || "no-reply@example.com";
    const SENDGRID_TO = process.env.SENDGRID_TO || SENDGRID_FROM;

    if (!SENDGRID_API_KEY) {
      console.error("SendGrid API key not configured");
      return NextResponse.json({ error: "SendGrid API key not configured" }, { status: 500 });
    }

    const payload = {
      personalizations: [
        {
          to: [{ email: SENDGRID_TO }],
          subject: `New message from ${name}`,
        },
      ],
      from: { email: SENDGRID_FROM },
      reply_to: { email },
      content: [
        {
          type: "text/plain",
          value: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        },
      ],
    };

    const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const details = await res.text();
      console.error("SendGrid response error:", res.status, details);
      return NextResponse.json({ error: "SendGrid error", status: res.status, details }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: "Server error", details: message }, { status: 500 });
  }
}
