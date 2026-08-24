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
    transition: { staggerChildren: 0.045, delayChildren: 0.18 },
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
        "partner-wall film-section relative bg-black",
        filmRhythmClass("silence"),
        "film-personality-rarete"
      )}
      {...filmSectionAttrs("partners")}
      aria-labelledby="partners-heading"
    >
      <div className="section-padding relative py-20 md:py-28 lg:py-36">
        <Reveal pace="silence" className="partner-wall-header mx-auto max-w-2xl text-center">
          <h2
            id="partners-heading"
            className="heading-md font-display font-extralight tracking-[0.02em] text-starlight-cream/88"
          >
            {copy.title}
          </h2>
          <p className="type-readable mx-auto mt-5 max-w-xl normal-case tracking-normal text-starlight-metal/75">
            {copy.body}
          </p>
        </Reveal>

        <motion.ul
          className="partner-wall-grid mx-auto mt-12 grid w-full max-w-[90rem] grid-cols-2 gap-x-8 gap-y-6 sm:mt-14 sm:gap-x-10 sm:gap-y-7 md:mt-16 md:grid-cols-3 md:gap-x-12 md:gap-y-8 lg:grid-cols-5 lg:gap-x-10 lg:gap-y-8"
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
              className="partner-wall-slot"
            >
              <PartnerLogo partner={partner} />
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <p className="sr-only">{copy.disclaimer}</p>
    </section>
  );
}
