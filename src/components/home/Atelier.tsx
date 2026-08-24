import Image from "next/image";
import { ATELIER_SCENES, SECTION_COPY } from "@/lib/constants";
import { Reveal } from "@/components/shared/Reveal";
import { SectionShell } from "@/components/shared/SectionShell";

export function Atelier() {
  const copy = SECTION_COPY.atelier;
  const [hero, ...scenes] = ATELIER_SCENES;

  return (
    <SectionShell
      id="atelier"
      film="atelier"
      filmTransition="lift"
      atmosphere="warm"
      spacing="editorial"
      aria-labelledby="atelier-heading"
    >
      <Reveal pace="fade">
        <p className="eyebrow">{copy.label}</p>
        <h2
          id="atelier-heading"
          className="heading-lg mt-6 max-w-2xl text-starlight-cream"
        >
          {copy.title}
        </h2>
        <p className="body-editorial prose-measure mt-7 max-w-xl text-starlight-metal/88">
          {copy.body}
        </p>
      </Reveal>

      <div className="mt-14 space-y-4 md:mt-20 md:space-y-5">
        <Reveal pace="fade">
          <figure className="relative aspect-[16/10] w-full overflow-hidden md:aspect-[21/9]">
            <Image
              src={hero.src}
              alt={hero.alt}
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent"
              aria-hidden
            />
            <figcaption className="absolute bottom-0 left-0 max-w-md px-6 pb-6 md:px-10 md:pb-8">
              <p className="heading-md text-starlight-cream">{hero.title}</p>
              <p className="body-editorial mt-2 text-starlight-muted/90">
                {hero.caption}
              </p>
            </figcaption>
          </figure>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {scenes.map((scene, index) => (
            <Reveal key={scene.src} pace="fade" delay={index * 0.05}>
              <figure className="relative aspect-[4/5] overflow-hidden bg-black md:aspect-[3/4]">
                <Image
                  src={scene.src}
                  alt={scene.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent"
                  aria-hidden
                />
                <figcaption className="absolute bottom-0 left-0 px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-sm font-light text-starlight-cream md:text-base">
                    {scene.title}
                  </p>
                  <p className="type-readable mt-1 normal-case tracking-normal text-starlight-muted/85">
                    {scene.caption}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
