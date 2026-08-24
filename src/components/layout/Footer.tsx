import Link from "next/link";
import { NAV_LINKS, SITE, SECTION_COPY, HERO_COPY } from "@/lib/constants";
import { Logo } from "@/components/shared/Logo";
import { NobleSurface } from "@/components/shared/NobleSurface";
import { PremiumButton } from "@/components/shared/PremiumButton";

export function Footer() {
  const year = new Date().getFullYear();
  const { footer: copy } = SECTION_COPY;

  const contactBlock = (
    <>
      <p className="label-caps mb-5 text-starlight-muted/85">{copy.contact}</p>
      <address className="space-y-3 text-sm font-light not-italic leading-[1.7] text-starlight-metal md:text-base">
        <p>
          <span className="text-starlight-muted/85">Responsable :</span>
          <br />
          <span className="text-starlight-cream/90">{copy.contactManager}</span>
        </p>
        <p>
          <span className="text-starlight-muted/85">Adresse :</span>
          <br />
          <span className="text-starlight-cream/90">{copy.contactAddress}</span>
        </p>
        <p>
          <span className="text-starlight-muted/85">Email :</span>
          <br />
          <a
            href={`mailto:${SITE.email}`}
            className="text-starlight-cream/90"
          >
            {SITE.email}
          </a>
        </p>
      </address>
    </>
  );

  return (
    <footer
      className="film-fin relative overflow-hidden bg-black"
      aria-labelledby="footer-closing"
    >
      <div className="film-fin-horizon pointer-events-none absolute inset-x-0 top-0 z-[1]" aria-hidden />
      <div className="film-fin-glow pointer-events-none absolute inset-0 z-[1]" aria-hidden />
      <div className="film-fin-vignette pointer-events-none absolute inset-0 z-[2]" aria-hidden />
      <div className="film-fin-grain pointer-events-none absolute inset-0 z-[3]" aria-hidden />
      <NobleSurface intensity="section" className="z-[4] opacity-95" />

      <div className="section-padding relative z-10">
        {/* Scène finale — phrase & respiration */}
        <div
          className="film-fin-prologue"
          data-cine-reveal
          data-cine-y="24"
          data-cine-start="top 92%"
        >
          <p className="label-caps text-starlight-muted/80">{copy.act}</p>
          <h2
            id="footer-closing"
            className="film-fin-closing heading-monument mt-8 max-w-4xl text-starlight-cream md:mt-10"
          >
            {copy.closing}
          </h2>
          <p className="film-fin-subline label-caps mt-6 text-starlight-muted/90 md:mt-8">
            {copy.subline}
          </p>
        </div>

        <div className="film-fin-divider" aria-hidden />

        {/* Composition éditoriale */}
        <div
          className="film-fin-grid"
          data-cine-reveal
          data-cine-y="20"
          data-cine-start="top 94%"
        >
          {/* Desktop : brand + navigation + contact */}
          <div className="film-fin-brand hidden lg:block lg:col-span-5">
            <Logo size="lg" />
            <p className="body-editorial prose-measure mt-8 text-starlight-metal/90 md:mt-10">
              {copy.body}
            </p>
            <div className="mt-10 md:mt-12">
              <PremiumButton href="#contact-form" variant="secondary">
                {HERO_COPY.ctaPrimary}
              </PremiumButton>
            </div>
          </div>

          <nav className="hidden lg:block">
            <div className="film-fin-nav lg:col-span-3 lg:col-start-7" aria-label={copy.navigation}>
              <p className="label-caps mb-5 text-starlight-muted/85">{copy.navigation}</p>
              <ul className="space-y-3.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="link-premium text-sm font-light text-starlight-metal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="hidden lg:block film-fin-contact lg:col-span-3">
            {contactBlock}
          </div>

          {/* Mobile : 2 colonnes Navigation / Contact */}
          <div className="lg:hidden col-span-12 grid grid-cols-2 gap-x-10 gap-y-10">
            <nav aria-label={copy.navigation}>
              <p className="label-caps mb-5 text-starlight-muted/85">{copy.navigation}</p>
              <ul className="space-y-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="link-premium text-base font-light text-starlight-metal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>{contactBlock}</div>
          </div>
        </div>

        {/* Générique */}
        <div
          className="film-fin-credits text-center"
          data-cine-reveal
          data-cine-y="12"
          data-cine-start="top 96%"
        >
          <p className="film-fin-legal mt-4 md:mt-0">
            © {year} {SITE.legalName}. {copy.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
