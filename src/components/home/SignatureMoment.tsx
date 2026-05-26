"use client";

import Image from "next/image";
import { SIGNATURE_COPY, TRUST_IMAGE, UI } from "@/lib/constants";
import { Atmosphere } from "@/components/shared/Atmosphere";
import { CineMedia } from "@/components/motion/CineMedia";

export function SignatureMoment() {
  return (
    <section
      className="relative min-h-[72dvh] overflow-hidden bg-black md:min-h-[100dvh]"
      aria-labelledby="signature-heading"
    >
      <Atmosphere variant="ember" />

      <CineMedia
        rootClassName="absolute inset-0"
        strength={0.05}
        scaleFrom={1.06}
        scrub={1.5}
      >
        <Image
          src={TRUST_IMAGE}
          alt={UI.images.trustArtisan}
          fill
          className="signature-image object-cover object-[center_40%] md:object-[center_42%]"
          sizes="100vw"
          loading="lazy"
        />
      </CineMedia>

      <div className="signature-image-overlay pointer-events-none absolute inset-0 z-[1]" />
      <div className="cinematic-vignette pointer-events-none absolute inset-0 z-[1]" />

      <div className="relative z-10 flex min-h-[72dvh] flex-col justify-end section-padding pb-12 pt-24 md:min-h-[100dvh] md:pb-28 md:pt-40">
        <div
          data-cine-reveal
          data-cine-y="28"
          data-cine-start="top 88%"
          className="max-w-4xl opacity-0"
        >
          <p className="eyebrow mb-4 md:mb-10">Atelier</p>
          <h2
            id="signature-heading"
            className="heading-monument text-left text-starlight-cream md:text-center"
          >
            <span className="block">{SIGNATURE_COPY.line1}</span>
            <span className="mt-1 block text-starlight-cream/90 md:mt-4">
              {SIGNATURE_COPY.line2}
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}
