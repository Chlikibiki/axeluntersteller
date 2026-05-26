"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SIGNATURE_COPY, TRUST_IMAGE, UI } from "@/lib/constants";
import { Atmosphere } from "@/components/shared/Atmosphere";

gsap.registerPlugin(ScrollTrigger);

export function SignatureMoment() {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (mediaRef.current) {
        gsap.fromTo(
          mediaRef.current,
          { scale: 1.12, y: 24 },
          {
            scale: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.8,
            },
          }
        );
      }

      if (copyRef.current) {
        gsap.fromTo(
          copyRef.current,
          { opacity: 0, y: 48 },
          {
            opacity: 1,
            y: 0,
            duration: 1.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: copyRef.current,
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[88dvh] overflow-hidden bg-black md:min-h-[100dvh]"
      aria-labelledby="signature-heading"
    >
      <Atmosphere variant="ember" />

      <div ref={mediaRef} className="absolute inset-0 will-change-transform">
        <Image
          src={TRUST_IMAGE}
          alt={UI.images.trustArtisan}
          fill
          className="signature-image object-cover object-[center_42%]"
          sizes="100vw"
          loading="lazy"
        />
        <div className="signature-image-overlay absolute inset-0" />
        <div className="absolute inset-0 cinematic-vignette" />
      </div>

      <div className="relative z-10 flex min-h-[88dvh] flex-col items-center justify-end section-padding pb-20 pt-32 md:min-h-[100dvh] md:pb-28 md:pt-40">
        <div
          ref={copyRef}
          className="max-w-4xl text-center opacity-0"
        >
          <p className="eyebrow mb-8 md:mb-10">Atelier</p>
          <h2
            id="signature-heading"
            className="heading-monument text-balance text-starlight-cream"
          >
            <span className="block">{SIGNATURE_COPY.line1}</span>
            <span className="mt-2 block text-starlight-cream/90 md:mt-4">
              {SIGNATURE_COPY.line2}
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}
