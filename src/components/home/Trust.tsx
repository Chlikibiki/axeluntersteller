"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  TRUST_IMAGE,
  TRUST_METRICS,
  HERO_STATEMENT,
  SECTION_COPY,
  UI,
} from "@/lib/constants";
import { Reveal } from "@/components/shared/Reveal";
import { SectionShell } from "@/components/shared/SectionShell";

function AnimatedMetric({
  value,
  suffix,
  label,
}: {
  value: string;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(value);
  const isNumeric = /^\d+$/.test(value);

  useEffect(() => {
    if (!isNumeric) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const target = parseInt(value, 10);
        const duration = 2000;
        const start = performance.now();

        const animate = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(String(Math.floor(target * eased)));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, isNumeric]);

  return (
    <div ref={ref}>
      <p className="font-display text-5xl font-extralight text-starlight-cream md:text-6xl lg:text-7xl">
        {display}
        {suffix}
      </p>
      <p className="label-caps mt-4">{label}</p>
    </div>
  );
}

export function Trust() {
  return (
    <SectionShell
      id="trust"
      atmosphere="depth"
      spacing="spacious"
      aria-labelledby="trust-heading"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(260px,0.9fr)] lg:gap-16 xl:gap-24">
        <Reveal pace="slow" className="min-w-0">
          <h2
            id="trust-heading"
            className="heading-lg max-w-3xl text-starlight-cream"
          >
            {SECTION_COPY.trust.title}
          </h2>
          <div className="mt-8 max-w-xl space-y-6">
            {SECTION_COPY.trust.body.map((paragraph, index) => (
              <p key={index} className="body-large">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal pace="slow" delay={0.12} className="flex justify-center lg:justify-end">
          <figure className="trust-editorial-frame group relative w-full max-w-sm lg:max-w-none lg:py-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-black lg:min-h-[min(72vh,640px)] lg:aspect-[4/5]">
              <Image
                src={TRUST_IMAGE}
                alt={UI.images.trustArtisan}
                fill
                className="trust-editorial-image object-cover object-[center_38%] transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
                sizes="(max-width: 1024px) 90vw, 42vw"
                priority={false}
              />
              <div className="trust-editorial-warmth absolute inset-0" aria-hidden />
              <div className="trust-editorial-vignette absolute inset-0" aria-hidden />
            </div>
          </figure>
        </Reveal>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-12 border-t border-starlight-border pt-16 sm:grid-cols-3 md:mt-28 lg:grid-cols-5 md:gap-8 md:pt-20">
        {TRUST_METRICS.map((metric, i) => (
          <Reveal key={metric.label} delay={i * 0.06}>
            <AnimatedMetric
              value={metric.value}
              suffix={metric.suffix}
              label={metric.label}
            />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-24 md:mt-32">
        <p className="heading-statement max-w-5xl text-balance text-starlight-cream/90">
          {HERO_STATEMENT}
        </p>
      </Reveal>
    </SectionShell>
  );
}
