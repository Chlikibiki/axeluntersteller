import { SECTION_COPY } from "@/lib/constants";
import { InquiryForm } from "@/components/shared/InquiryForm";
import { PremiumButton } from "@/components/shared/PremiumButton";
import { Reveal } from "@/components/shared/Reveal";
import { SectionShell } from "@/components/shared/SectionShell";
import { Mail } from "lucide-react";

export function FinalCTA() {
  const { cta } = SECTION_COPY;

  return (
    <SectionShell
      id="contact-cta"
      film="cta"
      filmTransition="lift"
      atmosphere="warm"
      spacing="spacious"
      aria-labelledby="cta-heading"
    >
      <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-20 xl:gap-24">
        <Reveal pace="slow">
          <p className="eyebrow">{cta.label}</p>
          <h2
            id="cta-heading"
            className="heading-lg mt-6 text-balance text-starlight-cream"
          >
            {cta.title}
          </h2>
          <p className="body-editorial prose-measure mt-7 max-w-lg text-starlight-metal/88">
            {cta.body}
          </p>

          <div className="mt-10">
            <PremiumButton
              href="/contact"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                <Mail size={16} strokeWidth={1} />
                {cta.email}
              </span>
            </PremiumButton>
          </div>

          <p className="body-premium mt-10 max-w-sm text-starlight-muted/90 md:mt-14">
            {cta.guarantee}
          </p>
        </Reveal>

        <Reveal pace="silence" delay={0.12}>
          <div className="contact-form-panel border border-starlight-border/80 bg-starlight-surface/70 p-6 backdrop-blur-sm md:p-10 lg:p-12">
            <InquiryForm variant="compact" showFileUpload={false} />
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
