"use client";

import Image from "next/image";
import Link from "next/link";
import { forwardRef, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Building2,
  CheckCircle2,
  Code2,
  Factory,
  Globe,
  Hotel,
  MapPin,
  Mic,
  Network,
  Plane,
  Ship,
  Sparkles as SparklesIcon,
  Stethoscope,
  Store,
  Workflow,
  Zap,
  Boxes,
  PhoneCall,
  Database,
  Layers,
  MessageSquare,
} from "lucide-react";

import { AnimatedBeam } from "@/components/ui/animated-beam";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/ui/border-beam";
import { Cover } from "@/components/ui/cover";
import { DotPattern } from "@/components/ui/dot-pattern";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Marquee } from "@/components/ui/marquee";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Sparkles } from "@/components/ui/sparkles";
import { ServiceImageCarousel } from "@/components/ui/service-image-carousel";
import { useLocale } from "@/i18n/locale-provider";
import { cn } from "@/lib/utils";

type ServiceId =
  | "software"
  | "automations"
  | "apps"
  | "pipelines"
  | "web"
  | "voice";

type CityId = "uk" | "pakistan" | "dubai" | "usa" | "makkah";

const serviceMeta: Record<
  ServiceId,
  {
    icon: typeof Code2;
    image: string | string[];
    accent: string;
    glow: string;
  }
> = {
  software: {
    icon: Code2,
    image: [
      "/svc-software.webp",
      "/3d-pro-ai-programming-interface-machine-learning-development-smart-code-automation.png",
      "/3d-dashboard.png",
      "/saas-wWz-Cr0F.png"
    ],
    accent: "from-cyan-500 to-blue-600",
    glow: "bg-cyan-500/10",
  },
  automations: {
    icon: Bot,
    image: [
      "/smiling-chatbot-and-user-chatting-customer-support-automation-virtual-assistant-consultation.gif",
      "/svc-automations.webp",
      "/3d-casual-life-chatting-with-chatbot.gif",
      "/robot-assistant-and-phone-with-messages-virtual-support-automation.png"
    ],
    accent: "from-orange-500 to-amber-500",
    glow: "bg-orange-500/10",
  },
  apps: {
    icon: SparklesIcon,
    image: "/svc-apps.webp",
    accent: "from-emerald-500 to-teal-600",
    glow: "bg-emerald-500/10",
  },
  pipelines: {
    icon: Database,
    image: "/svc-pipelines.webp",
    accent: "from-sky-500 to-indigo-500",
    glow: "bg-sky-500/10",
  },
  web: {
    icon: Globe,
    image: [
      "/svc-web.webp",
      "/web/3205857-removebg-preview.png",
      "/web/3479661-removebg-preview.png",
      "/web/5012925-removebg-preview.png"
    ],
    accent: "from-violet-500 to-purple-600",
    glow: "bg-violet-500/10",
  },
  voice: {
    icon: Mic,
    image: "/svc-voice.webp",
    accent: "from-amber-500 to-orange-600",
    glow: "bg-amber-500/10",
  },
};

const cityMeta: Record<
  CityId,
  {
    image: string;
    icons: (typeof Hotel)[];
  }
> = {
  uk: { image: "/uk.PNG", icons: [Building2, Network, Globe, Database] },
  pakistan: { image: "/pakistan.PNG", icons: [Code2, Database, Workflow, CheckCircle2] },
  dubai: { image: "/dubai.jpg", icons: [Hotel, Store, Ship, Plane] },
  usa: { image: "/america.PNG", icons: [Building2, Store, Network, Database] },
  makkah: { image: "/uk.PNG", icons: [Hotel, Store, Stethoscope, Plane] },
};

const painIcons = [PhoneCall, Boxes, Zap, Layers] as const;

const BeamNode = forwardRef<
  HTMLDivElement,
  { className?: string; children: React.ReactNode }
>(function BeamNode({ className, children }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-14 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-800 shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
});

