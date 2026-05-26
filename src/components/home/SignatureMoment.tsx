"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SIGNATURE_COPY, UI } from "@/lib/constants";
import { SIGNATURE_ATELIER_IMAGE } from "@/lib/images";
import { filmRhythmClass, filmSectionAttrs } from "@/lib/film-narrative";
import { cn } from "@/lib/utils";

export function SignatureMoment() {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const lightWarmRef = useRef<HTMLDivElement>(null);
  const lightBladeRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLParagraphElement>(null);
  const line2Ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set([line1Ref.current, line2Ref.current], {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        });
        return;
      }

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

      const lines = [line1Ref.current, line2Ref.current].filter(Boolean);
      gsap.fromTo(
        lines,
        { opacity: 0, y: 36, filter: "blur(12px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.8,
          stagger: 0.55,
          ease: "power3.out",
          delay: 1.2,
        }
      );
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
      aria-labelledby="signature-heading"
    >
      <div className="signature-immersive-stage absolute inset-0" aria-hidden>
        <div
          ref={mediaRef}
          className="signature-immersive-media absolute -inset-[6%] origin-center will-change-transform"
        >
          <Image
            src={SIGNATURE_ATELIER_IMAGE}
            alt={UI.images.trustArtisan}
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

      <div className="signature-immersive-copy relative z-10 flex min-h-[100dvh] flex-col justify-end section-padding pb-14 pt-28 md:pb-24 md:pt-32">
        <p className="sr-only" id="signature-heading">
          {SIGNATURE_COPY.line1} {SIGNATURE_COPY.line2}
        </p>

        <blockquote className="signature-immersive-quote max-w-5xl">
          <p
            ref={line1Ref}
            className="signature-phrase signature-phrase-1 text-starlight-cream opacity-0"
          >
            {SIGNATURE_COPY.line1}
          </p>
          <p
            ref={line2Ref}
            className="signature-phrase signature-phrase-2 text-starlight-cream/78 opacity-0"
          >
            {SIGNATURE_COPY.line2}
          </p>
        </blockquote>
      </div>
    </section>
  );
}
