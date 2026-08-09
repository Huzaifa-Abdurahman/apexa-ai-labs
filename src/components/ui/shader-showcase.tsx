"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles as SparklesIcon, Zap, ArrowRight } from "lucide-react"
import { Sparkles } from "@/components/ui/sparkles"
import { PulsingBorder } from "@paper-design/shaders-react"
import { useLocale } from "@/i18n/locale-provider"
import { cn } from "@/lib/utils"

export default function ShaderShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { t, isRtl } = useLocale()

  return (
    <div ref={containerRef} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#F8FAFC]">
      {/* Background gradients and sparkles */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.08),_transparent_45%),radial-gradient(ellipse_at_bottom,_rgba(6,182,212,0.08),_transparent_40%)]" />

      <Sparkles
        className="absolute inset-0"
        density={30}
        speed={0.6}
        opacity={0.5}
        color="#8B5CF6"
      />

      {/* Atmospheric glowing orbs */}
      <motion.div
        className="pointer-events-none absolute -start-20 top-24 size-96 rounded-full bg-purple-500/15 blur-[120px]"
        animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -end-16 bottom-32 size-96 rounded-full bg-cyan-500/15 blur-[120px]"
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <main className="relative z-20 max-w-4xl mx-auto px-4 text-center mt-16 sm:mt-0">
        {/* Badge */}
        <motion.div
          className="relative mb-8 inline-flex items-center gap-2 overflow-hidden rounded-full border border-purple-200/60 bg-white/80 backdrop-blur-sm px-4 py-2 shadow-sm"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Zap className="size-4 text-purple-600" />
          <span className={cn("text-[13px] font-bold uppercase tracking-wider text-slate-700", isRtl && "font-arabic-ui normal-case")}>
            {t("hero.badge")}
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className={cn("mb-6 font-heading text-5xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-[5.5rem]", isRtl && "font-arabic-ui")}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="block drop-shadow-sm"
          >
            {t("hero.line1")}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="block mt-1 bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent pb-2 drop-shadow-sm"
          >
            {t("hero.line2")}
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          className={cn(
            "mx-auto mb-12 max-w-2xl text-lg font-medium leading-relaxed text-slate-600 md:text-xl",
            isRtl && "font-arabic-ui"
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          <Link href="/contact" className="w-full sm:w-auto">
            <motion.span
              className={cn(
                "group relative flex w-full sm:w-auto items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 pl-8 pr-2 py-2 text-[16px] font-bold text-white shadow-[0_8px_24px_-6px_rgba(6,182,212,0.5)] transition-all hover:shadow-[0_12px_30px_-6px_rgba(6,182,212,0.6)]",
                isRtl && "font-arabic-ui pr-8 pl-2"
              )}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {t("hero.bookCta")}
              <div className="bg-white rounded-full p-2 text-blue-600 transition-transform group-hover:translate-x-1">
                <ArrowRight className={cn("size-5", isRtl && "rotate-180")} />
              </div>
            </motion.span>
          </Link>
          <Link href="/services" className="w-full sm:w-auto">
            <motion.span
              className={cn(
                "flex w-full sm:w-auto justify-center rounded-full border border-slate-200 bg-white px-8 py-3.5 text-[16px] font-bold text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50/50 hover:text-blue-600",
                isRtl && "font-arabic-ui"
              )}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <SparklesIcon className="size-5 mr-2 opacity-70" />
              {t("hero.exploreCta")}
            </motion.span>
          </Link>
        </motion.div>
      </main>

      {/* Pulsing Decor */}
      <div className={cn("absolute bottom-10 z-30 hidden lg:block", isRtl ? "left-10" : "right-10")}>
        <div className="relative flex size-24 items-center justify-center opacity-70 transition-opacity hover:opacity-100">
          <PulsingBorder
            colors={["#8b5cf6", "#06b6d4", "#a855f7", "#22d3ee", "#e2e8f0"]}
            colorBack="#00000000"
            speed={2.2}
            roundness={1}
            thickness={0.12}
            softness={0.2}
            intensity={6}
            spotSize={0.12}
            pulse={0.18}
            smoke={0.5}
            smokeSize={4}
            scale={0.65}
            rotation={0}
            frame={1}
            style={{ width: "70px", height: "70px", borderRadius: "50%" }}
          />
          <motion.svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            style={{ transform: "scale(1.5)" }}
          >
            <defs>
              <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
            </defs>
            <text className="fill-slate-400 text-[11px] font-bold uppercase tracking-widest">
              <textPath href="#circlePath" startOffset="0%">
                {t("hero.ringText")} {t("hero.ringText")}
              </textPath>
            </text>
          </motion.svg>
        </div>
      </div>
    </div>
  )
}
