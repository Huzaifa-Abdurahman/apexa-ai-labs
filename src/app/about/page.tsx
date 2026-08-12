"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  Globe2,
  HeartHandshake,
  Lightbulb,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { useLocale } from "@/i18n/locale-provider"

const valueIcons = [Lightbulb, HeartHandshake, ShieldCheck]
const focusIcons = [Code2, Bot, Globe2]

export default function About() {
  const { t, messages, isRtl } = useLocale()
  const about = messages.about

  return (
    <div className="overflow-hidden pb-24">
      {/* HERO — one clear composition */}
      <section className="relative overflow-hidden bg-slate-950 px-4 pb-16 pt-32 text-white sm:pt-36 md:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(6,182,212,0.28),_transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(249,115,22,0.16),_transparent_45%)]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "mb-4 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300/85",
              isRtl && "font-arabic-ui tracking-normal"
            )}
          >
            {about.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className={cn(
              "font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl",
              isRtl && "font-arabic-ui"
            )}
          >
            {about.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className={cn(
              "mx-auto mt-4 max-w-2xl text-lg font-medium text-white/75 md:text-xl",
              isRtl && "font-arabic-ui"
            )}
          >
            {about.titleLine}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className={cn(
              "mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/60",
              isRtl && "font-arabic-ui"
            )}
          >
            {about.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href="/contact"
              className={cn(
                "inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-50",
                isRtl && "font-arabic-ui"
              )}
            >
              {about.ctaContact}
              <ArrowRight className={cn("size-4", isRtl && "rotate-180")} />
            </Link>
            <Link
              href="/services"
              className={cn(
                "inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10",
                isRtl && "font-arabic-ui"
              )}
            >
              {about.ctaServices}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-black/5 bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-black/5 md:grid-cols-4">
          {about.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-background px-6 py-8 text-center"
            >
              <div className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {stat.value}
              </div>
              <p
                className={cn(
                  "mt-2 text-sm font-medium text-muted-foreground",
                  isRtl && "font-arabic-ui"
                )}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:gap-14 md:py-24">
        <div>
          <div
            className={cn(
              "mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-700",
              isRtl && "font-arabic-ui tracking-normal"
            )}
          >
            <MapPin className="size-3.5" />
            {about.storyBadge}
          </div>
          <h2
            className={cn(
              "font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl",
              isRtl && "font-arabic-ui"
            )}
          >
            {about.storyTitle}
          </h2>
          <p
            className={cn(
              "mt-5 text-lg font-medium leading-relaxed text-foreground/85",
              isRtl && "font-arabic-ui"
            )}
          >
            {about.storyLead}
          </p>
          <p
            className={cn(
              "mt-4 text-base leading-relaxed text-muted-foreground",
              isRtl && "font-arabic-ui"
            )}
          >
            {about.storyBody}
          </p>
          <ul className="mt-6 space-y-3">
            {about.storyPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-cyan-600" />
                <span
                  className={cn(
                    "text-sm font-medium leading-relaxed text-foreground/80",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative min-h-[320px] overflow-hidden rounded-[2rem] md:min-h-[420px]"
        >
          <Image
            src="/dubai.jpg"
            alt={about.storyTitle}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <p
              className={cn(
                "font-heading text-xl font-bold text-white md:text-2xl",
                isRtl && "font-arabic-ui"
              )}
            >
              {t("common.dubai")}
            </p>
            <p className={cn("mt-1 text-sm text-white/70", isRtl && "font-arabic-ui")}>
              {about.storyBadge}
            </p>
          </div>
        </motion.div>
      </section>

      {/* FOCUS */}
      <section className="border-y border-black/5 bg-[#f7fafc] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2
              className={cn(
                "font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl",
                isRtl && "font-arabic-ui"
              )}
            >
              {about.focusTitle}
            </h2>
            <p
              className={cn(
                "mt-3 text-base text-muted-foreground md:text-lg",
                isRtl && "font-arabic-ui"
              )}
            >
              {about.focusSubtitle}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {about.focus.map((item, i) => {
              const Icon = focusIcons[i] ?? Sparkles
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="border-t border-cyan-600/30 pt-6"
                >
                  <div className="mb-4 inline-flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-orange-400 text-white">
                    <Icon className="size-5" />
                  </div>
                  <h3
                    className={cn(
                      "font-heading text-xl font-bold text-foreground",
                      isRtl && "font-arabic-ui"
                    )}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-3 text-sm leading-relaxed text-muted-foreground",
                      isRtl && "font-arabic-ui"
                    )}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="mb-10 max-w-2xl">
          <h2
            className={cn(
              "font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl",
              isRtl && "font-arabic-ui"
            )}
          >
            {about.valuesTitle}
          </h2>
          <p
            className={cn(
              "mt-3 text-base text-muted-foreground md:text-lg",
              isRtl && "font-arabic-ui"
            )}
          >
            {about.valuesSubtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {about.values.map((value, i) => {
            const Icon = valueIcons[i] ?? Lightbulb
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-[1.75rem] bg-slate-950 p-7 text-white"
              >
                <Icon className="size-6 text-cyan-300" />
                <h3
                  className={cn(
                    "font-heading mt-5 text-xl font-bold",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {value.title}
                </h3>
                <p
                  className={cn(
                    "mt-3 text-sm leading-relaxed text-white/65",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {value.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-black/5 bg-background px-4 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <h2
              className={cn(
                "font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl",
                isRtl && "font-arabic-ui"
              )}
            >
              {about.processTitle}
            </h2>
            <p
              className={cn(
                "mt-3 text-base text-muted-foreground md:text-lg",
                isRtl && "font-arabic-ui"
              )}
            >
              {about.processSubtitle}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {about.process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative"
              >
                <div className="font-heading text-4xl font-bold text-cyan-600/20">
                  {step.step}
                </div>
                <h3
                  className={cn(
                    "font-heading mt-2 text-lg font-bold text-foreground",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {step.title}
                </h3>
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
      </section>

      {/* TEAM ROLES — readable, no fake profiles */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="mb-10 max-w-2xl">
          <h2
            className={cn(
              "font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl",
              isRtl && "font-arabic-ui"
            )}
          >
            {about.teamTitle}
          </h2>
          <p
            className={cn(
              "mt-3 text-base text-muted-foreground md:text-lg",
              isRtl && "font-arabic-ui"
            )}
          >
            {about.teamSubtitle}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {about.teamRoles.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex gap-4 rounded-2xl border border-black/5 bg-white p-5 shadow-sm"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-sm font-bold text-cyan-700">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3
                  className={cn(
                    "font-heading text-base font-bold text-foreground",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {item.role}
                </h3>
                <p
                  className={cn(
                    "mt-1 text-sm leading-relaxed text-muted-foreground",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AYAH */}
      <section className="relative overflow-hidden bg-slate-950 px-4 py-14 text-white md:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.14),_transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p
            className={cn(
              "mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/80",
              isRtl && "font-arabic-ui normal-case tracking-normal"
            )}
          >
            {about.ayahLabel} · {about.ayahRef}
          </p>
          <blockquote>
            <p className="ayah text-2xl leading-loose text-white sm:text-3xl" dir="rtl" lang="ar">
              ﴿ وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ وَرَسُولُهُ وَالْمُؤْمِنُونَ ﴾
            </p>
            {!isRtl && (
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60">
                {about.ayahTranslation}
              </p>
            )}
            <p
              className={cn(
                "mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70",
                isRtl && "font-arabic-ui"
              )}
            >
              {about.missionAr}
            </p>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pt-16 md:pt-20">
        <div className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-gradient-to-br from-white via-cyan-50/50 to-orange-50/40 px-6 py-12 md:px-12 md:py-14">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              className={cn(
                "font-heading text-2xl font-bold tracking-tight text-foreground md:text-4xl",
                isRtl && "font-arabic-ui"
              )}
            >
              {about.ctaTitle}
            </h2>
            <p
              className={cn(
                "mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground",
                isRtl && "font-arabic-ui"
              )}
            >
              {about.ctaBody}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className={cn(
                  "inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90",
                  isRtl && "font-arabic-ui"
                )}
              >
                {about.ctaContact}
                <ArrowRight className={cn("size-4", isRtl && "rotate-180")} />
              </Link>
              <Link
                href="/services"
                className={cn(
                  "rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted",
                  isRtl && "font-arabic-ui"
                )}
              >
                {about.ctaServices}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
