import Image from "next/image";
import { cn } from "@/lib/utils";
import { UI } from "@/lib/constants";

interface PartnerLogoProps {
  src: string;
  name: string;
  partnerId?: string;
  width?: number;
  height?: number;
  className?: string;
  variant?: "default" | "wall";
}

const WALL_FRAME = {
  default: "h-14 w-44 sm:h-16 sm:w-52 md:h-[4.5rem] md:w-64 lg:h-20 lg:w-80",
  freitag:
    "h-11 w-56 sm:h-12 sm:w-64 md:h-14 md:w-[18rem] lg:h-16 lg:w-[22rem]",
} as const;

export function PartnerLogo({
  src,
  name,
  partnerId,
  width = 140,
  height = 48,
  className,
  variant = "default",
}: PartnerLogoProps) {
  const isFreitag = partnerId === "freitag";

  if (variant === "wall") {
    return (
      <span
        className={cn(
          "relative flex w-full items-center justify-center",
          className
        )}
      >
        <span
          className={cn(
            "relative",
            isFreitag ? WALL_FRAME.freitag : WALL_FRAME.default
          )}
        >
          <Image
            src={src}
            alt={UI.images.partnerLogo(name)}
            fill
            className="object-contain object-center opacity-90 transition-opacity duration-700 hover:opacity-100"
            sizes={isFreitag ? "(max-width: 768px) 70vw, 352px" : "(max-width: 768px) 50vw, 320px"}
            unoptimized
          />
        </span>
      </span>
    );
  }

  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center brightness-0 invert opacity-60 transition-opacity duration-500 hover:opacity-100",
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
