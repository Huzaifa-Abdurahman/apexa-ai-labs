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
  AnimatePresence,
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
  Zap,
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
  assistant: "from-cyan-500 to-blue-500 text-white shadow-cyan-500/25",
  software: "from-purple-500 to-fuchsia-500 text-white shadow-purple-500/25",
  automation: "from-blue-500 to-indigo-500 text-white shadow-blue-500/25",
  growth: "from-cyan-400 to-teal-500 text-white shadow-cyan-500/25",
};

const SECTOR_IMAGES: Record<string, string> = {
  hospitality: "/saudi-hotels.PNG",
  legal: "/law.jpg",
};

function AssistantCarousel({ imageAlt }: { imageAlt: string }) {
  const images = [
    "/smiling-chatbot-and-user-chatting-customer-support-automation-virtual-assistant-consultation.gif",
    "/robot-assistant.webp",
    "/robot.gif",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto w-40 shrink-0 sm:w-56 md:w-64 aspect-square flex items-center justify-center">
      <div className="pointer-events-none absolute inset-4 rounded-full bg-cyan-400/15 blur-2xl" />
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt={imageAlt}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 h-full w-full object-contain drop-shadow-xl"
        />
      </AnimatePresence>
      <div className="absolute -start-2 top-6 rounded-2xl border border-black/5 bg-white px-3 py-1.5 shadow-md z-10">
        <div className="flex items-center gap-1.5">
          <MessagesSquare className="size-3.5 text-emerald-500" />
          <span className="text-[10px] font-bold text-foreground">24/7</span>
        </div>
      </div>
    </div>
  );
}

function WebCarousel() {
  const images = [
    "/web/3205857-removebg-preview.png",
    "/web/3479661-removebg-preview.png",
    "/web/5012925-removebg-preview.png",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
        />
      </AnimatePresence>
    </div>
  );
}

export function HomeShowcase() {
  const { messages, isRtl } = useLocale();
  const s = messages.home.showcase;
  const [assistantCard, softwareCard, automationCard, growthCard] = s.cards;

  return (
    <section className="relative overflow-x-hidden overflow-y-hidden bg-background pt-12 md:pt-16 pb-24 md:pb-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.1),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(6,182,212,0.06),_transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 md:mb-16 w-full max-w-full md:max-w-3xl text-center px-2 md:px-0">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className={cn(
              "font-heading text-3xl sm:text-4xl font-bold leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-6xl",
              isRtl && "font-arabic-ui"
            )}
          >
            {s.title}{" "}
            <span className="bg-gradient-to-r from-purple-600 via-cyan-500 to-cyan-400 bg-clip-text text-transparent">
              {s.titleHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className={cn(
              "mt-4 md:mt-5 text-sm sm:text-base font-medium leading-relaxed text-muted-foreground md:text-lg",
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
              <div className="relative flex h-full flex-col gap-4 p-5 md:flex-row md:items-center md:p-6">
                <div className="relative z-10 min-w-0 flex-1">
                  <span
                    className={cn(
                      "mb-3 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 px-3 py-1 text-[11px] font-bold text-white shadow-lg shadow-purple-500/25",
                      isRtl && "font-arabic-ui"
                    )}
                  >
                    <SparklesIcon className="size-3" />
                    {assistantCard.badge}
                  </span>
                  <h3
                    className={cn(
                      "font-heading text-xl font-bold text-foreground md:text-2xl",
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

                <AssistantCarousel imageAlt={assistantCard.imageAlt} />
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
              <div className="flex h-full flex-col p-5">
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
                    "font-heading text-lg font-bold text-foreground",
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
              <div className="flex h-full flex-col p-5">
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
                    "font-heading text-lg font-bold text-foreground",
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
                <div className="relative mx-auto mt-4 w-48 flex-1 sm:w-56">
                  <Image
                    src="/sketchbook-male-designer-working-on-graphic-tablet-with-screen-1.gif"
                    alt={automationCard.title}
                    width={280}
                    height={280}
                    unoptimized
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
                <div className="flex min-w-0 flex-col justify-center p-5 md:p-6">
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
                      "font-heading text-lg font-bold text-foreground md:text-xl",
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

                <div className="relative flex min-h-[220px] min-w-0 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-emerald-50/50 p-4 md:min-h-0 md:p-5">
                  <div className="pointer-events-none absolute inset-8 rounded-full bg-emerald-400/10 blur-3xl" />
                  <div className="relative w-full h-full flex items-center justify-center">
                    <WebCarousel />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>


        </div>        {/* Compact Stats & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col lg:flex-row items-center justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {s.stats.map((stat: any) => (
              <div key={stat.label} className="flex flex-col md:flex-row items-center md:items-baseline gap-1 md:gap-2">
                <span className="font-heading text-xl md:text-2xl font-bold text-slate-800">{stat.value}<span className="text-purple-600">{stat.suffix}</span></span>
                <span className={cn("text-[10px] md:text-xs font-semibold uppercase tracking-wider text-muted-foreground", isRtl && "font-arabic-ui normal-case tracking-normal")}>{stat.label}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact">
              <span className={cn("inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 px-6 py-2.5 text-sm font-bold text-white shadow-sm transition hover:scale-105", isRtl && "font-arabic-ui")}>
                {s.ctaPrimary}
                <ArrowRight className={cn("size-3.5", isRtl && "rotate-180")} />
              </span>
            </Link>
            <Link href="/services">
              <span className={cn("inline-block rounded-full border border-black/10 bg-slate-50 px-6 py-2.5 text-sm font-semibold text-foreground shadow-sm transition hover:bg-slate-100", isRtl && "font-arabic-ui")}>
                {s.ctaSecondary}
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
