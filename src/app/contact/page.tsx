import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE, SECTION_COPY, META_DESCRIPTION, UI } from "@/lib/constants";
import { CONTACT_HERO_IMAGE } from "@/lib/images";
import { InquiryForm } from "@/components/shared/InquiryForm";
import { PremiumButton } from "@/components/shared/PremiumButton";
import { Grain } from "@/components/shared/Grain";
import { Reveal } from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: UI.contact.pageTitle,
  description: META_DESCRIPTION,
};

export default function ContactPage() {
  return (
    <>
      <section className="relative min-h-[55vh] overflow-hidden bg-black pt-28 md:pt-32">
        <div className="absolute inset-0">
          <Image
            src={CONTACT_HERO_IMAGE}
            alt={UI.contact.heroAlt}
            fill
            priority
            className="hero-image-cinematic object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
          <Grain />
        </div>
        <div className="relative z-10 section-padding pb-16 pt-8 md:pb-20">
          <h1 className="heading-display max-w-4xl text-starlight-cream">
            {SECTION_COPY.contact.title}
          </h1>
          <p className="body-editorial prose-measure type-stack-body">
            {SECTION_COPY.contact.body}
          </p>
        </div>
      </section>

      <section
        id="contact-form"
        className="section-padding section-y bg-starlight-bg section-separator"
      >
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <h2 className="heading-md text-starlight-cream">
              {SECTION_COPY.contact.subtitle}
            </h2>
            <p className="body-premium type-stack-body text-starlight-muted">
              {SITE.legalName} · {UI.contact.since} {SITE.established}
            </p>

            <ul className="mt-14 space-y-10">
              <li className="flex gap-4">
                <MapPin
                  className="mt-1 shrink-0 text-starlight-muted"
                  size={18}
                  strokeWidth={1}
                />
                <address className="not-italic body-premium text-starlight-metal">
                  <span className="block text-starlight-cream">
                    {SITE.address.street}
                  </span>
                  {SITE.address.postal} {SITE.address.city},{" "}
                  {SITE.address.country}
                </address>
              </li>
              <li className="flex gap-4">
                <Mail
                  className="mt-1 shrink-0 text-starlight-muted"
                  size={18}
                  strokeWidth={1}
                />
                <a
                  href={`mailto:${SITE.email}`}
                  className="body-premium text-starlight-cream hover:text-white"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex gap-4">
                <Phone
                  className="mt-1 shrink-0 text-starlight-muted"
                  size={18}
                  strokeWidth={1}
                />
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="body-premium text-starlight-cream hover:text-white"
                >
                  {SITE.phone}
                </a>
              </li>
            </ul>

            <div className="mt-14">
              <PremiumButton href="#contact-form" variant="secondary">
                {SECTION_COPY.cta.email}
              </PremiumButton>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="border border-starlight-border bg-starlight-surface p-8 md:p-12">
              <InquiryForm variant="full" showFileUpload />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
