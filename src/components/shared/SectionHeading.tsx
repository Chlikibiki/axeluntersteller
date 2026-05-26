import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = "left",
  dark = true,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label ? <p className="label-caps type-stack-title">{label}</p> : null}
      <h2
        className={cn(
          "heading-lg",
          dark ? "text-starlight-cream" : "text-starlight-bg"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="body-editorial type-stack-body text-balance">{description}</p>
      )}
    </Reveal>
  );
}
