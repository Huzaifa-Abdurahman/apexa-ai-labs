"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Globe, Sparkles, Star, Users } from "lucide-react";

const successStories = [
  {
    id: "clarivive",
    name: "Clarivive",
    shortName: "Clarivive",
    logo: "/logos/Clarivive medinsight logo-01.png",
    image: "/portfolio/portfolio_images/001_clarivive_medinsight.jpg",
    link: "https://clarivive.com",
    badge: "Premium customer",
    metricLabel: "Owner revenue",
    metric: "$1K+",
    detail: "The owner generated more than $1,000 from the platform, while building a 10K+ student community around the brand.",
    audience: "10K+ student community",
    accent: "from-[#0ea5e9] via-[#38bdf8] to-[#7dd3fc]",
  },
  {
    id: "leadenrich",
    name: "LeadEnrich",
    shortName: "LeadEnrich",
    logo: "/leadenrich.PNG",
    image: "/leadenrich.PNG",
    link: "https://scraper.huzaifa.pro/",
    badge: "B2B SaaS",
    metricLabel: "Lead engine",
    metric: "AI-powered",
    detail: "High-intent prospecting and enrichment system for premium outreach, qualified pipeline growth, and smarter conversion strategy.",
    audience: "Enterprise lead generation",
    accent: "from-[#7c3aed] via-[#a78bfa] to-[#c4b5fd]",
  },
  {
    id: "knitting-nest",
    name: "The Knitting Nest",
    shortName: "Knitting Nest",
    logo: "/theknittingnest.PNG",
    image: "/theknittingnest.PNG",
    link: "https://theknittingnest.co.uk",
    badge: "Premium customer",
    metricLabel: "Customer base",
    metric: "2K+",
    detail: "A thriving Surrey and London customer community with a loyal base of 2,000+ shoppers and a strong local brand presence.",
    audience: "Surrey & London community",
    accent: "from-[#d6b389] via-[#f3e1c8] to-[#fff7ed]",
  },
  {
    id: "wreckreports",
    name: "WreckReports.com",
    shortName: "WreckReports",
    logo: "",
    image: "/portfolio/portfolio_images/011_wreckreports_com.jpg",
    link: "https://www.wreckreports.com/",
    badge: "US portfolio",
    metricLabel: "Market fit",
    metric: "US-based",
    detail: "A conversion-focused digital product built for a strong American audience and service-led lead acquisition strategy.",
    audience: "US market reach",
    accent: "from-[#f59e0b] via-[#fbbf24] to-[#fef3c7]",
  },
  {
    id: "skins-by-linds",
    name: "Skins by Linds",
    shortName: "Skins by Linds",
    logo: "",
    image: "/portfolio/portfolio_images/012_skins_by_linds.jpg",
    link: "https://skinsbylinds.com/",
    badge: "US portfolio",
    metricLabel: "Brand growth",
    metric: "Premium",
    detail: "Luxury-focused identity and storefront system designed to attract premium customers and stronger conversion intent.",
    audience: "Premium US audience",
    accent: "from-[#ec4899] via-[#f9a8d4] to-[#fdf2f8]",
  },
  {
    id: "floating-docks-florida",
    name: "Floating Docks Florida",
    shortName: "Floating Docks",
    logo: "",
    image: "/portfolio/portfolio_images/023_floating_docks_florida.jpg",
    link: "https://floatingdocksflorida.com/",
    badge: "US portfolio",
    metricLabel: "Service reach",
    metric: "Florida",
    detail: "Local service website built to win trust quickly, increase lead quality, and differentiate in a competitive market.",
    audience: "Florida customer base",
    accent: "from-[#0f766e] via-[#2dd4bf] to-[#ccfbf1]",
  },
  {
    id: "fury-bags",
    name: "Fury Bags",
    shortName: "Fury Bags",
    logo: "",
    image: "/portfolio/portfolio_images/030_fury_bags.jpg",
    link: "https://furybags.com/",
    badge: "US portfolio",
    metricLabel: "Brand power",
    metric: "Retail-ready",
    detail: "Premium retail positioning with a sharper brand story, cleaner product presentation, and a stronger conversion path.",
    audience: "Retail growth",
    accent: "from-[#ef4444] via-[#fca5a5] to-[#fee2e2]",
  },
  {
    id: "kukon-store",
    name: "Kukon Store",
    shortName: "Kukon",
    logo: "",
    image: "/portfolio/portfolio_images/042_kukon_store.jpg",
    link: "https://kukonstore.com/",
    badge: "US portfolio",
    metricLabel: "Store impact",
    metric: "E-commerce",
    detail: "E-commerce experience built to improve product clarity, trust signals, and buyer confidence for online sales.",
    audience: "Online shoppers",
    accent: "from-[#2563eb] via-[#60a5fa] to-[#dbeafe]",
  },
];

export function SuccessStoriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % successStories.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const currentStory = successStories[activeIndex];

  const goNext = () => setActiveIndex((current) => (current + 1) % successStories.length);
  const goPrev = () => setActiveIndex((current) => (current - 1 + successStories.length) % successStories.length);

  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-[#f8fafc] py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.10),_transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-[#0095FF]" />
              Success stories
            </div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Premium customer wins
            </h2>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              type="button"
              aria-label="Previous success story"
              onClick={goPrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next success story"
              onClick={goNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          className="overflow-hidden rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-6 lg:p-8"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStory.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
            >
              <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-slate-100">
                <div className={`absolute inset-0 bg-gradient-to-br ${currentStory.accent} opacity-80`} />
                <Image
                  src={currentStory.image}
                  alt={currentStory.name}
                  width={1200}
                  height={800}
                  priority={activeIndex === 0}
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="h-[300px] w-full object-cover object-center mix-blend-multiply opacity-75 sm:h-[420px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-slate-900/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
                      {currentStory.badge}
                    </div>

                    {currentStory.logo ? (
                      <div className="rounded-full border border-white/30 bg-white/10 p-2 backdrop-blur-sm">
                        <Image
                          src={currentStory.logo}
                          alt={currentStory.name}
                          width={88}
                          height={32}
                          sizes="(max-width: 768px) 88px, 88px"
                          className="h-8 w-auto object-contain"
                        />
                      </div>
                    ) : (
                      <div className="rounded-full border border-white/30 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/95 backdrop-blur-sm">
                        {currentStory.shortName}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0095FF]">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  Client spotlight
                </div>

                <h3 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                  {currentStory.name}
                </h3>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                      {currentStory.metricLabel}
                    </div>
                    <div className="mt-3 text-3xl font-black text-slate-900">{currentStory.metric}</div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Community
                    </div>
                    <div className="mt-3 text-xl font-black text-slate-900">{currentStory.audience}</div>
                  </div>
                </div>

                <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                  {currentStory.detail}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href={currentStory.link}
                    target={currentStory.link.startsWith("http") ? "_blank" : undefined}
                    rel={currentStory.link.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    View project
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700">
                    <Users className="h-4 w-4 text-[#0095FF]" />
                    Trusted growth partner
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {successStories.map((story, index) => (
            <button
              key={story.id}
              type="button"
              aria-label={`Show ${story.name} story`}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex ? "w-10 bg-slate-900" : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2">
            <Globe className="h-3.5 w-3.5 text-[#0095FF]" />
            UK + global projects
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2">
            <Sparkles className="h-3.5 w-3.5 text-[#7c3aed]" />
            Premium digital growth
          </div>
        </div>
      </div>
    </section>
  );
}
