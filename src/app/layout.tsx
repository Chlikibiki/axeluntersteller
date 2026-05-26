import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { defaultMetadata, organizationSchema, localBusinessSchema } from "@/lib/metadata";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageLoader } from "@/components/layout/PageLoader";
import { NobleSurface } from "@/components/shared/NobleSurface";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${outfit.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="cinema-experience min-h-screen bg-black font-sans text-starlight-cream">
        <SmoothScroll>
          <PageLoader />
          <Header />
          <main className="relative max-md:overflow-x-clip">
            <NobleSurface intensity="whisper" className="z-0" />
            <div className="relative z-[1]">{children}</div>
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
