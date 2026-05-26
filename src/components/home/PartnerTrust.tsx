"use client";

import { PARTNER_LOGOS, SECTION_COPY } from "@/lib/constants";
import { filmRhythmClass, filmSectionAttrs } from "@/lib/film-narrative";
import { FilmChapter } from "@/components/film";
import { PartnerLogo } from "@/components/shared/PartnerLogo";
import { Reveal } from "@/components/shared/Reveal";
import { Atmosphere } from "@/components/shared/Atmosphere";
import { NobleSurface } from "@/components/shared/NobleSurface";
import { cn } from "@/lib/utils";

export function PartnerTrust() {
  const { partners: copy } = SECTION_COPY;

  return (
    <section
      id="partners"
      className={cn(
        "film-section relative overflow-hidden border-y border-starlight-border/40 bg-black",
        filmRhythmClass("silence"),
        "film-personality-rarete film-transition-soft"
      )}
      {...filmSectionAttrs("partners")}
      aria-labelledby="partners-heading"
    >
      <Atmosphere variant="ink" />
      <NobleSurface intensity="section" className="z-0" />

      <div className="section-padding relative z-[1] py-10 md:py-28 lg:py-32">
        <Reveal pace="fade" className="mb-6 md:mb-12">
          <FilmChapter section="partners" showIntention={false} />
          <h2 id="partners-heading" className="sr-only">
            {copy.title}
          </h2>
          <p className="m-impact type-stack-body max-w-xs md:hidden">{copy.body}</p>
        </Reveal>

        <div className="m-rail md:mx-0 md:block md:overflow-visible md:px-0">
          <ul
            className="flex min-w-max gap-12 md:mx-auto md:grid md:min-w-0 md:max-w-[1200px] md:grid-cols-4 md:gap-x-6 md:gap-y-12 lg:grid-cols-7"
            role="list"
            data-cine-stagger
          >
            {PARTNER_LOGOS.map((partner) => (
              <li
                key={partner.id}
                data-cine-stagger-item
                className="m-rail-item flex w-[42vw] max-w-[11rem] items-center justify-center opacity-0 md:w-auto md:max-w-none"
              >
                <PartnerLogo
                  variant="wall"
                  partnerId={partner.id}
                  src={partner.src}
                  name={partner.name}
                  wide={Boolean("wide" in partner && partner.wide)}
                  size={"size" in partner ? partner.size : "default"}
                  invert={Boolean("invert" in partner && partner.invert)}
                />
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-[0.6rem] font-light tracking-[0.26em] text-starlight-muted/75 uppercase md:mt-20 md:text-center md:text-[0.65rem]">
          {copy.tagline}
        </p>
      </div>

      <p className="sr-only">{copy.disclaimer}</p>
    </section>
  );
}
