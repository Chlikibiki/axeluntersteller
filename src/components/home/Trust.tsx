"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  TRUST_IMAGE,
  TRUST_METRICS,
  SECTION_COPY,
  UI,
} from "@/lib/constants";
import { CineMedia } from "@/components/motion/CineMedia";
import { Reveal } from "@/components/shared/Reveal";
import { FilmChapter } from "@/components/film";
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
        const duration = 2800;
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
    <div ref={ref} className="m-rail-item w-[38vw] min-w-[7.5rem] max-w-[9rem] md:w-auto md:min-w-0 md:max-w-none">
      <p className="type-stat text-starlight-cream">
        {display}
        {suffix}
      </p>
      <p className="label-caps mt-2 md:mt-4">{label}</p>
    </div>
  );
}

export function Trust() {
  return (
    <SectionShell
      id="trust"
      film="trust"
      filmTransition="soft"
      atmosphere="depth"
      spacing="editorial"
      aria-labelledby="trust-heading"
    >
      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(260px,0.9fr)] lg:items-center lg:gap-16 xl:gap-24">
        <div className="order-1 min-w-0 lg:order-none">
          <Reveal pace="slow">
            <FilmChapter section="trust" />
            <h2
              id="trust-heading"
              className="heading-lg max-w-4xl text-starlight-cream"
            >
              {SECTION_COPY.trust.title}
            </h2>
            <p className="m-impact type-stack-body">
              Savoir-faire européen au service des maisons les plus exigeantes.
            </p>
          </Reveal>

          <Reveal pace="silence" className="order-3 mt-6 lg:order-none lg:mt-8">
            <p className="body-editorial prose-measure max-w-xl">
              {SECTION_COPY.trust.body[0]}
            </p>
            <p className="body-premium mt-6 hidden max-w-md text-starlight-metal/75 lg:block">
              {SECTION_COPY.trust.bodyExtended}
            </p>
          </Reveal>
        </div>

        <Reveal
          pace="material"
          delay={0.08}
          className="order-2 lg:order-none lg:flex lg:justify-end"
        >
          <figure className="trust-editorial-frame m-bleed md:m-0 md:max-w-none lg:py-4">
            <CineMedia
              rootClassName="m-cine-frame aspect-[4/5] rounded-none md:aspect-[4/5] md:rounded-sm lg:min-h-[min(72vh,640px)]"
              strength={0.04}
              scaleFrom={1.04}
              scrub={1.4}
            >
              <Image
                src={TRUST_IMAGE}
                alt={UI.images.trustArtisan}
                fill
                className="trust-editorial-image object-cover object-[center_38%]"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </CineMedia>
            <div
              className="trust-editorial-warmth pointer-events-none absolute inset-0 md:rounded-sm"
              aria-hidden
            />
            <div
              className="trust-editorial-vignette pointer-events-none absolute inset-0 md:rounded-sm"
              aria-hidden
            />
          </figure>
        </Reveal>
      </div>

      <div className="mt-8 border-t border-starlight-border pt-8 md:mt-20 md:pt-16 lg:mt-28 lg:pt-20">
        <div className="m-rail md:grid md:grid-cols-3 md:gap-8 lg:grid-cols-5 lg:gap-6">
          {TRUST_METRICS.map((metric) => (
            <AnimatedMetric
              key={metric.label}
              value={metric.value}
              suffix={metric.suffix}
              label={metric.label}
            />
          ))}
        </div>
      </div>

    </SectionShell>
  );
}
