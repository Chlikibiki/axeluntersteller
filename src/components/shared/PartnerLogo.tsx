import Image from "next/image";
import { cn } from "@/lib/utils";
import { UI } from "@/lib/constants";

interface PartnerLogoProps {
  src: string;
  name: string;
  partnerId?: string;
  wide?: boolean;
  invert?: boolean;
  width?: number;
  height?: number;
  className?: string;
  variant?: "default" | "wall";
}

const WALL_FRAME = {
  default: "h-11 w-36 sm:h-12 sm:w-40 md:h-14 md:w-44",
  wide: "h-11 w-44 sm:h-12 sm:w-52 md:h-14 md:w-60 lg:h-[3.25rem] lg:w-72",
} as const;

export function PartnerLogo({
  src,
  name,
  partnerId,
  wide = false,
  invert = false,
  width = 140,
  height = 48,
  className,
  variant = "default",
}: PartnerLogoProps) {
  const isFreitag = partnerId === "freitag";
  const useWideFrame = wide || isFreitag;

  if (variant === "wall") {
    return (
      <span
        className={cn(
          "relative flex w-full items-center justify-center px-2",
          className
        )}
      >
        <span
          className={cn(
            "relative",
            useWideFrame ? WALL_FRAME.wide : WALL_FRAME.default
          )}
        >
          <Image
            src={src}
            alt={UI.images.partnerLogo(name)}
            fill
            className={cn(
              "object-contain object-center opacity-90 transition-opacity duration-700 hover:opacity-100",
              invert && "brightness-0 invert",
              isFreitag && !invert && "opacity-100"
            )}
            sizes={
              useWideFrame
                ? "(max-width: 768px) 40vw, 280px"
                : "(max-width: 768px) 32vw, 176px"
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
        "relative inline-flex shrink-0 items-center justify-center opacity-60 transition-opacity duration-500 hover:opacity-100",
        invert ? "brightness-0 invert" : "brightness-0 invert",
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
