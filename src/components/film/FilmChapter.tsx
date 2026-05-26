import {
  FILM_MARKER,
  FILM_SECTIONS,
  type FilmSectionId,
} from "@/lib/film-narrative";
import { cn } from "@/lib/utils";

interface FilmChapterProps {
  section: FilmSectionId;
  className?: string;
  showIntention?: boolean;
}

/**
 * Marqueur de chapitre : phase, titre, intention émotionnelle.
 */
export function FilmChapter({
  section,
  className,
  showIntention = false,
}: FilmChapterProps) {
  const meta = FILM_SECTIONS[section];

  return (
    <header className={cn("film-chapter", className)}>
      <p className="film-chapter-meta label-caps">
        <span>{FILM_MARKER} {meta.act}</span>
        <span className="mx-2 text-starlight-border-strong" aria-hidden>
          ·
        </span>
        <span>{meta.chapter}</span>
        <span className="sr-only"> — {meta.personality}</span>
      </p>
      {showIntention ? (
        <p className="film-chapter-intention">{meta.intention}</p>
      ) : null}
    </header>
  );
}
