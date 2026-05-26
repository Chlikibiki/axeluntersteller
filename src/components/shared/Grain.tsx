/** Vignette photographique légère — pas de grain digital */
export function Grain({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`image-vignette pointer-events-none absolute inset-0 z-10 ${className ?? ""}`}
    />
  );
}
