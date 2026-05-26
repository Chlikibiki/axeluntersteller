import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";
import { LOGO } from "@/lib/images";

const sizeClasses = {
  sm: "h-8 w-auto max-w-[140px] md:max-w-[160px]",
  md: "h-12 w-auto max-w-[200px] md:h-[3.25rem] md:max-w-[240px]",
  lg: "h-28 w-auto max-w-[280px] md:h-36 md:max-w-[360px]",
  xl: "h-32 w-auto max-w-[300px] md:h-40 md:max-w-[380px]",
} as const;

interface LogoProps {
  size?: keyof typeof sizeClasses;
  className?: string;
  linked?: boolean;
  priority?: boolean;
}

export function Logo({
  size = "md",
  className,
  linked = true,
  priority = false,
}: LogoProps) {
  const image = (
    <Image
      src={LOGO.starlight}
      alt={`${SITE.legalName}, depuis ${SITE.established}`}
      width={720}
      height={320}
      priority={priority}
      unoptimized
      className={cn(
        "object-contain object-left transition-opacity duration-500 hover:opacity-85",
        sizeClasses[size],
        className
      )}
    />
  );

  if (!linked) {
    return image;
  }

  return (
    <Link
      href="/"
      className="inline-block shrink-0"
      aria-label={`${SITE.name}, accueil`}
    >
      {image}
    </Link>
  );
}
