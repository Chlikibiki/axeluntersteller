"use client";

import { cn } from "@/lib/utils";

interface CineMediaProps {
  children: React.ReactNode;
  className?: string;
  rootClassName?: string;
  /** Déplacement vertical parallaxe (fraction viewport, ex. 0.08) */
  strength?: number;
  scaleFrom?: number;
  scrub?: number;
  parallax?: boolean;
  zoom?: boolean;
}

/**
 * Conteneur image GPU — parallaxe + zoom au scroll via CinematicMotion.
 * Enfants : Image fill ou média en position absolute.
 */
export function CineMedia({
  children,
  className,
  rootClassName,
  strength = 0.075,
  scaleFrom = 1.065,
  scrub = 1.85,
  parallax = true,
  zoom = true,
}: CineMediaProps) {
  return (
    <div
      data-cine-root
      className={cn("relative overflow-hidden bg-black", rootClassName)}
    >
      <div
        data-cine-media
        data-cine-parallax={String(parallax)}
        data-cine-zoom={String(zoom)}
        data-cine-strength={strength}
        data-cine-scale-from={scaleFrom}
        data-cine-scrub={scrub}
        className={cn("absolute -inset-[12%] gpu-layer", className)}
      >
        {children}
      </div>
    </div>
  );
}
