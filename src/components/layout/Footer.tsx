import Link from "next/link";
import { NAV_LINKS, SITE, SECTION_COPY } from "@/lib/constants";
import { Logo } from "@/components/shared/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-starlight-border bg-black">
      <div className="section-padding section-y">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="lg:col-span-2">
            <Logo size="lg" />
            <p className="body-large mt-8 max-w-sm text-starlight-metal">
              {SECTION_COPY.footer.body}
            </p>
          </div>

          <div>
            <p className="label-caps mb-6">{SECTION_COPY.footer.navigation}</p>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base font-light text-starlight-metal transition-colors hover:text-starlight-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-caps mb-6">{SECTION_COPY.footer.contact}</p>
            <address className="not-italic space-y-3 body-premium text-starlight-metal">
              <p>{SITE.address.street}</p>
              <p>
                {SITE.address.postal} {SITE.address.city}
              </p>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-4 block text-starlight-cream hover:text-white"
              >
                {SITE.email}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-starlight-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-light text-starlight-muted">
            © {year} {SITE.legalName}. {SECTION_COPY.footer.rights}
          </p>
          <p className="label-caps">{SECTION_COPY.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
