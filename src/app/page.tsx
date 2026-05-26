import { Hero } from "@/components/home/Hero";
import { Trust } from "@/components/home/Trust";
import { SignatureMoment } from "@/components/home/SignatureMoment";
import { PartnerTrust } from "@/components/home/PartnerTrust";
import { ManufacturingExamples } from "@/components/home/ManufacturingExamples";
import { Capabilities } from "@/components/home/Capabilities";
import { Craftsmanship } from "@/components/home/Craftsmanship";
import { Philosophy } from "@/components/home/Philosophy";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";
import { FilmBridge, FilmJourney } from "@/components/film";

export default function HomePage() {
  return (
    <FilmJourney>
      {/* Plan I — Matière & temps */}
      <Hero />
      <Trust />
      <FilmBridge bridge="time" />

      {/* Climax plan I — la main */}
      <SignatureMoment />
      <FilmBridge bridge="hand" />

      {/* Plan II — Maîtrise & rareté */}
      <PartnerTrust />
      <ManufacturingExamples />
      <Capabilities />

      {/* Plan III — Atelier intérieur */}
      <FilmBridge bridge="rarity" />
      <Craftsmanship />
      <Philosophy />
      <Process />

      {/* Plan IV — Résonance & seuil */}
      <Testimonials />
      <FinalCTA />
    </FilmJourney>
  );
}
