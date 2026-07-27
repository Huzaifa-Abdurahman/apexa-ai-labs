"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => (
    <div ref={ref} className={cn("z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.08)]", className)}>
      {children}
    </div>
  )
);
Circle.displayName = "Circle";

export default function AnimatedBeamMultipleOutputDemo({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);

  return (
    <div className={cn("relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background p-10", className)} ref={containerRef}>
      <div className="flex h-full w-full flex-row items-stretch justify-between gap-10 max-w-lg">
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <span className="text-xl">👤</span>
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div2Ref} className="size-16">
             <span className="text-2xl">🤖</span>
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div3Ref}>
            <span className="text-xl">✉️</span>
          </Circle>
        </div>
      </div>
      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div2Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div3Ref} />
    </div>
  );
}
