"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react"
import { motion } from "framer-motion"
import { Sparkles as SparklesIcon, Zap } from "lucide-react"
import { HeroVisual } from "@/components/ui/hero-visual"
import { HyperText } from "@/components/ui/hyper-text"
import { Sparkles } from "@/components/ui/sparkles"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { useLocale } from "@/i18n/locale-provider"
import { cn } from "@/lib/utils"

function HyperRewrite({ words }: { words: readonly string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, 2800)
    return () => clearInterval(id)
  }, [words])

  return (
    <HyperText
      key={words[index]}
      className="font-heading py-0 text-2xl font-black tracking-tight text-cyan-300 md:text-4xl"
      duration={700}
      animateOnHover={false}
      startOnView={false}
    >
      {words[index]}
    </HyperText>
  )
}

export default function ShaderShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { t, messages, isRtl } = useLocale()
  const capabilityLines = [...messages.hero.capabilityLines]
  const hyperWords = [...messages.hero.hyperWords]
  const cities = [
    t("common.makkah"),
    t("common.madinah"),
    t("common.jeddah"),
    t("common.dammam"),
    t("common.riyadh"),
  ]

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-black">
      <MeshGradient
        className="absolute inset-0 h-full w-full"
        colors={["#020617", "#06b6d4", "#f97316", "#0891b2", "#000000"]}
        speed={0.4}
      />

      <Sparkles
        className="absolute inset-0"
        density={60}
        speed={0.8}
        opacity={0.4}
        color="#67e8f9"
      />

      <motion.div
        className="pointer-events-none absolute -start-20 top-24 size-72 rounded-full bg-cyan-500/40 blur-[100px]"
        animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.15, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -end-16 bottom-32 size-80 rounded-full bg-orange-500/35 blur-[110px]"
        animate={{ opacity: [0.3, 0.65, 0.3], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <main
        className={cn(
          "absolute top-24 z-20 max-w-2xl sm:top-28 lg:top-32",
          isRtl ? "right-4 pe-0 ps-4 md:right-8 lg:right-16" : "left-4 pr-4 md:left-8 lg:left-16"
        )}
      >
        <div className={cn(isRtl ? "text-right" : "text-left")}>
          <motion.div
            className="relative mb-5 inline-flex items-center gap-2 overflow-hidden rounded-full border border-cyan-400/40 bg-cyan-500/15 px-4 py-2 shadow-[0_0_24px_-4px_rgba(34,211,238,0.5)] backdrop-blur-md"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Zap className="size-3.5 text-orange-300" />
            <span
              className={cn(
                "text-sm font-semibold text-white",
                isRtl && "font-arabic-ui"
              )}
            >
              {t("hero.badge")}
            </span>
          </motion.div>

          <h1
            className={cn(
              "mb-5 flex flex-col gap-1 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-white md:gap-2 md:text-5xl lg:text-6xl",
              isRtl && "font-arabic-ui"
            )}
          >
            <motion.span
              initial={{ opacity: 0, x: isRtl ? 24 : -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="block bg-gradient-to-r from-white via-cyan-300 to-orange-400 bg-clip-text text-transparent"
            >
              {t("hero.line1")}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 160, damping: 14, delay: 0.38 }}
              className="block text-[2.85rem] font-black leading-[0.95] text-white drop-shadow-[0_0_30px_rgba(249,115,22,0.45)] md:text-[4.5rem] lg:text-[5.5rem]"
            >
              {t("hero.line2")}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.48 }}
              className="mt-2 block max-w-[95%] text-lg font-semibold tracking-tight text-white/90 md:text-2xl"
            >
              {t("hero.subtitle")}
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.55 }}
            className="mb-6 max-w-xl"
          >
            <TypingAnimation
              key={capabilityLines.join("|")}
              words={capabilityLines}
              loop
              typeSpeed={38}
              deleteSpeed={22}
              pauseDelay={2000}
              startOnView={false}
              cursorStyle="line"
              className={cn(
                "font-heading text-xl font-bold leading-snug text-white md:text-2xl lg:text-3xl",
                isRtl && "font-arabic-ui"
              )}
            />
            <div className="mt-3">
              <HyperRewrite words={hyperWords} />
            </div>
          </motion.div>

          <motion.p
            className={cn(
              "mb-7 max-w-xl text-base font-medium leading-relaxed text-white/75 md:text-lg",
              isRtl && "font-arabic-ui"
            )}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            {t("hero.body")}
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
          >
            <Link href="/contact">
              <motion.span
                className={cn(
                  "relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-orange-500 px-8 py-3.5 text-sm font-bold text-white shadow-[0_0_32px_-4px_rgba(6,182,212,0.7)]",
                  isRtl && "font-arabic-ui"
                )}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
              >
                <SparklesIcon className="size-4" />
                {t("hero.bookCta")}
              </motion.span>
            </Link>
            <Link href="/services">
              <motion.span
                className={cn(
                  "inline-block rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:border-cyan-300/60 hover:bg-white/15",
                  isRtl && "font-arabic-ui"
                )}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                {t("hero.exploreCta")}
              </motion.span>
            </Link>
          </motion.div>

          <motion.div
            className="mt-6 flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {cities.map((city, i) => (
              <motion.span
                key={city}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.95 + i * 0.06 }}
                className="font-arabic-ui rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80"
              >
                {city}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </main>

      <div
        className={cn(
          "absolute top-1/2 z-20 hidden w-[400px] -translate-y-1/2 lg:block xl:w-[480px]",
          isRtl ? "left-8 lg:left-16" : "right-8 lg:right-16"
        )}
      >
        <HeroVisual />
      </div>

      <div className={cn("absolute bottom-8 z-30", isRtl ? "left-6 sm:left-8" : "right-6 sm:right-8")}>
        <div className="relative flex size-20 items-center justify-center">
          <PulsingBorder
            colors={["#06b6d4", "#22d3ee", "#f97316", "#fbbf24", "#ffffff"]}
            colorBack="#00000000"
            speed={2.2}
            roundness={1}
            thickness={0.12}
            softness={0.2}
            intensity={7}
            spotSize={0.12}
            pulse={0.18}
            smoke={0.55}
            smokeSize={4}
            scale={0.65}
            rotation={0}
            frame={9161408.251009725}
            style={{ width: "60px", height: "60px", borderRadius: "50%" }}
          />
          <motion.svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            style={{ transform: "scale(1.6)" }}
          >
            <defs>
              <path id="circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text className="fill-white/90 text-sm font-semibold">
              <textPath href="#circle" startOffset="0%">
                {t("hero.ringText")} {t("hero.ringText")}
              </textPath>
            </text>
          </motion.svg>
        </div>
      </div>
    </div>
  )
}
