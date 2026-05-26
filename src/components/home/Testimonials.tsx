"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS, SECTION_COPY, UI } from "@/lib/constants";
import { Reveal } from "@/components/shared/Reveal";
import { FilmChapter } from "@/components/film";
import { SectionShell } from "@/components/shared/SectionShell";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = TESTIMONIALS[index];

  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () =>
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <SectionShell
      film="testimonials"
      filmTransition="void"
      atmosphere="elevated"
      spacing="spacious"
      aria-labelledby="testimonials-heading"
    >
      <div className="flex items-end justify-between gap-4">
        <Reveal pace="slow">
          <FilmChapter section="testimonials" showIntention={false} />
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
            className="icon-btn-luxe flex size-10 items-center justify-center border border-starlight-border text-starlight-cream md:size-12"
            aria-label={UI.aria.prevTestimonial}
          >
            <ChevronLeft size={16} strokeWidth={1} />
          </button>
          <button
            type="button"
            onClick={next}
            className="icon-btn-luxe flex size-10 items-center justify-center border border-starlight-border text-starlight-cream md:size-12"
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
            transition={{ duration: 0.85, ease: [0.22, 1, 0.32, 1] }}
            className="max-w-5xl"
          >
            <p className="type-quote text-starlight-cream">
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
