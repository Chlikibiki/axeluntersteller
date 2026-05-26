"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "span";
  once?: boolean;
}

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  once = true,
}: RevealProps) {
  const Component = motion[as];

  return (
    <Component
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </Component>
  );
}
