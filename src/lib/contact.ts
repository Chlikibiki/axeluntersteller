import { SITE } from "@/lib/constants";

/** Boîte qui reçoit les messages du formulaire */
export const CONTACT_INBOX =
  process.env.CONTACT_TO_EMAIL?.trim() || SITE.email;

export const CONTACT_FROM =
  process.env.CONTACT_FROM_EMAIL?.trim() ||
  "ST★RLIGHT <onboarding@resend.dev>";

export type InquiryPayload = {
  name: string;
  company: string;
  email: string;
  phone?: string;
  inquiryType?: string;
  message: string;
};

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
