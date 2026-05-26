import Image from "next/image";
import { CAPABILITIES, SECTION_COPY, UI } from "@/lib/constants";
import { Reveal } from "@/components/shared/Reveal";
import { FilmChapter } from "@/components/film";
import { SectionShell } from "@/components/shared/SectionShell";
import { Grain } from "@/components/shared/Grain";
import { CineMedia } from "@/components/motion/CineMedia";

const CAPABILITY_WITH_IMAGE = new Set(["belts", "pouches", "straps", "accessories"]);

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
          Du premier prototype à la série, des pièces pensées pour durer.
        </p>
        <p className="body-editorial prose-measure type-stack-body hidden md:block">
          {SECTION_COPY.capabilities.body}
        </p>
      </Reveal>

      <ul
        className="mt-8 divide-y divide-starlight-border md:mt-24"
        data-cine-stagger
      >
        {CAPABILITIES.map((cap, i) => (
          <li
            key={cap.id}
            data-cine-stagger-item
            className="opacity-0"
          >
            {CAPABILITY_WITH_IMAGE.has(cap.id) ? (
              <CineMedia
                rootClassName="m-bleed m-cine-frame mb-8 aspect-[16/10] md:mb-12 md:aspect-[21/9] md:min-h-[240px]"
                strength={0.04}
              >
                <Image
                  src={cap.image}
                  alt={UI.images.capability(cap.title)}
                  fill
                  className="hero-image-cinematic object-cover object-center"
                  sizes="100vw"
                />
                <Grain />

                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6">
                    <span className="type-index block text-starlight-cream/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="heading-md mt-3 text-starlight-cream">
                      {cap.title}
                    </h3>
                    <p className="body-premium mt-3 max-w-sm text-starlight-cream/86">
                      {cap.description}
                    </p>
                  </div>
                </div>
              </CineMedia>
            ) : null}

            {!CAPABILITY_WITH_IMAGE.has(cap.id) ? (
              <div className="grid grid-cols-[3rem_1fr] gap-x-4 gap-y-1 py-7 md:grid-cols-12 md:items-baseline md:gap-6 md:py-14">
                <span className="type-index md:col-span-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="md:col-span-10">
                  <h3 className="heading-md text-starlight-cream">
                    {cap.title}
                  </h3>
                  <p className="body-premium mt-2 md:mt-3">
                    {cap.description}
                  </p>
                </div>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
