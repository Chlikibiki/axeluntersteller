"use client";

import { PARTNER_LOGOS, SECTION_COPY } from "@/lib/constants";
import { PartnerLogo } from "@/components/shared/PartnerLogo";
import { Reveal } from "@/components/shared/Reveal";
export function PartnerTrust() {
  const { partners: copy } = SECTION_COPY;

  return (
    <section
      id="partners"
      className="relative border-y border-starlight-border bg-black"
      aria-label="Marques partenaires"
    >
      <div className="section-padding py-24 md:py-32 lg:py-40">
        <Reveal>
          <ul
            className="mx-auto grid max-w-[1400px] grid-cols-2 items-center gap-x-6 gap-y-12 sm:grid-cols-3 md:grid-cols-4 md:gap-x-8 md:gap-y-14 lg:grid-cols-7"
            role="list"
          >
            {PARTNER_LOGOS.map((partner) => (
              <li key={partner.id} className="flex items-center justify-center">
                <PartnerLogo
                  variant="wall"
                  partnerId={partner.id}
                  src={partner.src}
                  name={partner.name}
                  wide={"wide" in partner && partner.wide}
                  invert={"invert" in partner && partner.invert}
                />
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-16 text-center text-xs font-light tracking-[0.22em] text-starlight-muted uppercase md:mt-24">
            {copy.tagline}
          </p>
        </Reveal>
      </div>

      <p className="sr-only">{copy.disclaimer}</p>
    </section>
  );
}
