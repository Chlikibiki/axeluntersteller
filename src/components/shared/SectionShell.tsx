import { cn } from "@/lib/utils";

type SectionTone = "bg" | "surface";
type SectionSpacing = "default" | "spacious";

interface SectionShellProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  innerClassName?: string;
  tone?: SectionTone;
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
};

export function SectionShell({
  children,
  id,
  className,
  innerClassName,
  tone = "bg",
  spacing = "default",
  separator = true,
  fullWidth = false,
  ...aria
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        separator && "section-separator",
        toneClasses[tone],
        !fullWidth && spacingClasses[spacing],
        !fullWidth && "section-padding",
        className
      )}
      {...aria}
    >
      <div className={cn(innerClassName)}>{children}</div>
    </section>
  );
}
