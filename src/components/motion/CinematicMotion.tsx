"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CINE } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isMobileViewport() {
  return window.matchMedia("(max-width: 767px)").matches;
}

function initCinematicMotion() {
  if (prefersReducedMotion()) {
    gsap.set("[data-cine-reveal], [data-cine-stagger-item]", {
      opacity: 1,
      y: 0,
      clearProps: "transform,opacity",
    });
    return () => undefined;
  }

  const mobile = isMobileViewport();
  const motionScale = mobile ? 0.35 : 1;

  const ctx = gsap.context(() => {
    gsap.utils.toArray<HTMLElement>("[data-cine-media]").forEach((media) => {
      const root =
        media.closest<HTMLElement>("[data-cine-root]") ?? media.parentElement;
      if (!root) return;

      const useParallax = media.dataset.cineParallax !== "false" && !mobile;
      const useZoom = media.dataset.cineZoom !== "false";
      const strength =
        Number(media.dataset.cineStrength ?? CINE.parallaxStrength) * motionScale;
      const scaleFrom =
        1 + (Number(media.dataset.cineScaleFrom ?? CINE.scaleFrom) - 1) * motionScale;
      const scrub = Number(media.dataset.cineScrub ?? CINE.scrub) * (mobile ? 0.85 : 1);

      const from: gsap.TweenVars = { force3D: true };
      const to: gsap.TweenVars = {
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: root,
          start: "top bottom",
          end: "bottom top",
          scrub,
        },
      };

      if (useParallax) {
        from.yPercent = -strength * 100;
        to.yPercent = strength * 100;
      }
      if (useZoom) {
        from.scale = scaleFrom;
        to.scale = 1;
      }

      if (useParallax || useZoom) {
        gsap.fromTo(media, from, to);
      }
    });

    gsap.utils.toArray<HTMLElement>("[data-cine-reveal]").forEach((el) => {
      const y = Number(el.dataset.cineY ?? CINE.revealY) * motionScale;
      const start = el.dataset.cineStart ?? (mobile ? "top 90%" : "top 86%");

      gsap.fromTo(
        el,
        { opacity: 0, y, force3D: true },
        {
          opacity: 1,
          y: 0,
          duration: mobile ? CINE.revealDuration * 0.85 : CINE.revealDuration,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    });

    gsap.utils.toArray<HTMLElement>("[data-cine-stagger]").forEach((parent) => {
      const items = parent.querySelectorAll<HTMLElement>(
        "[data-cine-stagger-item]"
      );
      if (!items.length) return;

      gsap.fromTo(
        items,
        { opacity: 0, y: 26, force3D: true },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          stagger: 0.11,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: parent,
            start: "top 84%",
            once: true,
          },
        }
      );
    });

    if (!mobile) {
      gsap.utils.toArray<HTMLElement>("[data-cine-float]").forEach((el) => {
        gsap.to(el, {
          y: Number(el.dataset.cineFloatY ?? CINE.floatY),
          duration: Number(el.dataset.cineFloatDuration ?? CINE.floatDuration),
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          force3D: true,
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-cine-light]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0.5 },
          {
            opacity: 1,
            duration: CINE.lightPulseDuration,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          }
        );
      });
    }
  });

  return () => ctx.revert();
}

export function CinematicMotion() {
  useEffect(() => {
    const cleanup = initCinematicMotion();

    const refresh = () => ScrollTrigger.refresh();
    const t1 = window.setTimeout(refresh, 400);
    const t2 = window.setTimeout(refresh, 1200);
    window.addEventListener("load", refresh);

    return () => {
      cleanup?.();
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("load", refresh);
    };
  }, []);

  return null;
}
