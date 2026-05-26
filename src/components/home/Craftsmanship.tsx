"use client";

import Image from "next/image";
import { CRAFT_STEPS, SECTION_COPY, UI } from "@/lib/constants";
import { Grain } from "@/components/shared/Grain";
import { Reveal } from "@/components/shared/Reveal";
import { SectionShell } from "@/components/shared/SectionShell";
import { CineMedia } from "@/components/motion/CineMedia";

export function Craftsmanship() {
  return (
    <SectionShell
      id="craftsmanship"
      atmosphere="void"
      spacing="editorial"
      aria-labelledby="craft-heading"
    >
      <Reveal pace="material">
        <p className="eyebrow mb-3">L&apos;atelier</p>
        <h2
          id="craft-heading"
          className="heading-lg max-w-3xl text-starlight-cream"
        >
          {SECTION_COPY.craft.title}
        </h2>
        <p className="m-impact mt-4 md:hidden">
          La machine aide. Le jugement reste humain.
        </p>
        <p className="body-large mt-4 hidden max-w-xl md:block">
          {SECTION_COPY.craft.body}
        </p>
      </Reveal>

      <div className="mt-8 space-y-1 md:mt-24">
        {CRAFT_STEPS.map((step, i) => (
          <article key={step.title} className="relative">
            <CineMedia
              rootClassName="m-bleed m-cine-frame aspect-[4/5] md:m-0 md:aspect-auto md:min-h-[50vh]"
              strength={0.045}
              scaleFrom={1.05}
              scrub={1.5}
            >
              <Image
                src={step.image}
                alt={UI.images.craft(step.title)}
                fill
                className="hero-image-cinematic object-cover"
                sizes="100vw"
              />
              <Grain />
            </CineMedia>
            <div className="absolute inset-0 z-[2] flex items-end bg-gradient-to-t from-black via-black/50 to-transparent section-padding pb-8 pt-24 md:pb-14 md:pt-0 md:bg-none">
              <Reveal pace="slow" delay={i * 0.04}>
                <p className="font-display text-5xl font-extralight text-starlight-cream/25 md:text-8xl">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="heading-md mt-2 text-starlight-cream md:mt-4">
                  {step.title}
                </h3>
                <p className="body-premium mt-2 max-w-md md:body-large md:mt-4">
                  {step.description}
                </p>
              </Reveal>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
