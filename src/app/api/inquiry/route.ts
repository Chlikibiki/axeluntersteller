import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  CONTACT_FROM,
  CONTACT_INBOX,
  formatInquiryEmail,
  type InquiryPayload,
} from "@/lib/contact";

function parseBody(body: unknown): InquiryPayload | null {
  if (!body || typeof body !== "object") return null;
  const data = body as Record<string, unknown>;
  const name = String(data.name ?? "").trim();
  const company = String(data.company ?? "").trim();
  const email = String(data.email ?? "").trim();
  const message = String(data.message ?? "").trim();
  const phone = String(data.phone ?? "").trim();
  const inquiryType = String(data.inquiryType ?? "").trim();

  if (!name || !email || !message) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;

  return {
    name,
    company,
    email,
    message,
    phone: phone || undefined,
    inquiryType: inquiryType || undefined,
  };
}

export async function POST(request: Request) {
  let payload: InquiryPayload | null = null;

  try {
    payload = parseBody(await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!payload) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.error(
      "[inquiry] RESEND_API_KEY manquant — message non envoyé:",
      payload
    );
    return NextResponse.json(
      {
        error:
          "Service d'envoi non configuré. Ajoutez RESEND_API_KEY dans .env.local.",
      },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const subject = payload.company
    ? `Starlight — ${payload.company} (${payload.name})`
    : `Starlight — ${payload.name}`;

  const { error } = await resend.emails.send({
    from: CONTACT_FROM,
    to: CONTACT_INBOX,
    replyTo: payload.email,
    subject,
    text: formatInquiryEmail(payload),
  });

  if (error) {
    console.error("[inquiry] Resend:", error);
    return NextResponse.json({ error: "Send failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
