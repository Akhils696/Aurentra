import { NextResponse } from "next/server";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const projectType = String(formData.get("projectType") ?? "").trim();
  const budget = String(formData.get("budget") ?? "").trim();
  const timeline = String(formData.get("timeline") ?? "").trim();
  const companySize = String(formData.get("companySize") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !emailRegex.test(email) || !projectType || message.length < 10) {
    return NextResponse.json({ ok: false, message: "Please provide a valid name, email, project type, and message." }, { status: 400 });
  }

  const payload = {
    name,
    email,
    projectType,
    budget,
    timeline,
    companySize,
    message,
    to: process.env.CONTACT_TO_EMAIL ?? "aurentratechnologies@gmail.com",
    receivedAt: new Date().toISOString(),
  };

  // Wire this payload to Resend, SendGrid, Nodemailer, or your CRM webhook in production.
  console.info("Contact inquiry received", payload);

  return NextResponse.json({ ok: true, message: "Thanks. We received your inquiry and will respond within 1 business day." });
}
