import { cn } from "@/lib/utils";
import { Atmosphere, type AtmosphereVariant } from "@/components/shared/Atmosphere";

type SectionTone = "bg" | "surface";
type SectionSpacing = "default" | "spacious" | "tight" | "editorial";

interface SectionShellProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  innerClassName?: string;
  tone?: SectionTone;
  atmosphere?: AtmosphereVariant;
  spacing?: SectionSpacing;
  separator?: boolean;
  fullWidth?: boolean;
  "aria-labelledby"?: string;
  "aria-label"?: string;
}

const toneClasses: Record<SectionTone, string> = {
  bg: "bg-starlight-bg",
  surface: "bg-starlight-surface",
};

const spacingClasses: Record<SectionSpacing, string> = {
  default: "section-y",
  spacious: "section-y-spacious",
  tight: "section-y-tight",
  editorial: "section-y-editorial",
};

export function SectionShell({
  children,
  id,
  className,
  innerClassName,
  tone = "bg",
  atmosphere,
  spacing = "default",
  separator = true,
  fullWidth = false,
  ...aria
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden",
        separator && "section-separator",
        atmosphere ? "bg-black" : toneClasses[tone],
        !fullWidth && spacingClasses[spacing],
        !fullWidth && "section-padding",
        className
      )}
      {...aria}
    >
      {atmosphere ? <Atmosphere variant={atmosphere} /> : null}
      {!atmosphere && tone === "bg" ? (
        <div className="leather-whisper absolute inset-0" aria-hidden />
      ) : null}
      <div className={cn("relative z-[1]", innerClassName)}>{children}</div>
    </section>
  );
}
