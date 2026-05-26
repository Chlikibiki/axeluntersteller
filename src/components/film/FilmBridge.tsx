import {
  FILM_BRIDGES,
  FILM_MARKER,
  type FilmBridgeId,
  filmRhythmClass,
} from "@/lib/film-narrative";
import { cn } from "@/lib/utils";

interface FilmBridgeProps {
  bridge: FilmBridgeId;
  className?: string;
}

/**
 * Pont de respiration entre phases : silence, contemplation.
 */
export function FilmBridge({ bridge: bridgeId, className }: FilmBridgeProps) {
  const bridge = FILM_BRIDGES[bridgeId];

  return (
    <section
      className={cn(
        "film-bridge section-separator relative overflow-hidden bg-black",
        filmRhythmClass(bridge.rhythm),
        className
      )}
      data-film-bridge={bridge.id}
      data-film-act={bridge.act}
      aria-label={bridge.line}
    >
      <div className="film-bridge-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="section-padding relative z-[1] flex min-h-[30dvh] flex-col items-center justify-center py-20 text-center md:min-h-[42dvh] md:py-28">
        <p className="film-bridge-act">
          {FILM_MARKER} {bridge.act}
        </p>
        <p className="film-bridge-line mt-6 md:mt-8">{bridge.line}</p>
        <p className="film-bridge-whisper mt-5 max-w-sm text-pretty">
          {bridge.whisper}
        </p>
      </div>
    </section>
  );
}
