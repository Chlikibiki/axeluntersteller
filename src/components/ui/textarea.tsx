import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-[140px] w-full min-w-0 resize-y border border-starlight-border bg-transparent px-4 py-3 text-sm text-starlight-cream transition-[border-color,box-shadow] duration-[800ms] ease-[var(--ease-premium)] outline-none placeholder:text-starlight-muted focus-visible:border-starlight-leather focus-visible:ring-1 focus-visible:ring-starlight-leather/25 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
