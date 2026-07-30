"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Bot,
  Check,
  LayoutDashboard,
  MessagesSquare,
  MonitorSmartphone,
  Rocket,
  Sparkles as SparklesIcon,
  Workflow,
} from "lucide-react";
import { useLocale } from "@/i18n/locale-provider";
import { cn } from "@/lib/utils";

function TiltCard({
  children,
  className,
  intensity = 5,
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [intensity, -intensity]), {
    stiffness: 180,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-intensity, intensity]), {
    stiffness: 180,
    damping: 22,
  });

  return (
    <div style={{ perspective: 900 }} className={cn("min-w-0", className)}>
      <motion.div
        ref={ref}
        onMouseMove={(e) => {
          const rect = ref.current?.getBoundingClientRect();
          if (!rect) return;
          mx.set((e.clientX - rect.left) / rect.width);
          my.set((e.clientY - rect.top) / rect.height);
        }}
        onMouseLeave={() => {
          mx.set(0.5);
          my.set(0.5);
        }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative h-full min-w-0 overflow-hidden rounded-3xl border border-black/5 bg-white shadow-lg shadow-cyan-500/5 transition duration-300 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-500/10"
      >
        {children}
      </motion.div>
    </div>
  );
}

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const CARD_ICONS: Record<string, React.ReactNode> = {
  assistant: <Bot className="size-5" />,
  software: <LayoutDashboard className="size-5" />,
  automation: <Workflow className="size-5" />,
  growth: <Rocket className="size-5" />,
};

const CARD_ACCENTS: Record<string, string> = {
  assistant: "from-cyan-400 to-blue-500 text-white shadow-cyan-500/25",
  software: "from-orange-400 to-red-500 text-white shadow-orange-500/25",
  automation: "from-violet-400 to-purple-600 text-white shadow-violet-500/25",
  growth: "from-emerald-400 to-teal-500 text-white shadow-emerald-500/25",
};

const SECTOR_IMAGES: Record<string, string> = {
  hospitality: "/saudi-hotels.PNG",
  legal: "/law-saudia.PNG",
};

