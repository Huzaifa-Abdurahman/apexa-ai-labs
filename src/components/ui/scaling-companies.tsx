"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Pause, Shield, Sparkles, Zap } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";
import { useLocale } from "@/i18n/locale-provider";

const partnerImages = ["/s1.PNG", "/s2.PNG", "/s3.PNG"];

const companyLogos = [
  { name: "Aramco", src: "https://www.google.com/s2/favicons?domain=aramco.com&sz=128" },
  { name: "NEOM", src: "https://www.google.com/s2/favicons?domain=neom.com&sz=128" },
  { name: "SDAIA", src: "https://www.google.com/s2/favicons?domain=sdaia.gov.sa&sz=128" },
  { name: "STC", src: "https://www.google.com/s2/favicons?domain=stc.com.sa&sz=128" },
  { name: "SABIC", src: "https://www.google.com/s2/favicons?domain=sabic.com&sz=128" },
  { name: "Vision 2030", src: "https://www.google.com/s2/favicons?domain=vision2030.gov.sa&sz=128" },
];

const technologies = [
  { name: "Firebase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Azure", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
];

const projectMeta = [
  { id: "leadenrich", video: "/videos/leadenrich.webm", lower: false },
  { id: "3d-website", video: "/videos/3d-website.webm", lower: true },
  { id: "video-project-3", video: "/videos/video-project-3.webm", lower: true },
  { id: "cursor-agent", video: "/videos/cursor-agent.webm", lower: false },
  { id: "make-hero", video: "/videos/make-hero.webm", lower: true },
  { id: "n8n-hero", video: "/videos/n8n-hero.webm", lower: true },
];

function ProjectVideoCard({
  title,
  description,
  video,
  tag,
  className,
  playLabel,
  pauseLabel,
  isRtl,
}: {
  title: string;
  description: string;
  video: string;
  tag: string;
  className?: string;
  playLabel: string;
  pauseLabel: string;
  isRtl?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (playing) {
      void el.play().catch(() => setPlaying(false));
    } else {
      el.pause();
    }
  }, [playing]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0e14] shadow-2xl",
        className
      )}
    >
      <BorderBeam size={90} duration={10} colorFrom="#06b6d4" colorTo="#f97316" />

      <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[3/4] lg:aspect-[4/5]">
        <video
          ref={videoRef}
          src={video}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070b] via-[#05070b]/40 to-transparent" />

        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          className="absolute top-4 right-4 z-20 flex size-10 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur transition hover:bg-black/70"
          aria-label={playing ? pauseLabel : playLabel}
        >
          {playing ? <Pause className="size-4" /> : <Play className="size-4 ms-0.5" />}
        </button>

        <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-6">
          <span className="mb-3 inline-flex rounded-full border border-primary/30 bg-primary/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-cyan-200">
            {tag}
          </span>
          <h3 className={cn("font-heading text-lg font-bold text-white md:text-xl", isRtl && "font-arabic-ui")}>
            {title}
          </h3>
          <p className={cn("mt-2 line-clamp-3 text-sm leading-relaxed text-white/65", isRtl && "font-arabic-ui")}>
            {description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export function ScalingCompanies() {
  const { t, messages, isRtl } = useLocale();
  const [activeIndex, setActiveIndex] = useState(0);
  const projects = messages.scaling.projects;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % partnerImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden border-y border-black/5 bg-[#f4f7fb] py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(6,182,212,0.12),_transparent_45%),radial-gradient(ellipse_at_bottom_right,_rgba(249,115,22,0.08),_transparent_40%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-3 py-1.5 shadow-sm">
            <span className="size-1.5 rounded-full bg-primary" />
            <span className={cn("text-xs font-semibold uppercase tracking-wider text-foreground/60", isRtl && "font-arabic-ui normal-case tracking-normal text-primary")}>
              {t("scaling.badge")}
            </span>
          </div>
          <h2 className={cn("font-heading text-3xl font-bold tracking-tight text-foreground md:text-5xl md:leading-[1.15]", isRtl && "font-arabic-ui")}>
            {t("scaling.title")}
          </h2>
          <p className={cn("mt-4 max-w-2xl text-base font-medium leading-relaxed text-muted-foreground md:text-lg", isRtl && "font-arabic-ui")}>
            {t("scaling.subtitle")}
          </p>
        </div>

        {/* Bento cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="relative flex flex-col overflow-hidden rounded-[28px] border border-black/5 bg-white p-6 shadow-lg md:row-span-2">
            <BorderBeam size={100} duration={11} colorFrom="#06b6d4" colorTo="#f97316" />
            <div className="relative z-10 mx-auto mb-6 flex aspect-square w-full max-w-[220px] items-center justify-center overflow-hidden rounded-[1.75rem] border border-black/5 bg-muted/40 p-6 shadow-inner">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={partnerImages[activeIndex]}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.45 }}
                  className="h-full w-full object-contain"
                  alt="Saudi partner"
                />
              </AnimatePresence>
            </div>
            <div className="relative z-10 mt-auto">
              <div className="mb-2 flex items-center gap-2 text-primary">
                <Sparkles className="size-4" />
                <span className={cn("text-xs font-bold uppercase tracking-wider", isRtl && "font-arabic-ui normal-case")}>
                  {t("scaling.partnersTitle")}
                </span>
              </div>
              <h3 className={cn("font-heading text-lg font-bold text-foreground", isRtl && "font-arabic-ui")}>
                {t("scaling.partnersDesc")}
              </h3>
              <Link
                href="/contact"
                className={cn(
                  "mt-5 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition hover:opacity-90",
                  isRtl && "font-arabic-ui"
                )}
              >
                {t("scaling.viewPartnerships")}{" "}
                <ArrowRight className={cn("size-4", isRtl && "rotate-180")} />
              </Link>
            </div>
          </div>

          <motion.div
            whileHover={{ y: -2 }}
            className="relative flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1220] p-8 text-white shadow-xl md:row-span-2"
          >
            <div className="absolute inset-0 opacity-25">
              <img src="/data.jpg" alt="" className="h-full w-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#0b1220] via-[#0b1220]/85 to-cyan-950/80" />
            <div className="relative z-10 mt-2">
              <Shield className="mb-4 size-6 text-primary" />
              <h3 className="font-heading text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-orange-400 md:text-7xl">
                100%
              </h3>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
                <span className="size-2 rounded-full bg-primary animate-pulse" />
                <p className={cn("text-sm font-bold tracking-wide text-cyan-200", isRtl && "font-arabic-ui")}>
                  {t("scaling.sovereignty")}
                </p>
              </div>
            </div>
            <p className={cn("relative z-10 mt-auto pt-8 text-[15px] font-medium leading-relaxed text-white/70", isRtl && "font-arabic-ui")}>
              {t("scaling.subtitle")}
            </p>
          </motion.div>

          <div className="relative flex min-h-[120px] items-center overflow-hidden rounded-[28px] border border-black/5 bg-white py-5 shadow-lg">
            <div className="absolute inset-0 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <Marquee className="[--duration:22s]" pauseOnHover>
                {companyLogos.map((logo) => (
                  <div
                    key={logo.name}
                    className="mx-2 flex items-center gap-2 whitespace-nowrap rounded-2xl border border-black/5 bg-muted/40 px-4 py-2.5"
                  >
                    <img src={logo.src} alt="" className="size-4 object-contain" />
                    <span className="text-sm font-semibold text-foreground/80">{logo.name}</span>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>

          <motion.div
            whileHover={{ y: -2 }}
            className="relative flex flex-col justify-center overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1220] p-8 text-white shadow-xl"
          >
            <div className="absolute inset-0 opacity-30">
              <img src="/ksa.jfif" alt="" className="h-full w-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220] via-[#0b1220]/90 to-transparent" />
            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-2 text-secondary">
                <Zap className="size-4" />
                <h4 className="text-xs font-bold tracking-[0.2em] uppercase">Vision 2030</h4>
              </div>
              <p className={cn("font-serif text-lg italic leading-relaxed text-white/85", isRtl && "font-arabic-ui not-italic")}>
                “{t("scaling.visionQuote")}”
              </p>
            </div>
          </motion.div>
        </div>

        {/* Tech row */}
        <div className="mt-5 flex items-center gap-4 overflow-hidden rounded-[24px] border border-black/5 bg-white p-4 shadow-md md:p-5">
          <div className="shrink-0 pl-2">
            <p className="font-heading text-sm font-bold text-foreground">Stack</p>
            <p className="font-arabic-ui text-xs text-primary" dir="rtl">
              تقنياتنا
            </p>
          </div>
          <div className="relative h-14 flex-1 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <Marquee className="[--duration:26s] absolute inset-0" pauseOnHover>
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="mx-2 flex size-12 items-center justify-center rounded-2xl border border-black/5 bg-muted/50 p-2.5"
                >
                  <img src={tech.src} alt={tech.name} className="h-full w-full object-contain" />
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        {/* PROJECTS — videos */}
        <div className="mt-20 md:mt-24">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className={cn("font-heading text-3xl font-bold tracking-tight text-foreground md:text-5xl", isRtl && "font-arabic-ui")}>
                {t("scaling.projectsTitle")}
              </h2>
              <p className={cn("mt-2 max-w-xl text-muted-foreground", isRtl && "font-arabic-ui")}>
                {t("scaling.projectsSubtitle")}
              </p>
            </div>
            <Link
              href="/services"
              className={cn(
                "inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition hover:border-primary/30",
                isRtl && "font-arabic-ui"
              )}
            >
              {t("scaling.allCapabilities")}{" "}
              <ArrowRight className={cn("size-4", isRtl && "rotate-180")} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:items-start">
            {projectMeta.map((meta, i) => {
              const project = projects[i];
              if (!project) return null;
              return (
                <ProjectVideoCard
                  key={meta.id}
                  title={project.title}
                  description={project.description}
                  tag={project.tag}
                  video={meta.video}
                  className={cn(meta.lower && "lg:mt-16")}
                  playLabel={t("scaling.playVideo")}
                  pauseLabel={t("scaling.pauseVideo")}
                  isRtl={isRtl}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
