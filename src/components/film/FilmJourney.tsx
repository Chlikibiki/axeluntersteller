import { cn } from "@/lib/utils";

interface FilmJourneyProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Conteneur narratif : enchaîne les sections comme des plans d'un film.
 */
export function FilmJourney({ children, className }: FilmJourneyProps) {
  return (
    <div
      className={cn("film-journey relative", className)}
      data-film-journey
      aria-label="Parcours Starlight"
    >
      {children}
    </div>
  );
}
