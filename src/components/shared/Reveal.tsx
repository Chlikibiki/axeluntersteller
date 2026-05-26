"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";

type RevealPace = "default" | "slow" | "fade" | "material";

const paceConfig: Record<
  RevealPace,
  { y: number; duration: number; opacityFrom: number }
> = {
  default: { y: 28, duration: 1.15, opacityFrom: 0 },
  slow: { y: 22, duration: 1.55, opacityFrom: 0 },
  fade: { y: 10, duration: 1.75, opacityFrom: 0 },
  material: { y: 36, duration: 1.85, opacityFrom: 0 },
};

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  pace?: RevealPace;
  as?: "div" | "section" | "article" | "span";
  once?: boolean;
}

export function Reveal({
  children,
  className,
  delay = 0,
  pace = "default",
  as = "div",
  once = true,
}: RevealProps) {
  const Component = motion[as];
  const { y, duration, opacityFrom } = paceConfig[pace];

  return (
    <Component
      className={cn("gpu-layer", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px", amount: 0.12 }}
      variants={{
        hidden: { opacity: opacityFrom, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            delay,
            ease: EASE.out,
          },
        },
      }}
    >
      {children}
    </Component>
  );
}