function WorkflowBeam() {
  const { t, isRtl } = useLocale();
  const containerRef = useRef<HTMLDivElement>(null);
  const a = useRef<HTMLDivElement>(null);
  const b = useRef<HTMLDivElement>(null);
  const c = useRef<HTMLDivElement>(null);
  const d = useRef<HTMLDivElement>(null);
  const e = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative flex h-[280px] w-full items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-white/50 p-6 backdrop-blur-sm"
    >
      <div className="flex w-full max-w-3xl items-center justify-between gap-2">
        <BeamNode ref={a}>
          <MessageSquare className="size-5 text-cyan-400" />
        </BeamNode>
        <BeamNode ref={b}>
          <Mic className="size-5 text-orange-400" />
        </BeamNode>
        <BeamNode ref={c} className="size-16 border-primary/40 bg-primary/10">
          <Bot className="size-7 text-primary" />
        </BeamNode>
        <BeamNode ref={d}>
          <Workflow className="size-5 text-fuchsia-400" />
        </BeamNode>
        <BeamNode ref={e}>
          <CheckCircle2 className="size-5 text-emerald-400" />
        </BeamNode>
      </div>
      <AnimatedBeam containerRef={containerRef} fromRef={a} toRef={c} curvature={-40} gradientStartColor="#06b6d4" gradientStopColor="#f97316" />
      <AnimatedBeam containerRef={containerRef} fromRef={b} toRef={c} curvature={40} gradientStartColor="#f97316" gradientStopColor="#06b6d4" />
      <AnimatedBeam containerRef={containerRef} fromRef={c} toRef={d} gradientStartColor="#06b6d4" gradientStopColor="#d946ef" />
      <AnimatedBeam containerRef={containerRef} fromRef={d} toRef={e} gradientStartColor="#d946ef" gradientStopColor="#34d399" />
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-4 flex justify-between px-4 text-[10px] font-bold uppercase tracking-wider text-slate-400 sm:px-8 sm:text-xs",
          isRtl && "font-arabic-ui normal-case tracking-normal"
        )}
      >
        <span>{t("servicesPage.beamChat")}</span>
        <span>{t("servicesPage.beamVoice")}</span>
        <span>{t("servicesPage.beamAi")}</span>
        <span>{t("servicesPage.beamWorkflow")}</span>
        <span>{t("servicesPage.beamDone")}</span>
      </div>
    </div>
  );
}

