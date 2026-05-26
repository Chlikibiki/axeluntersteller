"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FORM_COPY } from "@/lib/constants";
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
  const copy = FORM_COPY;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
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
            placeholder={copy.placeholders.name}
          />
        </div>
        <div>
          <Label htmlFor="company">{copy.company}</Label>
          <Input
            id="company"
            name="company"
            required
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
            placeholder={copy.placeholders.email}
          />
        </div>
        <div>
          <Label htmlFor="phone">{copy.phone}</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
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
            accept=".pdf,.ai,.eps,.png,.jpg,.jpeg,.zip"
            className="mt-2 w-full text-sm text-starlight-metal file:mr-4 file:border-0 file:bg-starlight-leather file:px-4 file:py-2 file:text-xs file:font-medium file:uppercase file:tracking-wider file:text-starlight-cream"
          />
          <p className="type-readable mt-2">{copy.filesHint}</p>
        </div>
      )}

      <PremiumButtonSubmit>{copy.submit}</PremiumButtonSubmit>

      <p className="type-readable">{copy.privacy}</p>
    </form>
  );
}
