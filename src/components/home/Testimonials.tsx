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
      tone="surface"
      spacing="spacious"
      aria-labelledby="testimonials-heading"
    >
      <div className="flex items-end justify-between gap-8">
        <Reveal>
          <h2
            id="testimonials-heading"
            className="heading-lg text-starlight-cream"
          >
            {SECTION_COPY.testimonials.title}
          </h2>
        </Reveal>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={prev}
            className="flex size-12 items-center justify-center border border-starlight-border text-starlight-cream transition-colors hover:border-starlight-cream"
            aria-label={UI.aria.prevTestimonial}
          >
            <ChevronLeft size={18} strokeWidth={1} />
          </button>
          <button
            type="button"
            onClick={next}
            className="flex size-12 items-center justify-center border border-starlight-border text-starlight-cream transition-colors hover:border-starlight-cream"
            aria-label={UI.aria.nextTestimonial}
          >
            <ChevronRight size={18} strokeWidth={1} />
          </button>
        </div>
      </div>

      <div className="relative mt-16 min-h-[200px] md:mt-24">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl"
          >
            <p className="heading-statement text-balance text-starlight-cream">
              &ldquo;{current.quote}&rdquo;
            </p>
            <footer className="mt-12">
              <cite className="label-caps not-italic text-starlight-cream">
                {current.role}
              </cite>
              <span className="label-caps mt-2 block text-starlight-muted">
                {current.industry}
              </span>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>
    </SectionShell>
  );
}
