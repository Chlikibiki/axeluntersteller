"use client";

import { MANUFACTURING_EXAMPLES, SECTION_COPY } from "@/lib/constants";
import { filmRhythmClass, filmSectionAttrs } from "@/lib/film-narrative";
import { FilmChapter } from "@/components/film";
import { PremiumButton } from "@/components/shared/PremiumButton";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/shared/Reveal";
import { Atmosphere } from "@/components/shared/Atmosphere";

export function ManufacturingExamples() {
  return (
    <section
      id="production"
      className={cn(
        "film-section relative overflow-hidden bg-black section-separator film-transition-soft",
        filmRhythmClass("tension"),
        "film-personality-maitrise"
      )}
      {...filmSectionAttrs("production")}
      aria-labelledby="production-heading"
    >
      <Atmosphere variant="warm" />
      <div className="section-padding relative z-[1] py-10 md:py-28 lg:py-32">
        <Reveal pace="fade">
          <FilmChapter section="production" />
          <h2
            id="production-heading"
            className="heading-lg max-w-3xl text-starlight-cream"
          >
            {SECTION_COPY.production.title}
          </h2>
          <p className="m-impact type-stack-body md:hidden">
            Conçu pour les marques, jamais pour l&apos;étalage.
          </p>
          <p className="body-editorial prose-measure type-stack-body hidden md:block">
            {SECTION_COPY.production.body}
          </p>
        </Reveal>

        <div className="mt-14 border-t border-starlight-border/50 md:mt-20">
          {MANUFACTURING_EXAMPLES.map((example, index) => (
            <article
              key={example.id}
              id={example.id === "belts" ? "belts" : undefined}
              className={cn(
                "border-b border-starlight-border/50 py-10 md:py-14",
                index === 0 && "pt-10 md:pt-14"
              )}
            >
              <Reveal pace="slow">
                <span className="type-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="label-caps mt-4">{example.category}</p>
                <h3 className="heading-md mt-3 text-starlight-cream md:mt-5">
                  {example.title}
                </h3>
                <p className="body-editorial mt-2 max-w-lg text-starlight-metal/90 italic">
                  {example.inspiration}
                </p>
                <p className="body-premium mt-5 max-w-xl md:body-large md:mt-6">
                  {example.description}
                </p>
                <PremiumButton
                  href="/contact"
                  variant="ghost"
                  className="mt-8 !px-0 md:mt-10"
                >
                  {SECTION_COPY.production.cta}
                </PremiumButton>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
