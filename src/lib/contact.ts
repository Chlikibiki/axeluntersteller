import { SITE } from "@/lib/constants";

/** Boîte qui reçoit les messages du formulaire */
export const CONTACT_INBOX =
  process.env.CONTACT_TO_EMAIL?.trim() || SITE.inquiryEmail;

/** Expéditeur — utiliser onboarding@resend.dev sans domaine vérifié */
export const CONTACT_FROM =
  process.env.CONTACT_FROM_EMAIL?.trim() ||
  "Starlight Manufacture <onboarding@resend.dev>";

export type InquiryPayload = {
  name: string;
  company: string;
  email: string;
  phone?: string;
  inquiryType?: string;
  message: string;
  /** Honeypot anti-spam — doit rester vide */
  website?: string;
};

export function validateInquiryPayload(
  body: unknown
): { ok: true; data: InquiryPayload } | { ok: false; reason: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, reason: "Corps de requête invalide." };
  }

  const data = body as Record<string, unknown>;
  const website = String(data.website ?? "").trim();
  const name = String(data.name ?? "").trim();
  const company = String(data.company ?? "").trim();
  const email = String(data.email ?? "").trim();
  const message = String(data.message ?? "").trim();
  const phone = String(data.phone ?? "").trim();
  const inquiryType = String(data.inquiryType ?? "").trim();

  if (website) {
    return { ok: false, reason: "Rejeté." };
  }

  if (!name || name.length < 2) {
    return { ok: false, reason: "Nom invalide." };
  }

  if (!company || company.length < 2) {
    return { ok: false, reason: "Maison / marque requise." };
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, reason: "Courriel invalide." };
  }

  if (!message || message.length < 10) {
    return { ok: false, reason: "Message trop court." };
  }

  if (message.length > 5000) {
    return { ok: false, reason: "Message trop long." };
  }

  return {
    ok: true,
    data: {
      name,
      company,
      email,
      message,
      phone: phone || undefined,
      inquiryType: inquiryType || undefined,
    },
  };
}

export function formatInquiryEmail(payload: InquiryPayload) {
  const lines = [
    "Nouveau message depuis starlight-leather.com",
    "",
    `Nom : ${payload.name}`,
    `Maison / Marque : ${payload.company}`,
    `Courriel : ${payload.email}`,
    payload.phone ? `Téléphone : ${payload.phone}` : null,
    payload.inquiryType ? `Objet : ${payload.inquiryType}` : null,
    "",
    "Message :",
    payload.message,
  ].filter(Boolean);

  return lines.join("\n");
}

export const INQUIRY_USER_ERROR =
  "Impossible d'envoyer le message actuellement. Veuillez réessayer ou nous écrire directement à axunt@aol.com." as const;
