import Image from "next/image";
import { cn } from "@/lib/utils";
import { UI } from "@/lib/constants";

interface PartnerLogoProps {
  src: string;
  name: string;
  /** Ajustement du poids optique (1 = référence) */
  scale?: number;
  /** Largeur max individuelle (rem) */
  maxWidth?: number;
  className?: string;
}

/**
 * Marque partenaire — monochrome argent doux, poids optique harmonisé.
 */
export function PartnerLogo({
  src,
  name,
  scale = 1,
  maxWidth = 6.5,
  className,
}: PartnerLogoProps) {
  return (
    <div
      className={cn(
        "partner-logo-cell group flex h-14 w-full items-center justify-center sm:h-[3.75rem] md:h-16 lg:h-[4.25rem]",
        className
      )}
    >
      <div
        className="partner-logo-mark relative h-full w-full"
        style={{
          maxWidth: `${maxWidth}rem`,
          ["--logo-scale" as string]: scale,
        }}
      >
        <Image
          src={src}
          alt={UI.images.partnerLogo(name)}
          fill
          className="object-contain object-center"
          sizes="(max-width: 768px) 42vw, 168px"
          unoptimized={src.endsWith(".svg")}
        />
      </div>
    </div>
  );
}
