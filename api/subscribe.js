import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { email } = req.body || {};
    if (!email || typeof email !== "string") {
      return res.status(400).json({ error: "Valid email is required" });
    }

    // Basic regex sanity check
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isEmail) return res.status(400).json({ error: "Invalid email address" });

    // SMTP config from environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465, // true if using SSL
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });

    // Send email to you
    await transporter.sendMail({
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to: process.env.EMAIL_TO,
      subject: "New IU Box signup",
      text: `New subscriber: ${email}`,
      html: `<p><strong>New subscriber:</strong> ${email}</p>`,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("subscribe error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}


