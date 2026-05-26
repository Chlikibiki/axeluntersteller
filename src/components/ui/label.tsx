import * as React from "react";
import { cn } from "@/lib/utils";

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "label-caps mb-2 block text-starlight-metal",
        className
      )}
      {...props}
    />
  );
}

export { Label };
