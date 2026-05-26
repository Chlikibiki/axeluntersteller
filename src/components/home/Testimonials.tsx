"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS, SECTION_COPY, UI } from "@/lib/constants";
import { Reveal } from "@/components/shared/Reveal";
import { SectionShell } from "@/components/shared/SectionShell";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = TESTIMONIALS[index];

  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () =>
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <SectionShell
      atmosphere="elevated"
      spacing="editorial"
      aria-labelledby="testimonials-heading"
    >
      <div className="flex items-end justify-between gap-4">
        <Reveal pace="slow">
          <p className="eyebrow mb-3">Parole</p>
          <h2
            id="testimonials-heading"
            className="heading-lg text-starlight-cream"
          >
            {SECTION_COPY.testimonials.title}
          </h2>
        </Reveal>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={prev}
            className="flex size-10 items-center justify-center border border-starlight-border text-starlight-cream transition-colors hover:border-starlight-cream md:size-12"
            aria-label={UI.aria.prevTestimonial}
          >
            <ChevronLeft size={16} strokeWidth={1} />
          </button>
          <button
            type="button"
            onClick={next}
            className="flex size-10 items-center justify-center border border-starlight-border text-starlight-cream transition-colors hover:border-starlight-cream md:size-12"
            aria-label={UI.aria.nextTestimonial}
          >
            <ChevronRight size={16} strokeWidth={1} />
          </button>
        </div>
      </div>

      <div className="relative mt-8 min-h-[9rem] md:mt-16 md:min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <p className="text-[1.2rem] font-extralight leading-[1.22] tracking-[-0.025em] text-starlight-cream md:heading-statement md:text-balance">
              &ldquo;{current.quote}&rdquo;
            </p>
            <footer className="mt-6 md:mt-12">
              <cite className="label-caps not-italic text-starlight-cream">
                {current.role}
              </cite>
              <span className="label-caps mt-1 block text-starlight-muted md:mt-2">
                {current.industry}
              </span>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>
    </SectionShell>
  );
}
