"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";

type RevealPace = "default" | "slow" | "fade" | "material" | "silence";

const paceConfig: Record<
  RevealPace,
  { y: number; duration: number; opacityFrom: number; ease: readonly number[] }
> = {
  default: { y: 20, duration: 1.35, opacityFrom: 0, ease: EASE.out },
  slow: { y: 16, duration: 1.75, opacityFrom: 0, ease: EASE.out },
  fade: { y: 8, duration: 2, opacityFrom: 0, ease: EASE.silence },
  material: { y: 28, duration: 2.1, opacityFrom: 0, ease: EASE.out },
  silence: { y: 6, duration: 2.4, opacityFrom: 0, ease: EASE.silence },
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
  pace = "slow",
  as = "div",
  once = true,
}: RevealProps) {
  const Component = motion[as];
  const { y, duration, opacityFrom, ease } = paceConfig[pace];

  return (
    <Component
      className={cn("gpu-layer", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-12% 0px", amount: 0.08 }}
      variants={{
        hidden: { opacity: opacityFrom, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            delay,
            ease: ease as [number, number, number, number],
          },
        },
      }}
    >
      {children}
    </Component>
  );
}
