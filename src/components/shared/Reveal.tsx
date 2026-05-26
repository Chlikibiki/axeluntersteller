"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealPace = "default" | "slow" | "fade";

const paceConfig: Record<
  RevealPace,
  { y: number; duration: number; opacityFrom: number }
> = {
  default: { y: 28, duration: 1.05, opacityFrom: 0 },
  slow: { y: 20, duration: 1.45, opacityFrom: 0 },
  fade: { y: 8, duration: 1.65, opacityFrom: 0 },
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
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={{
        hidden: { opacity: opacityFrom, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
      {children}
    </Component>
  );
}