export default function Services() {
  const { t, messages, isRtl } = useLocale();
  const [activeCity, setActiveCity] = useState<CityId>("uk");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = useMemo(
    () =>
      messages.servicesPage.serviceItems.map((item) => ({
        ...item,
        ...serviceMeta[item.id as ServiceId],
      })),
    [messages]
  );

  const cities = useMemo(
    () =>
      messages.servicesPage.cities.map((c) => ({
        ...c,
        ...cityMeta[c.id as CityId],
      })),
    [messages]
  );

  const painsResolved = useMemo(
    () =>
      messages.servicesPage.painsResolved.map((item, i) => ({
        ...item,
        icon: painIcons[i] ?? Layers,
      })),
    [messages]
  );

  const faqs = messages.servicesPage.faqs;

  const city = useMemo(
    () => cities.find((c) => c.id === activeCity) ?? cities[0],
    [activeCity, cities]
  );

  const stats = [
    { label: t("servicesPage.statsYears"), value: 4, suffix: "+" },
    { label: t("servicesPage.statsCities"), value: 5, suffix: "" },
    { label: t("servicesPage.statsFocus"), value: 1, suffix: "" },
    { label: t("servicesPage.statsLines"), value: 6, suffix: "" },
  ];

  return (
    <div className="overflow-hidden pb-24">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-background pt-28 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.1),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(6,182,212,0.1),_transparent_45%)]" />
        <Sparkles
          className="absolute inset-0"
          density={45}
          speed={0.6}
          opacity={0.35}
          color="#8b5cf6"
        />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2 lg:gap-12">
          <div className={cn("text-center lg:text-start", isRtl && "lg:text-end")}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 shadow-sm">
              <MapPin className="size-3.5 text-primary" />
              <AnimatedShinyText
                className={cn(
                  "mx-0 max-w-none text-sm text-slate-600",
                  isRtl && "font-arabic-ui"
                )}
              >
                {t("servicesPage.badge")}
              </AnimatedShinyText>
            </div>

            <h1
              className={cn(
                "font-heading text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl",
                isRtl && "font-arabic-ui"
              )}
            >
              {t("servicesPage.title")}{" "}
              <Cover className="text-white">{t("servicesPage.titleHighlight")}</Cover>
            </h1>

            <p
              className={cn(
                "mx-auto mt-6 max-w-xl text-lg font-medium text-slate-600 md:text-xl lg:mx-0",
                isRtl && "font-arabic-ui"
              )}
            >
              {t("servicesPage.subtitle")}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Link href="/contact" className="inline-block">
                <InteractiveHoverButton
                  className={cn(
                    "border-slate-200 bg-slate-900 text-white hover:bg-slate-800",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {t("servicesPage.bookCta")}
                </InteractiveHoverButton>
              </Link>
              <a
                href="#cities"
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 hover:text-slate-900",
                  isRtl && "font-arabic-ui"
                )}
              >
                {t("servicesPage.exploreCities")} <ArrowRight className="size-4" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-purple-400/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 shadow-lg">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/robot.gif"
                  alt={isRtl ? "مساعد روبوت ذكي" : "AI robot assistant"}
                  className="absolute inset-0 h-full w-full object-contain object-center p-4 md:p-6"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                <div className="absolute bottom-4 start-4 end-4 flex flex-wrap gap-2">
                  {(isRtl
                    ? ["وكلاء ذكاء", "شات بوت", "برمجيات مخصصة"]
                    : ["AI agents", "Chatbots", "Custom software"]
                  ).map((label) => (
                    <span
                      key={label}
                      className={cn(
                        "rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[11px] font-bold text-slate-700 shadow-sm backdrop-blur-md",
                        isRtl && "font-arabic-ui"
                      )}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CITY MARQUEE */}
      <section className="relative border-y border-black/5 bg-background py-4">
        <Marquee pauseOnHover className="[--duration:28s]">
          {cities.map((c) => (
            <div
              key={c.id}
              className="mx-2 flex items-center gap-3 rounded-full border border-black/5 bg-white px-5 py-2.5 shadow-sm"
            >
              <span className="size-2 rounded-full bg-primary" />
              <span
                className={cn(
                  "font-heading text-sm font-semibold text-foreground",
                  isRtl && "font-arabic-ui"
                )}
              >
                {c.name}
              </span>
              <span className="font-arabic-ui text-xs text-muted-foreground" dir="rtl">
                {c.arabic}
              </span>
            </div>
          ))}
        </Marquee>
      </section>

      {/* STATS */}
      <section className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-16 md:grid-cols-4 md:gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-md"
          >
            <div
              className={cn(
                "font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl",
                isRtl && "font-arabic-ui"
              )}
            >
              <NumberTicker value={stat.value} />
              <span className="text-primary">{stat.suffix}</span>
            </div>
            <p
              className={cn(
                "mt-2 text-sm font-medium text-muted-foreground",
                isRtl && "font-arabic-ui"
              )}
            >
              {stat.label}
            </p>
            <BorderBeam size={80} duration={8} colorFrom="#06b6d4" colorTo="#f97316" />
          </div>
        ))}
      </section>

      {/* CORE SERVICES — glassmorphic cards */}
      <section className="relative mx-auto max-w-7xl px-4 pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(6,182,212,0.08),_transparent_55%)]" />
        <div className="relative z-10 mb-12 max-w-3xl">
          <Badge className={cn("mb-4 bg-primary/10 text-primary", isRtl && "font-arabic-ui")}>
            {t("servicesPage.deliverBadge")}
          </Badge>
          <h2
            className={cn(
              "font-heading text-3xl font-bold tracking-tight text-foreground md:text-5xl",
              isRtl && "font-arabic-ui"
            )}
          >
            {t("servicesPage.deliverTitle")}{" "}
            <span className="text-gradient">{t("servicesPage.deliverTitleHighlight")}</span>
          </h2>
          <p
            className={cn("mt-2 text-lg text-primary", isRtl && "font-arabic-ui")}
            dir={isRtl ? "rtl" : undefined}
          >
            {t("servicesPage.deliverSubtitleAr")}
          </p>
          <p
            className={cn(
              "mt-4 text-lg font-medium text-muted-foreground",
              isRtl && "font-arabic-ui"
            )}
          >
            {t("servicesPage.deliverBody")}
          </p>
        </div>

        <div className="relative z-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group relative overflow-hidden rounded-[28px] border border-white/50 bg-white/55 shadow-[0_8px_40px_-12px_rgba(15,23,42,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/75 hover:shadow-[0_20px_50px_-16px_rgba(6,182,212,0.28)]"
              >
                <div className={cn("pointer-events-none absolute -end-10 -top-10 size-40 rounded-full blur-3xl", service.glow)} />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/70 via-white/20 to-transparent" />

                <Link href={`/services/${service.id}`} className="relative z-10 block">
                  <div className="relative flex aspect-[16/11] items-center justify-center overflow-hidden bg-slate-50">
                    <div className={cn("absolute inset-0 opacity-40 blur-2xl", service.glow)} />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/90 to-transparent" />
                    {Array.isArray(service.image) ? (
                      <ServiceImageCarousel 
                        images={service.image} 
                        title={service.title} 
                        className="relative z-10 h-[78%] w-[88%] transition duration-500 group-hover:scale-[1.04]"
                      />
                    ) : (
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={420}
                        height={300}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="relative z-10 h-[78%] w-auto max-w-[88%] object-contain drop-shadow-xl transition duration-500 group-hover:scale-[1.04]"
                      />
                    )}
                    <div
                      className={cn(
                        "absolute bottom-4 start-4 z-20 flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg ring-1 ring-white/30",
                        service.accent
                      )}
                    >
                      <Icon className="size-5" />
                    </div>
                    <span className="absolute end-4 top-4 z-20 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-700 shadow-sm backdrop-blur-md">
                      0{index + 1}
                    </span>
                  </div>
                </Link>

                <div className="relative z-10 p-6 pt-5">
                  <Link href={`/services/${service.id}`}>
                    <h3
                      className={cn(
                        "font-heading text-xl font-bold text-foreground transition hover:text-primary",
                        isRtl && "font-arabic-ui"
                      )}
                    >
                      {service.title}
                    </h3>
                  </Link>
                  <p
                    className={cn(
                      "mt-2 text-sm leading-relaxed text-muted-foreground",
                      isRtl && "font-arabic-ui"
                    )}
                  >
                    {service.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.features.map((f) => (
                      <span
                        key={f}
                        className={cn(
                          "rounded-full border border-black/5 bg-white/70 px-3 py-1 text-[11px] font-semibold text-foreground/75 backdrop-blur-sm",
                          isRtl && "font-arabic-ui"
                        )}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                    <Link
                      href="/contact"
                      className={cn(
                        "text-sm font-medium text-muted-foreground transition hover:text-foreground",
                        isRtl && "font-arabic-ui"
                      )}
                    >
                      {t("servicesPage.discussService")}
                    </Link>
                    <Link
                      href={`/services/${service.id}`}
                      aria-label={t("servicesPage.learnMore")}
                      className="inline-flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/25 transition duration-300 hover:scale-105 hover:shadow-cyan-500/40 group-hover:from-cyan-400 group-hover:to-orange-500"
                    >
                      <ArrowRight className={cn("size-5", isRtl && "rotate-180")} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* INDUSTRY SECTORS (Moved from Home) */}
      <section className="relative mx-auto max-w-7xl px-4 pb-24">
        <div className="mb-12 text-center">
          <Badge className={cn("mb-4 bg-primary/10 text-primary", isRtl && "font-arabic-ui")}>
            {messages.home.showcase.sectorsEyebrow}
          </Badge>
          <h2
            className={cn(
              "font-heading text-3xl font-bold tracking-tight text-foreground md:text-5xl",
              isRtl && "font-arabic-ui"
            )}
          >
            {messages.home.showcase.sectorsTitle}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {messages.home.showcase.sectors.map((sector, i) => (
            <motion.div
              key={sector.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 * i }}
              className="group relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-3xl border border-black/5 shadow-lg"
            >
              <Image
                src={
                  sector.id === "hospitality" ? "/uk.PNG" : "/law.jpg"
                }
                alt={sector.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="relative z-10 p-8">
                <span
                  className={cn(
                    "mb-3 inline-block rounded-full border border-purple-300/40 bg-purple-500/30 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white backdrop-blur-sm",
                    isRtl && "font-arabic-ui normal-case tracking-normal"
                  )}
                >
                  {messages.home.showcase.sectorsEyebrow}
                </span>
                <h3
                  className={cn(
                    "font-heading text-2xl font-bold text-white md:text-3xl",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {sector.title}
                </h3>
                <p
                  className={cn(
                    "mt-2 text-base leading-relaxed text-white/80",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {sector.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CITY SOLUTIONS */}
      <section id="cities" className="relative overflow-hidden bg-background py-24 text-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.08),_transparent_60%)]" />
        <DotPattern
          width={20}
          height={20}
          cr={0.8}
          className="text-slate-200/50 [mask-image:radial-gradient(ellipse_at_top,white,transparent_70%)]"
        />
        {/* decorative vector lines */}
        <svg className="pointer-events-none absolute -right-20 top-20 h-[420px] w-[420px] opacity-20" viewBox="0 0 400 400" fill="none" aria-hidden>
          <circle cx="200" cy="200" r="160" stroke="#06b6d4" strokeWidth="1" />
          <circle cx="200" cy="200" r="110" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="6 6" />
          <path d="M200 40 L220 160 L340 200 L220 240 L200 360 L180 240 L60 200 L180 160 Z" stroke="#0f172a" strokeWidth="1" opacity="0.1" />
        </svg>

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <Badge
              className={cn(
                "mb-4 border-slate-200 bg-white text-primary shadow-sm",
                isRtl && "font-arabic-ui"
              )}
            >
              {t("servicesPage.citiesBadge")}
            </Badge>
            <h2
              className={cn(
                "font-heading text-3xl font-bold tracking-tight md:text-5xl",
                isRtl && "font-arabic-ui"
              )}
            >
              {t("servicesPage.citiesTitle")}
            </h2>
            <p
              className={cn("mt-2 text-primary font-medium", isRtl && "font-arabic-ui")}
              dir={isRtl ? "rtl" : undefined}
            >
              {t("servicesPage.citiesSubtitleAr")}
            </p>
            <p
              className={cn("mt-4 text-lg text-slate-500", isRtl && "font-arabic-ui")}
            >
              {t("servicesPage.citiesBody")}
            </p>
          </div>

          <div className="mb-8 flex gap-3 overflow-x-auto pb-2 scrollbar-none">
            {cities.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCity(c.id as CityId)}
                className={cn(
                  "group relative flex min-w-[148px] flex-col overflow-hidden rounded-2xl border text-left transition",
                  activeCity === c.id
                    ? "border-primary/40 shadow-md ring-1 ring-primary/30"
                    : "border-slate-200 hover:border-slate-300"
                )}
              >
                <div className="relative h-16 w-full overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.imageAlt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="160px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                </div>
                <div
                  className={cn(
                    "px-3 py-2 text-sm font-semibold",
                    activeCity === c.id ? "bg-primary text-white" : "bg-white text-slate-700",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {c.name}
                </div>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={city.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl"
            >
              <BorderBeam size={120} duration={10} colorFrom="#8b5cf6" colorTo="#06b6d4" borderWidth={1.5} />

              <div className="grid lg:grid-cols-12">
                {/* Image panel */}
                <div className="relative min-h-[280px] overflow-hidden lg:col-span-5 lg:min-h-[520px]">
                  <Image
                    src={city.image}
                    alt={city.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-white/35 lg:to-white" />
                  <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                    <p className="font-arabic-ui text-sm font-semibold text-primary" dir="rtl">
                      {city.arabic}
                    </p>
                    <h3
                      className={cn(
                        "font-heading text-3xl font-bold md:text-4xl text-slate-900",
                        isRtl && "font-arabic-ui"
                      )}
                    >
                      {city.name}
                    </h3>
                    <p
                      className={cn(
                        "mt-2 max-w-sm text-sm text-slate-600 font-medium",
                        isRtl && "font-arabic-ui"
                      )}
                    >
                      {city.tagline}
                    </p>
                    <div className="mt-4 flex gap-2">
                      {city.icons.map((Icon, i) => (
                        <div
                          key={i}
                          className="flex size-10 items-center justify-center rounded-xl border border-slate-200 bg-white/80 backdrop-blur shadow-sm"
                        >
                          <Icon className="size-4 text-primary" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-7 p-6 md:p-8 lg:p-10">
                  <p
                    className={cn(
                      "rounded-2xl border border-primary/10 bg-primary/5 p-4 text-sm leading-relaxed text-slate-800 font-medium",
                      isRtl && "font-arabic-ui"
                    )}
                  >
                    {city.focus}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {city.industries.map((ind) => (
                      <Badge
                        key={ind}
                        className={cn(
                          "border-slate-200 bg-slate-50 text-slate-700 shadow-sm",
                          isRtl && "font-arabic-ui"
                        )}
                      >
                        {ind}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-5 md:grid-cols-2">
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                      <h4
                        className={cn(
                          "mb-4 flex items-center gap-2 font-heading text-base font-semibold text-orange-600",
                          isRtl && "font-arabic-ui"
                        )}
                      >
                        <Zap className="size-4" /> {t("servicesPage.painTitle")}
                      </h4>
                      <ul className="space-y-3">
                        {city.pains.map((pain) => (
                          <li
                            key={pain}
                            className={cn(
                              "flex gap-3 text-sm leading-relaxed text-slate-600 font-medium",
                              isRtl && "font-arabic-ui"
                            )}
                          >
                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-orange-400" />
                            {pain}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                      <h4
                        className={cn(
                          "mb-4 flex items-center gap-2 font-heading text-base font-semibold text-cyan-600",
                          isRtl && "font-arabic-ui"
                        )}
                      >
                        <CheckCircle2 className="size-4" /> {t("servicesPage.solveTitle")}
                      </h4>
                      <ul className="space-y-3">
                        {city.solutions.map((sol) => (
                          <li
                            key={sol}
                            className={cn(
                              "flex gap-3 text-sm leading-relaxed text-slate-600 font-medium",
                              isRtl && "font-arabic-ui"
                            )}
                          >
                            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                            {sol}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className={cn(
                      "mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary shadow-sm",
                      isRtl && "font-arabic-ui"
                    )}
                  >
                    {t("servicesPage.talkCity", { city: city.name })}{" "}
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* WORKFLOW / INTEGRATION */}
      <section className="mx-auto max-w-7xl px-4 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Badge className={cn("mb-4 bg-secondary/15 text-secondary", isRtl && "font-arabic-ui")}>
              {t("servicesPage.workflowBadge")}
            </Badge>
            <h2
              className={cn(
                "font-heading text-3xl font-bold tracking-tight text-foreground md:text-5xl",
                isRtl && "font-arabic-ui"
              )}
            >
              {t("servicesPage.workflowTitle")}
            </h2>
            <p
              className={cn(
                "mt-4 text-lg font-medium text-muted-foreground",
                isRtl && "font-arabic-ui"
              )}
            >
              {t("servicesPage.workflowBody")}
            </p>
            <ul className="mt-8 space-y-3">
              {messages.servicesPage.workflowPoints.map((item) => (
                <li
                  key={item}
                  className={cn(
                    "flex items-start gap-3 text-sm font-medium text-foreground/80",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <WorkflowBeam />
        </div>
      </section>

      {/* PAIN → SCALE */}
      <section className="border-y border-black/5 bg-muted/40 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2
              className={cn(
                "font-heading text-3xl font-bold tracking-tight text-foreground md:text-5xl",
                isRtl && "font-arabic-ui"
              )}
            >
              {t("servicesPage.painsTitle")}
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {painsResolved.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative overflow-hidden rounded-3xl border border-black/5 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <h3
                    className={cn(
                      "font-heading text-lg font-bold text-foreground",
                      isRtl && "font-arabic-ui"
                    )}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 text-sm leading-relaxed text-muted-foreground",
                      isRtl && "font-arabic-ui"
                    )}
                  >
                    {item.result}
                  </p>
                  <BorderBeam
                    size={70}
                    duration={9}
                    delay={i}
                    colorFrom="#06b6d4"
                    colorTo="#f97316"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-24">
        <h2
          className={cn(
            "mb-10 text-center font-heading text-3xl font-bold tracking-tight text-foreground md:text-5xl",
            isRtl && "font-arabic-ui"
          )}
        >
          {t("servicesPage.faqTitle")}
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const open = openFaq === index;
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(open ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span
                    className={cn(
                      "font-heading text-base font-semibold text-foreground md:text-lg",
                      isRtl && "font-arabic-ui"
                    )}
                  >
                    {faq.q}
                  </span>
                  <span className={cn("text-primary transition", open && "rotate-45")}>+</span>
                </button>
                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p
                        className={cn(
                          "px-5 pb-5 text-sm leading-relaxed text-muted-foreground md:text-base",
                          isRtl && "font-arabic-ui"
                        )}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#05070b] px-6 py-14 text-center text-white md:px-16">
          <Sparkles className="absolute inset-0" density={80} opacity={0.35} color="#f97316" />
          <BorderBeam size={140} duration={9} colorFrom="#06b6d4" colorTo="#f97316" borderWidth={2} />
          <div className="relative z-10">
            <h2
              className={cn(
                "font-heading text-3xl font-bold tracking-tight md:text-5xl",
                isRtl && "font-arabic-ui"
              )}
            >
              {t("servicesPage.ctaTitle")}
            </h2>
            <p
              className={cn(
                "mx-auto mt-4 max-w-2xl text-white/65",
                isRtl && "font-arabic-ui"
              )}
            >
              {t("servicesPage.ctaBody")}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="inline-block">
                <InteractiveHoverButton
                  className={cn(
                    "border-white/20 bg-white text-black",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {t("servicesPage.ctaPrimary")}
                </InteractiveHoverButton>
              </Link>
              <Link
                href="/industries"
                className={cn(
                  "inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white",
                  isRtl && "font-arabic-ui"
                )}
              >
                {t("servicesPage.ctaSecondary")} <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
