"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, HERO_COPY, UI } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { PremiumButton } from "@/components/shared/PremiumButton";
import { Logo } from "@/components/shared/Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-starlight-border bg-black/80 py-5 backdrop-blur-md"
            : "bg-transparent py-5 md:py-10"
        )}
      >
        <div className="section-padding flex items-center justify-between">
          <Logo size="md" priority />

          <nav
            className="hidden items-center gap-10 lg:flex"
            aria-label={UI.aria.mainNav}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-underline text-sm uppercase tracking-[0.15em] text-starlight-metal transition-colors hover:text-starlight-cream"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <PremiumButton href="/contact" variant="secondary">
              {HERO_COPY.ctaPrimary}
            </PremiumButton>
          </div>

          <button
            type="button"
            className="flex size-10 items-center justify-center text-starlight-cream lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? UI.aria.closeMenu : UI.aria.openMenu}
          >
            {menuOpen ? <X size={20} strokeWidth={1} /> : <Menu size={20} strokeWidth={1} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col bg-black lg:hidden"
          >
            <div className="flex flex-1 flex-col justify-center gap-8 section-padding pt-24">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-3xl font-extralight text-starlight-cream"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div onClick={() => setMenuOpen(false)} className="mt-8">
                <PremiumButton href="/contact" className="w-full max-w-xs">
                  {HERO_COPY.ctaPrimary}
                </PremiumButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
