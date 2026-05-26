"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { UI } from "@/lib/constants";
import { SIGNATURE_ATELIER_IMAGE } from "@/lib/images";
import { filmRhythmClass, filmSectionAttrs } from "@/lib/film-narrative";
import { cn } from "@/lib/utils";

export function SignatureMoment() {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const lightWarmRef = useRef<HTMLDivElement>(null);
  const lightBladeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      if (mediaRef.current) {
        gsap.fromTo(
          mediaRef.current,
          { scale: 1.14, xPercent: -1.5, yPercent: 0.8 },
          {
            scale: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 4.5,
            ease: "power2.out",
          }
        );

        gsap.to(mediaRef.current, {
          scale: 1.06,
          xPercent: 1.8,
          yPercent: -0.9,
          duration: 28,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: 4.5,
        });
      }

      if (lightWarmRef.current) {
        gsap.fromTo(
          lightWarmRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 3.2, ease: "power2.out", delay: 0.3 }
        );
        gsap.to(lightWarmRef.current, {
          opacity: 0.75,
          xPercent: 4,
          duration: 12,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: 3.2,
        });
      }

      if (lightBladeRef.current) {
        gsap.to(lightBladeRef.current, {
          opacity: 0.55,
          xPercent: -3,
          duration: 16,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: 1,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cn(
        "signature-immersive film-section relative min-h-[100dvh] overflow-hidden bg-black",
        filmRhythmClass("tension"),
        "film-personality-main film-transition-lift"
      )}
      {...filmSectionAttrs("signature")}
      aria-label={UI.images.trustArtisan}
    >
      <div className="signature-immersive-stage absolute inset-0" aria-hidden>
        <div
          ref={mediaRef}
          className="signature-immersive-media absolute -inset-[6%] origin-center will-change-transform"
        >
          <Image
            src={SIGNATURE_ATELIER_IMAGE}
            alt=""
            fill
            className="signature-immersive-image object-cover object-[center_38%] md:object-[center_42%]"
            sizes="100vw"
            priority
          />
        </div>

        <div ref={lightWarmRef} className="signature-immersive-light signature-immersive-light--warm opacity-0" />
        <div ref={lightBladeRef} className="signature-immersive-light signature-immersive-light--blade" />
        <div className="signature-immersive-veil" />
        <div className="signature-immersive-vignette" />
        <div className="signature-immersive-grain" />
      </div>
    </section>
  );
}
