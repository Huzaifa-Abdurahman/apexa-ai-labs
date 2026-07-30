"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, FileText } from "lucide-react"

import type { LegalDoc } from "@/i18n/legal-en"
import { useLocale } from "@/i18n/locale-provider"
import { cn } from "@/lib/utils"

const RELATED = [
  { href: "/privacy", key: "privacy" as const },
  { href: "/terms", key: "terms" as const },
  { href: "/cookies", key: "cookies" as const },
]

export function LegalDocumentView({
  doc,
  labels,
}: {
  doc: LegalDoc
  labels: {
    effective: string
    updated: string
    related: string
    privacy: string
    terms: string
    cookies: string
    backHome: string
    contactCta: string
  }
}) {
  const { isRtl } = useLocale()
  const BackIcon = isRtl ? ArrowRight : ArrowLeft

  return (
    <div className="overflow-hidden pb-24">
      <section className="relative overflow-hidden bg-slate-950 px-4 pb-14 pt-32 text-white sm:pt-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(6,182,212,0.25),_transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(249,115,22,0.14),_transparent_45%)]" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <Link
            href="/"
            className={cn(
              "mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/60 transition hover:text-white",
              isRtl && "font-arabic-ui"
            )}
          >
            <BackIcon className="size-4" />
            {labels.backHome}
          </Link>
          <div className="mb-4 inline-flex size-11 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
            <FileText className="size-5 text-cyan-300" />
          </div>
          <h1
            className={cn(
              "font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl",
              isRtl && "font-arabic-ui"
            )}
          >
            {doc.title}
          </h1>
          <p
            className={cn(
              "mt-4 text-sm text-white/55",
              isRtl && "font-arabic-ui"
            )}
          >
            {labels.effective}: {doc.effectiveDate} · {labels.updated}:{" "}
            {doc.lastUpdated}
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14 lg:py-16">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p
            className={cn(
              "mb-3 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground",
              isRtl && "font-arabic-ui tracking-normal"
            )}
          >
            {labels.related}
          </p>
          <nav className="flex flex-col gap-1">
            {RELATED.map((item) => {
              const active = item.href === `/${doc.slug}`
              const text = labels[item.key]
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-xl px-3 py-2 text-sm font-semibold transition",
                    active
                      ? "bg-cyan-50 text-cyan-800"
                      : "text-foreground/70 hover:bg-muted hover:text-foreground",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {text}
                </Link>
              )
            })}
          </nav>
          <div className="mt-6 hidden space-y-2 lg:block">
            {doc.sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={cn(
                  "block truncate text-xs text-muted-foreground transition hover:text-cyan-700",
                  isRtl && "font-arabic-ui"
                )}
              >
                {section.title}
              </a>
            ))}
          </div>
        </aside>

        <article className="min-w-0">
          <p
            className={cn(
              "rounded-2xl border border-black/5 bg-[#f7fafc] p-5 text-base leading-relaxed text-foreground/80",
              isRtl && "font-arabic-ui"
            )}
          >
            {doc.intro}
          </p>

          <div className="mt-10 space-y-10">
            {doc.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2
                  className={cn(
                    "font-heading text-xl font-bold tracking-tight text-foreground md:text-2xl",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {section.title}
                </h2>

                {section.paragraphs?.map((p) => (
                  <p
                    key={p.slice(0, 48)}
                    className={cn(
                      "mt-4 text-[15px] leading-relaxed text-foreground/75",
                      isRtl && "font-arabic-ui"
                    )}
                  >
                    {p}
                  </p>
                ))}

                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {section.bullets.map((b) => (
                      <li
                        key={b.slice(0, 48)}
                        className={cn(
                          "relative ps-5 text-[15px] leading-relaxed text-foreground/75 before:absolute before:start-0 before:top-2 before:size-1.5 before:rounded-full before:bg-cyan-600",
                          isRtl && "font-arabic-ui"
                        )}
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {section.blocks?.map((block) => (
                  <div
                    key={block.title ?? block.paragraphs?.[0]?.slice(0, 24)}
                    className="mt-5 border-s-2 border-cyan-500/40 ps-4"
                  >
                    {block.title && (
                      <h3
                        className={cn(
                          "font-heading text-base font-bold text-foreground",
                          isRtl && "font-arabic-ui"
                        )}
                      >
                        {block.title}
                      </h3>
                    )}
                    {block.paragraphs?.map((p) => (
                      <p
                        key={p.slice(0, 40)}
                        className={cn(
                          "mt-2 text-[15px] leading-relaxed text-foreground/75",
                          isRtl && "font-arabic-ui"
                        )}
                      >
                        {p}
                      </p>
                    ))}
                    {block.bullets && (
                      <ul className="mt-2 space-y-1.5">
                        {block.bullets.map((b) => (
                          <li
                            key={b.slice(0, 40)}
                            className={cn(
                              "ps-4 text-[15px] leading-relaxed text-foreground/75 list-disc",
                              isRtl && "font-arabic-ui"
                            )}
                          >
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {section.paragraphsAfter?.map((p) => (
                  <p
                    key={p.slice(0, 48)}
                    className={cn(
                      "mt-4 text-[15px] leading-relaxed text-foreground/75",
                      isRtl && "font-arabic-ui"
                    )}
                  >
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <div className="mt-12 rounded-[1.75rem] border border-black/5 bg-slate-950 p-6 text-white md:p-8">
            <h2
              className={cn(
                "font-heading text-xl font-bold",
                isRtl && "font-arabic-ui"
              )}
            >
              {doc.contactHeading}
            </h2>
            <p
              className={cn(
                "mt-3 text-sm leading-relaxed text-white/70",
                isRtl && "font-arabic-ui"
              )}
            >
              {doc.contactBody}
            </p>
            <Link
              href="/contact"
              className={cn(
                "mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-50",
                isRtl && "font-arabic-ui"
              )}
            >
              {labels.contactCta}
              {isRtl ? (
                <ArrowLeft className="size-4" />
              ) : (
                <ArrowRight className="size-4" />
              )}
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
}
