"use client";

import { PARTNER_LOGOS, SECTION_COPY } from "@/lib/constants";
import { PartnerLogo } from "@/components/shared/PartnerLogo";
import { Reveal } from "@/components/shared/Reveal";
import { Atmosphere } from "@/components/shared/Atmosphere";

export function PartnerTrust() {
  const { partners: copy } = SECTION_COPY;

  return (
    <section
      id="partners"
      className="relative overflow-hidden border-y border-starlight-border/60 bg-black"
      aria-label="Marques partenaires"
    >
      <Atmosphere variant="ink" />
      <div className="leather-whisper absolute inset-0" aria-hidden />

      <div className="section-padding relative z-[1] py-16 md:py-28 lg:py-32">
        <Reveal pace="fade" className="mx-auto mb-12 max-w-lg text-center md:mb-16">
          <p className="eyebrow">Références</p>
        </Reveal>

        <Reveal pace="slow">
          <ul
            className="mx-auto grid max-w-[1200px] grid-cols-2 items-center gap-x-4 gap-y-10 sm:grid-cols-3 md:grid-cols-4 md:gap-x-6 md:gap-y-12 lg:grid-cols-7"
            role="list"
          >
            {PARTNER_LOGOS.map((partner) => (
              <li key={partner.id} className="flex items-center justify-center">
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
        </Reveal>

        <Reveal pace="fade" delay={0.12}>
          <p className="mx-auto mt-12 max-w-md text-center text-[0.65rem] font-light tracking-[0.28em] text-starlight-muted/80 uppercase md:mt-20">
            {copy.tagline}
          </p>
        </Reveal>
      </div>

      <p className="sr-only">{copy.disclaimer}</p>
    </section>
  );
}
