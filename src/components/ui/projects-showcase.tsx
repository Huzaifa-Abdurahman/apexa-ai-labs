"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, ArrowUpRight, Search, X } from "lucide-react"

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { useLocale } from "@/i18n/locale-provider"
import {
  portfolioCategories,
  portfolioProjects,
  type PortfolioCategory,
  type PortfolioProject,
} from "@/lib/portfolio-projects"
import { cn } from "@/lib/utils"

type FilterId = "all" | PortfolioCategory

export function ProjectsShowcase() {
  const { t, isRtl } = useLocale()
  const [filter, setFilter] = useState<FilterId>("all")
  const [query, setQuery] = useState("")
  const [active, setActive] = useState<PortfolioProject | null>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return portfolioProjects.filter((p) => {
      const catOk = filter === "all" || p.category === filter
      const searchOk =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q) ||
        p.categoryLabelAr.includes(q) ||
        p.description.toLowerCase().includes(q)
      return catOk && searchOk
    })
  }, [filter, query])

  const liveFeatured = useMemo(
    () => filtered.filter((p) => p.featured),
    [filtered]
  )
  const archive = useMemo(
    () => filtered.filter((p) => !p.featured),
    [filtered]
  )
  const featured = archive.slice(0, 2)
  const rest = archive.slice(2)

  return (
    <div className="overflow-hidden pb-24">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 px-4 pb-16 pt-32 text-white sm:pt-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(6,182,212,0.28),_transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(249,115,22,0.18),_transparent_45%)]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p
              className={cn(
                "mb-4 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300/80",
                isRtl && "font-arabic-ui tracking-normal"
              )}
            >
              {t("projectsPage.eyebrow")}
            </p>
            <h1
              className={cn(
                "font-heading max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl",
                isRtl && "font-arabic-ui"
              )}
            >
              {t("projectsPage.title")}{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-orange-300 bg-clip-text text-transparent">
                {t("projectsPage.titleHighlight")}
              </span>
            </h1>
            <p
              className={cn(
                "mt-5 max-w-xl text-base font-medium leading-relaxed text-white/70 md:text-lg",
                isRtl && "font-arabic-ui"
              )}
            >
              {t("projectsPage.subtitle")}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact">
                <InteractiveHoverButton
                  className={cn(
                    "border-white/15 bg-white text-black hover:bg-white",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {t("projectsPage.ctaPrimary")}
                </InteractiveHoverButton>
              </Link>
              <Link
                href="/services"
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10",
                  isRtl && "font-arabic-ui"
                )}
              >
                {t("projectsPage.ctaSecondary")}
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { value: "100+", label: t("projectsPage.statProjects") },
              { value: "10", label: t("projectsPage.statIndustries") },
              { value: "KSA+", label: t("projectsPage.statReach") },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-md"
              >
                <div className="font-heading text-2xl font-bold text-white md:text-3xl">
                  {stat.value}
                </div>
                <p
                  className={cn(
                    "mt-1 text-[11px] font-semibold uppercase tracking-wide text-white/55",
                    isRtl && "font-arabic-ui normal-case tracking-normal"
                  )}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="sticky top-20 z-30 border-b border-black/5 bg-background/90 px-4 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {portfolioCategories.map((cat) => {
              const activeChip = filter === cat.id
              const label = isRtl ? cat.labelAr : cat.label
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setFilter(cat.id)}
                  className={cn(
                    "shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition",
                    activeChip
                      ? "border-cyan-600 bg-cyan-600 text-white shadow-md shadow-cyan-600/25"
                      : "border-black/10 bg-white text-foreground/70 hover:border-cyan-500/40 hover:text-foreground",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {label}
                </button>
              )
            })}
          </div>

          <label className="relative w-full max-w-xs">
            <Search className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("projectsPage.searchPlaceholder")}
              className={cn(
                "w-full rounded-full border border-black/10 bg-white py-2.5 pe-4 ps-10 text-sm outline-none ring-cyan-500/30 transition focus:ring-2",
                isRtl && "font-arabic-ui"
              )}
            />
          </label>
        </div>
      </section>

      {/* GRID */}
      <section className="px-4 pt-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2
                className={cn(
                  "font-heading text-2xl font-bold text-foreground md:text-3xl",
                  isRtl && "font-arabic-ui"
                )}
              >
                {t("projectsPage.galleryTitle")}
              </h2>
              <p
                className={cn(
                  "mt-1 text-sm text-muted-foreground",
                  isRtl && "font-arabic-ui"
                )}
              >
                {t("projectsPage.showing")
                  .replace("{count}", String(filtered.length))
                  .replace("{total}", String(portfolioProjects.length))}
              </p>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-black/10 bg-muted/30 px-6 py-16 text-center">
              <p className={cn("text-muted-foreground", isRtl && "font-arabic-ui")}>
                {t("projectsPage.empty")}
              </p>
            </div>
          ) : (
            <>
              {liveFeatured.length > 0 && (
                <div className="mb-10">
                  <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <p
                        className={cn(
                          "text-xs font-bold uppercase tracking-[0.18em] text-cyan-700",
                          isRtl && "font-arabic-ui tracking-normal"
                        )}
                      >
                        {t("projectsPage.liveEyebrow")}
                      </p>
                      <h3
                        className={cn(
                          "font-heading mt-1 text-xl font-bold text-foreground md:text-2xl",
                          isRtl && "font-arabic-ui"
                        )}
                      >
                        {t("projectsPage.liveTitle")}
                      </h3>
                    </div>
                  </div>
                  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {liveFeatured.map((project, i) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        featured
                        delay={i * 0.04}
                        isRtl={isRtl}
                        onOpen={() => setActive(project)}
                        viewLabel={t("projectsPage.viewProject")}
                        premiumLabel={t("projectsPage.premiumBadge")}
                        liveLabel={t("projectsPage.liveBadge")}
                      />
                    ))}
                  </div>
                </div>
              )}

              {(featured.length > 0 || rest.length > 0) && (
                <div className="mb-5">
                  <h3
                    className={cn(
                      "font-heading text-lg font-bold text-foreground md:text-xl",
                      isRtl && "font-arabic-ui"
                    )}
                  >
                    {t("projectsPage.archiveTitle")}
                  </h3>
                </div>
              )}

              <div className="mb-5 grid gap-5 md:grid-cols-2">
                {featured.map((project, i) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    featured
                    delay={i * 0.05}
                    isRtl={isRtl}
                    onOpen={() => setActive(project)}
                    viewLabel={t("projectsPage.viewProject")}
                    premiumLabel={t("projectsPage.premiumBadge")}
                    liveLabel={t("projectsPage.liveBadge")}
                  />
                ))}
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {rest.map((project, i) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    delay={Math.min(i * 0.03, 0.35)}
                    isRtl={isRtl}
                    onOpen={() => setActive(project)}
                    viewLabel={t("projectsPage.viewProject")}
                    premiumLabel={t("projectsPage.premiumBadge")}
                    liveLabel={t("projectsPage.liveBadge")}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pt-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-black/5 bg-slate-950 px-6 py-14 text-white md:px-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(6,182,212,0.35),_transparent_55%),radial-gradient(ellipse_at_right,_rgba(249,115,22,0.22),_transparent_50%)]" />
          <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2
                className={cn(
                  "font-heading text-3xl font-bold tracking-tight md:text-4xl",
                  isRtl && "font-arabic-ui"
                )}
              >
                {t("projectsPage.bottomCtaTitle")}
              </h2>
              <p
                className={cn(
                  "mt-3 text-base text-white/70",
                  isRtl && "font-arabic-ui"
                )}
              >
                {t("projectsPage.bottomCtaBody")}
              </p>
            </div>
            <Link href="/contact">
              <InteractiveHoverButton
                className={cn(
                  "border-white/15 bg-white text-black hover:bg-white",
                  isRtl && "font-arabic-ui"
                )}
              >
                {t("projectsPage.bottomCtaButton")}
              </InteractiveHoverButton>
            </Link>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/15 bg-slate-950 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute end-4 top-4 z-10 inline-flex size-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur hover:bg-black/70"
                aria-label={t("projectsPage.close")}
              >
                <X className="size-5" />
              </button>

              <div className="relative aspect-[16/10] bg-slate-900">
                <Image
                  src={active.image}
                  alt={active.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 960px"
                  className="object-cover object-top"
                />
              </div>

              <div className="flex flex-col gap-3 p-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="flex flex-wrap gap-2">
                    <span
                      className={cn(
                        "inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold text-cyan-200",
                        isRtl && "font-arabic-ui"
                      )}
                    >
                      {isRtl ? active.categoryLabelAr : active.categoryLabel}
                    </span>
                    {active.premium && (
                      <span
                        className={cn(
                          "inline-flex rounded-full border border-orange-400/40 bg-orange-400/15 px-3 py-1 text-[11px] font-semibold text-orange-200",
                          isRtl && "font-arabic-ui"
                        )}
                      >
                        {t("projectsPage.premiumBadge")}
                      </span>
                    )}
                  </div>
                  <h3
                    className={cn(
                      "font-heading mt-2 text-2xl font-bold text-white",
                      isRtl && "font-arabic-ui"
                    )}
                  >
                    {active.name}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 max-w-2xl text-sm leading-relaxed text-white/65",
                      isRtl && "font-arabic-ui"
                    )}
                  >
                    {isRtl ? active.descriptionAr : active.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {active.link ? (
                    <a
                      href={active.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/15",
                        isRtl && "font-arabic-ui"
                      )}
                    >
                      {t("projectsPage.visitSite")}
                      <ArrowUpRight className="size-4" />
                    </a>
                  ) : null}
                  <Link
                    href="/contact"
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-50",
                      isRtl && "font-arabic-ui"
                    )}
                  >
                    {t("projectsPage.requestSimilar")}
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function ProjectCard({
  project,
  featured = false,
  delay = 0,
  isRtl,
  onOpen,
  viewLabel,
  premiumLabel,
  liveLabel,
}: {
  project: PortfolioProject
  featured?: boolean
  delay?: number
  isRtl: boolean
  onOpen: () => void
  viewLabel: string
  premiumLabel: string
  liveLabel: string
}) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-black/5 bg-white text-start shadow-sm transition hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10",
        project.featured && "border-cyan-500/20 shadow-md shadow-cyan-500/10",
        featured ? "min-h-[320px]" : "min-h-[260px]"
      )}
    >
      <div className={cn("relative w-full overflow-hidden", featured ? "aspect-[16/11]" : "aspect-[4/3]")}>
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
          className="object-cover object-top transition duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent opacity-90" />
        {(project.premium || project.link) && (
          <div className="absolute start-3 top-3 z-10 flex flex-wrap gap-1.5">
            {project.premium && (
              <span
                className={cn(
                  "rounded-full border border-orange-300/40 bg-orange-500/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white",
                  isRtl && "font-arabic-ui normal-case tracking-normal"
                )}
              >
                {premiumLabel}
              </span>
            )}
            {project.link && (
              <span
                className={cn(
                  "rounded-full border border-emerald-300/40 bg-emerald-500/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white",
                  isRtl && "font-arabic-ui normal-case tracking-normal"
                )}
              >
                {liveLabel}
              </span>
            )}
          </div>
        )}
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5">
        <span
          className={cn(
            "inline-flex rounded-full border border-white/20 bg-black/35 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/90 backdrop-blur",
            isRtl && "font-arabic-ui normal-case tracking-normal"
          )}
        >
          {isRtl ? project.categoryLabelAr : project.categoryLabel}
        </span>
        <h3
          className={cn(
            "font-heading mt-2 text-lg font-bold text-white md:text-xl",
            isRtl && "font-arabic-ui"
          )}
        >
          {project.name}
        </h3>
        <p
          className={cn(
            "mt-1 line-clamp-2 text-xs leading-relaxed text-white/70",
            isRtl && "font-arabic-ui"
          )}
        >
          {isRtl ? project.descriptionAr : project.description}
        </p>
        <span
          className={cn(
            "mt-3 inline-flex items-center gap-1 text-xs font-bold text-cyan-200 opacity-0 transition group-hover:opacity-100",
            isRtl && "font-arabic-ui"
          )}
        >
          {viewLabel}
          <ArrowUpRight className="size-3.5" />
        </span>
      </div>
    </motion.button>
  )
}
