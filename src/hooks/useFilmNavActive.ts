"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

const HOME_SECTIONS = [
  "manufacture",
  "products",
  "process",
  "materials",
  "atelier",
  "partners",
] as const;

export function useFilmNavActive() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const elements = HOME_SECTIONS.map((id) => document.getElementById(id)).filter(
      Boolean
    ) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-32% 0px -52% 0px", threshold: [0, 0.15, 0.35] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  const isLinkActive = useCallback(
    (href: string) => {
      if (href === "/contact") return pathname === "/contact";
      if (href.startsWith("/#")) {
        const id = href.slice(2);
        return pathname === "/" && activeSection === id;
      }
      return pathname === href;
    },
    [pathname, activeSection]
  );

  return { isLinkActive, pathname };
}
