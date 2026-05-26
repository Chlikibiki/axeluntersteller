import Image from "next/image";
import { CAPABILITIES, SECTION_COPY, UI } from "@/lib/constants";
import { Reveal } from "@/components/shared/Reveal";
import { FilmChapter } from "@/components/film";
import { SectionShell } from "@/components/shared/SectionShell";

const TEXT_GRADIENT =
  "linear-gradient(to top, rgba(0,0,0,.72), rgba(0,0,0,.15))";

export function Capabilities() {
  return (
    <SectionShell
      id="capabilities"
      film="capabilities"
      filmTransition="void"
      atmosphere="elevated"
      fullWidth
      separator={false}
      className="overflow-x-hidden"
      innerClassName="relative z-[1] overflow-x-hidden"
      aria-labelledby="capabilities-heading"
    >
      <div className="px-6 pt-10 md:px-12 md:pt-16">
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
      </div>

      <div className="w-full">
        {CAPABILITIES.map((cap, index) => (
          <article
            key={cap.id}
            id={cap.id}
            className="relative w-full overflow-hidden border-t border-starlight-border/40 h-[56vh] sm:h-[60vh] md:h-[70vh]"
          >
            <Image
              src={cap.image}
              alt={UI.images.capability(cap.title)}
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority={index === 0}
            />

            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: TEXT_GRADIENT }}
            />

            <Reveal
              pace="fade"
              as="div"
              className="absolute inset-0 z-[1]"
            >
              <div className="absolute bottom-0 left-0 z-[1] w-full px-6 pb-8 md:px-12 md:pb-10">
                <span className="type-index text-starlight-cream/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="heading-statement mt-4 text-starlight-cream max-w-[30rem]">
                  {cap.title}
                </h3>
                <p className="body-editorial mt-4 max-w-[42rem] text-starlight-muted/90">
                  {cap.description}
                </p>

                <a
                  href="/contact"
                  className="mt-6 inline-block text-[0.65rem] font-light tracking-[0.22em] uppercase text-starlight-cream/92 underline decoration-starlight-border/35 underline-offset-4 transition-opacity duration-700 hover:opacity-100"
                  aria-label={`Découvrir ${cap.title}`}
                >
                  Découvrir
                </a>
              </div>
            </Reveal>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
