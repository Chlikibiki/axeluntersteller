import type { Metadata } from "next";
import { SITE, SEO_KEYWORDS, META_DESCRIPTION } from "./constants";
import { LOGO } from "./images";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://starlight-leather.com";
const logoPath = LOGO.starlight;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: META_DESCRIPTION,
  keywords: [...SEO_KEYWORDS],
  authors: [{ name: SITE.legalName }],
  creator: SITE.legalName,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: baseUrl,
    siteName: SITE.name,
    title: `${SITE.name}, ${SITE.tagline}`,
    description: META_DESCRIPTION,
    images: [{ url: logoPath, width: 720, height: 320, alt: SITE.legalName }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name}, ${SITE.tagline}`,
    description: META_DESCRIPTION,
    images: [logoPath],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: baseUrl,
    languages: { fr: baseUrl },
  },
  icons: {
    icon: logoPath,
    apple: logoPath,
  },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.legalName,
  alternateName: SITE.name,
  url: baseUrl,
  logo: `${baseUrl}${logoPath}`,
  description: META_DESCRIPTION,
  foundingDate: String(SITE.established),
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postal,
    addressCountry: "DE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: SITE.phone,
    availableLanguage: ["French", "German", "English"],
  },
  areaServed: ["Europe", "Monde"],
  knowsAbout: [
    "Fabrication de cuir",
    "Maroquinerie sur mesure",
    "Marque blanche cuir",
    "Ceintures en cuir",
    "Pochettes en cuir",
  ],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ManufacturingPlant",
  name: SITE.legalName,
  description: META_DESCRIPTION,
  foundingDate: String(SITE.established),
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    postalCode: SITE.address.postal,
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.coordinates.lat,
    longitude: SITE.coordinates.lng,
  },
};
