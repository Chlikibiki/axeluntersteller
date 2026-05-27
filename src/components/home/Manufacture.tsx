import Image from "next/image";
import {
  MANUFACTURE_GALLERY,
  MANUFACTURE_PILLARS,
  SECTION_COPY,
  TRUST_METRICS,
} from "@/lib/constants";
import { Reveal } from "@/components/shared/Reveal";
import { CounterMetric } from "@/components/shared/CounterMetric";
import { SectionShell } from "@/components/shared/SectionShell";

export function Manufacture() {
  const copy = SECTION_COPY.manufacture;

  return (
    <SectionShell
      id="manufacture"
      film="trust"
      filmTransition="soft"
      atmosphere="depth"
      spacing="editorial"
      aria-labelledby="manufacture-heading"
    >
      <div className="lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16">
        <Reveal pace="fade" className="lg:col-span-5">
          <p className="eyebrow">{copy.label}</p>
          <h2
            id="manufacture-heading"
            className="heading-lg mt-4 text-starlight-cream"
          >
            {copy.title}
          </h2>
          <p className="body-editorial prose-measure mt-6 text-starlight-metal/90">
            {copy.body}
          </p>

          <ul className="mt-8 space-y-3 border-t border-starlight-border/50 pt-8 md:mt-10">
            {MANUFACTURE_PILLARS.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm font-light leading-relaxed text-starlight-cream/88 md:text-[0.9375rem]"
              >
                <span className="mt-2 h-px w-4 shrink-0 bg-starlight-amber/50" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 md:gap-4 lg:col-span-7 lg:mt-0">
          {MANUFACTURE_GALLERY.map((item, index) => (
            <Reveal
              key={item.src}
              pace="fade"
              delay={index * 0.06}
              className={index === 0 ? "col-span-2 aspect-[16/9]" : "aspect-[4/5]"}
            >
              <figure className="relative h-full w-full overflow-hidden bg-starlight-surface">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover object-center"
                  sizes={
                    index === 0
                      ? "(max-width: 1024px) 100vw, 50vw"
                      : "(max-width: 1024px) 50vw, 25vw"
                  }
                  priority={index === 0}
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 to-transparent"
                  aria-hidden
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-10 border-t border-starlight-border/50 pt-8 md:mt-16 md:pt-12">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 md:gap-6 lg:grid-cols-6">
          {TRUST_METRICS.map((metric) => (
            <div key={metric.label} className="text-center md:text-left">
              <p className="font-display text-3xl font-extralight tracking-wide text-starlight-cream/92 md:text-4xl">
                <CounterMetric
                  value={Number(metric.value)}
                  suffix={metric.suffix}
                />
              </p>
              <p className="type-readable mt-2 uppercase tracking-[0.1em]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
