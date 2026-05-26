import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-12 w-full min-w-0 border border-starlight-border bg-transparent px-4 text-sm text-starlight-cream transition-colors outline-none placeholder:text-starlight-muted focus-visible:border-starlight-leather focus-visible:ring-1 focus-visible:ring-starlight-leather/30 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Input };
