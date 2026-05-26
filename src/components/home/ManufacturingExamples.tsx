"use client";

import Image from "next/image";
import { MANUFACTURING_EXAMPLES, SECTION_COPY, UI } from "@/lib/constants";
import { filmRhythmClass, filmSectionAttrs } from "@/lib/film-narrative";
import { FilmChapter } from "@/components/film";
import { PremiumButton } from "@/components/shared/PremiumButton";
import { cn } from "@/lib/utils";
import { Grain } from "@/components/shared/Grain";
import { Reveal } from "@/components/shared/Reveal";
import { Atmosphere } from "@/components/shared/Atmosphere";
import { CineMedia } from "@/components/motion/CineMedia";

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
      <div className="section-padding relative z-[1] pt-10 pb-6 md:pt-28 md:pb-16">
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
      </div>

      {MANUFACTURING_EXAMPLES.map((example, index) => (
        <article
          key={example.id}
          id={example.id === "belts" ? "belts" : undefined}
          className="section-separator"
        >
          <div className="flex flex-col lg:grid lg:grid-cols-2">
            <CineMedia
              rootClassName="m-bleed m-cine-frame aspect-[5/4] lg:m-0 lg:aspect-auto lg:min-h-[70vh]"
              strength={0.04}
              scaleFrom={1.05}
              scrub={1.4}
            >
              <Image
                src={example.image}
                alt={UI.images.manufacturing(example.title)}
                fill
                className="hero-image-cinematic object-cover object-center"
                sizes="100vw"
              />
              <Grain />
            </CineMedia>

            <div className="flex flex-col justify-center section-padding py-8 md:py-24 lg:py-32">
              <Reveal pace="slow">
                <span className="type-index lg:hidden">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="label-caps mt-4 lg:mt-0">{example.category}</p>
                <h3 className="heading-md mt-3 text-starlight-cream md:mt-6">
                  {example.title}
                </h3>
                <p className="body-premium mt-4 max-w-md md:body-large md:mt-6">
                  {example.description}
                </p>
                <PremiumButton
                  href="/contact"
                  variant="ghost"
                  className="mt-8 !px-0 md:mt-12"
                >
                  {SECTION_COPY.production.cta}
                </PremiumButton>
              </Reveal>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
