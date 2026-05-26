import { cn } from "@/lib/utils";
import { Grain } from "./Grain";

interface EditorialFrameProps {
  children: React.ReactNode;
  className?: string;
  inset?: boolean;
  accent?: boolean;
}

/** Cadre éditorial — bordure fine, lueur cuir, finition lumière */
export function EditorialFrame({
  children,
  className,
  inset = false,
  accent = false,
}: EditorialFrameProps) {
  return (
    <div
      className={cn(
        "editorial-frame relative overflow-hidden bg-starlight-elevated",
        inset && "editorial-frame-inset",
        accent && "editorial-frame-accent",
        className
      )}
    >
      {children}
      <div className="editorial-frame-glow" aria-hidden />
      <Grain />
    </div>
  );
}
