import Link from "next/link";
import { NAV_LINKS, SITE, SECTION_COPY, HERO_COPY } from "@/lib/constants";
import { Logo } from "@/components/shared/Logo";
import { NobleSurface } from "@/components/shared/NobleSurface";
import { PremiumButton } from "@/components/shared/PremiumButton";

export function Footer() {
  const year = SITE.copyrightYear;
  const { footer: copy } = SECTION_COPY;

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

        <div
          className="film-fin-grid"
          data-cine-reveal
          data-cine-y="20"
          data-cine-start="top 94%"
        >
          <div className="film-fin-brand min-w-0">
            <Logo size="lg" />
            <p className="body-editorial mt-8 max-w-xl text-starlight-metal/90 md:mt-10">
              {copy.body}
            </p>
            <div className="mt-10 md:mt-12">
              <PremiumButton href="#contact-form" variant="secondary">
                {HERO_COPY.ctaPrimary}
              </PremiumButton>
            </div>
          </div>

          <nav className="film-fin-nav min-w-0" aria-label={copy.navigation}>
            <p className="label-caps mb-5 text-starlight-muted/85">
              {copy.navigation}
            </p>
            <ul className="space-y-3.5 md:space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-premium text-base font-light text-starlight-metal lg:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="film-fin-contact min-w-0">
            <p className="label-caps mb-5 text-starlight-muted/85">
              {copy.contact}
            </p>
            <address className="space-y-4 text-sm font-light not-italic leading-[1.7] text-starlight-metal md:text-base lg:space-y-3.5">
              <p>
                <span className="text-starlight-muted/85">Responsable :</span>
                <br />
                <span className="text-starlight-cream/90">
                  {copy.contactManager}
                </span>
              </p>
              <p>
                <span className="text-starlight-muted/85">Adresse :</span>
                <br />
                <span className="text-starlight-cream/90">
                  {copy.contactAddress}
                </span>
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
              <p className="pt-1">
                <span className="label-caps text-starlight-muted/85">
                  {SITE.europePartner.role}
                </span>
                <br />
                <span className="mt-1 inline-block text-starlight-cream/90 lg:whitespace-nowrap">
                  {SITE.europePartner.name}
                </span>
                <br />
                <a
                  href={SITE.europePartner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-0.5 inline-block whitespace-nowrap text-starlight-cream/90"
                >
                  www.gerald-jakoby.de
                </a>
              </p>
            </address>
          </div>
        </div>

        <div
          className="film-fin-credits text-center"
          data-cine-reveal
          data-cine-y="12"
          data-cine-start="top 96%"
        >
          <p className="film-fin-legal mt-4 md:mt-0">
            © {year} {SITE.legalName}. {copy.rights}
          </p>
          <p className="mt-3 text-[0.7rem] font-light tracking-[0.065em] text-starlight-muted/45 md:mt-0 md:text-[0.75rem]">
            Site conçu par{" "}
            <a
              href="https://ikibi.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-700 hover:opacity-80"
            >
              IKIBI
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
