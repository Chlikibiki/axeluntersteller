import { Hero } from "@/components/home/Hero";
import { Manufacture } from "@/components/home/Manufacture";
import { Capabilities } from "@/components/home/Capabilities";
import { Process } from "@/components/home/Process";
import { Materials } from "@/components/home/Materials";
import { Atelier } from "@/components/home/Atelier";
import { PartnerTrust } from "@/components/home/PartnerTrust";
import { FinalCTA } from "@/components/home/FinalCTA";
import { FilmJourney } from "@/components/film";

export default function HomePage() {
  return (
    <FilmJourney>
      <Hero />
      <Manufacture />
      <Capabilities />
      <Process />
      <Materials />
      <Atelier />
      <PartnerTrust />
      <FinalCTA />
    </FilmJourney>
  );
}
