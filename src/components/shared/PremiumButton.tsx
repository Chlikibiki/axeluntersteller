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
    "inline-flex items-center justify-center px-10 py-4 text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300";

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
