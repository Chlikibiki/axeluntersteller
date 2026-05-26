"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface PremiumButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
  /** Respiration très légère au repos (hero uniquement) */
  breathe?: boolean;
}

export function PremiumButton({
  href,
  children,
  variant = "primary",
  className,
  external,
  breathe = false,
}: PremiumButtonProps) {
  const classes = cn(
    "premium-btn",
    variant === "primary" && "premium-btn-primary",
    variant === "secondary" && "premium-btn-secondary",
    variant === "ghost" && "premium-btn-ghost",
    breathe && "premium-btn-breathe",
    className
  );

  const inner = <span className="premium-btn-label">{children}</span>;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}

/** Bouton submit formulaire — mêmes interactions */
export function PremiumButtonSubmit({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button type="submit" className={cn("premium-btn premium-btn-primary w-full md:w-auto", className)}>
      <span className="premium-btn-label">{children}</span>
    </button>
  );
}
