"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  isSamePageHref,
  parseHashId,
  scrollToAnchor,
} from "@/lib/anchor-scroll";

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

  const handleAnchorClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    const id = parseHashId(href);
    if (!id || !isSamePageHref(href)) return;

    event.preventDefault();
    window.history.replaceState(null, "", `#${id}`);
    window.requestAnimationFrame(() => {
      window.setTimeout(() => scrollToAnchor(id), 40);
    });
  };

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

  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes} onClick={handleAnchorClick}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={handleAnchorClick}>
      {inner}
    </Link>
  );
}

/** Bouton submit formulaire — mêmes interactions */
export function PremiumButtonSubmit({
  children,
  className,
  disabled,
}: {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={cn(
        "premium-btn premium-btn-primary w-full md:w-auto",
        disabled && "pointer-events-none opacity-50",
        className
      )}
    >
      <span className="premium-btn-label">{children}</span>
    </button>
  );
}
