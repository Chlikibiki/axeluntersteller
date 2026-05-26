import { Hero } from "@/components/home/Hero";
import { Trust } from "@/components/home/Trust";
import { PartnerTrust } from "@/components/home/PartnerTrust";
import { ManufacturingExamples } from "@/components/home/ManufacturingExamples";
import { Capabilities } from "@/components/home/Capabilities";
import { Craftsmanship } from "@/components/home/Craftsmanship";
import { Philosophy } from "@/components/home/Philosophy";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <PartnerTrust />
      <ManufacturingExamples />
      <Capabilities />
      <Craftsmanship />
      <Philosophy />
      <Process />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
