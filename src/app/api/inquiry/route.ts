import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  CONTACT_FROM,
  CONTACT_INBOX,
  INQUIRY_USER_ERROR,
  formatInquiryEmail,
  validateInquiryPayload,
  type InquiryPayload,
} from "@/lib/contact";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function sendWithResend(payload: InquiryPayload) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return { ok: false as const, reason: "MISSING_API_KEY" };
  }

  const resend = new Resend(apiKey);
  const subject = payload.company
    ? `Starlight — ${payload.company} (${payload.name})`
    : `Starlight — ${payload.name}`;

  const { data, error } = await resend.emails.send({
    from: CONTACT_FROM,
    to: CONTACT_INBOX,
    replyTo: payload.email,
    subject,
    text: formatInquiryEmail(payload),
  });

  if (error) {
    const message =
      typeof error === "object" && error !== null && "message" in error
        ? String((error as { message?: string }).message)
        : "Resend send failed";
    console.error("[inquiry] Resend error:", JSON.stringify(error, null, 2));
    return { ok: false as const, reason: message };
  }

  console.info("[inquiry] Email sent via Resend:", data?.id, "→", CONTACT_INBOX);
  return { ok: true as const, id: data?.id };
}

async function sendWithFormSubmit(payload: InquiryPayload) {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://starlight-leather.com";
  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_INBOX)}`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Origin: siteUrl,
      Referer: `${siteUrl}/contact`,
    },
    body: JSON.stringify({
      _subject: payload.company
        ? `Starlight — ${payload.company} (${payload.name})`
        : `Starlight — ${payload.name}`,
      _replyto: payload.email,
      _template: "table",
      _captcha: "false",
      name: payload.name,
      company: payload.company,
      email: payload.email,
      phone: payload.phone ?? "",
      inquiryType: payload.inquiryType ?? "",
      message: payload.message,
    }),
  });

  const raw = await response.text();
  let body: { success?: string | boolean; message?: string } = {};
  try {
    body = JSON.parse(raw) as typeof body;
  } catch {
    console.error("[inquiry] FormSubmit non-JSON:", raw.slice(0, 400));
  }

  const success = body.success === true || body.success === "true";

  if (!success) {
    console.error("[inquiry] FormSubmit error:", response.status, raw.slice(0, 500));
    return {
      ok: false as const,
      reason: body.message ?? `FormSubmit ${response.status}`,
    };
  }

  console.info("[inquiry] Email sent via FormSubmit →", CONTACT_INBOX);
  return { ok: true as const };
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    console.error("[inquiry] Invalid JSON body");
    return NextResponse.json(
      { error: INQUIRY_USER_ERROR, code: "INVALID_JSON" },
      { status: 400 }
    );
  }

  const parsed = validateInquiryPayload(body);

  if (!parsed.ok) {
    console.error("[inquiry] Validation failed:", parsed.reason);
    return NextResponse.json(
      {
        error: INQUIRY_USER_ERROR,
        code: "VALIDATION_FAILED",
        detail: parsed.reason,
      },
      { status: 400 }
    );
  }

  const payload = parsed.data;

  try {
    const apiKey = process.env.RESEND_API_KEY?.trim();
    if (apiKey) {
      const resendResult = await sendWithResend(payload);
      if (resendResult.ok) {
        return NextResponse.json({ ok: true, id: resendResult.id, provider: "resend" });
      }
      console.info("[inquiry] Resend failed (", resendResult.reason, ") — FormSubmit");
    }

    const fallback = await sendWithFormSubmit(payload);
    if (fallback.ok) {
      return NextResponse.json({ ok: true, provider: "formsubmit" });
    }

    return NextResponse.json(
      {
        error: INQUIRY_USER_ERROR,
        code: "SEND_FAILED",
        detail: fallback.reason,
      },
      { status: 502 }
    );
  } catch (err) {
    console.error("[inquiry] Unexpected error:", err);
    return NextResponse.json(
      {
        error: INQUIRY_USER_ERROR,
        code: "SERVER_ERROR",
        detail: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