export function HomeShowcase() {
  const { messages, isRtl } = useLocale();
  const s = messages.home.showcase;
  const [assistantCard, softwareCard, automationCard, growthCard] = s.cards;

  return (
    <section className="relative overflow-x-hidden overflow-y-hidden bg-background py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(6,182,212,0.1),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(249,115,22,0.06),_transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-50 px-4 py-1.5"
          >
            <SparklesIcon className="size-3.5 text-cyan-600" />
            <span
              className={cn(
                "text-xs font-bold uppercase tracking-widest text-cyan-700",
                isRtl && "font-arabic-ui normal-case tracking-normal text-sm"
              )}
            >
              {s.eyebrow}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className={cn(
              "font-heading text-4xl font-bold leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-6xl",
              isRtl && "font-arabic-ui"
            )}
          >
            {s.title}{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-cyan-500 to-orange-500 bg-clip-text text-transparent">
              {s.titleHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className={cn(
              "mt-5 text-base font-medium leading-relaxed text-muted-foreground md:text-lg",
              isRtl && "font-arabic-ui"
            )}
          >
            {s.subtitle}
          </motion.p>
        </div>

        <div className="grid min-w-0 gap-5 lg:grid-cols-3">
          {/* AI assistant — featured */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="min-w-0 lg:col-span-2"
          >
            <TiltCard intensity={3} className="h-full">
              <div className="relative flex h-full flex-col gap-6 p-8 md:flex-row md:items-center md:p-10">
                <div className="relative z-10 min-w-0 flex-1">
                  <span
                    className={cn(
                      "mb-4 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1 text-[11px] font-bold text-white shadow-lg shadow-cyan-500/25",
                      isRtl && "font-arabic-ui"
                    )}
                  >
                    <SparklesIcon className="size-3" />
                    {assistantCard.badge}
                  </span>
                  <h3
                    className={cn(
                      "font-heading text-2xl font-bold text-foreground md:text-3xl",
                      isRtl && "font-arabic-ui"
                    )}
                  >
                    {assistantCard.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-3 text-sm leading-relaxed text-muted-foreground md:text-base",
                      isRtl && "font-arabic-ui"
                    )}
                  >
                    {assistantCard.desc}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {assistantCard.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5">
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-cyan-600">
                          <Check className="size-3" />
                        </span>
                        <span
                          className={cn(
                            "text-sm font-medium text-foreground/80",
                            isRtl && "font-arabic-ui"
                          )}
                        >
                          {p}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative mx-auto w-44 shrink-0 sm:w-52 md:w-64">
                  <div className="pointer-events-none absolute inset-4 rounded-full bg-cyan-400/15 blur-2xl" />
                  <Image
                    src="/robot-assistant.webp"
                    alt={assistantCard.imageAlt}
                    width={320}
                    height={320}
                    sizes="(max-width: 768px) 176px, 256px"
                    className="relative h-auto w-full"
                  />
                  <div className="absolute -start-2 top-6 rounded-2xl border border-black/5 bg-white px-3 py-1.5 shadow-md">
                    <div className="flex items-center gap-1.5">
                      <MessagesSquare className="size-3.5 text-emerald-500" />
                      <span className="text-[10px] font-bold text-foreground">24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Custom software */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="min-w-0"
          >
            <TiltCard className="h-full">
              <div className="flex h-full flex-col p-7">
                <div
                  className={cn(
                    "mb-5 inline-flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg",
                    CARD_ACCENTS[softwareCard.id]
                  )}
                >
                  {CARD_ICONS[softwareCard.id]}
                </div>
                <h3
                  className={cn(
                    "font-heading text-xl font-bold text-foreground",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {softwareCard.title}
                </h3>
                <p
                  className={cn(
                    "mt-2.5 text-sm leading-relaxed text-muted-foreground",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {softwareCard.desc}
                </p>
                <div className="relative mx-auto mt-4 w-36 flex-1 sm:w-40">
                  <Image
                    src="/3d-dashboard.png"
                    alt={softwareCard.title}
                    width={280}
                    height={280}
                    sizes="160px"
                    className="h-auto w-full"
                  />
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {softwareCard.points.map((p) => (
                    <span
                      key={p}
                      className={cn(
                        "rounded-full border border-black/5 bg-muted/60 px-2.5 py-1 text-[11px] font-semibold text-foreground/70",
                        isRtl && "font-arabic-ui"
                      )}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Automation */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="min-w-0"
          >
            <TiltCard className="h-full">
              <div className="flex h-full flex-col p-7">
                <div
                  className={cn(
                    "mb-5 inline-flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg",
                    CARD_ACCENTS[automationCard.id]
                  )}
                >
                  {CARD_ICONS[automationCard.id]}
                </div>
                <h3
                  className={cn(
                    "font-heading text-xl font-bold text-foreground",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {automationCard.title}
                </h3>
                <p
                  className={cn(
                    "mt-2.5 text-sm leading-relaxed text-muted-foreground",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {automationCard.desc}
                </p>
                <div className="relative mx-auto mt-4 w-36 flex-1 sm:w-40">
                  <Image
                    src="/chatbot-3d-static.png"
                    alt={automationCard.title}
                    width={280}
                    height={280}
                    sizes="160px"
                    className="h-auto w-full"
                  />
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {automationCard.points.map((p) => (
                    <span
                      key={p}
                      className={cn(
                        "rounded-full border border-black/5 bg-muted/60 px-2.5 py-1 text-[11px] font-semibold text-foreground/70",
                        isRtl && "font-arabic-ui"
                      )}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Growth — contained product mockup (no Spline) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="min-w-0 lg:col-span-2"
          >
            <div className="h-full overflow-hidden rounded-3xl border border-black/5 bg-white shadow-lg shadow-emerald-500/5 transition duration-300 hover:border-emerald-400/30 hover:shadow-xl">
              <div className="grid h-full min-w-0 grid-cols-1 md:grid-cols-2">
                <div className="flex min-w-0 flex-col justify-center p-7 md:p-9">
                  <div
                    className={cn(
                      "mb-5 inline-flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg",
                      CARD_ACCENTS[growthCard.id]
                    )}
                  >
                    {CARD_ICONS[growthCard.id]}
                  </div>
                  <h3
                    className={cn(
                      "font-heading text-xl font-bold text-foreground md:text-2xl",
                      isRtl && "font-arabic-ui"
                    )}
                  >
                    {growthCard.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2.5 text-sm leading-relaxed text-muted-foreground",
                      isRtl && "font-arabic-ui"
                    )}
                  >
                    {growthCard.desc}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {growthCard.points.map((p) => (
                      <span
                        key={p}
                        className={cn(
                          "rounded-full border border-black/5 bg-muted/60 px-2.5 py-1 text-[11px] font-semibold text-foreground/70",
                          isRtl && "font-arabic-ui"
                        )}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative flex min-h-[220px] min-w-0 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-emerald-50/50 p-4 md:min-h-0 md:p-6">
                  <div className="pointer-events-none absolute inset-8 rounded-full bg-emerald-400/10 blur-3xl" />
                  <div className="relative w-full max-w-[360px]">
                    <div className="overflow-hidden rounded-2xl border border-black/10 bg-slate-950 shadow-xl shadow-emerald-500/10">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="aspect-[4/3] h-auto w-full object-cover"
                        poster="/svc-desk.webp"
                      >
                        <source src="/3d-glassy-laptop-blue.webm" type="video/webm" />
                      </video>
                    </div>
                    <div className="mt-3 flex items-center justify-center gap-1.5 text-emerald-700">
                      <MonitorSmartphone className="size-3.5" />
                      <span
                        className={cn(
                          "text-[10px] font-bold uppercase tracking-wider",
                          isRtl && "font-arabic-ui normal-case tracking-normal"
                        )}
                      >
                        {s.interactiveHint}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Industry sectors */}
          {s.sectors.map((sector, i) => (
            <motion.div
              key={sector.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 * i }}
              className={i === 0 ? "lg:col-span-2" : undefined}
            >
              <TiltCard intensity={4} className="h-full">
                <div className="relative flex h-full min-h-[240px] flex-col justify-end overflow-hidden">
                  <Image
                    src={SECTOR_IMAGES[sector.id] ?? "/saudi-hotels.PNG"}
                    alt={sector.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                  <div className="relative z-10 p-7">
                    <span
                      className={cn(
                        "mb-2 inline-block rounded-full border border-orange-300/40 bg-orange-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-orange-100",
                        isRtl && "font-arabic-ui normal-case tracking-normal"
                      )}
                    >
                      {s.sectorsEyebrow}
                    </span>
                    <h3
                      className={cn(
                        "font-heading text-xl font-bold text-white md:text-2xl",
                        isRtl && "font-arabic-ui"
                      )}
                    >
                      {sector.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-1.5 max-w-lg text-sm leading-relaxed text-white/75",
                        isRtl && "font-arabic-ui"
                      )}
                    >
                      {sector.desc}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-16 overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-r from-cyan-50 via-white to-orange-50 p-8 shadow-sm md:p-10"
        >
          <p
            className={cn(
              "mb-7 text-center text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground",
              isRtl && "font-arabic-ui normal-case tracking-normal text-sm"
            )}
          >
            {s.statsTitle}
          </p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {s.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading bg-gradient-to-b from-cyan-600 to-orange-500 bg-clip-text text-4xl font-black text-transparent md:text-5xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <p
                  className={cn(
                    "mt-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground md:text-sm",
                    isRtl && "font-arabic-ui normal-case tracking-normal"
                  )}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Steps */}
        <div className="mt-20">
          <div className="mb-10 text-center">
            <p
              className={cn(
                "mb-2 text-xs font-bold uppercase tracking-[0.25em] text-orange-600/80",
                isRtl && "font-arabic-ui normal-case tracking-normal text-sm"
              )}
            >
              {s.stepsEyebrow}
            </p>
            <h3
              className={cn(
                "font-heading text-2xl font-bold text-foreground md:text-4xl",
                isRtl && "font-arabic-ui"
              )}
            >
              {s.stepsTitle}
            </h3>
          </div>

          <div className="relative grid gap-5 md:grid-cols-3">
            <div className="pointer-events-none absolute inset-x-16 top-10 hidden h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/50 to-orange-400/0 md:block" />
            {s.steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative rounded-3xl border border-black/5 bg-white p-7 text-center shadow-sm transition-colors hover:border-cyan-400/30 hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-orange-500 font-heading text-lg font-black text-white shadow-lg shadow-cyan-500/20">
                  {i + 1}
                </div>
                <h4
                  className={cn(
                    "font-heading text-lg font-bold text-foreground",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {step.title}
                </h4>
                <p
                  className={cn(
                    "mt-2 text-sm leading-relaxed text-muted-foreground",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/contact">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={cn(
                "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-orange-500 px-8 py-3.5 text-sm font-bold text-white shadow-[0_0_32px_-6px_rgba(6,182,212,0.55)]",
                isRtl && "font-arabic-ui"
              )}
            >
              {s.ctaPrimary}
              <ArrowRight className={cn("size-4", isRtl && "rotate-180")} />
            </motion.span>
          </Link>
          <Link href="/services">
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={cn(
                "inline-block rounded-full border border-black/10 bg-white px-7 py-3.5 text-sm font-semibold text-foreground shadow-sm transition hover:border-cyan-400/40 hover:bg-cyan-50/50",
                isRtl && "font-arabic-ui"
              )}
            >
              {s.ctaSecondary}
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
