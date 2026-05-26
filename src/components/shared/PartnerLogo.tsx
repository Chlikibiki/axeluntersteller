import Image from "next/image";
import { cn } from "@/lib/utils";
import { UI } from "@/lib/constants";

export type PartnerLogoSize = "xs" | "sm" | "default" | "wide" | "lg";

interface PartnerLogoProps {
  src: string;
  name: string;
  partnerId?: string;
  wide?: boolean;
  size?: PartnerLogoSize;
  /** Logos couleur (Leica, BOSS, P&G…) — pas de filtre invert */
  color?: boolean;
  invert?: boolean;
  width?: number;
  height?: number;
  className?: string;
  variant?: "default" | "wall";
}

const WALL_FRAME: Record<PartnerLogoSize, string> = {
  xs: "h-6 w-20 sm:h-7 sm:w-24 md:h-8 md:w-28",
  sm: "h-8 w-28 sm:h-9 sm:w-32 md:h-10 md:w-36",
  default: "h-11 w-36 sm:h-12 sm:w-40 md:h-14 md:w-48",
  wide: "h-11 w-44 sm:h-12 sm:w-52 md:h-14 md:w-60",
  lg: "h-12 w-40 sm:h-14 sm:w-48 md:h-16 md:w-56",
};

const WALL_SIZES: Record<PartnerLogoSize, string> = {
  xs: "(max-width: 768px) 22vw, 112px",
  sm: "(max-width: 768px) 26vw, 144px",
  default: "(max-width: 768px) 32vw, 192px",
  wide: "(max-width: 768px) 38vw, 240px",
  lg: "(max-width: 768px) 36vw, 224px",
};

export function PartnerLogo({
  src,
  name,
  partnerId,
  wide = false,
  size = "default",
  color = false,
  invert = false,
  width = 140,
  height = 48,
  className,
  variant = "default",
}: PartnerLogoProps) {
  const isFreitag = partnerId === "freitag";
  const isSvg = src.endsWith(".svg");
  const isColorLogo = color || isFreitag || isSvg;

  const frameKey: PartnerLogoSize =
    size !== "default"
      ? size
      : wide || isFreitag
        ? "wide"
        : "default";

  const luxeImageClass = cn(
    "object-contain object-center transition-all duration-[1600ms] ease-[var(--ease-premium)]",
    isColorLogo
      ? "opacity-[0.72] hover:opacity-95"
      : "brightness-0 invert opacity-[0.42] hover:opacity-[0.68]",
    invert && !isColorLogo && "brightness-0 invert"
  );

  if (variant === "wall") {
    return (
      <span
        className={cn(
          "group relative flex w-full items-center justify-center px-1",
          className
        )}
      >
        <span
          className={cn(
            "relative transition-transform duration-[1600ms] ease-[var(--ease-premium)] group-hover:scale-[1.02]",
            WALL_FRAME[frameKey]
          )}
        >
          <Image
            src={src}
            alt={UI.images.partnerLogo(name)}
            fill
            className={luxeImageClass}
            sizes={WALL_SIZES[frameKey]}
            unoptimized
          />
        </span>
      </span>
    );
  }

  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center brightness-0 invert opacity-50 transition-opacity duration-700 hover:opacity-90",
        className
      )}
      style={{ width, height }}
    >
      <Image
        src={src}
        alt={UI.images.partnerLogo(name)}
        fill
        className="object-contain object-center"
        sizes={`${width}px`}
        unoptimized
      />
    </span>
  );
}
