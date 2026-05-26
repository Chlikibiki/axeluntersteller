import Image from "next/image";
import { MATERIALS_GALLERY, SECTION_COPY } from "@/lib/constants";
import { Reveal } from "@/components/shared/Reveal";
import { SectionShell } from "@/components/shared/SectionShell";

export function Materials() {
  const copy = SECTION_COPY.materials;

  return (
    <SectionShell
      id="materials"
      film="materials"
      filmTransition="soft"
      atmosphere="ink"
      spacing="editorial"
      aria-labelledby="materials-heading"
    >
      <Reveal pace="fade">
        <p className="eyebrow">{copy.label}</p>
        <h2
          id="materials-heading"
          className="heading-lg mt-4 max-w-2xl text-starlight-cream"
        >
          {copy.title}
        </h2>
        <p className="body-editorial prose-measure mt-5 max-w-xl text-starlight-metal/88">
          {copy.body}
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-2 md:mt-14 md:grid-cols-3 md:gap-3">
        {MATERIALS_GALLERY.map((item, index) => (
          <Reveal
            key={item.src}
            pace="fade"
            delay={index * 0.05}
            className={
              index === 0
                ? "col-span-2 row-span-2 aspect-square md:col-span-2 md:row-span-2"
                : "aspect-square"
            }
          >
            <figure className="group relative h-full w-full overflow-hidden bg-black">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover object-center transition-transform duration-[2s] ease-[var(--ease-premium)] group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-black/20 transition-opacity duration-700 group-hover:bg-black/10"
                aria-hidden
              />
              <figcaption className="absolute bottom-0 left-0 px-4 pb-3">
                <span className="text-[0.65rem] font-light uppercase tracking-[0.18em] text-starlight-cream/75">
                  {item.label}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
