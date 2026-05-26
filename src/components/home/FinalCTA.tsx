import { SITE, SECTION_COPY } from "@/lib/constants";
import { InquiryForm } from "@/components/shared/InquiryForm";
import { PremiumButton } from "@/components/shared/PremiumButton";
import { Reveal } from "@/components/shared/Reveal";
import { FilmChapter } from "@/components/film";
import { SectionShell } from "@/components/shared/SectionShell";
import { Mail, MessageCircle } from "lucide-react";

export function FinalCTA() {
  const { cta } = SECTION_COPY;

  return (
    <SectionShell
      id="contact-cta"
      film="cta"
      filmTransition="lift"
      atmosphere="void"
      spacing="spacious"
      aria-labelledby="cta-heading"
    >
      <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:gap-24">
        <Reveal pace="slow">
          <FilmChapter section="cta" />
          <h2
            id="cta-heading"
            className="heading-lg text-balance text-starlight-cream"
          >
            {cta.title}
          </h2>
          <p className="m-impact type-stack-body md:hidden">
            Décrivez votre projet. Nous écoutons d&apos;abord.
          </p>
          <p className="body-editorial prose-measure type-stack-body hidden md:block">
            {cta.body}
          </p>

          <div className="mt-8 flex flex-col gap-2.5 sm:mt-12 sm:flex-row sm:gap-4">
            <PremiumButton
              href={`mailto:${SITE.email}`}
              variant="secondary"
              external
              className="w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                <Mail size={16} strokeWidth={1} />
                {cta.email}
              </span>
            </PremiumButton>
            <PremiumButton
              href={`https://wa.me/${SITE.whatsapp}`}
              variant="ghost"
              external
              className="w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                <MessageCircle size={16} strokeWidth={1} />
                {cta.whatsapp}
              </span>
            </PremiumButton>
          </div>

          <p className="body-premium mt-8 max-w-sm text-starlight-muted md:mt-16">
            {cta.guarantee}
          </p>
        </Reveal>

        <Reveal pace="silence" delay={0.12}>
          <div className="border border-starlight-border bg-starlight-surface/80 p-6 md:bg-starlight-surface md:p-12">
            <InquiryForm variant="compact" showFileUpload={false} />
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
