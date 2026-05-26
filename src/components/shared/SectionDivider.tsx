import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
  label?: string;
}

export function SectionDivider({ className, label }: SectionDividerProps) {
  return (
    <div
      className={cn(
        "section-padding flex items-center gap-6 py-6 md:py-8",
        className
      )}
      aria-hidden={!label}
    >
      <span className="divider-leather h-px flex-1" />
      {label && <span className="label-caps shrink-0 text-starlight-muted">{label}</span>}
      <span className="divider-leather h-px flex-1" />
    </div>
  );
}
