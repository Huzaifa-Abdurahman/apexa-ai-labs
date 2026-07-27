"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { AnimatedCircularProgressBar } from "@/components/ui/animated-circular-progress-bar";
import { cn } from "@/lib/utils";

interface StatProgressProps {
  label: string;
  labelAr?: string;
  targetValue: number;
  prefix?: string;
  suffix?: string;
  max?: number;
  color?: string;
  className?: string;
}

export function StatProgress({
  label,
  labelAr,
  targetValue,
  prefix = "",
  suffix = "",
  max = 100,
  color = "rgb(6 182 212)",
  className,
}: StatProgressProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    setValue(0);
    const steps = 28;
    const stepSize = targetValue / steps;
    let current = 0;
    let frame = 0;

    const interval = setInterval(() => {
      frame += 1;
      current = Math.min(targetValue, Math.round(stepSize * frame));
      setValue(current);
      if (current >= targetValue) clearInterval(interval);
    }, 35);

    return () => clearInterval(interval);
  }, [isInView, targetValue]);

  return (
    <div ref={ref} className={cn("flex flex-col items-center gap-2", className)}>
      <div className="relative">
        <AnimatedCircularProgressBar
          max={max}
          min={0}
          value={value}
          gaugePrimaryColor={color}
          gaugeSecondaryColor="rgba(15, 23, 42, 0.08)"
          className="!size-24 text-transparent sm:!size-28 md:!size-32"
        />
        <div className="absolute inset-0 flex items-center justify-center font-heading text-2xl font-black tabular-nums text-foreground sm:text-3xl">
          <span>
            {prefix}
            {value}
            {suffix}
          </span>
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-heading text-sm font-bold text-foreground sm:text-base">{label}</h3>
        {labelAr ? (
          <p className="font-arabic-ui text-xs font-semibold text-primary" dir="rtl">
            {labelAr}
          </p>
        ) : null}
      </div>
    </div>
  );
}
