"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MANUFACTURING_EXAMPLES, SECTION_COPY, UI } from "@/lib/constants";
import { PremiumButton } from "@/components/shared/PremiumButton";
import { Grain } from "@/components/shared/Grain";
import { Reveal } from "@/components/shared/Reveal";

gsap.registerPlugin(ScrollTrigger);

export function ManufacturingExamples() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".production-image").forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 1.05 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="production"
      ref={sectionRef}
      className="bg-starlight-bg section-separator"
      aria-labelledby="production-heading"
    >
      <div className="section-padding pt-20 pb-12 md:pt-28 md:pb-16">
        <Reveal>
          <h2
            id="production-heading"
            className="heading-lg max-w-3xl text-starlight-cream"
          >
            {SECTION_COPY.production.title}
          </h2>
          <p className="body-large mt-8 max-w-xl">
            {SECTION_COPY.production.body}
          </p>
        </Reveal>
      </div>

      {MANUFACTURING_EXAMPLES.map((example, index) => {
        const isReversed = index % 2 === 1;
        return (
          <article
            key={example.id}
            id={example.id === "belts" ? "belts" : undefined}
            className="section-separator"
          >
            <div
              className={`grid lg:grid-cols-2 ${
                isReversed ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="production-image relative aspect-[4/5] lg:aspect-auto lg:min-h-[70vh]">
                <Image
                  src={example.image}
                  alt={UI.images.manufacturing(example.title)}
                  fill
                  className="hero-image-cinematic object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <Grain />
              </div>

              <div className="flex flex-col justify-center section-padding py-16 md:py-24 lg:py-32">
                <Reveal>
                  <p className="label-caps">{example.category}</p>
                  <h3 className="heading-md mt-6 text-starlight-cream">
                    {example.title}
                  </h3>
                  <p className="body-large mt-8 max-w-md">
                    {example.description}
                  </p>
                  <PremiumButton
                    href="/contact"
                    variant="ghost"
                    className="mt-12"
                  >
                    {SECTION_COPY.production.cta}
                  </PremiumButton>
                </Reveal>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
