import { PROCESS_STEPS, SECTION_COPY } from "@/lib/constants";
import { Reveal } from "@/components/shared/Reveal";
import { SectionShell } from "@/components/shared/SectionShell";

export function Process() {
  return (
    <SectionShell
      id="process"
      atmosphere="depth"
      spacing="tight"
      aria-labelledby="process-heading"
    >
      <Reveal pace="slow">
        <p className="eyebrow mb-3">Méthode</p>
        <h2
          id="process-heading"
          className="heading-lg max-w-2xl text-starlight-cream"
        >
          {SECTION_COPY.process.title}
        </h2>
        <p className="m-impact mt-4 md:hidden">Simple, lent, sans détour.</p>
        <p className="body-large mt-4 hidden max-w-xl md:block">
          {SECTION_COPY.process.body}
        </p>
      </Reveal>

      <ol className="mt-8 border-t border-starlight-border md:mt-16" data-cine-stagger>
        {PROCESS_STEPS.map((step) => (
          <li
            key={step.step}
            data-cine-stagger-item
            className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-starlight-border py-6 opacity-0 md:grid-cols-12 md:items-baseline md:gap-6 md:py-10"
          >
            <span className="font-display text-2xl font-extralight text-starlight-muted md:col-span-2 md:text-4xl">
              {step.step}
            </span>
            <div className="md:col-span-10 md:grid md:grid-cols-10 md:gap-6">
              <h3 className="font-display text-lg font-extralight text-starlight-cream md:col-span-3 md:text-2xl">
                {step.title}
              </h3>
              <p className="body-premium mt-1 md:col-span-7 md:mt-0">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
