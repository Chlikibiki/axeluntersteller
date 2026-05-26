import Link from "next/link";
import { NAV_LINKS, SITE, SECTION_COPY } from "@/lib/constants";
import { Logo } from "@/components/shared/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-starlight-border/50 film-footer">
      <div
        className="pointer-events-none absolute inset-0 leather-whisper opacity-20"
        aria-hidden
      />

      <div className="section-padding relative z-[1] py-14 md:py-32">
        <div className="border-b border-starlight-border/40 pb-10 md:pb-20">
          <p className="font-display text-[1.35rem] font-extralight leading-[1.1] tracking-[-0.03em] text-starlight-cream/90 md:text-[clamp(1.75rem,5vw,3.5rem)] md:leading-[1.05]">
            {SECTION_COPY.footer.tagline}
          </p>
        </div>

        <div className="mt-10 grid gap-10 md:mt-20 md:grid-cols-2 md:gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo size="lg" />
            <p className="body-premium mt-6 max-w-sm text-starlight-metal/90 md:body-large md:mt-8">
              {SECTION_COPY.footer.body}
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <p className="label-caps mb-4">{SECTION_COPY.footer.navigation}</p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-starlight-metal transition-colors duration-500 hover:text-starlight-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="label-caps mb-4">{SECTION_COPY.footer.contact}</p>
            <address className="space-y-1.5 text-sm font-light not-italic leading-relaxed text-starlight-metal">
              <p>{SITE.address.street}</p>
              <p>
                {SITE.address.postal} {SITE.address.city}
              </p>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-3 inline-block text-starlight-cream/90 transition-colors duration-500 hover:text-starlight-cream"
              >
                {SITE.email}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-starlight-border/30 pt-6 md:mt-20 md:pt-8">
          <p className="text-[0.65rem] font-light tracking-wide text-starlight-muted/75">
            © {year} {SITE.legalName}. {SECTION_COPY.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
