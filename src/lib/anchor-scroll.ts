import type Lenis from "lenis";

export const CONTACT_FORM_ID = "contact-form";
export const CONTACT_FORM_HASH = `#${CONTACT_FORM_ID}`;
export const CONTACT_FORM_HREF = `/contact${CONTACT_FORM_HASH}`;

let lenisInstance: Lenis | null = null;

export function setLenisInstance(instance: Lenis | null) {
  lenisInstance = instance;
}

function headerOffsetPx() {
  if (typeof window === "undefined") return 112;
  const header = document.querySelector("header");
  const headerHeight = header?.getBoundingClientRect().height ?? 96;
  const comfortableGap = 28;
  return headerHeight + comfortableGap;
}

export function scrollToAnchor(id: string) {
  if (typeof document === "undefined") return;

  const target = document.getElementById(id);
  if (!target) return;

  const offset = headerOffsetPx();
  const current = lenisInstance?.scroll ?? window.scrollY;
  const top = current + target.getBoundingClientRect().top - offset;

  if (lenisInstance) {
    lenisInstance.scrollTo(top, {
      duration: 1.2,
      lock: true,
    });
    return;
  }

  window.scrollTo({ top, behavior: "smooth" });
}

export function parseHashId(href: string) {
  const index = href.indexOf("#");
  if (index === -1) return null;
  const id = href.slice(index + 1).trim();
  return id || null;
}

export function isSamePageHref(href: string) {
  if (typeof window === "undefined") return false;
  if (href.startsWith("#")) return true;

  try {
    const url = new URL(href, window.location.origin);
    return url.pathname === window.location.pathname;
  } catch {
    return false;
  }
}
