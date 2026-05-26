import Image from "next/image";
import { CAPABILITIES, SECTION_COPY, UI } from "@/lib/constants";
import { Reveal } from "@/components/shared/Reveal";
import { SectionShell } from "@/components/shared/SectionShell";
import { Grain } from "@/components/shared/Grain";
import { CineMedia } from "@/components/motion/CineMedia";

export function Capabilities() {
  return (
    <SectionShell
      id="capabilities"
      atmosphere="elevated"
      spacing="editorial"
      aria-labelledby="capabilities-heading"
    >
      <Reveal pace="material">
        <p className="eyebrow mb-3">Savoir-faire</p>
        <h2
          id="capabilities-heading"
          className="heading-lg max-w-3xl text-starlight-cream"
        >
          {SECTION_COPY.capabilities.title}
        </h2>
        <p className="m-impact mt-4 md:hidden">
          Cinq disciplines. Une seule exigence.
        </p>
        <p className="body-large mt-4 hidden max-w-xl md:block">
          {SECTION_COPY.capabilities.body}
        </p>
      </Reveal>

      <CineMedia
        rootClassName="m-bleed m-cine-frame mt-8 aspect-[16/10] md:mt-16 md:aspect-[21/9] md:min-h-[280px]"
        strength={0.04}
      >
        <Image
          src={CAPABILITIES[0].image}
          alt={UI.images.capability(CAPABILITIES[0].title)}
          fill
          className="hero-image-cinematic object-cover"
          sizes="100vw"
        />
        <Grain />
      </CineMedia>

      <ul
        className="mt-8 divide-y divide-starlight-border md:mt-24"
        data-cine-stagger
      >
        {CAPABILITIES.map((cap, i) => (
          <li
            key={cap.id}
            data-cine-stagger-item
            className="grid grid-cols-[3rem_1fr] gap-x-4 gap-y-1 py-7 opacity-0 md:grid-cols-12 md:items-baseline md:gap-6 md:py-14"
          >
            <span className="font-display text-3xl font-extralight text-starlight-muted md:col-span-2 md:text-5xl">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="md:col-span-10">
              <h3 className="text-lg font-extralight text-starlight-cream md:heading-md">
                {cap.title}
              </h3>
              <p className="body-premium mt-2 md:mt-3">{cap.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
