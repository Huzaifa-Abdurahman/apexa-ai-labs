"use client";

import { motion } from "framer-motion";
import { Star, Award, MapPin, Briefcase, Sparkles as SparklesIcon } from "lucide-react";
import Link from "next/link";

import ShaderShowcase from "@/components/ui/shader-showcase";
import { Sparkles } from "@/components/ui/sparkles";
import { LogoTicker } from "@/components/ui/logo-ticker";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { StatProgress } from "@/components/ui/circular-progress-demo";
import { CapabilitiesSection } from "@/components/ui/capabilities-section";
import { ScalingCompanies } from "@/components/ui/scaling-companies";
import { AIServicesSection } from "@/components/ui/ai-services-section";
import { AnimatedTestimonialsDemo } from "@/components/ui/animated-testimonials-demo";
import QRCode from "react-qr-code";
import { useLocale } from "@/i18n/locale-provider";
import { cn } from "@/lib/utils";

export default function Home() {
  const { t, messages, isRtl } = useLocale();

  const keywords = [
    { key: "trust", label: t("home.keywords.trust") },
    { key: "excellence", label: t("home.keywords.excellence") },
    { key: "partnership", label: t("home.keywords.partnership") },
    { key: "localRoot", label: t("home.keywords.localRoot") },
    { key: "speed", label: t("home.keywords.speed") },
    { key: "scale", label: t("home.keywords.scale") },
  ];

  return (
    <div className="overflow-hidden">
      <div className="w-full relative z-0">
        <ShaderShowcase />
      </div>

      <div className="relative w-full overflow-hidden bg-black border-y border-white/10">
        <Sparkles
          className="absolute inset-0"
          density={70}
          speed={0.8}
          opacity={0.35}
          color="#06b6d4"
        />
        <div className="relative z-10">
          <LogoTicker />
        </div>
      </div>

      <section className="relative bg-background py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(6,182,212,0.12),_transparent_50%)]" />

        <div className="relative z-10 mx-auto max-w-6xl px-4">
          <div className="mb-12 flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {keywords.map((k) => (
              <div
                key={k.key}
                className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-4 py-2 shadow-sm"
              >
                <span
                  className={cn(
                    "font-heading text-xs font-bold tracking-wide text-foreground/80 uppercase",
                    isRtl && "font-arabic-ui normal-case tracking-normal text-sm text-primary"
                  )}
                >
                  {k.label}
                </span>
              </div>
            ))}
          </div>

          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col"
            >
              <div className="mb-6 w-full max-w-md relative group">
                <div className="overflow-hidden rounded-2xl border border-black/5 shadow-xl shadow-cyan-500/10 relative z-10">
                  <img
                    src="/deal.PNG"
                    alt={t("home.dealAlt")}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-3 -end-3 bg-gradient-to-br from-cyan-400 to-orange-500 p-3.5 rounded-2xl shadow-xl z-20 border border-white/30">
                  <Award className="w-7 h-7 text-white" />
                </div>
              </div>

              <p
                className={cn(
                  "mb-2 text-sm font-semibold text-primary",
                  isRtl && "font-arabic-ui"
                )}
              >
                {t("home.experienceEyebrow")}
              </p>
              <h2
                className={cn(
                  "font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]",
                  isRtl && "font-arabic-ui"
                )}
              >
                {t("home.experienceTitle")}{" "}
                <span className="text-gradient">{t("home.experienceTitleHighlight")}</span>
              </h2>

              <p
                className={cn(
                  "mt-5 text-base md:text-lg font-medium text-foreground/75 leading-relaxed max-w-xl",
                  isRtl && "font-arabic-ui"
                )}
              >
                {t("home.experienceP1")}
              </p>
              <p
                className={cn(
                  "mt-4 text-base md:text-lg font-medium text-foreground/75 leading-relaxed max-w-xl",
                  isRtl && "font-arabic-ui"
                )}
              >
                {t("home.experienceP2")}
              </p>

              <Link href="/about" className="inline-block mt-7">
                <InteractiveHoverButton>{t("home.learnStory")}</InteractiveHoverButton>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="flex flex-col gap-5"
            >
              <div className="w-full h-44 md:h-52 rounded-3xl overflow-hidden shadow-xl relative group border border-black/5">
                <img
                  src="/deal1.PNG"
                  alt={t("home.dealAlt")}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="bg-white border border-black/5 rounded-3xl p-6 shadow-lg flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className={cn("text-xs font-semibold text-primary", isRtl && "font-arabic-ui")}>
                      {t("home.recordLabel")}
                    </p>
                    <h3
                      className={cn(
                        "font-heading text-xl md:text-2xl font-bold text-foreground tracking-tight",
                        isRtl && "font-arabic-ui"
                      )}
                    >
                      {t("home.experienceProjects")}
                    </h3>
                  </div>
                  <div className="p-2 bg-cyan-50 rounded-full text-cyan-600 border border-cyan-100">
                    <Star className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-3">
                  <StatProgress
                    label={t("home.statsYears")}
                    labelAr={t("home.statsYears")}
                    targetValue={4}
                    suffix="+"
                    max={10}
                    color="rgb(6 182 212)"
                  />
                  <StatProgress
                    label={t("home.statsProjects")}
                    labelAr={t("home.statsProjects")}
                    targetValue={100}
                    suffix="+"
                    max={150}
                    color="rgb(249 115 22)"
                  />
                  <StatProgress
                    label={t("home.statsCities")}
                    labelAr={t("home.statsCities")}
                    targetValue={5}
                    suffix="+"
                    max={10}
                    color="rgb(8 145 178)"
                  />
                  <StatProgress
                    label={t("home.statsCountries")}
                    labelAr={t("home.statsCountries")}
                    targetValue={8}
                    suffix="+"
                    max={12}
                    color="rgb(217 70 239)"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-muted/70 p-3.5">
                    <Briefcase className="mb-2 size-4 text-secondary" />
                    <p className="text-xs font-semibold text-muted-foreground">{t("home.focusLabel")}</p>
                    <p className={cn("font-heading text-sm font-bold text-foreground", isRtl && "font-arabic-ui")}>
                      {t("home.ksaOnly")}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-muted/70 p-3.5">
                    <MapPin className="mb-2 size-4 text-primary" />
                    <p className="text-xs font-semibold text-muted-foreground">{t("home.hqLabel")}</p>
                    <p className={cn("font-heading text-sm font-bold text-foreground", isRtl && "font-arabic-ui")}>
                      {t("home.hqMakkah")}
                    </p>
                  </div>
                </div>

                <p
                  className={cn(
                    "text-muted-foreground text-sm font-medium text-center",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {t("home.engineeringNote")}
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-500 to-orange-500 rounded-3xl p-7 text-white relative overflow-hidden">
                <div className="absolute top-0 end-0 opacity-20 translate-x-4 -translate-y-4 pointer-events-none rtl:-translate-x-4">
                  <div className="w-28 h-28 rounded-full border-4 border-white/30" />
                </div>
                <div className="relative z-10 flex items-center gap-2 mb-4">
                  <SparklesIcon className="size-4" />
                  <span
                    className={cn(
                      "bg-black/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold tracking-wide",
                      isRtl && "font-arabic-ui"
                    )}
                  >
                    {t("home.commitment")}
                  </span>
                </div>
                <div
                  className={cn(
                    "relative z-10 font-heading text-lg md:text-xl font-bold min-h-[52px] flex flex-wrap items-center gap-x-2",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  <span>{t("home.buildingPrefix")}</span>
                  <TypingAnimation
                    key={messages.home.typingWords.join("|")}
                    loop
                    duration={55}
                    pauseDelay={1400}
                    words={[...messages.home.typingWords]}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CapabilitiesSection />
      <ScalingCompanies />
      <AIServicesSection />

      <section className="py-24 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={cn(
                "text-3xl md:text-5xl font-heading font-bold text-foreground",
                isRtl && "font-arabic-ui"
              )}
            >
              {t("home.testimonialsTitle")}
            </h2>
            <p
              className={cn(
                "text-muted-foreground font-medium max-w-2xl mx-auto text-lg mt-3",
                isRtl && "font-arabic-ui"
              )}
            >
              {t("home.testimonialsSubtitle")}
            </p>
          </div>

          <div className="mb-20">
            <AnimatedTestimonialsDemo />
          </div>

          <NeonGradientCard className="mt-12 w-full h-full items-center justify-center text-center">
            <div className="grid lg:grid-cols-2 relative z-10 w-full text-start">
              <div className="p-10 md:p-14 lg:p-20 lg:border-e border-white/5 flex flex-col justify-center">
                <h2
                  className={cn(
                    "text-3xl md:text-4xl font-semibold text-gray-800 mb-4 leading-tight tracking-tight",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {t("home.scaleTitle")}{" "}
                  <span className="font-extrabold text-black">{t("home.scaleHighlight")}</span>
                </h2>
                <div
                  className={cn(
                    "text-lg md:text-xl text-gray-600 mb-8 leading-relaxed font-medium",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {t("home.scaleBody")}
                </div>

                <div className="flex flex-wrap items-start gap-8 mt-4">
                  <Link href="/contact" className="inline-block">
                    <InteractiveHoverButton>{t("home.startProject")}</InteractiveHoverButton>
                  </Link>

                  <div className="p-6 bg-[#18181b] rounded-3xl inline-flex flex-col items-center justify-center border border-black/10 shadow-2xl relative overflow-hidden group">
                    <div className="bg-white p-3 rounded-2xl mb-4 relative z-10 shadow-sm">
                      <QRCode value="https://wa.me/923100043155" size={130} level="H" />
                    </div>
                    <h3
                      className={cn(
                        "text-white font-semibold text-[15px] mb-1.5 relative z-10",
                        isRtl && "font-arabic-ui"
                      )}
                    >
                      {t("home.qrTitle")}
                    </h3>
                    <p className={cn("text-primary text-sm relative z-10", isRtl && "font-arabic-ui")}>
                      {t("home.whatsappCta")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-10 md:p-14 lg:p-20 flex flex-col justify-center bg-black/[0.02]">
                <div
                  className={cn(
                    "mb-8 text-gray-600 text-lg md:text-xl leading-relaxed",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  &quot;{t("home.quote")}&quot;
                </div>
                <div>
                  <div className="text-gray-900 font-bold text-lg">{t("home.quoteAuthor")}</div>
                  <div className={cn("text-gray-600 text-sm", isRtl && "font-arabic-ui")}>
                    {t("home.quoteRole")}
                  </div>
                </div>
              </div>
            </div>
          </NeonGradientCard>
        </div>
      </section>
    </div>
  );
}
