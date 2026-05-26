import { PROCESS_STEPS, SECTION_COPY } from "@/lib/constants";
import { Reveal } from "@/components/shared/Reveal";
import { SectionShell } from "@/components/shared/SectionShell";

export function Process() {
  return (
    <SectionShell
      id="process"
      spacing="spacious"
      aria-labelledby="process-heading"
    >
      <Reveal>
        <h2
          id="process-heading"
          className="heading-lg max-w-2xl text-starlight-cream"
        >
          {SECTION_COPY.process.title}
        </h2>
        <p className="body-large mt-8 max-w-xl">{SECTION_COPY.process.body}</p>
      </Reveal>

      <ol className="mt-20 divide-y divide-starlight-border border-t border-starlight-border md:mt-28">
        {PROCESS_STEPS.map((step, i) => (
          <Reveal key={step.step} delay={i * 0.05}>
            <li className="grid gap-4 py-10 md:grid-cols-12 md:items-baseline md:py-14">
              <span className="font-display text-3xl font-extralight text-starlight-muted md:col-span-2 md:text-4xl">
                {step.step}
              </span>
              <h3 className="font-display text-xl font-extralight text-starlight-cream md:col-span-3 md:text-2xl">
                {step.title}
              </h3>
              <p className="body-premium md:col-span-7">{step.description}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </SectionShell>
  );
}
