"use client"

import { useEffect, useRef } from "react"
import createGlobe, { type COBEOptions } from "cobe"
import { useMotionValue, useSpring } from "motion/react"

import { cn } from "@/lib/utils"

const MOVEMENT_DAMPING = 1400

/** Dark globe (legacy default) */
export const DARK_GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 1.2,
  mapSamples: 16000,
  mapBrightness: 6,
  baseColor: [0.1, 0.1, 0.1],
  markerColor: [0.02, 0.71, 0.83],
  glowColor: [0.2, 0.2, 0.2],
  markers: [
    { location: [51.5074, -0.1278], size: 0.1 }, // London
    { location: [53.4808, -2.2426], size: 0.06 }, // Manchester
    { location: [52.4862, -1.8904], size: 0.06 }, // Birmingham
    { location: [40.7128, -74.006], size: 0.07 }, // New York
    { location: [29.7601, -95.3701], size: 0.06 }, // Houston
  ],
}

/** White / light globe for contact & light surfaces */
export const WHITE_GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.28,
  dark: 0,
  diffuse: 1.2,
  mapSamples: 18000,
  mapBrightness: 8,
  baseColor: [0.95, 0.96, 0.98],
  markerColor: [0.02, 0.71, 0.83],
  glowColor: [0.88, 0.91, 0.95],
  markers: [
    { location: [51.5074, -0.1278], size: 0.1 }, // London
    { location: [53.4808, -2.2426], size: 0.06 }, // Manchester
    { location: [52.4862, -1.8904], size: 0.06 }, // Birmingham
    { location: [40.7128, -74.006], size: 0.07 }, // New York
    { location: [29.7601, -95.3701], size: 0.06 }, // Houston
  ],
}

export function Globe({
  className,
  config = WHITE_GLOBE_CONFIG,
  label = "We are here · London",
}: {
  className?: string
  config?: COBEOptions
  label?: string
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const phiRef = useRef(0)
  const widthRef = useRef(0)
  const pointerInteracting = useRef<number | null>(null)

  const r = useMotionValue(0)
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  })

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      r.set(r.get() + delta / MOVEMENT_DAMPING)
    }
  }

  const tooltipRef = useRef<HTMLDivElement>(null)

  const targetLat = 25.2048 * (Math.PI / 180)
  const targetLng = 55.2708 * (Math.PI / 180)

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        widthRef.current = canvasRef.current.offsetWidth
      }
    }

    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phiRef.current += 0.005
        const currentPhi = phiRef.current + rs.get()
        state.phi = currentPhi
        state.width = widthRef.current * 2
        state.height = widthRef.current * 2

        if (tooltipRef.current && widthRef.current > 0) {
          const x = Math.cos(targetLat) * Math.sin(targetLng)
          const y = Math.sin(targetLat)
          const z = Math.cos(targetLat) * Math.cos(targetLng)

          const phiRot = currentPhi
          const x1 = x * Math.cos(phiRot) + z * Math.sin(phiRot)
          const y1 = y
          const z1 = -x * Math.sin(phiRot) + z * Math.cos(phiRot)

          const thetaRot = config.theta || 0.3
          const x2 = x1
          const y2 = y1 * Math.cos(thetaRot) - z1 * Math.sin(thetaRot)
          const z2 = y1 * Math.sin(thetaRot) + z1 * Math.cos(thetaRot)

          if (z2 < -0.2) {
            tooltipRef.current.style.opacity = "0"
            tooltipRef.current.style.pointerEvents = "none"
          } else {
            tooltipRef.current.style.opacity = "1"
            tooltipRef.current.style.pointerEvents = "auto"

            const radius = widthRef.current / 2
            const screenX = radius + x2 * radius
            const screenY = radius - y2 * radius

            tooltipRef.current.style.transform = `translate(${screenX}px, ${screenY}px) translate(-50%, -100%)`
          }
        }
      },
    })

    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = "1"
    }, 0)

    return () => {
      globe.destroy()
      window.removeEventListener("resize", onResize)
    }
  }, [rs, config])

  return (
    <div
      className={cn(
        "relative mx-auto aspect-square w-full max-w-[600px]",
        className
      )}
    >
      <div
        ref={tooltipRef}
        className="pointer-events-none absolute top-0 left-0 z-20 flex flex-col items-center justify-end transition-opacity duration-300"
        style={{ transformOrigin: "bottom center" }}
      >
        <div className="mb-1 whitespace-nowrap rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-foreground shadow-xl">
          {label}
        </div>
        <div className="h-12 w-0.5 bg-gradient-to-b from-primary to-transparent" />
        <div className="-mt-1 h-1.5 w-6 rounded-full bg-primary/80 blur-[3px]" />
      </div>

      <canvas
        className={cn(
          "h-full w-full opacity-0 transition-opacity duration-500 contain-[layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX
          updatePointerInteraction(e.clientX)
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  )
}
