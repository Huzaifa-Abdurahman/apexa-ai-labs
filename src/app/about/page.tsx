"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeartHandshake, Lightbulb, MapPin, ShieldCheck } from "lucide-react";

import { MorphingText } from "@/components/ui/morphing-text";
import TeamShowcase from "@/components/ui/team-showcase";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { Backlight } from "@/components/ui/backlight";
import { cn } from "@/lib/utils";
import { useLocale } from "@/i18n/locale-provider";

const valueIcons = [Lightbulb, HeartHandshake, ShieldCheck];

export default function About() {
  const { t, messages, isRtl } = useLocale();
  const values = messages.about.values;

  return (
    <div className="overflow-hidden pb-20">
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-background px-4 pb-10 pt-32 sm:pt-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(6,182,212,0.18),_transparent_55%)]" />
        <div className="pointer-events-none absolute top-[40%] left-1/2 h-32 w-[22rem] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center"
        >
          <p className={cn("mb-4 text-sm font-semibold text-cyan-700/90", isRtl && "font-arabic-ui")}>
            {t("about.eyebrow")}
          </p>
          <h1
            className={cn(
              "font-heading bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl",
              isRtl && "font-arabic-ui"
            )}
          >
            {t("about.title")}
          </h1>
          <div className="mt-5 w-full">
            <MorphingText
              key={messages.about.morphing.join("|")}
              texts={[...messages.about.morphing]}
              className={cn(
                "h-14 text-[2.4rem] text-slate-800 md:h-20 md:text-[4.5rem]",
                isRtl ? "font-arabic" : "font-heading"
              )}
            />
          </div>
          <p
            className={cn(
              "mt-5 max-w-xl text-base font-medium text-slate-700 md:text-lg",
              isRtl && "font-arabic-ui"
            )}
          >
            {t("about.subtitle")}
          </p>
        </motion.div>
      </section>

      <section className="relative border-y border-black/5 bg-[#0b1220] py-12 text-white md:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.12),_transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <p className={cn("mb-5 text-xs font-semibold tracking-[0.2em] text-primary/90 uppercase", isRtl && "font-arabic-ui normal-case tracking-normal")}>
            {t("about.ayahLabel")} · {t("about.ayahRef")}
          </p>
          <blockquote>
            <p className="ayah text-2xl text-white sm:text-3xl md:text-4xl" dir="rtl" lang="ar">
              ﴿ وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ وَرَسُولُهُ وَالْمُؤْمِنُونَ ﴾
            </p>
            <footer className="mt-6 space-y-2">
              <p className={cn("font-serif text-lg italic text-white/70 md:text-xl", isRtl && "font-arabic-ui not-italic")}>
                {t("about.missionAr")}
              </p>
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 md:py-16">
        <div className={cn("mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-muted-foreground", isRtl && "font-arabic-ui")}>
          <MapPin className="size-3.5 text-primary" />
          {t("about.storyBadge")}
        </div>
        <h2 className={cn("font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl", isRtl && "font-arabic-ui")}>
          {t("about.storyTitle")}
        </h2>
        <div className={cn("mt-5 space-y-4 text-base leading-relaxed text-foreground/80 md:text-lg", isRtl && "font-arabic-ui")}>
          <p>{t("about.storyBody")}</p>
        </div>

        <div className="mt-6 rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
          <TypingAnimation
            key={messages.hero.capabilityLines.join("|")}
            className={cn("mt-2 font-heading text-xl font-bold text-foreground md:text-2xl", isRtl && "font-arabic-ui")}
            words={[...messages.hero.capabilityLines]}
            loop
            duration={55}
            pauseDelay={1600}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:py-16">
        <div className="mb-8 max-w-2xl">
          <h2 className={cn("font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl", isRtl && "font-arabic-ui")}>
            {t("about.valuesTitle")}
          </h2>
          <p className={cn("mt-2 text-lg text-foreground/70", isRtl && "font-arabic-ui")}>
            {t("about.valuesSubtitle")}
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {values.map((value, i) => {
            const Icon = valueIcons[i] ?? Lightbulb;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-[28px] border border-black/5 bg-white p-7 shadow-sm"
              >
                <Backlight blur={18} className="mb-4 inline-flex">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-orange-400 text-white">
                    <Icon className="size-5" />
                  </div>
                </Backlight>
                <h3 className={cn("mt-1 font-heading text-xl font-bold text-foreground", isRtl && "font-arabic-ui")}>
                  {value.title}
                </h3>
                <p className={cn("mt-3 text-sm leading-relaxed text-muted-foreground", isRtl && "font-arabic-ui")}>
                  {value.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12">
        <div className="mb-8 text-center">
          <h2 className={cn("font-heading text-3xl font-bold tracking-tight text-foreground md:text-5xl", isRtl && "font-arabic-ui")}>
            {t("about.teamTitle")}
          </h2>
          <p className={cn("mx-auto mt-3 max-w-xl text-muted-foreground", isRtl && "font-arabic-ui")}>
            {t("about.teamSubtitle")}
          </p>
        </div>
        <TeamShowcase />
      </section>

      <section className="mx-auto max-w-5xl px-4">
        <div className="relative overflow-hidden rounded-[32px] border border-black/5 bg-gradient-to-br from-white via-cyan-50/40 to-orange-50/50 p-8 text-center md:p-12">
          <h2 className={cn("mt-2 font-heading text-2xl font-bold text-foreground md:text-4xl", isRtl && "font-arabic-ui")}>
            {t("about.missionTitle")}
          </h2>
          <p className={cn("mx-auto mt-5 max-w-3xl font-serif text-xl leading-relaxed text-foreground/80 italic md:text-2xl", isRtl && "font-arabic-ui not-italic")}>
            {t("about.missionBody")}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/services"
              className={cn(
                "rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90",
                isRtl && "font-arabic-ui"
              )}
            >
              {t("about.ctaServices")}
            </Link>
            <Link
              href="/contact"
              className={cn(
                "rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted",
                isRtl && "font-arabic-ui"
              )}
            >
              {t("about.ctaContact")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
