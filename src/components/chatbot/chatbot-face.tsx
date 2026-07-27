"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ChatbotFaceProps = {
  size?: number;
  speaking?: boolean;
  className?: string;
};

/** Animated 3D-style AI face — floating orb with depth, glow, and lively eyes */
export function ChatbotFace({ size = 64, speaking = false, className }: ChatbotFaceProps) {
  const eyeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = eyeRef.current;
    if (!el) return;

    let frame = 0;
    let raf = 0;

    const tick = () => {
      frame += 1;
      const t = frame / 60;
      // Gentle look-around
      const x = Math.sin(t * 0.7) * 3 + Math.sin(t * 1.3) * 1.5;
      const y = Math.cos(t * 0.55) * 2.5;
      el.style.transform = `translate(${x}px, ${y}px)`;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <motion.div
      className={cn("relative select-none", className)}
      style={{ width: size, height: size }}
      animate={{
        y: speaking ? [0, -3, 0, -2, 0] : [0, -6, 0],
        rotateZ: speaking ? [0, -2, 2, 0] : [0, -1.5, 1.5, 0],
      }}
      transition={{
        duration: speaking ? 0.6 : 3.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Outer glow rings */}
      <motion.div
        className="absolute -inset-2 rounded-full bg-gradient-to-br from-cyan-400/40 to-orange-500/35 blur-md"
        animate={{ opacity: [0.45, 0.85, 0.45], scale: [0.95, 1.08, 0.95] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -inset-1 rounded-full border border-cyan-300/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -inset-0.5 rounded-full border border-dashed border-orange-400/25"
        animate={{ rotate: -360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />

      {/* 3D head sphere */}
      <div
        className="relative h-full w-full overflow-hidden rounded-full shadow-2xl"
        style={{
          background:
            "radial-gradient(circle at 32% 28%, #67e8f9 0%, #06b6d4 28%, #0e7490 55%, #164e63 78%, #0f172a 100%)",
          boxShadow:
            "inset -10px -14px 28px rgba(15,23,42,0.55), inset 8px 10px 20px rgba(255,255,255,0.18), 0 12px 28px rgba(6,182,212,0.35)",
          transform: "perspective(400px) rotateX(8deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Specular highlight */}
        <div className="absolute left-[18%] top-[12%] h-[28%] w-[38%] rounded-full bg-white/25 blur-[6px]" />

        {/* Face plate */}
        <div className="absolute inset-[18%] flex items-center justify-center rounded-[40%] bg-slate-950/25 backdrop-blur-[1px]">
          <div ref={eyeRef} className="flex items-center gap-[18%]">
            {/* Eyes */}
            {[0, 1].map((i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden rounded-full bg-white shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                style={{ width: size * 0.16, height: size * 0.16 }}
                animate={{
                  scaleY: [1, 1, 0.12, 1, 1],
                }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  delay: i * 0.08 + 1.6,
                  times: [0, 0.82, 0.86, 0.9, 1],
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="absolute left-1/2 top-1/2 rounded-full bg-slate-900"
                  style={{
                    width: size * 0.07,
                    height: size * 0.07,
                    marginLeft: -(size * 0.035),
                    marginTop: -(size * 0.035),
                  }}
                  animate={
                    speaking
                      ? { scale: [1, 1.15, 1] }
                      : { x: [0, 1, -1, 0], y: [0, -0.5, 0.5, 0] }
                  }
                  transition={{ duration: speaking ? 0.35 : 2.8, repeat: Infinity }}
                />
                <div className="absolute left-[22%] top-[18%] size-[28%] rounded-full bg-white/80" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mouth / speaking wave */}
        <div className="absolute bottom-[22%] left-1/2 w-[34%] -translate-x-1/2">
          {speaking ? (
            <div className="flex h-3 items-end justify-center gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.span
                  key={i}
                  className="w-0.5 rounded-full bg-orange-300"
                  animate={{ height: ["4px", "12px", "4px"] }}
                  transition={{
                    duration: 0.45,
                    repeat: Infinity,
                    delay: i * 0.07,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          ) : (
            <motion.div
              className="mx-auto h-1 w-5 rounded-full bg-cyan-100/70"
              animate={{ width: ["18px", "22px", "18px"], opacity: [0.55, 0.9, 0.55] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          )}
        </div>

        {/* Cheek accent */}
        <div className="absolute bottom-[30%] left-[12%] size-2 rounded-full bg-orange-400/35 blur-[2px]" />
        <div className="absolute bottom-[30%] right-[12%] size-2 rounded-full bg-orange-400/35 blur-[2px]" />
      </div>
    </motion.div>
  );
}
