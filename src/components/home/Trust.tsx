"use client";

import { useEffect, useRef, useState } from "react";
import { TRUST_METRICS, HERO_STATEMENT, SECTION_COPY } from "@/lib/constants";
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
    <SectionShell id="trust" spacing="spacious" aria-labelledby="trust-heading">
      <Reveal>
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
