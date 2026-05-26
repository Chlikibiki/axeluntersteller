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
      {label ? <p className="label-caps mb-4">{label}</p> : null}
      <h2
        className={cn(
          "heading-lg text-balance",
          dark ? "text-starlight-cream" : "text-starlight-bg"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="body-premium mt-5 max-w-xl text-balance">{description}</p>
      )}
    </Reveal>
  );
}
