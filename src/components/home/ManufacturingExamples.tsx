"use client";

import { PRODUCTION_PROCESS, SECTION_COPY } from "@/lib/constants";
import { filmRhythmClass, filmSectionAttrs } from "@/lib/film-narrative";
import { FilmChapter } from "@/components/film";
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

        <ol
          className="mt-14 border-t border-starlight-border/50 md:mt-20"
          data-cine-stagger
        >
          {PRODUCTION_PROCESS.map((item) => (
            <li
              key={item.step}
              data-cine-stagger-item
              className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-starlight-border/50 py-7 opacity-0 md:grid-cols-12 md:items-center md:gap-6 md:py-10"
            >
              <span className="type-index md:col-span-2">{item.step}</span>
              <p className="heading-md text-starlight-cream md:col-span-10">
                {item.title}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
