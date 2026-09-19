"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Pause, Shield, Sparkles, Zap } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";
import { useLocale } from "@/i18n/locale-provider";

const partnerImages = ["/s1.PNG", "/s2.PNG", "/s3.PNG", "/usa-ai.PNG", "/uk-ai.PNG"];

const companyLogos = [
  { name: "Hospitality" },
  { name: "Healthcare" },
  { name: "Logistics" },
  { name: "Manufacturing" },
  { name: "Retail" },
  { name: "Law" },
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
        "group relative overflow-hidden rounded-[24px] border border-slate-200/60 bg-white shadow-sm hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-1.5 transition-all duration-500",
        className
      )}
    >
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <BorderBeam size={100} duration={8} colorFrom="#8b5cf6" colorTo="#06b6d4" />
      </div>

      <div className="relative aspect-video sm:aspect-[4/3] lg:aspect-[16/11] overflow-hidden">
        <video
          ref={videoRef}
          src={video}
          className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.15]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-transparent transition-all duration-500 group-hover:bg-cyan-900/10" />

        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          className="absolute top-4 right-4 z-20 flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white/50 text-slate-900 backdrop-blur transition hover:bg-white/80"
          aria-label={playing ? pauseLabel : playLabel}
        >
          {playing ? <Pause className="size-4" /> : <Play className="size-4 ms-0.5" />}
        </button>

        <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-6">
          <span className="mb-3 inline-flex rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-purple-700">
            {tag}
          </span>
          <h3 className={cn("font-heading text-lg font-bold text-slate-900 md:text-xl", isRtl && "font-arabic-ui")}>
            {title}
          </h3>
          <p className={cn("mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600", isRtl && "font-arabic-ui")}>
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
    <section className="relative overflow-hidden border-y border-slate-200 bg-[#F8FAFC] py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(139,92,246,0.1),_transparent_45%),radial-gradient(ellipse_at_bottom_right,_rgba(6,182,212,0.08),_transparent_40%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-3 py-1.5 shadow-sm">
            <span className="size-1.5 rounded-full bg-purple-600" />
            <span className={cn("text-xs font-semibold uppercase tracking-wider text-slate-600", isRtl && "font-arabic-ui normal-case tracking-normal text-purple-600")}>
              {t("scaling.badge")}
            </span>
          </div>
          <h2 className={cn("font-heading text-3xl font-bold tracking-tight text-slate-900 md:text-5xl md:leading-[1.15]", isRtl && "font-arabic-ui")}>
            {t("scaling.title")}
          </h2>
          <p className={cn("mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-600 md:text-lg", isRtl && "font-arabic-ui")}>
            {t("scaling.subtitle")}
          </p>
        </div>

        {/* Bento cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="relative flex flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:row-span-2">
            <BorderBeam size={100} duration={11} colorFrom="#8b5cf6" colorTo="#06b6d4" />
            <div className="relative z-10 mx-auto mb-6 flex aspect-square w-full max-w-[220px] items-center justify-center overflow-hidden rounded-[1.75rem] border border-slate-100 bg-slate-50 p-6 shadow-inner">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={partnerImages[activeIndex]}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.45 }}
                  className="h-full w-full object-contain"
                  alt="Apexa AI Labs presence"
                />
              </AnimatePresence>
            </div>
            <div className="relative z-10 mt-auto">
              <div className="mb-2 flex items-center gap-2 text-purple-600">
                <Sparkles className="size-4" />
                <span className={cn("text-xs font-bold uppercase tracking-wider", isRtl && "font-arabic-ui normal-case")}>
                  {t("scaling.partnersTitle")}
                </span>
              </div>
              <h3 className={cn("font-heading text-lg font-bold text-slate-900", isRtl && "font-arabic-ui")}>
                {t("scaling.partnersDesc")}
              </h3>
              <Link
                href="/contact"
                className={cn(
                  "mt-5 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800",
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
            className="relative flex flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white p-8 text-slate-900 shadow-sm md:row-span-2"
          >
            <div className="absolute inset-0 opacity-10">
              <img src="/data.jpg" alt="" className="h-full w-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white/85 to-purple-50/80" />
            <div className="relative z-10 mt-2">
              <Shield className="mb-4 size-6 text-purple-600" />
              <h3 className="font-heading text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-cyan-500 md:text-7xl">
                100%
              </h3>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2">
                <span className="size-2 rounded-full bg-purple-600 animate-pulse" />
                <p className={cn("text-sm font-bold tracking-wide text-purple-700", isRtl && "font-arabic-ui")}>
                  {t("scaling.sovereignty")}
                </p>
              </div>
            </div>
            <p className={cn("relative z-10 mt-auto pt-8 text-[15px] font-medium leading-relaxed text-slate-600", isRtl && "font-arabic-ui")}>
              {t("scaling.subtitle")}
            </p>
          </motion.div>

          <div className="relative flex min-h-[120px] items-center overflow-hidden rounded-[28px] border border-slate-200 bg-white py-5 shadow-sm">
            <div className="absolute inset-0 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <Marquee className="[--duration:22s]" pauseOnHover>
                {companyLogos.map((logo) => (
                  <div
                    key={logo.name}
                    className="mx-2 flex items-center gap-2 whitespace-nowrap rounded-2xl border border-slate-100 bg-slate-50 px-4 py-2.5"
                  >
                    <span className="size-1.5 rounded-full bg-primary" />
                    <span className="text-sm font-semibold text-slate-700">{logo.name}</span>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>

          <motion.div
            whileHover={{ y: -2 }}
            className="relative flex flex-col justify-center overflow-hidden rounded-[28px] border border-slate-200 bg-white p-8 text-slate-900 shadow-sm"
          >
            <div className="absolute inset-0 opacity-15">
              <img src="/uk-ai.PNG" alt="" className="h-full w-full object-cover grayscale" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-2 text-cyan-600">
                <Zap className="size-4" />
                <h4 className="text-xs font-bold tracking-[0.2em] uppercase">Our Vision</h4>
              </div>
              <p className={cn("font-serif text-lg italic leading-relaxed text-slate-700", isRtl && "font-arabic-ui not-italic")}>
                “{t("scaling.visionQuote")}”
              </p>
            </div>
          </motion.div>
        </div>

        {/* Tech row */}
        <div className="mt-5 flex items-center gap-4 overflow-hidden rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm md:p-5">
          <div className="shrink-0 pl-2">
            <p className="font-heading text-sm font-bold text-slate-900">Stack</p>
            <p className="font-arabic-ui text-xs text-purple-600" dir="rtl">
              تقنياتنا
            </p>
          </div>
          <div className="relative h-14 flex-1 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <Marquee className="[--duration:26s] absolute inset-0" pauseOnHover>
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="mx-2 flex size-12 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 p-2.5"
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
              <h2 className={cn("font-heading text-3xl font-bold tracking-tight text-slate-900 md:text-5xl", isRtl && "font-arabic-ui")}>
                {t("scaling.projectsTitle")}
              </h2>
              <p className={cn("mt-2 max-w-xl text-slate-600", isRtl && "font-arabic-ui")}>
                {t("scaling.projectsSubtitle")}
              </p>
            </div>
            <Link
              href="/services"
              className={cn(
                "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-purple-300 hover:bg-purple-50",
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
