import { PHILOSOPHY, SECTION_COPY } from "@/lib/constants";
import { Reveal } from "@/components/shared/Reveal";
import { PremiumButton } from "@/components/shared/PremiumButton";
import { FilmChapter } from "@/components/film";
import { SectionShell } from "@/components/shared/SectionShell";

export function Philosophy() {
  return (
    <SectionShell
      film="philosophy"
      filmTransition="soft"
      atmosphere="warm"
      spacing="spacious"
      aria-labelledby="philosophy-heading"
    >
      <Reveal pace="slow" className="md:mx-auto md:max-w-4xl md:text-center">
        <FilmChapter section="philosophy" className="md:mx-auto md:text-center" />
        <h2
          id="philosophy-heading"
          className="heading-statement text-left text-starlight-cream md:text-center"
        >
          {PHILOSOPHY.headline}
        </h2>
        <p className="body-editorial prose-measure-wide type-stack-body md:mx-auto md:text-center">
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
