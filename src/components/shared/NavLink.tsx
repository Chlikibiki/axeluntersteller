"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
  variant?: "desktop" | "mobile";
}

export function NavLink({
  href,
  children,
  active = false,
  onClick,
  className,
  variant = "desktop",
}: NavLinkProps) {
  if (variant === "mobile") {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          "nav-link-mobile transition-[color,transform,opacity] duration-[900ms] ease-[var(--ease-premium)]",
          active
            ? "translate-x-1 text-starlight-cream"
            : "text-starlight-cream/75 hover:translate-x-0.5 hover:text-starlight-cream",
          className
        )}
      >
        <span className="relative inline-block">
          {active ? (
            <span
              className="absolute -left-4 top-1/2 h-px w-2 -translate-y-1/2 bg-starlight-amber/70"
              aria-hidden
            />
          ) : null}
          {children}
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      data-active={active ? "true" : undefined}
      className={cn(
        "nav-link text-sm uppercase tracking-[0.15em] transition-[color,opacity] duration-[800ms] ease-[var(--ease-premium)]",
        active
          ? "nav-link-active text-starlight-cream"
          : "text-starlight-metal hover:text-starlight-cream/90",
        className
      )}
    >
      {children}
    </Link>
  );
}
