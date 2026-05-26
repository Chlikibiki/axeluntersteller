import { cn } from "@/lib/utils";
import { NobleSurface } from "@/components/shared/NobleSurface";

export type AtmosphereVariant =
  | "void"
  | "depth"
  | "warm"
  | "elevated"
  | "ink"
  | "ember";

const variants: Record<AtmosphereVariant, string> = {
  void: "atmosphere-void",
  depth: "atmosphere-depth",
  warm: "atmosphere-warm",
  elevated: "atmosphere-elevated",
  ink: "atmosphere-ink",
  ember: "atmosphere-ember",
};

export function Atmosphere({
  variant,
  className,
}: {
  variant: AtmosphereVariant;
  className?: string;
}) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 z-0", className)}
      aria-hidden
    >
      <NobleSurface intensity="still" />
      <div className={cn("absolute inset-0", variants[variant])} />
    </div>
  );
}
