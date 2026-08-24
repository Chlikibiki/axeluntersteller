import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { UI } from "@/lib/constants";
import type { PartnerLogoEntry } from "@/lib/partner-logos";

interface PartnerLogoProps {
  partner: PartnerLogoEntry;
  className?: string;
}

export function PartnerLogo({ partner, className }: PartnerLogoProps) {
  const { src, name, canvas, crop, opticalH, maxWidthPct } = partner;

  return (
    <div
      className={cn("partner-logo-cell group", className)}
      style={
        {
          "--logo-h": `${opticalH}rem`,
          "--logo-max-n": String(maxWidthPct / 100),
          "--logo-ar": String(crop.w / crop.h),
        } as CSSProperties
      }
    >
      <div className="partner-logo-mark">
        <svg
          className="partner-logo-svg"
          viewBox={`${crop.x} ${crop.y} ${crop.w} ${crop.h}`}
          role="img"
          aria-label={UI.images.partnerLogo(name)}
          preserveAspectRatio="xMidYMid meet"
        >
          <image href={src} width={canvas.w} height={canvas.h} />
        </svg>
      </div>
    </div>
  );
}
