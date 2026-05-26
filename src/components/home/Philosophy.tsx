import { PHILOSOPHY, SECTION_COPY } from "@/lib/constants";
import { Reveal } from "@/components/shared/Reveal";
import { PremiumButton } from "@/components/shared/PremiumButton";
import { SectionShell } from "@/components/shared/SectionShell";

export function Philosophy() {
  return (
    <SectionShell
      atmosphere="warm"
      spacing="editorial"
      aria-labelledby="philosophy-heading"
    >
      <Reveal pace="slow" className="md:mx-auto md:max-w-4xl md:text-center">
        <p className="eyebrow mb-4 md:mb-6">Conviction</p>
        <h2
          id="philosophy-heading"
          className="heading-statement text-left text-starlight-cream md:text-center"
        >
          {PHILOSOPHY.headline}
        </h2>
        <p className="body-premium mt-6 max-w-md md:body-large md:mx-auto md:mt-10 md:max-w-2xl">
          {PHILOSOPHY.body}
        </p>
        <p className="label-caps mt-8 md:mt-12">
          {SECTION_COPY.philosophy.established}
        </p>
        <div className="mt-8 md:mt-12 md:flex md:justify-center">
          <PremiumButton href="/contact" variant="secondary" className="w-full md:w-auto">
            {SECTION_COPY.philosophy.cta}
          </PremiumButton>
        </div>
      </Reveal>
    </SectionShell>
  );
}
