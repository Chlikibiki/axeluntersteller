"use client";

import Image from "next/image";
import { CRAFT_STEPS, SECTION_COPY, UI } from "@/lib/constants";
import { Grain } from "@/components/shared/Grain";
import { Reveal } from "@/components/shared/Reveal";
import { SectionShell } from "@/components/shared/SectionShell";

export function Craftsmanship() {
  return (
    <SectionShell
      id="craftsmanship"
      spacing="spacious"
      aria-labelledby="craft-heading"
    >
      <Reveal>
        <h2
          id="craft-heading"
          className="heading-lg max-w-3xl text-starlight-cream"
        >
          {SECTION_COPY.craft.title}
        </h2>
        <p className="body-large mt-8 max-w-xl">{SECTION_COPY.craft.body}</p>
      </Reveal>

      <div className="mt-20 space-y-2 md:mt-28">
        {CRAFT_STEPS.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.06}>
            <article className="relative aspect-[16/10] min-h-[50vh] overflow-hidden md:aspect-[2/1]">
              <Image
                src={step.image}
                alt={UI.images.craft(step.title)}
                fill
                className="hero-image-cinematic object-cover"
                sizes="100vw"
              />
              <Grain />
              <div className="absolute inset-0 flex items-end section-padding pb-10 md:pb-14">
                <div>
                  <p className="font-display text-6xl font-extralight text-starlight-cream/30 md:text-8xl">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="heading-md mt-4 text-starlight-cream">
                    {step.title}
                  </h3>
                  <p className="body-large mt-4 max-w-md">{step.description}</p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
