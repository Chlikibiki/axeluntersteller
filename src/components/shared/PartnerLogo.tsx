import Image from "next/image";
import { cn } from "@/lib/utils";
import { UI } from "@/lib/constants";

interface PartnerLogoProps {
  src: string;
  name: string;
  partnerId?: string;
  wide?: boolean;
  size?: "default" | "wide" | "sm";
  invert?: boolean;
  width?: number;
  height?: number;
  className?: string;
  variant?: "default" | "wall";
}

const WALL_FRAME = {
  default: "h-10 w-32 sm:h-11 sm:w-36 md:h-12 md:w-40",
  wide: "h-10 w-40 sm:h-11 sm:w-48 md:h-12 md:w-56",
  sm: "h-8 w-28 sm:h-9 sm:w-32 md:h-10 md:w-36",
} as const;

export function PartnerLogo({
  src,
  name,
  partnerId,
  wide = false,
  size = "default",
  invert = false,
  width = 140,
  height = 48,
  className,
  variant = "default",
}: PartnerLogoProps) {
  const isFreitag = partnerId === "freitag";
  const isSvg = src.endsWith(".svg");
  const frameKey =
    size === "sm" ? "sm" : wide || isFreitag ? "wide" : "default";

  const luxeImageClass = cn(
    "object-contain object-center transition-all duration-[1600ms] ease-[var(--ease-premium)]",
    isFreitag || isSvg
      ? "opacity-[0.36] hover:opacity-[0.62]"
      : "brightness-0 invert opacity-[0.34] hover:opacity-[0.58]",
    invert && !isFreitag && "brightness-0 invert"
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
            "relative transition-transform duration-[1600ms] ease-[var(--ease-premium)] group-hover:scale-[1.008]",
            WALL_FRAME[frameKey]
          )}
        >
          <Image
            src={src}
            alt={UI.images.partnerLogo(name)}
            fill
            className={luxeImageClass}
            sizes={
              frameKey === "wide"
                ? "(max-width: 768px) 36vw, 224px"
                : frameKey === "sm"
                  ? "(max-width: 768px) 26vw, 144px"
                  : "(max-width: 768px) 30vw, 160px"
            }
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
