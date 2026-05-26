"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface PremiumButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
}

export function PremiumButton({
  href,
  children,
  variant = "primary",
  className,
  external,
}: PremiumButtonProps) {
  const base =
    "inline-flex items-center justify-center px-8 py-3.5 text-[0.625rem] font-medium uppercase tracking-[0.22em] transition-all duration-500 md:px-10 md:py-4 md:text-xs md:tracking-[0.2em]";

  const variants = {
    primary: "bg-starlight-cream text-black hover:bg-white",
    secondary:
      "border border-starlight-border-strong text-starlight-cream hover:border-starlight-cream",
    ghost: "text-starlight-cream hover:text-white",
  };

  const classes = cn(base, variants[variant], className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
