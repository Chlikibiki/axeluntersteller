"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, HERO_COPY, UI } from "@/lib/constants";
import { useFilmNavActive } from "@/hooks/useFilmNavActive";
import { cn } from "@/lib/utils";
import { PremiumButton } from "@/components/shared/PremiumButton";
import { NavLink } from "@/components/shared/NavLink";
import { Logo } from "@/components/shared/Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLinkActive } = useFilmNavActive();

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
          "fixed top-0 right-0 left-0 z-50 transition-[background-color,border-color,padding,backdrop-filter] duration-[900ms] ease-[var(--ease-premium)]",
          scrolled
            ? "border-b border-starlight-border/40 bg-black/70 py-5 backdrop-blur-sm"
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
              <NavLink
                key={link.href}
                href={link.href}
                active={isLinkActive(link.href)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <PremiumButton href="/contact" variant="secondary">
              {HERO_COPY.ctaPrimary}
            </PremiumButton>
          </div>

          <button
            type="button"
            className="icon-btn-luxe flex size-10 items-center justify-center border border-transparent text-starlight-cream transition-colors hover:border-starlight-border/60 lg:hidden"
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
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-black lg:hidden"
          >
            <div className="flex flex-1 flex-col justify-center gap-8 section-padding pt-24">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.06,
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <NavLink
                    href={link.href}
                    variant="mobile"
                    active={isLinkActive(link.href)}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
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
