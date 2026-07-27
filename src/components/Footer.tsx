"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/i18n/locale-provider";
import { cn } from "@/lib/utils";

type FooterLink = { label: string; href: string; external?: boolean };

function FooterColumn({
  title,
  links,
  isRtl,
}: {
  title: string;
  links: FooterLink[];
  isRtl: boolean;
}) {
  return (
    <div>
      <h3
        className={cn(
          "mb-5 font-heading text-[15px] font-bold tracking-tight text-foreground",
          isRtl && "font-arabic-ui"
        )}
      >
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "text-[15px] font-medium text-foreground/55 transition-colors hover:text-primary",
                  isRtl && "font-arabic-ui"
                )}
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className={cn(
                  "text-[15px] font-medium text-foreground/55 transition-colors hover:text-primary",
                  isRtl && "font-arabic-ui"
                )}
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const { t, isRtl } = useLocale();

  const columns: { title: string; links: FooterLink[] }[] = [
    {
      title: t("footer.solutions"),
      links: [
        { label: t("footer.customSoftware"), href: "/services" },
        { label: t("footer.aiAutomations"), href: "/services" },
        { label: t("footer.voiceWhatsapp"), href: "/services" },
        { label: t("footer.aiApps"), href: "/services" },
        { label: t("footer.aiPipelines"), href: "/services" },
        { label: t("footer.workflows"), href: "/services" },
      ],
    },
    {
      title: t("footer.industries"),
      links: [
        { label: t("footer.umrahHotels"), href: "/industries" },
        { label: t("footer.healthcare"), href: "/industries" },
        { label: t("footer.logistics"), href: "/industries" },
        { label: t("footer.manufacturing"), href: "/industries" },
        { label: t("footer.retail"), href: "/industries" },
        { label: t("footer.law"), href: "/industries" },
      ],
    },
    {
      title: t("footer.cities"),
      links: [
        { label: t("common.makkah"), href: "/services#cities" },
        { label: t("common.madinah"), href: "/services#cities" },
        { label: t("common.jeddah"), href: "/services#cities" },
        { label: t("common.dammam"), href: "/services#cities" },
        { label: t("common.riyadh"), href: "/services#cities" },
      ],
    },
    {
      title: t("footer.company"),
      links: [
        { label: t("footer.about"), href: "/about" },
        { label: t("footer.team"), href: "/about" },
        { label: t("footer.mission"), href: "/about" },
        { label: t("footer.contact"), href: "/contact" },
      ],
    },
    {
      title: t("footer.resources"),
      links: [
        { label: t("footer.servicesOverview"), href: "/services" },
        { label: t("footer.industriesOverview"), href: "/industries" },
        { label: t("footer.faq"), href: "/contact" },
        { label: t("footer.privacy"), href: "/contact" },
      ],
    },
    {
      title: t("footer.getStarted"),
      links: [
        { label: t("footer.bookCall"), href: "/contact" },
        {
          label: t("footer.whatsapp"),
          href: "https://wa.me/923100043155",
          external: true,
        },
        { label: "contact@apexa.ai", href: "mailto:contact@apexa.ai", external: true },
        { label: t("footer.hq"), href: "/contact" },
      ],
    },
  ];

  const socials = [
    { label: t("footer.linkedin"), href: "#" },
    { label: t("footer.facebook"), href: "#" },
    { label: t("footer.x"), href: "#" },
    { label: t("footer.instagram"), href: "#" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-black/5 bg-[#f7fafc]">
      {/* Soft brand atmosphere — not cream/purple */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(6,182,212,0.08),_transparent_45%),radial-gradient(ellipse_at_bottom_right,_rgba(249,115,22,0.07),_transparent_40%)]" />
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.035]"
        aria-hidden
      >
        <defs>
          <pattern id="apexa-footer-dots" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="currentColor" className="text-foreground" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#apexa-footer-dots)" />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8 lg:pt-20">
        {/* Link columns */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {columns.map((col) => (
            <FooterColumn key={col.title} title={col.title} links={col.links} isRtl={isRtl} />
          ))}
        </div>

        {/* Brand lockup — Neptune-style wordmark zone */}
        <div className="relative mt-16 flex flex-col items-start justify-between gap-8 border-t border-foreground/10 pt-12 md:mt-20 md:flex-row md:items-end lg:mt-24">
          <div className="max-w-md">
            <p
              className={cn(
                "text-sm font-medium leading-relaxed text-foreground/55",
                isRtl && "font-arabic-ui"
              )}
            >
              {t("footer.tagline")}
            </p>
            <p className="ayah mt-5 text-base text-foreground/40 md:text-lg" dir="rtl" lang="ar">
              ﴿ وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ ﴾
            </p>
          </div>

          <Link
            href="/"
            className="group relative ms-auto flex items-center gap-4 md:ms-0"
            aria-label="Apexa AI Labs"
          >
            <span
              className={cn(
                "font-heading text-5xl font-black tracking-tight text-foreground sm:text-6xl md:text-7xl",
                isRtl && "font-arabic-ui"
              )}
            >
              Apexa
            </span>
            <span className="relative flex size-12 items-center justify-center sm:size-14">
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400 to-orange-500 opacity-90 shadow-lg shadow-cyan-500/20 transition group-hover:scale-105" />
              <Image
                src="/logo.png"
                alt=""
                width={40}
                height={40}
                className="relative z-10 size-8 object-contain brightness-0 invert sm:size-9"
              />
            </span>
          </Link>
        </div>

        {/* Bottom legal + social */}
        <div className="mt-10 flex flex-col gap-6 border-t border-foreground/10 pt-6 lg:flex-row lg:items-center lg:justify-between">
          <div
            className={cn(
              "flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-foreground/50",
              isRtl && "font-arabic-ui"
            )}
          >
            <span>{t("footer.rights")}</span>
            <Link href="/contact" className="transition-colors hover:text-primary">
              {t("footer.privacy")}
            </Link>
            <Link href="/contact" className="transition-colors hover:text-primary">
              {t("footer.cookies")}
            </Link>
            <Link href="/contact" className="transition-colors hover:text-primary">
              {t("footer.terms")}
            </Link>
          </div>

          <nav
            aria-label="Social"
            className={cn(
              "flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-foreground/55",
              isRtl && "font-arabic-ui"
            )}
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="transition-colors hover:text-primary"
              >
                {s.label}
              </a>
            ))}
          </nav>

          <p
            className={cn(
              "text-sm text-foreground/40 lg:text-end",
              isRtl && "font-arabic-ui"
            )}
          >
            {isRtl ? "من مكة · لأعمال المملكة" : "From Makkah · For KSA business"}
          </p>
        </div>
      </div>
    </footer>
  );
}
