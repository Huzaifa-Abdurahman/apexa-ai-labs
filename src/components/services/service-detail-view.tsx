"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ServiceImageCarousel } from "@/components/ui/service-image-carousel";
import { useLocale } from "@/i18n/locale-provider";
import {
  SERVICE_IMAGES,
  type ServiceSlug,
} from "@/lib/service-slugs";
import { cn } from "@/lib/utils";

export type { ServiceSlug };
export { SERVICE_SLUGS, isServiceSlug } from "@/lib/service-slugs";

export function ServiceDetailView({ slug }: { slug: ServiceSlug }) {
  const { messages, isRtl, t } = useLocale();
  const d = messages.serviceDetails;
  const item = d.items[slug];
  const card = messages.servicesPage.serviceItems.find((s) => s.id === slug);

  return (
    <div className="overflow-hidden pb-24">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-background pt-28 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.1),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(6,182,212,0.1),_transparent_45%)]" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2">
          <div className={cn(isRtl ? "lg:text-end" : "lg:text-start")}>
            <Link
              href="/services"
              className={cn(
                "mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-900",
                isRtl && "font-arabic-ui flex-row-reverse"
              )}
            >
              {isRtl ? <ArrowRight className="size-4" /> : <ArrowLeft className="size-4" />}
              {d.back}
            </Link>

            <p
              className={cn(
                "mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary/80",
                isRtl && "font-arabic-ui normal-case tracking-normal text-sm"
              )}
            >
              {item.eyebrow}
            </p>
            <h1
              className={cn(
                "font-heading text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl",
                isRtl && "font-arabic-ui"
              )}
            >
              {item.headline}
            </h1>
            <p
              className={cn(
                "mt-4 max-w-xl text-lg font-medium text-slate-600",
                isRtl && "font-arabic-ui"
              )}
            >
              {item.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact">
                <InteractiveHoverButton
                  className={cn(
                    "border-slate-200 bg-slate-900 text-white hover:bg-slate-800",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {d.ctaPrimary}
                </InteractiveHoverButton>
              </Link>
              <a
                href="https://wa.me/923451569778"
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "inline-flex items-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50",
                  isRtl && "font-arabic-ui"
                )}
              >
                {d.ctaSecondary}
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-purple-400/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-4 shadow-xl">
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[22px] bg-slate-50">
                {Array.isArray(SERVICE_IMAGES[slug]) ? (
                  <ServiceImageCarousel
                    images={SERVICE_IMAGES[slug] as string[]}
                    title={item.headline}
                    className="h-[85%] w-[90%]"
                  />
                ) : (
                  <Image
                    src={SERVICE_IMAGES[slug] as string}
                    alt={item.headline}
                    width={520}
                    height={390}
                    priority
                    className="h-[85%] w-auto max-w-[90%] object-contain drop-shadow-xl"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-8 px-4 py-16">
        {/* Plain words + for who */}
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[28px] border border-black/5 bg-white/80 p-8 shadow-sm backdrop-blur-md"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-1 text-cyan-700">
              <Sparkles className="size-3.5" />
              <span className={cn("text-xs font-bold", isRtl && "font-arabic-ui")}>{d.plainTitle}</span>
            </div>
            <p className={cn("text-base leading-relaxed text-foreground/80 md:text-lg", isRtl && "font-arabic-ui")}>
              {item.plain}
            </p>
            {card?.features ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {card.features.map((f) => (
                  <span
                    key={f}
                    className={cn(
                      "rounded-full border border-black/5 bg-muted/60 px-3 py-1 text-[11px] font-semibold text-foreground/70",
                      isRtl && "font-arabic-ui"
                    )}
                  >
                    {f}
                  </span>
                ))}
              </div>
            ) : null}
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[28px] border border-black/5 bg-white/80 p-8 shadow-sm backdrop-blur-md"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-orange-700">
              <Users className="size-3.5" />
              <span className={cn("text-xs font-bold", isRtl && "font-arabic-ui")}>{d.forWhoTitle}</span>
            </div>
            <ul className="space-y-3">
              {item.forWho.map((row) => (
                <li key={row} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-cyan-600" />
                  <span className={cn("text-sm font-medium leading-relaxed text-foreground/80 md:text-base", isRtl && "font-arabic-ui")}>
                    {row}
                  </span>
                </li>
              ))}
            </ul>
          </motion.section>
        </div>

        {/* Tech */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[28px] border border-black/5 bg-white/80 p-8 shadow-sm backdrop-blur-md"
        >
          <h2 className={cn("font-heading text-2xl font-bold text-foreground md:text-3xl", isRtl && "font-arabic-ui")}>
            {d.techTitle}
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {item.tech.map((tech) => (
              <span
                key={tech}
                className={cn(
                  "rounded-2xl border border-cyan-500/15 bg-cyan-50/70 px-4 py-2 text-sm font-semibold text-cyan-900",
                  isRtl && "font-arabic-ui"
                )}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

        {/* ROI */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[28px] border border-slate-200 bg-white p-8 text-slate-900 shadow-sm md:p-10"
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-orange-500 shadow-sm text-white">
              <TrendingUp className="size-5" />
            </div>
            <h2 className={cn("font-heading text-2xl font-bold md:text-3xl", isRtl && "font-arabic-ui")}>
              {d.roiTitle}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {item.roi.map((r) => (
              <div
                key={r.label}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
              >
                <p className={cn("text-xs font-bold uppercase tracking-wider text-slate-500", isRtl && "font-arabic-ui normal-case")}>
                  {r.label}
                </p>
                <p className="mt-2 font-heading text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-orange-600">
                  {r.value}
                </p>
                <p className={cn("mt-2 text-sm leading-relaxed text-slate-600 font-medium", isRtl && "font-arabic-ui")}>
                  {r.note}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Why us */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[28px] border border-black/5 bg-white/80 p-8 shadow-sm backdrop-blur-md md:p-10"
        >
          <h2 className={cn("font-heading text-2xl font-bold text-foreground md:text-3xl", isRtl && "font-arabic-ui")}>
            {d.whyTitle}
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {item.why.map((point, i) => (
              <div
                key={point}
                className="flex gap-4 rounded-3xl border border-black/5 bg-gradient-to-br from-white to-slate-50 p-5"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-orange-500 text-sm font-black text-white">
                  {i + 1}
                </span>
                <p className={cn("text-sm font-medium leading-relaxed text-foreground/80 md:text-base", isRtl && "font-arabic-ui")}>
                  {point}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <section className="rounded-[28px] border border-cyan-500/20 bg-gradient-to-r from-cyan-50 via-white to-orange-50 p-8 text-center shadow-sm md:p-12">
          <h2 className={cn("font-heading text-2xl font-bold text-foreground md:text-4xl", isRtl && "font-arabic-ui")}>
            {d.ctaTitle}
          </h2>
          <p className={cn("mx-auto mt-3 max-w-2xl text-muted-foreground", isRtl && "font-arabic-ui")}>
            {d.ctaBody}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact">
              <InteractiveHoverButton className={cn(isRtl && "font-arabic-ui")}>
                {d.ctaPrimary}
              </InteractiveHoverButton>
            </Link>
            <Link
              href="/services"
              className={cn(
                "inline-flex items-center gap-2 text-sm font-semibold text-primary",
                isRtl && "font-arabic-ui"
              )}
            >
              {d.back}
              <ArrowRight className={cn("size-4", isRtl && "rotate-180")} />
            </Link>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{t("servicesPage.badge")}</p>
        </section>
      </div>
    </div>
  );
}
