import Image from "next/image";
import { CAPABILITIES, SECTION_COPY, UI } from "@/lib/constants";
import { Reveal } from "@/components/shared/Reveal";
import { SectionShell } from "@/components/shared/SectionShell";
import { Grain } from "@/components/shared/Grain";

export function Capabilities() {
  return (
    <SectionShell
      id="capabilities"
      tone="surface"
      spacing="spacious"
      aria-labelledby="capabilities-heading"
    >
      <Reveal>
        <h2
          id="capabilities-heading"
          className="heading-lg max-w-3xl text-starlight-cream"
        >
          {SECTION_COPY.capabilities.title}
        </h2>
        <p className="body-large mt-8 max-w-xl">
          {SECTION_COPY.capabilities.body}
        </p>
      </Reveal>

      <div className="relative mt-20 aspect-[21/9] min-h-[280px] overflow-hidden md:mt-28">
        <Image
          src={CAPABILITIES[0].image}
          alt={UI.images.capability(CAPABILITIES[0].title)}
          fill
          className="hero-image-cinematic object-cover"
          sizes="100vw"
        />
        <Grain />
      </div>

      <ul className="mt-20 divide-y divide-starlight-border md:mt-28">
        {CAPABILITIES.map((cap, i) => (
          <Reveal key={cap.id} delay={i * 0.04}>
            <li className="grid gap-6 py-12 md:grid-cols-12 md:items-baseline md:py-16">
              <span className="font-display text-4xl font-extralight text-starlight-muted md:col-span-2 md:text-5xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="heading-md text-starlight-cream md:col-span-4">
                {cap.title}
              </h3>
              <p className="body-premium md:col-span-6">{cap.description}</p>
            </li>
          </Reveal>
        ))}
      </ul>
    </SectionShell>
  );
}
