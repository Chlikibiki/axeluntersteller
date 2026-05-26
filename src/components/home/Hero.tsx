"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { HERO_COPY, HERO_IMAGES, HERO_STATEMENT, UI } from "@/lib/constants";
import { PremiumButton } from "@/components/shared/PremiumButton";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: prefersReducedMotion ? 0 : 2.1 });

      if (bgRef.current && !prefersReducedMotion) {
        gsap.fromTo(
          bgRef.current,
          { scale: 1.09 },
          { scale: 1, duration: 3.6, ease: "power3.out" }
        );

        gsap.to(bgRef.current, {
          scale: 1.06,
          duration: 22,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: 3.6,
        });
      }

      tl.fromTo(
        ".hero-line-inner",
        { y: "108%" },
        {
          y: "0%",
          duration: 1.55,
          stagger: 0.14,
          ease: "power4.out",
        },
        0.15
      )
        .fromTo(
          ".hero-subhead",
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.35, ease: "power3.out" },
          0.55
        )
        .fromTo(
          ".hero-cta",
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.12,
            ease: "power3.out",
          },
          0.75
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] overflow-hidden bg-black"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <div
          ref={bgRef}
          className="absolute -inset-[2%] origin-center will-change-transform"
        >
          <Image
            src={HERO_IMAGES.primary}
            alt={UI.images.workshop}
            fill
            priority
            className="hero-image-cinematic object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 hero-light-breathe" />
        <div className="absolute inset-0 cinematic-vignette" />
      </div>

      <div className="relative z-10 flex min-h-[100dvh] flex-col justify-end section-padding pb-16 pt-32 md:pb-28 md:pt-44">
        <div className="max-w-3xl">
          <p className="eyebrow mb-8 md:mb-12">{HERO_COPY.established}</p>

          <h1
            id="hero-heading"
            className="heading-xl uppercase text-starlight-cream"
          >
            {HERO_COPY.headline.map((line) => (
              <span key={line} className="hero-line">
                <span className="hero-line-inner">{line}</span>
              </span>
            ))}
          </h1>

          <p className="hero-subhead body-large mt-10 max-w-xl opacity-0 md:mt-14 md:max-w-2xl">
            {HERO_COPY.subhead}
          </p>

          <div className="mt-12 flex w-full flex-col items-center gap-3 md:mt-16 sm:flex-row sm:items-center sm:justify-start sm:gap-4">
            <div className="hero-cta flex w-full max-w-sm justify-center opacity-0 sm:w-auto sm:max-w-none">
              <PremiumButton href="/contact" className="w-full sm:w-auto">
                {HERO_COPY.ctaPrimary}
              </PremiumButton>
            </div>
            <div className="hero-cta flex w-full max-w-sm justify-center opacity-0 sm:w-auto sm:max-w-none">
              <PremiumButton
                href="#partners"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                {HERO_COPY.ctaSecondary}
              </PremiumButton>
            </div>
          </div>
        </div>
      </div>

      <p className="sr-only">{HERO_STATEMENT}</p>
    </section>
  );
}
