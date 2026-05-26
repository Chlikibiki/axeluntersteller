import { cn } from "@/lib/utils";
import { Atmosphere, type AtmosphereVariant } from "@/components/shared/Atmosphere";
import { NobleSurface } from "@/components/shared/NobleSurface";
import {
  FILM_SECTIONS,
  filmRhythmClass,
  filmSectionAttrs,
  type FilmSectionId,
} from "@/lib/film-narrative";

type SectionTone = "bg" | "surface";
type SectionSpacing = "default" | "spacious" | "tight" | "editorial";
type FilmTransition = "soft" | "lift" | "void" | "none";

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
  /** Rattache la section à l'arc narratif du film */
  film?: FilmSectionId;
  filmTransition?: FilmTransition;
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

const filmTransitionClasses: Record<FilmTransition, string> = {
  soft: "film-transition-soft",
  lift: "film-transition-lift",
  void: "film-transition-void",
  none: "",
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
  film,
  filmTransition = "soft",
  ...aria
}: SectionShellProps) {
  const filmMeta = film ? FILM_SECTIONS[film] : null;
  const filmAttrs = film ? filmSectionAttrs(film) : {};

  return (
    <section
      id={id}
      className={cn(
        "film-section relative overflow-hidden",
        filmMeta && filmRhythmClass(filmMeta.rhythm),
        filmMeta && `film-personality-${filmMeta.sense}`,
        separator && filmTransition !== "none" && "section-separator",
        separator && film && filmTransitionClasses[filmTransition],
        atmosphere ? "bg-black" : toneClasses[tone],
        !fullWidth && spacingClasses[spacing],
        !fullWidth && "section-padding",
        className
      )}
      {...filmAttrs}
      {...aria}
    >
      {atmosphere ? (
        <Atmosphere variant={atmosphere} />
      ) : (
        <NobleSurface intensity="section" />
      )}
      {filmMeta ? (
        <div className="film-section-aura pointer-events-none absolute inset-0" aria-hidden />
      ) : null}
      <div className={cn("relative z-[1]", innerClassName)}>{children}</div>
    </section>
  );
}
