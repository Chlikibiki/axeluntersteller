"use client";

import { cn } from "@/lib/utils";

interface CineMediaProps {
  children: React.ReactNode;
  className?: string;
  rootClassName?: string;
  /** Déplacement vertical parallaxe (fraction viewport, ex. 0.05) */
  strength?: number;
  scaleFrom?: number;
  scrub?: number;
  parallax?: boolean;
  zoom?: boolean;
  /** Hover matière (desktop) */
  living?: boolean;
}

/**
 * Conteneur image GPU — parallaxe + zoom au scroll via CinematicMotion.
 * Couche interne `.media-matter` pour zoom hover sans conflit GSAP.
 */
export function CineMedia({
  children,
  className,
  rootClassName,
  strength = 0.052,
  scaleFrom = 1.042,
  scrub = 2,
  parallax = true,
  zoom = true,
  living = true,
}: CineMediaProps) {
  return (
    <div
      data-cine-root
      className={cn(
        "relative overflow-hidden bg-black",
        living && "media-living",
        rootClassName
      )}
    >
      <div
        data-cine-media
        data-cine-parallax={String(parallax)}
        data-cine-zoom={String(zoom)}
        data-cine-strength={strength}
        data-cine-scale-from={scaleFrom}
        data-cine-scrub={scrub}
        className={cn("absolute -inset-[10%] gpu-layer", className)}
      >
        <div className="media-matter absolute inset-0 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
