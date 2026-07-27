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
import { TextAnimate } from "@/components/ui/text-animate";
import { useLocale } from "@/i18n/locale-provider";
import { cn } from "@/lib/utils";

type ServiceVectorId =
  | "software"
  | "automations"
  | "apps"
  | "pipelines"
  | "workflows"
  | "voice";

type CityId = "makkah" | "madinah" | "jeddah" | "dammam" | "riyadh";

/** Distinct vector illustration for each service card */
function ServiceVector({ id }: { id: ServiceVectorId }) {
  const frame = "h-full w-full";

  if (id === "software") {
    return (
      <svg className={frame} viewBox="0 0 360 200" fill="none" aria-hidden>
        <rect x="28" y="28" width="170" height="120" rx="14" fill="#fff" stroke="#06b6d4" strokeWidth="2" />
        <rect x="28" y="28" width="170" height="28" rx="14" fill="#06b6d4" />
        <circle cx="46" cy="42" r="4" fill="#fff" opacity="0.9" />
        <circle cx="60" cy="42" r="4" fill="#fff" opacity="0.55" />
        <rect x="44" y="72" width="70" height="10" rx="3" fill="#06b6d4" opacity="0.35" />
        <rect x="44" y="92" width="110" height="8" rx="3" fill="#0f172a" opacity="0.12" />
        <rect x="44" y="108" width="90" height="8" rx="3" fill="#0f172a" opacity="0.1" />
        <rect x="44" y="124" width="50" height="10" rx="5" fill="#f97316" />
        <rect x="210" y="48" width="110" height="88" rx="12" fill="#fff" stroke="#f97316" strokeWidth="2" />
        <path d="M230 78 H300 M230 98 H280 M230 118 H290" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" opacity="0.2" />
        <circle cx="300" cy="48" r="16" fill="#f97316" />
        <path d="M294 48 L298 52 L308 42" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (id === "automations") {
    return (
      <svg className={frame} viewBox="0 0 360 200" fill="none" aria-hidden>
        <circle cx="90" cy="100" r="42" fill="#06b6d4" opacity="0.15" stroke="#06b6d4" strokeWidth="2" />
        <circle cx="90" cy="100" r="22" fill="#06b6d4" />
        <path d="M80 100 H100 M90 90 V110" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        <path d="M132 100 H168" stroke="#0f172a" strokeWidth="2" strokeDasharray="5 4" opacity="0.35" />
        <rect x="168" y="58" width="88" height="84" rx="16" fill="#fff" stroke="#f97316" strokeWidth="2" />
        <circle cx="212" cy="88" r="14" fill="#f97316" opacity="0.2" stroke="#f97316" strokeWidth="2" />
        <path d="M206 88 L210 92 L220 82" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
        <rect x="186" y="112" width="52" height="8" rx="4" fill="#0f172a" opacity="0.12" />
        <rect x="194" y="126" width="36" height="8" rx="4" fill="#06b6d4" opacity="0.4" />
        <path d="M256 100 H286" stroke="#0f172a" strokeWidth="2" strokeDasharray="5 4" opacity="0.35" />
        <circle cx="310" cy="100" r="28" fill="#fff" stroke="#06b6d4" strokeWidth="2" />
        <path d="M298 100 C298 92 304 86 310 86 C316 86 322 92 322 100" stroke="#06b6d4" strokeWidth="2.5" />
        <circle cx="310" cy="108" r="4" fill="#f97316" />
      </svg>
    );
  }

  if (id === "apps") {
    return (
      <svg className={frame} viewBox="0 0 360 200" fill="none" aria-hidden>
        <rect x="118" y="18" width="100" height="164" rx="22" fill="#0f172a" />
        <rect x="124" y="34" width="88" height="132" rx="6" fill="#ecfeff" />
        <rect x="138" y="24" width="36" height="5" rx="2.5" fill="#64748b" />
        <rect x="136" y="48" width="64" height="10" rx="3" fill="#06b6d4" opacity="0.5" />
        <rect x="136" y="66" width="48" height="7" rx="2" fill="#0f172a" opacity="0.12" />
        <rect x="136" y="90" width="64" height="36" rx="8" fill="#06b6d4" opacity="0.18" stroke="#06b6d4" strokeWidth="1.5" />
        <circle cx="154" cy="108" r="8" fill="#06b6d4" />
        <rect x="168" y="102" width="24" height="5" rx="2" fill="#0f172a" opacity="0.2" />
        <rect x="168" y="112" width="18" height="4" rx="2" fill="#0f172a" opacity="0.12" />
        <rect x="136" y="136" width="64" height="18" rx="9" fill="#f97316" />
        <circle cx="250" cy="56" r="20" fill="#f97316" opacity="0.2" stroke="#f97316" strokeWidth="2" />
        <path d="M250 46 V66 M240 56 H260" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="86" cy="140" r="16" fill="#06b6d4" opacity="0.2" stroke="#06b6d4" strokeWidth="2" />
        <path d="M80 140 L84 144 L94 134" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (id === "pipelines") {
    return (
      <svg className={frame} viewBox="0 0 360 200" fill="none" aria-hidden>
        <ellipse cx="72" cy="58" rx="36" ry="14" fill="#06b6d4" opacity="0.25" stroke="#06b6d4" strokeWidth="2" />
        <path d="M36 58 V98 C36 106 52 112 72 112 C92 112 108 106 108 98 V58" fill="#06b6d4" opacity="0.12" stroke="#06b6d4" strokeWidth="2" />
        <ellipse cx="72" cy="98" rx="36" ry="14" fill="#06b6d4" opacity="0.2" stroke="#06b6d4" strokeWidth="2" />
        <ellipse cx="72" cy="128" rx="36" ry="14" fill="#06b6d4" opacity="0.15" stroke="#06b6d4" strokeWidth="2" />
        <path d="M36 128 V148 C36 156 52 162 72 162 C92 162 108 156 108 148 V128" fill="none" stroke="#06b6d4" strokeWidth="2" />
        <path d="M112 100 H150" stroke="#0f172a" strokeWidth="2" strokeDasharray="4 4" opacity="0.3" />
        <path d="M150 60 V140" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />
        <circle cx="150" cy="60" r="7" fill="#f97316" />
        <circle cx="150" cy="100" r="7" fill="#06b6d4" />
        <circle cx="150" cy="140" r="7" fill="#f97316" />
        <path d="M157 100 H190" stroke="#0f172a" strokeWidth="2" strokeDasharray="4 4" opacity="0.3" />
        <rect x="190" y="48" width="120" height="104" rx="14" fill="#fff" stroke="#0f172a" strokeWidth="1.5" opacity="0.9" />
        <path d="M210 130 L230 80 L250 110 L270 70 L290 120" stroke="#06b6d4" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="230" cy="80" r="4" fill="#f97316" />
        <circle cx="270" cy="70" r="4" fill="#06b6d4" />
        <rect x="210" y="148" width="80" height="8" rx="4" fill="#0f172a" opacity="0.1" />
      </svg>
    );
  }

  if (id === "workflows") {
    return (
      <svg className={frame} viewBox="0 0 360 200" fill="none" aria-hidden>
        <rect x="36" y="40" width="72" height="40" rx="12" fill="#06b6d4" />
        <rect x="48" y="54" width="48" height="6" rx="3" fill="#fff" opacity="0.85" />
        <path d="M72 80 V104" stroke="#0f172a" strokeWidth="2" opacity="0.25" />
        <rect x="36" y="104" width="72" height="40" rx="12" fill="#fff" stroke="#06b6d4" strokeWidth="2" />
        <rect x="48" y="118" width="40" height="6" rx="3" fill="#06b6d4" opacity="0.45" />
        <path d="M108 124 H148" stroke="#0f172a" strokeWidth="2" strokeDasharray="4 4" opacity="0.3" />
        <rect x="148" y="84" width="72" height="40" rx="12" fill="#f97316" />
        <rect x="160" y="98" width="48" height="6" rx="3" fill="#fff" opacity="0.85" />
        <path d="M184 124 V148" stroke="#0f172a" strokeWidth="2" opacity="0.25" />
        <path d="M184 148 H232" stroke="#0f172a" strokeWidth="2" opacity="0.25" />
        <path d="M232 148 V100" stroke="#0f172a" strokeWidth="2" opacity="0.25" />
        <rect x="232" y="40" width="72" height="40" rx="12" fill="#fff" stroke="#f97316" strokeWidth="2" />
        <rect x="244" y="54" width="40" height="6" rx="3" fill="#f97316" opacity="0.5" />
        <rect x="232" y="128" width="72" height="40" rx="12" fill="#fff" stroke="#06b6d4" strokeWidth="2" />
        <circle cx="268" cy="148" r="8" fill="#06b6d4" />
        <path d="M264 148 L267 151 L274 144" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // voice
  return (
    <svg className={frame} viewBox="0 0 360 200" fill="none" aria-hidden>
      <circle cx="110" cy="100" r="54" fill="#06b6d4" opacity="0.12" />
      <rect x="92" y="58" width="36" height="56" rx="18" fill="#06b6d4" />
      <path d="M78 100 C78 122 92 138 110 138 C128 138 142 122 142 100" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" />
      <path d="M110 138 V156" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" />
      <path d="M96 156 H124" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" />
      <path d="M168 70 C190 90 190 110 168 130" stroke="#f97316" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <path d="M186 58 C218 86 218 114 186 142" stroke="#f97316" strokeWidth="3" strokeLinecap="round" opacity="0.45" />
      <rect x="220" y="48" width="100" height="104" rx="14" fill="#fff" stroke="#0f172a" strokeWidth="1.5" opacity="0.95" />
      <circle cx="244" cy="72" r="10" fill="#06b6d4" opacity="0.25" stroke="#06b6d4" strokeWidth="2" />
      <rect x="262" y="66" width="42" height="6" rx="3" fill="#0f172a" opacity="0.15" />
      <rect x="262" y="78" width="28" height="5" rx="2.5" fill="#0f172a" opacity="0.1" />
      <rect x="236" y="100" width="68" height="18" rx="9" fill="#ecfeff" stroke="#06b6d4" strokeWidth="1.5" />
      <rect x="236" y="126" width="52" height="14" rx="7" fill="#fff7ed" stroke="#f97316" strokeWidth="1.5" />
    </svg>
  );
}

const serviceMeta: Record<
  ServiceVectorId,
  {
    icon: typeof Code2;
    vector: ServiceVectorId;
    image: string;
    accent: string;
    canvas: string;
  }
> = {
  software: {
    icon: Code2,
    vector: "software",
    image: "/deal.PNG",
    accent: "from-cyan-500 to-blue-600",
    canvas: "from-cyan-50 via-sky-50 to-white",
  },
  automations: {
    icon: Bot,
    vector: "automations",
    image: "/s1.PNG",
    accent: "from-orange-500 to-amber-500",
    canvas: "from-orange-50 via-amber-50 to-white",
  },
  apps: {
    icon: SparklesIcon,
    vector: "apps",
    image: "/s2.PNG",
    accent: "from-fuchsia-500 to-purple-600",
    canvas: "from-fuchsia-50 via-cyan-50 to-white",
  },
  pipelines: {
    icon: Database,
    vector: "pipelines",
    image: "/data.jpg",
    accent: "from-teal-500 to-cyan-600",
    canvas: "from-teal-50 via-cyan-50 to-white",
  },
  workflows: {
    icon: Workflow,
    vector: "workflows",
    image: "/s3.PNG",
    accent: "from-sky-500 to-indigo-500",
    canvas: "from-sky-50 via-indigo-50 to-white",
  },
  voice: {
    icon: Mic,
    vector: "voice",
    image: "/deal1.PNG",
    accent: "from-amber-500 to-orange-600",
    canvas: "from-amber-50 via-orange-50 to-white",
  },
};

const cityMeta: Record<
  CityId,
  {
    image: string;
    icons: (typeof Hotel)[];
  }
> = {
  makkah: { image: "/hu.PNG", icons: [Hotel, Store, Stethoscope, Plane] },
  madinah: { image: "/hotel.jpg", icons: [Hotel, Stethoscope, Plane, Store] },
  jeddah: { image: "/tranposttaion.jpg", icons: [Ship, Store, Building2, Stethoscope] },
  dammam: { image: "/manufacturing.jpg", icons: [Factory, Building2, Ship, Stethoscope] },
  riyadh: { image: "/ksa.jfif", icons: [Building2, Network, Stethoscope, Store] },
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
        "z-10 flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-[#12151c] text-white shadow-xl",
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
      className="relative flex h-[280px] w-full items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#07090e] p-6"
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
          "pointer-events-none absolute inset-x-0 bottom-4 flex justify-between px-4 text-[10px] font-medium uppercase tracking-wider text-white/40 sm:px-8 sm:text-xs",
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
  const [activeCity, setActiveCity] = useState<CityId>("makkah");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = useMemo(
    () =>
      messages.servicesPage.serviceItems.map((item) => ({
        ...item,
        ...serviceMeta[item.id as ServiceVectorId],
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
      <section className="relative isolate min-h-[78vh] flex items-center justify-center overflow-hidden bg-[#05070b] pt-28 pb-20">
        <Sparkles
          className="absolute inset-0"
          density={120}
          speed={0.8}
          opacity={0.45}
          color="#06b6d4"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(6,182,212,0.18),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(249,115,22,0.14),_transparent_45%)]" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur">
            <MapPin className="size-3.5 text-primary" />
            <AnimatedShinyText
              className={cn(
                "mx-0 max-w-none text-sm text-white/70 dark:text-white/70",
                isRtl && "font-arabic-ui"
              )}
            >
              {t("servicesPage.badge")}
            </AnimatedShinyText>
          </div>

          <h1
            className={cn(
              "font-heading text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl",
              isRtl && "font-arabic-ui"
            )}
          >
            {t("servicesPage.title")}{" "}
            <Cover className="text-neutral-900">{t("servicesPage.titleHighlight")}</Cover>
          </h1>

          <TextAnimate
            animation="blurInUp"
            by="word"
            className={cn(
              "mx-auto mt-6 max-w-2xl text-lg font-medium text-white/65 md:text-xl",
              isRtl && "font-arabic-ui"
            )}
            as="p"
          >
            {t("servicesPage.subtitle")}
          </TextAnimate>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="inline-block">
              <InteractiveHoverButton
                className={cn(
                  "border-white/15 bg-white text-black hover:bg-white",
                  isRtl && "font-arabic-ui"
                )}
              >
                {t("servicesPage.bookCta")}
              </InteractiveHoverButton>
            </Link>
            <a
              href="#cities"
              className={cn(
                "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10",
                isRtl && "font-arabic-ui"
              )}
            >
              {t("servicesPage.exploreCities")} <ArrowRight className="size-4" />
            </a>
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
            className="relative overflow-hidden rounded-3xl border border-black/5 bg-white p-6 shadow-sm"
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

      {/* CORE SERVICES */}
      <section className="relative mx-auto max-w-7xl px-4 pb-24">
        <DotPattern
          width={22}
          height={22}
          cr={1}
          className="text-cyan-500/15 [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]"
        />
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
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
                className="group relative overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Vector illustration canvas */}
                <div
                  className={cn(
                    "relative aspect-[16/10] overflow-hidden bg-gradient-to-br",
                    service.canvas
                  )}
                >
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    aria-hidden
                    className="object-cover opacity-[0.12] transition duration-700 group-hover:scale-105 group-hover:opacity-[0.18]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(6,182,212,0.18),_transparent_45%)]" />
                  <div className="relative z-10 flex h-full items-center justify-center p-4 md:p-5">
                    <div className="h-full w-full max-w-[340px] transition duration-500 group-hover:scale-[1.03]">
                      <ServiceVector id={service.vector} />
                    </div>
                  </div>
                  <div
                    className={cn(
                      "absolute bottom-4 left-4 z-20 flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg ring-1 ring-black/5",
                      service.accent
                    )}
                  >
                    <Icon className="size-5" />
                  </div>
                  <span className="absolute right-4 top-4 z-20 rounded-full border border-black/5 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-foreground/70 backdrop-blur">
                    0{index + 1}
                  </span>
                </div>
                <div className="p-6">
                  <h3
                    className={cn(
                      "font-heading text-xl font-bold text-foreground",
                      isRtl && "font-arabic-ui"
                    )}
                  >
                    {service.title}
                  </h3>
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
                      <Badge
                        key={f}
                        variant="secondary"
                        className={cn("bg-muted text-foreground/80", isRtl && "font-arabic-ui")}
                      >
                        {f}
                      </Badge>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className={cn(
                      "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:gap-3",
                      isRtl && "font-arabic-ui"
                    )}
                  >
                    {t("servicesPage.discussService")} <ArrowRight className="size-4" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* CITY SOLUTIONS */}
      <section id="cities" className="relative overflow-hidden bg-[#05070b] py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.12),_transparent_60%)]" />
        <DotPattern
          width={20}
          height={20}
          cr={0.8}
          className="text-white/10 [mask-image:radial-gradient(ellipse_at_top,white,transparent_70%)]"
        />
        {/* decorative vector lines */}
        <svg className="pointer-events-none absolute -right-20 top-20 h-[420px] w-[420px] opacity-20" viewBox="0 0 400 400" fill="none" aria-hidden>
          <circle cx="200" cy="200" r="160" stroke="#06b6d4" strokeWidth="1" />
          <circle cx="200" cy="200" r="110" stroke="#f97316" strokeWidth="1" strokeDasharray="6 6" />
          <path d="M200 40 L220 160 L340 200 L220 240 L200 360 L180 240 L60 200 L180 160 Z" stroke="white" strokeWidth="1" opacity="0.5" />
        </svg>

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <Badge
              className={cn(
                "mb-4 border-white/10 bg-white/10 text-primary",
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
              className={cn("mt-2 text-primary", isRtl && "font-arabic-ui")}
              dir={isRtl ? "rtl" : undefined}
            >
              {t("servicesPage.citiesSubtitleAr")}
            </p>
            <p
              className={cn("mt-4 text-lg text-white/60", isRtl && "font-arabic-ui")}
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
                    ? "border-primary/60 shadow-lg shadow-primary/20 ring-1 ring-primary/40"
                    : "border-white/10 hover:border-white/25"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
                </div>
                <div
                  className={cn(
                    "px-3 py-2 text-sm font-semibold",
                    activeCity === c.id ? "bg-primary text-white" : "bg-[#0c1017] text-white/75",
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
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0c1017] shadow-2xl"
            >
              <BorderBeam size={120} duration={10} colorFrom="#06b6d4" colorTo="#f97316" borderWidth={1.5} />

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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1017] via-[#0c1017]/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#0c1017]/35 lg:to-[#0c1017]" />
                  {/* vector overlay */}
                  <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-25" aria-hidden>
                    <defs>
                      <pattern id={`city-grid-${city.id}`} width="32" height="32" patternUnits="userSpaceOnUse">
                        <path d="M32 0H0V32" fill="none" stroke="white" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#city-grid-${city.id})`} />
                    <circle cx="85%" cy="18%" r="60" fill="none" stroke="#06b6d4" strokeWidth="1" opacity="0.6" />
                    <circle cx="85%" cy="18%" r="36" fill="none" stroke="#f97316" strokeWidth="1" strokeDasharray="4 4" opacity="0.7" />
                  </svg>
                  <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                    <p className="font-arabic-ui text-sm font-semibold text-primary" dir="rtl">
                      {city.arabic}
                    </p>
                    <h3
                      className={cn(
                        "font-heading text-3xl font-bold md:text-4xl",
                        isRtl && "font-arabic-ui"
                      )}
                    >
                      {city.name}
                    </h3>
                    <p
                      className={cn(
                        "mt-2 max-w-sm text-sm text-white/75",
                        isRtl && "font-arabic-ui"
                      )}
                    >
                      {city.tagline}
                    </p>
                    <div className="mt-4 flex gap-2">
                      {city.icons.map((Icon, i) => (
                        <div
                          key={i}
                          className="flex size-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur"
                        >
                          <Icon className="size-4 text-cyan-300" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-7 p-6 md:p-8 lg:p-10">
                  <p
                    className={cn(
                      "rounded-2xl border border-primary/20 bg-primary/10 p-4 text-sm leading-relaxed text-cyan-50",
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
                          "border-white/10 bg-white/5 text-white/80",
                          isRtl && "font-arabic-ui"
                        )}
                      >
                        {ind}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-5 md:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                      <h4
                        className={cn(
                          "mb-4 flex items-center gap-2 font-heading text-base font-semibold text-orange-300",
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
                              "flex gap-3 text-sm leading-relaxed text-white/70",
                              isRtl && "font-arabic-ui"
                            )}
                          >
                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-orange-400" />
                            {pain}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                      <h4
                        className={cn(
                          "mb-4 flex items-center gap-2 font-heading text-base font-semibold text-cyan-300",
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
                              "flex gap-3 text-sm leading-relaxed text-white/70",
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
                      "mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-50",
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
