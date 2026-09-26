"use client"

import { useRef } from "react"
import Link from "next/link"
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  type MotionValue,
} from "framer-motion"
import { Sparkles as SparklesIcon, Zap, ArrowRight, ChevronDown } from "lucide-react"
import { Sparkles } from "@/components/ui/sparkles"
import { PulsingBorder } from "@paper-design/shaders-react"
import { useLocale } from "@/i18n/locale-provider"
import { cn } from "@/lib/utils"

// Subtle film-grain texture, generated inline (no extra asset) and blended
// over the gradient background so it reads as designed, not flat/AI-default.
const GRAIN_SVG =
  "<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'>" +
  "<filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/>" +
  "<feColorMatrix type='matrix' values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.06 0'/></filter>" +
  "<rect width='100%' height='100%' filter='url(%23n)'/></svg>"

function RevealWords({
  text,
  className,
  delayBase = 0,
  isRtl = false,
}: {
  text: string
  className?: string
  delayBase?: number
  isRtl?: boolean
}) {
  const words = text.split(" ")
  return (
    <span className={cn("inline-block", className)}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className={cn(
            "inline-block overflow-hidden align-bottom",
            isRtl ? "ml-[0.28em] last:ml-0" : "mr-[0.28em] last:mr-0"
          )}
        >
          <motion.span
            className="inline-block"
            initial={{ y: "115%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.75,
              delay: delayBase + i * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

function CursorSpotlight({
  mouseX,
  mouseY,
}: {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
}) {
  const background = useMotionTemplate`radial-gradient(560px circle at ${mouseX}px ${mouseY}px, rgba(139,92,246,0.16), transparent 65%)`
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-[1] hidden sm:block"
      style={{ background }}
    />
  )
}

export default function ShaderShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { t, isRtl } = useLocale()

  const mouseX = useMotionValue(-1000)
  const mouseY = useMotionValue(-1000)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  function scrollToNext() {
    if (typeof window === "undefined") return
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#F8FAFC]"
    >
      {/* Layered mesh-gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_15%_0%,_rgba(139,92,246,0.14),_transparent_50%),radial-gradient(ellipse_70%_55%_at_100%_20%,_rgba(6,182,212,0.12),_transparent_50%),radial-gradient(ellipse_65%_50%_at_50%_100%,_rgba(236,72,153,0.06),_transparent_55%)]" />

      {/* Film-grain texture for depth */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-40 mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,${GRAIN_SVG}")` }}
      />

      <CursorSpotlight mouseX={mouseX} mouseY={mouseY} />

      <Sparkles
        className="absolute inset-0 z-[1]"
        density={32}
        speed={0.55}
        opacity={0.55}
        color="#8B5CF6"
      />

      {/* Atmospheric glowing orbs, drifting */}
      <motion.div
        className="pointer-events-none absolute -start-24 top-20 size-[26rem] rounded-full bg-purple-500/15 blur-[130px]"
        animate={{
          opacity: [0.3, 0.55, 0.3],
          scale: [1, 1.12, 1],
          x: [0, 24, 0],
          y: [0, -16, 0],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -end-20 bottom-24 size-[26rem] rounded-full bg-cyan-500/15 blur-[130px]"
        animate={{
          opacity: [0.28, 0.5, 0.28],
          scale: [1.1, 1, 1.1],
          x: [0, -20, 0],
          y: [0, 18, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute start-1/2 top-1/3 size-[20rem] -translate-x-1/2 rounded-full bg-fuchsia-400/10 blur-[140px]"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <main className="relative z-20 max-w-4xl mx-auto px-4 text-center mt-16 sm:mt-0">
        {/* Badge */}
        <motion.div
          className="relative mb-8 inline-flex items-center gap-2 overflow-hidden rounded-full border border-purple-200/60 bg-white/80 backdrop-blur-sm px-4 py-2 shadow-sm"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500" />
          </span>
          <Zap className="size-4 text-purple-600" />
          <span
            className={cn(
              "text-[13px] font-bold uppercase tracking-wider text-slate-700",
              isRtl && "font-arabic-ui normal-case"
            )}
          >
            {t("hero.badge")}
          </span>
        </motion.div>

        {/* Headline */}
        <h1
          className={cn(
            "mb-6 font-heading text-5xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-[5.5rem]",
            isRtl && "font-arabic-ui"
          )}
        >
          <RevealWords
            text={t("hero.line1")}
            isRtl={isRtl}
            delayBase={0.22}
            className="block drop-shadow-sm"
          />
          <motion.span
            className={cn(
              "relative block mt-1 pb-2 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-sm",
              isRtl && "font-arabic-ui"
            )}
            style={{ backgroundSize: "200% auto" }}
            initial={{ opacity: 0, y: 22 }}
            animate={{
              opacity: 1,
              y: 0,
              backgroundPositionX: ["0%", "100%", "0%"],
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.5 },
              y: { duration: 0.6, delay: 0.5 },
              backgroundPositionX: {
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2,
              },
            }}
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
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Link href="/contact" className="relative w-full sm:w-auto">
            <motion.span
              className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 blur-xl"
              animate={{ opacity: [0.35, 0.6, 0.35] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              className={cn(
                "group relative flex w-full sm:w-auto items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 pl-8 pr-2 py-2 text-[16px] font-bold text-white shadow-[0_8px_24px_-6px_rgba(6,182,212,0.5)] transition-shadow hover:shadow-[0_14px_34px_-6px_rgba(6,182,212,0.65)]",
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

      {/* Scroll cue */}
      <motion.button
        type="button"
        onClick={scrollToNext}
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 z-30 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 transition-colors hover:text-purple-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { duration: 0.5, delay: 1.1 },
          y: { duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
        }}
      >
        <ChevronDown className="size-5" />
      </motion.button>
    </div>
  )
}
