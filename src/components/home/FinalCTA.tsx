import { SITE, SECTION_COPY } from "@/lib/constants";
import { InquiryForm } from "@/components/shared/InquiryForm";
import { PremiumButton } from "@/components/shared/PremiumButton";
import { Reveal } from "@/components/shared/Reveal";
import { SectionShell } from "@/components/shared/SectionShell";
import { Mail, MessageCircle } from "lucide-react";

export function FinalCTA() {
  const { cta } = SECTION_COPY;

  return (
    <SectionShell
      id="contact-cta"
      atmosphere="void"
      spacing="spacious"
      aria-labelledby="cta-heading"
    >
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal pace="slow">
          <h2
            id="cta-heading"
            className="heading-lg text-balance text-starlight-cream"
          >
            {cta.title}
          </h2>
          <p className="body-large mt-8 max-w-md">{cta.body}</p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <PremiumButton
              href={`mailto:${SITE.email}`}
              variant="secondary"
              external
            >
              <span className="flex items-center gap-2">
                <Mail size={16} strokeWidth={1} />
                {cta.email}
              </span>
            </PremiumButton>
            <PremiumButton
              href={`https://wa.me/${SITE.whatsapp}`}
              variant="ghost"
              external
            >
              <span className="flex items-center gap-2">
                <MessageCircle size={16} strokeWidth={1} />
                {cta.whatsapp}
              </span>
            </PremiumButton>
          </div>

          <p className="body-premium mt-16 max-w-sm text-starlight-muted">
            {cta.guarantee}
          </p>
        </Reveal>

        <Reveal pace="slow" delay={0.1}>
          <div className="border border-starlight-border bg-starlight-surface p-8 md:p-12">
            <InquiryForm variant="compact" showFileUpload={false} />
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
