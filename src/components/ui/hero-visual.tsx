"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { useLocale } from "@/i18n/locale-provider"
import { cn } from "@/lib/utils"

const LOCATION_IMAGES: Record<string, string> = {
  ksa: "/saudi-hotels.PNG",
  uae: "/dubai.PNG",
  uk: "/uk.PNG",
  usa: "/america.PNG",
  pk: "/pakistan.PNG",
}

type HeroScene = {
  src: string
  kind: "image" | "gif"
  holdMs: number
}

/** Smaller / lighter assets first so early swaps are ready; heavy GIFs later after preload */
const HERO_SCENES: HeroScene[] = [
  { src: "/ai-command-center.webp", kind: "image", holdMs: 5500 },
  {
    src: "/smiling-chatbot-and-user-chatting-customer-support-automation-virtual-assistant-consultation.gif",
    kind: "gif",
    holdMs: 8000,
  },
  { src: "/sketchbook-male-designer-working-on-graphic-tablet-with-screen-1.gif", kind: "gif", holdMs: 8000 },
  { src: "/robot.gif", kind: "gif", holdMs: 8000 },
  { src: "/3d-casual-life-chatting-with-chatbot.gif", kind: "gif", holdMs: 8000 },
  { src: "/3d-hygge-isometric-view-of-designer-s-desk-with-laptop.gif", kind: "gif", holdMs: 8000 },
  { src: "/3d-stickle-3d-folder-with-papers-and-ai-stars.gif", kind: "gif", holdMs: 8000 },
]

function preloadSrc(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new window.Image()
    img.decoding = "async"
    img.onload = () => resolve()
    img.onerror = () => resolve()
    img.src = src
    if (img.complete) resolve()
  })
}

export function HeroVisual() {
  const { t, messages, isRtl } = useLocale()
  const locations = messages.hero.locations
  const [active, setActive] = useState(0)
  const [scene, setScene] = useState(0)
  const [visible, setVisible] = useState(true)
  const [reduceMotion, setReduceMotion] = useState(false)
  const loaded = useRef(new Set<string>())
  const cancelled = useRef(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduceMotion(mq.matches)
    const onChange = () => setReduceMotion(mq.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  // Warm the cache for every scene up front
  useEffect(() => {
    void Promise.all(
      HERO_SCENES.map(async (s) => {
        await preloadSrc(s.src)
        loaded.current.add(s.src)
      })
    )
  }, [])

  // Advance only after hold + next asset is loaded (never cut a still-loading GIF)
  useEffect(() => {
    if (reduceMotion) return
    cancelled.current = false

    const run = async () => {
      const current = HERO_SCENES[scene]
      if (!loaded.current.has(current.src)) {
        await preloadSrc(current.src)
        if (cancelled.current) return
        loaded.current.add(current.src)
      }

      await new Promise((r) => window.setTimeout(r, current.holdMs))
      if (cancelled.current) return

      const nextIndex = (scene + 1) % HERO_SCENES.length
      const next = HERO_SCENES[nextIndex]
      if (!loaded.current.has(next.src)) {
        await preloadSrc(next.src)
        if (cancelled.current) return
        loaded.current.add(next.src)
      }

      // Brief exit, then swap only when next is ready
      setVisible(false)
      await new Promise((r) => window.setTimeout(r, reduceMotion ? 0 : 320))
      if (cancelled.current) return
      setScene(nextIndex)
      setVisible(true)
    }

    void run()
    return () => {
      cancelled.current = true
    }
  }, [scene, reduceMotion])

  const current = HERO_SCENES[scene]
  const exitX = isRtl ? 48 : -48
  const enterX = isRtl ? -48 : 48

  return (
    <div className="flex flex-col gap-5">
      {/* Hidden preloaders so browser keeps GIFs warm */}
      <div className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0" aria-hidden>
        {HERO_SCENES.map((s) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={s.src} src={s.src} alt="" />
        ))}
      </div>

      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-8 rounded-full bg-cyan-400/15 blur-3xl" />

        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative aspect-[3/2] w-full overflow-hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            {visible && (
              <motion.div
                key={current.src}
                initial={
                  reduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: enterX, scale: 0.96, filter: "blur(6px)" }
                }
                animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                exit={
                  reduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: exitX, scale: 0.96, filter: "blur(6px)" }
                }
                transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                className="absolute inset-0"
              >
                {current.kind === "image" ? (
                  <Image
                    src={current.src}
                    alt={t("hero.visualAlt")}
                    fill
                    priority
                    sizes="(max-width: 1024px) 0px, 480px"
                    className="object-contain object-center"
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={current.src}
                    alt={t("hero.visualAlt")}
                    decoding="async"
                    loading="eager"
                    className="h-full w-full object-contain object-center"
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <div>
        <p
          className={cn(
            "mb-2.5 text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-300/70",
            isRtl ? "text-left font-arabic-ui" : "text-right"
          )}
        >
          {t("hero.locationsLabel")}
        </p>
        <div className="flex h-24 gap-2" dir="ltr">
          {locations.map((loc, i) => (
            <motion.button
              key={loc.id}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.08 }}
              className={cn(
                "relative overflow-hidden rounded-2xl border transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                active === i
                  ? "flex-[3.2] border-cyan-400/50 shadow-[0_0_28px_-6px_rgba(34,211,238,0.55)]"
                  : "flex-1 border-white/15 hover:border-white/35"
              )}
              aria-label={loc.name}
            >
              <Image
                src={LOCATION_IMAGES[loc.id] ?? "/saudi-hotels.PNG"}
                alt={loc.name}
                fill
                sizes="200px"
                className={cn(
                  "object-cover transition duration-500",
                  active === i ? "scale-105" : "brightness-[0.55] grayscale-[35%]"
                )}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div
                className={cn(
                  "absolute inset-x-0 bottom-0 p-2 text-start transition-all duration-300",
                  active === i ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                )}
              >
                <p className={cn("truncate text-[11px] font-bold text-white", isRtl && "font-arabic-ui")}>
                  {loc.name}
                </p>
                <p className={cn("truncate text-[9px] font-medium text-cyan-200/90", isRtl && "font-arabic-ui")}>
                  {loc.city}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}
