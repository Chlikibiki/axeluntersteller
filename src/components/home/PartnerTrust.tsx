"use client";

import { motion } from "framer-motion";
import { PARTNER_LOGOS } from "@/lib/partner-logos";
import { SECTION_COPY } from "@/lib/constants";
import { filmRhythmClass, filmSectionAttrs } from "@/lib/film-narrative";
import { PartnerLogo } from "@/components/shared/PartnerLogo";
import { Reveal } from "@/components/shared/Reveal";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

const gridReveal = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.2 },
  },
};

const itemReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.8,
      ease: EASE.silence as [number, number, number, number],
    },
  },
};

export function PartnerTrust() {
  const { partners: copy } = SECTION_COPY;

  return (
    <section
      id="partners"
      className={cn(
        "partner-wall partner-wall-compact film-section relative bg-black",
        filmRhythmClass("silence"),
        "film-personality-rarete"
      )}
      {...filmSectionAttrs("partners")}
      aria-labelledby="partners-heading"
    >
      <div className="section-padding relative py-12 md:py-16 lg:py-20">
        <Reveal pace="silence" className="partner-wall-header mx-auto max-w-xl text-center">
          <h2
            id="partners-heading"
            className="heading-md font-display font-extralight tracking-[0.02em] text-starlight-cream/88"
          >
            {copy.title}
          </h2>
          <p className="type-readable mx-auto mt-4 max-w-md normal-case tracking-normal text-starlight-metal/75">
            {copy.body}
          </p>
        </Reveal>

        <motion.ul
          className="partner-wall-grid mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-12 md:mt-12 md:grid-cols-3 md:gap-x-10 md:gap-y-14 lg:grid-cols-5 lg:gap-x-8 lg:gap-y-12"
          role="list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-8% 0px", amount: 0.12 }}
          variants={gridReveal}
        >
          {PARTNER_LOGOS.map((partner) => (
            <motion.li
              key={partner.id}
              variants={itemReveal}
              className="flex items-center justify-center"
            >
              <PartnerLogo
                src={partner.src}
                name={partner.name}
                scale={partner.scale}
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <p className="sr-only">{copy.disclaimer}</p>
    </section>
  );
}
