"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface CounterMetricProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export function CounterMetric({
  value,
  suffix = "",
  duration = 2200,
  className,
}: CounterMetricProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;
        observer.disconnect();

        let start: number | null = null;

        const tick = (timestamp: number) => {
          if (start === null) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          setDisplay(Math.round(easeOutExpo(progress) * value));
          if (progress < 1) {
            raf = requestAnimationFrame(tick);
          }
        };

        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span
      ref={ref}
      className={cn("tabular-nums", className)}
      aria-label={`${value}${suffix}`}
    >
      {display}
      {suffix}
    </span>
  );
}
