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
      {/* Phase I — Matière & temps */}
      <Hero />
      <Trust />
      <FilmBridge bridge="time" />

      {/* Climax phase I — le geste */}
      <SignatureMoment />
      <FilmBridge bridge="hand" />

      {/* Phase II — Maîtrise & rareté */}
      <PartnerTrust />
      <ManufacturingExamples />
      <Capabilities />

      {/* Phase III — Atelier intérieur */}
      <FilmBridge bridge="rarity" />
      <Craftsmanship />
      <Philosophy />
      <Process />

      {/* Phase IV — Résonance & seuil */}
      <Testimonials />
      <FinalCTA />
    </FilmJourney>
  );
}
