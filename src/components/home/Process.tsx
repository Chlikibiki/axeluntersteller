import Image from "next/image";
import { PROCESS_STEPS, SECTION_COPY } from "@/lib/constants";
import { Reveal } from "@/components/shared/Reveal";
import { SectionShell } from "@/components/shared/SectionShell";

export function Process() {
  return (
    <SectionShell
      id="process"
      film="process"
      filmTransition="soft"
      atmosphere="depth"
      spacing="editorial"
      aria-labelledby="process-heading"
    >
      <Reveal pace="fade">
        <p className="eyebrow">{SECTION_COPY.process.label}</p>
        <h2
          id="process-heading"
          className="heading-lg mt-6 max-w-3xl text-starlight-cream"
        >
          {SECTION_COPY.process.title}
        </h2>
      </Reveal>

      <ol className="mt-14 border-t border-starlight-border md:mt-20" data-cine-stagger>
        {PROCESS_STEPS.map((step) => (
          <li
            key={step.step}
            data-cine-stagger-item
            className="grid grid-cols-[2.5rem_1fr] gap-x-5 border-b border-starlight-border py-10 opacity-0 md:grid-cols-12 md:items-center md:gap-10 md:py-16"
          >
            <span className="type-index text-base md:col-span-1 md:text-2xl">
              {step.step}
            </span>
              <div className="md:col-span-11 md:grid md:grid-cols-12 md:items-center md:gap-12">
              <div className="md:col-span-4">
                <h3 className="heading-md text-starlight-cream">{step.title}</h3>
                <p className="body-editorial mt-3 max-w-md text-starlight-metal/90 md:mt-4">
                  {step.description}
                </p>
              </div>
              <figure className="relative mt-6 aspect-[16/10] overflow-hidden bg-black md:col-span-8 md:mt-0 md:aspect-[21/9]">
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-black/15"
                  aria-hidden
                />
              </figure>
            </div>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
