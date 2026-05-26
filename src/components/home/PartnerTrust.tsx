"use client";

import { PARTNER_LOGOS, SECTION_COPY } from "@/lib/constants";
import { PartnerLogo } from "@/components/shared/PartnerLogo";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

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
            className="mx-auto flex max-w-[1400px] flex-col items-stretch md:flex-row md:items-center md:justify-center"
            role="list"
          >
            {PARTNER_LOGOS.map((partner, index) => (
              <li
                key={partner.id}
                className={cn(
                  "flex flex-1 items-center justify-center py-14 md:py-0",
                  index > 0 && "border-t border-starlight-border md:border-t-0 md:border-l"
                )}
              >
                <PartnerLogo
                  variant="wall"
                  partnerId={partner.id}
                  src={partner.src}
                  name={partner.name}
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
