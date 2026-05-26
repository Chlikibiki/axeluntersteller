"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { HERO_COPY, HERO_IMAGES, HERO_STATEMENT, UI } from "@/lib/constants";
import { PremiumButton } from "@/components/shared/PremiumButton";
import { cn } from "@/lib/utils";

const LINE_CLASS = [
  "hero-line--lead",
  "hero-line--heritage",
  "hero-line--signature",
] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const lightWarmRef = useRef<HTMLDivElement>(null);
  const lightCoolRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const mobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      const delay = prefersReducedMotion ? 0 : mobile ? 1.35 : 2;

      if (!prefersReducedMotion && bgRef.current) {
        gsap.fromTo(
          bgRef.current,
          { scale: 1.14, xPercent: -2, yPercent: 1 },
          {
            scale: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 3.8,
            ease: "power2.out",
          }
        );

        gsap.to(bgRef.current, {
          scale: mobile ? 1.05 : 1.07,
          xPercent: mobile ? 1.2 : 2.5,
          yPercent: mobile ? -0.6 : -1.2,
          duration: mobile ? 26 : 32,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: 3.8,
        });
      }

      if (!prefersReducedMotion) {
        if (lightWarmRef.current) {
          gsap.fromTo(
            lightWarmRef.current,
            { opacity: 0, xPercent: -6 },
            { opacity: 1, xPercent: 0, duration: 2.6, ease: "power2.out", delay: 0.4 }
          );
          gsap.to(lightWarmRef.current, {
            xPercent: 8,
            yPercent: -5,
            opacity: 0.85,
            duration: 11,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: 2.6,
          });
        }

        if (lightCoolRef.current) {
          gsap.fromTo(
            lightCoolRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 3, ease: "power2.out", delay: 0.8 }
          );
          gsap.to(lightCoolRef.current, {
            xPercent: -5,
            yPercent: 4,
            opacity: 0.7,
            duration: 14,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: 3,
          });
        }
      }

      const tl = gsap.timeline({ delay });

      tl.fromTo(
        ".hero-eyebrow",
        { y: 14, opacity: 0, filter: "blur(6px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: prefersReducedMotion ? 0 : 1.1,
          ease: "power3.out",
        },
        0
      )
        .fromTo(
          ".hero-line-inner",
          {
            y: "115%",
            opacity: prefersReducedMotion ? 1 : 0.4,
            filter: prefersReducedMotion ? "blur(0px)" : "blur(10px)",
          },
          {
            y: "0%",
            opacity: 1,
            filter: "blur(0px)",
            duration: prefersReducedMotion ? 0 : 1.55,
            stagger: 0.14,
            ease: "power4.out",
          },
          0.08
        )
        .fromTo(
          ".hero-line--signature .hero-line-inner",
          { scale: 0.98 },
          {
            scale: 1,
            duration: prefersReducedMotion ? 0 : 1.8,
            ease: "power2.out",
          },
          0.42
        )
        .fromTo(
          ".hero-manifesto",
          { y: 20, opacity: 0, filter: "blur(8px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: prefersReducedMotion ? 0 : 1.35,
            ease: "power3.out",
          },
          0.58
        )
        .fromTo(
          ".hero-subhead",
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: prefersReducedMotion ? 0 : 1.2,
            ease: "power3.out",
          },
          0.72
        )
        .fromTo(
          ".hero-cta",
          { y: 20, opacity: 0, scale: 0.97 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: prefersReducedMotion ? 0 : 1.05,
            stagger: 0.12,
            ease: "power3.out",
          },
          0.88
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-iconic relative min-h-[94dvh] overflow-hidden bg-black md:min-h-[100dvh]"
      aria-labelledby="hero-heading"
    >
      <div className="hero-stage absolute inset-0" aria-hidden>
        <div
          ref={bgRef}
          className="hero-leather-layer absolute -inset-[4%] origin-center gpu-layer will-change-transform"
        >
          <Image
            src={HERO_IMAGES.primary}
            alt={UI.images.workshop}
            fill
            priority
            className="hero-leather-image object-cover object-[center_40%] md:object-[center_45%]"
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 hero-depth-haze" />
        <div ref={lightWarmRef} className="hero-light-warm opacity-0" />
        <div ref={lightCoolRef} className="hero-light-cool opacity-0" />
        <div className="hero-grain" />
        <div className="absolute inset-0 cinematic-vignette hero-vignette-deep" />
        <div className="hero-edge-fade" />
      </div>

      <div className="relative z-10 flex min-h-[94dvh] flex-col justify-end section-padding pb-11 pt-28 md:min-h-[100dvh] md:pb-28 md:pt-44">
        <div className="hero-content max-w-4xl">
          <p className="hero-eyebrow eyebrow mb-6 opacity-0 md:mb-10">
            {HERO_COPY.established}
          </p>

          <h1
            id="hero-heading"
            className="hero-heading font-display text-starlight-cream"
          >
            {HERO_COPY.headline.map((line, i) => (
              <span
                key={line}
                className={cn("hero-line block overflow-hidden", LINE_CLASS[i])}
              >
                <span className="hero-line-inner block">{line}</span>
              </span>
            ))}
          </h1>

          <p className="hero-manifesto mt-5 max-w-md font-display text-[0.9375rem] font-extralight leading-[1.45] tracking-[-0.02em] text-starlight-cream/92 opacity-0 md:mt-7 md:max-w-lg md:text-lg md:leading-[1.5]">
            {HERO_COPY.manifesto}
          </p>

          <p className="hero-subhead body-large mt-4 hidden max-w-xl opacity-0 md:mt-8 md:block md:max-w-2xl">
            {HERO_COPY.subhead}
          </p>

          <div className="hero-actions mt-9 flex w-full flex-col gap-3 sm:mt-12 sm:flex-row sm:items-center sm:gap-5 md:mt-14">
            <div className="hero-cta flex w-full opacity-0 sm:w-auto">
              <PremiumButton
                href="/contact"
                className="hero-btn hero-btn-primary w-full sm:w-auto"
              >
                {HERO_COPY.ctaPrimary}
              </PremiumButton>
            </div>
            <div className="hero-cta flex w-full opacity-0 sm:w-auto">
              <PremiumButton
                href="#partners"
                variant="secondary"
                className="hero-btn hero-btn-secondary w-full sm:w-auto"
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
