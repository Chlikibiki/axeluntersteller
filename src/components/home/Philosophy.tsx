import { PHILOSOPHY, SECTION_COPY } from "@/lib/constants";
import { Reveal } from "@/components/shared/Reveal";
import { PremiumButton } from "@/components/shared/PremiumButton";
import { SectionShell } from "@/components/shared/SectionShell";

export function Philosophy() {
  return (
    <SectionShell
      tone="surface"
      spacing="spacious"
      aria-labelledby="philosophy-heading"
    >
      <Reveal className="mx-auto max-w-4xl text-center">
        <h2
          id="philosophy-heading"
          className="heading-statement text-balance text-starlight-cream"
        >
          {PHILOSOPHY.headline}
        </h2>
        <p className="body-large mx-auto mt-10 max-w-2xl">
          {PHILOSOPHY.body}
        </p>
        <p className="label-caps mt-12">{SECTION_COPY.philosophy.established}</p>
        <div className="mt-12 flex justify-center">
          <PremiumButton href="/contact" variant="secondary">
            {SECTION_COPY.philosophy.cta}
          </PremiumButton>
        </div>
      </Reveal>
    </SectionShell>
  );
}
