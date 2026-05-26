import Image from "next/image";
import { CAPABILITIES, SECTION_COPY, UI } from "@/lib/constants";
import { Reveal } from "@/components/shared/Reveal";
import { FilmChapter } from "@/components/film";
import { SectionShell } from "@/components/shared/SectionShell";
import { Grain } from "@/components/shared/Grain";
import { CineMedia } from "@/components/motion/CineMedia";

export function Capabilities() {
  return (
    <SectionShell
      id="capabilities"
      film="capabilities"
      filmTransition="void"
      atmosphere="elevated"
      spacing="editorial"
      aria-labelledby="capabilities-heading"
    >
      <Reveal pace="fade">
        <FilmChapter section="capabilities" />
        <h2
          id="capabilities-heading"
          className="heading-lg max-w-3xl text-starlight-cream"
        >
          {SECTION_COPY.capabilities.title}
        </h2>
        <p className="m-impact type-stack-body md:hidden">
          Cinq disciplines. Une seule exigence.
        </p>
        <p className="body-editorial prose-measure type-stack-body hidden md:block">
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
            <span className="type-index md:col-span-2">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="md:col-span-10">
              <h3 className="heading-md text-starlight-cream">
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
