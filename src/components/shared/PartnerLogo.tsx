import Image from "next/image";
import { cn } from "@/lib/utils";
import { UI } from "@/lib/constants";

interface PartnerLogoProps {
  src: string;
  name: string;
  /** Ajustement du poids optique (1 = référence) */
  scale?: number;
  className?: string;
}

/**
 * Marque partenaire — monochrome, poids optique harmonisé.
 * Utilisé uniquement dans le mur premium PartnerTrust.
 */
export function PartnerLogo({ src, name, scale = 1, className }: PartnerLogoProps) {
  return (
    <div
      className={cn(
        "partner-logo-cell group flex h-12 w-full items-center justify-center sm:h-[3.25rem] md:h-14",
        className
      )}
    >
      <div
        className="partner-logo-mark relative h-full w-full max-w-[8.75rem] sm:max-w-[9.25rem] md:max-w-[9.75rem]"
        style={{ transform: `scale(${scale})` }}
      >
        <Image
          src={src}
          alt={UI.images.partnerLogo(name)}
          fill
          className="object-contain object-center"
          sizes="(max-width: 768px) 40vw, 156px"
          unoptimized={src.endsWith(".svg")}
        />
      </div>
    </div>
  );
}
