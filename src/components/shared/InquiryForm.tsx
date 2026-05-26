"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FORM_COPY, SITE } from "@/lib/constants";
import { PremiumButtonSubmit } from "@/components/shared/PremiumButton";

interface InquiryFormProps {
  variant?: "compact" | "full";
  showFileUpload?: boolean;
}

export function InquiryForm({
  variant = "full",
  showFileUpload = true,
}: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const copy = FORM_COPY;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          email: data.get("email"),
          phone: data.get("phone"),
          inquiryType: data.get("inquiryType"),
          message: data.get("message"),
        }),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(body?.error ?? "send_failed");
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setError(copy.errorSubmit);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="border border-starlight-leather/30 bg-starlight-leather/5 p-10 text-center">
        <p className="font-display text-2xl font-light text-starlight-cream">
          {copy.successTitle}
        </p>
        <p className="body-premium mt-4">{copy.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div
        className={
          variant === "full" ? "grid gap-6 md:grid-cols-2" : "grid gap-6"
        }
      >
        <div>
          <Label htmlFor="name">{copy.name}</Label>
          <Input
            id="name"
            name="name"
            required
            disabled={submitting}
            placeholder={copy.placeholders.name}
          />
        </div>
        <div>
          <Label htmlFor="company">{copy.company}</Label>
          <Input
            id="company"
            name="company"
            required
            disabled={submitting}
            placeholder={copy.placeholders.company}
          />
        </div>
        <div>
          <Label htmlFor="email">{copy.email}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            disabled={submitting}
            placeholder={copy.placeholders.email}
          />
        </div>
        <div>
          <Label htmlFor="phone">{copy.phone}</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            disabled={submitting}
            placeholder={copy.placeholders.phone}
          />
        </div>
      </div>

      {variant === "full" && (
        <div>
          <Label htmlFor="inquiry-type">{copy.inquiryType}</Label>
          <select
            id="inquiry-type"
            name="inquiryType"
            disabled={submitting}
            className="flex h-12 w-full border border-starlight-border bg-transparent px-4 text-sm text-starlight-cream outline-none focus-visible:border-starlight-leather"
            defaultValue="production"
          >
            <option value="production">{copy.inquiryOptions.production}</option>
            <option value="consultation">
              {copy.inquiryOptions.consultation}
            </option>
            <option value="prototype">{copy.inquiryOptions.prototype}</option>
            <option value="quote">{copy.inquiryOptions.quote}</option>
          </select>
        </div>
      )}

      <div>
        <Label htmlFor="message">{copy.message}</Label>
        <Textarea
          id="message"
          name="message"
          required
          disabled={submitting}
          placeholder={copy.placeholders.message}
        />
      </div>

      {showFileUpload && variant === "full" && (
        <div>
          <Label htmlFor="files">{copy.files}</Label>
          <input
            id="files"
            name="files"
            type="file"
            multiple
            disabled={submitting}
            accept=".pdf,.ai,.eps,.png,.jpg,.jpeg,.zip"
            className="mt-2 w-full text-sm text-starlight-metal file:mr-4 file:border-0 file:bg-starlight-leather file:px-4 file:py-2 file:text-xs file:font-medium file:uppercase file:tracking-wider file:text-starlight-cream disabled:opacity-50"
          />
          <p className="type-readable mt-2">{copy.filesHint}</p>
          <p className="type-readable mt-1">
            Pour les pièces jointes lourdes, écrivez à{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="link-premium text-starlight-cream/85"
            >
              {SITE.email}
            </a>
            .
          </p>
        </div>
      )}

      {error ? (
        <p className="type-readable text-starlight-cream/80" role="alert">
          {error}
        </p>
      ) : null}

      <PremiumButtonSubmit disabled={submitting}>
        {submitting ? copy.submitting : copy.submit}
      </PremiumButtonSubmit>

      <p className="type-readable">{copy.privacy}</p>
    </form>
  );
}
