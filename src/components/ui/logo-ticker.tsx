"use client"

import Image from "next/image"
import { Marquee } from "@/components/ui/marquee"
import { cn } from "@/lib/utils"
import { useLocale } from "@/i18n/locale-provider"

/** Client / portfolio marks from /public/logos — no labels, no chip backgrounds */
const LOGOS = [
  "/logos/al-ibaad-logo.png",
  "/logos/Clarivive medinsight logo-01.png",
  "/logos/galaxy-SvP5hw-0.png",
  "/logos/hijab-logo.webp",
  "/logos/Innovations-Logistics-Logo-FINAL-06-e1737223360884-1024x325.png.webp",
  "/logos/islamic-rag.png",
  "/logos/JPH-Logo-03.webp",
  "/logos/logo-mczell.png",
  "/logos/logo-white-BcgA8pIv.png",
  "/logos/logo.CH_b5oXy.webp",
  "/logos/new-American-Book-Publisher-1024x743.webp",
  "/logos/ns_logo_dark.svg",
  "/logos/punjab-PVjztgjg.png",
  "/logos/pvt.-2.png",
  "/logos/Rosh-Logo-V3_1.avif",
  "/logos/shopify-fb2A323g.png",
  "/logos/Tech-Tronix Solutions logo design.png",
  "/logos/Untitled-design-5-1024x169.webp",
  "/logos/Untitled-design-9-e1743676587981-1024x348.webp",
  "/logos/atom.png",
  "/logos/81bbdfeb78d658d5808328353ff0aab82b19e959-123x55.svg",
  "/logos/black-logo-Picsart-AiImageEnhancer.webp",
  "/logos/logo-black.webp",
  "/logos/WhatsApp-Image-2026-04-04-at-6.51.29-PM-e1775326251525.webp",
  "/logos/WhatsApp_Image_2025-11-05_at_11.02.38_PM_-_Edited.avif",
  "/logos/updated-logo-1536x1536-1-e1732519627928-1024x349.jpeg",
  "/logos/WhatsApp-Image-2025-10-11-at-1.46.28-AM.jpeg",
  "/logos/logo (2).png",
] as const

/** White/monochrome marks that need invert to read on the light bar */
const INVERT_ON_LIGHT_LOGOS = new Set([
  "/logos/logo-white-BcgA8pIv.png",
])

function LogoMark({ src }: { src: string }) {
  const invert = INVERT_ON_LIGHT_LOGOS.has(src)
  return (
    <div className="mx-5 flex h-12 shrink-0 items-center justify-center sm:mx-7 sm:h-14 md:h-16">
      <Image
        src={src}
        alt=""
        width={160}
        height={64}
        unoptimized
        className={cn(
          "h-8 w-auto max-w-[140px] object-contain opacity-85 transition duration-300 hover:opacity-100 sm:h-9 sm:max-w-[160px] md:h-10 md:max-w-[180px]",
          invert && "brightness-0 invert"
        )}
      />
    </div>
  )
}

export function LogoTicker() {
  const { t, isRtl } = useLocale()
  const mid = Math.ceil(LOGOS.length / 2)
  const rowA = LOGOS.slice(0, mid)
  const rowB = LOGOS.slice(mid)

  return (
    <div className="relative w-full overflow-hidden py-10 md:py-12">
      {/* Fancy atmosphere */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-400/35 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.12),_transparent_55%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mb-6 flex flex-col items-center justify-center gap-1 px-4 text-center">
        <p
          className={cn(
            "text-xs font-medium uppercase tracking-[0.22em] text-slate-500",
            isRtl && "font-arabic-ui text-sm font-semibold normal-case tracking-normal text-purple-600/80"
          )}
        >
          {t("ticker.label")}
        </p>
      </div>

      <div className="relative z-10">
        <div className="pointer-events-none absolute inset-y-0 start-0 z-10 w-16 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent sm:w-28 rtl:bg-gradient-to-l" />
        <div className="pointer-events-none absolute inset-y-0 end-0 z-10 w-16 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent sm:w-28 rtl:bg-gradient-to-r" />

        <Marquee pauseOnHover className="[--duration:48s] [--gap:0rem]">
          {rowA.map((src) => (
            <LogoMark key={src} src={src} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="mt-4 [--duration:56s] [--gap:0rem]">
          {rowB.map((src) => (
            <LogoMark key={`b-${src}`} src={src} />
          ))}
        </Marquee>
      </div>
    </div>
  )
}
