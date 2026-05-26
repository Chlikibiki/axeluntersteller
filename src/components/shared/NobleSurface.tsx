import { cn } from "@/lib/utils";

/**
 * Textures atmosphériques ressenties, jamais ostentatoires.
 * grain cuir · lumière chaude · dégradés organiques · imperfections · profondeur
 */
export type NobleIntensity = "whisper" | "section" | "still";

interface NobleSurfaceProps {
  intensity?: NobleIntensity;
  className?: string;
}

export function NobleSurface({
  intensity = "whisper",
  className,
}: NobleSurfaceProps) {
  return (
    <div
      className={cn("atmo-stack", `atmo-stack--${intensity}`, className)}
      aria-hidden
    >
      <div className="atmo-layer atmo-depth" />
      <div className="atmo-layer atmo-organic" />
      <div className="atmo-layer atmo-warm" />
      {intensity !== "still" ? (
        <div className="atmo-layer atmo-leather" />
      ) : null}
      <div className="atmo-layer atmo-imperfect" />
      {intensity === "whisper" ? (
        <div className="atmo-layer atmo-grain" />
      ) : null}
    </div>
  );
}
