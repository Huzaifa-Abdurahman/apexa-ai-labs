"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { useLocale } from "@/i18n/locale-provider";
import { cn } from "@/lib/utils";
import { WHATSAPP_UK_URL } from "@/lib/seo";
import type { Locale } from "@/i18n/config";

export default function Navbar() {
  const { locale, setLocale, t, isRtl } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { name: t("nav.about"), href: "/about", hasDropdown: false },
    { name: t("nav.services"), href: "/services", hasDropdown: false },
    { name: "AI Trainings", href: "/ai-trainings", hasDropdown: false },
    { name: t("nav.industries"), href: "/industries", hasDropdown: false },
    { name: t("nav.projects"), href: "/projects", hasDropdown: false },
    { name: t("nav.contact"), href: "/contact", hasDropdown: false },
  ];

  const selectLanguage = (next: Locale) => {
    setLocale(next);
    setLangDropdownOpen(false);
  };

  return (
    <div
      className={cn(
        "fixed top-12 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-500 ease-in-out px-4 sm:px-6"
      )}
    >
      <motion.nav
        initial={false}
        animate={{
          width: "100%",
          maxWidth: "1280px",
          borderRadius: "9999px",
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "relative pointer-events-auto flex flex-col transition-all duration-300 bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100",
          scrolled ? "py-2 px-4 sm:px-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)]" : "py-2 px-4 sm:px-8"
        )}
      >
        <div className="flex items-center justify-between w-full h-14">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="group flex items-center gap-2.5"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Apexa AI Labs — Home"
            >
              <span className="relative flex size-10 shrink-0 items-center justify-center rounded-[11px] bg-gradient-to-br from-purple-600 to-cyan-500 shadow-[0_4px_14px_-2px_rgba(139,92,246,0.45)] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_6px_18px_-2px_rgba(6,182,212,0.5)]">
                <Image
                  src="/logo-mark-white.png"
                  alt=""
                  width={64}
                  height={64}
                  priority
                  className="h-[22px] w-auto object-contain"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-heading text-[19px] font-black tracking-tight text-slate-900">
                  Apexa
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  AI Labs
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center justify-center gap-1 absolute left-1/2 -translate-x-1/2">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative group px-4 py-2 flex items-center gap-1.5 text-slate-700 hover:text-blue-600 text-[15px] font-bold transition-colors rounded-full",
                  isRtl && "font-arabic-ui"
                )}
              >
                <span className="absolute inset-0 rounded-full bg-blue-50/80 scale-50 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100" />
                <span className="relative z-10">{link.name}</span>
                {link.hasDropdown && (
                  <ChevronDown className="relative z-10 w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 ms-auto md:ms-0">
            {/* Language Selector */}
            <div className="hidden sm:block relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 bg-white border border-slate-200 hover:border-blue-200 hover:bg-blue-50/50 px-3 py-1.5 rounded-full transition-all shadow-sm"
                aria-label={t("nav.language")}
              >
                <span className="text-[10px] font-black text-slate-400">GB</span>
                <span className="text-[13px] font-black text-slate-800">{locale === "ar" ? "AR" : "EN"}</span>
                <ChevronDown
                  className={cn(
                    "w-3 h-3 text-slate-400 transition-transform duration-200",
                    langDropdownOpen && "rotate-180"
                  )}
                />
              </button>

              {langDropdownOpen && (
                <div className="absolute top-full end-0 mt-2 w-32 bg-white border border-slate-100 rounded-2xl shadow-xl overflow-hidden py-1 z-50">
                  <button
                    type="button"
                    onClick={() => selectLanguage("en")}
                    className="w-full text-start px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors flex items-center justify-between"
                  >
                    {t("nav.english")}
                    {locale === "en" && <span className="text-blue-600 text-xs">✓</span>}
                  </button>
                  <button
                    type="button"
                    onClick={() => selectLanguage("ar")}
                    className="w-full text-start px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors flex items-center justify-between font-arabic-ui"
                  >
                    {t("nav.arabic")}
                    {locale === "ar" && <span className="text-blue-600 text-xs">✓</span>}
                  </button>
                </div>
              )}
            </div>

            {/* CTA */}
            <Link
              href={WHATSAPP_UK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group hidden sm:flex items-center gap-3 bg-[#0095FF] hover:bg-[#0080FF] text-white rounded-full pl-5 pr-1.5 py-1.5 transition-all shadow-[0_4px_14px_0_rgba(0,149,255,0.39)] hover:shadow-[0_6px_20px_rgba(0,149,255,0.23)] hover:-translate-y-0.5",
                isRtl && "font-arabic-ui pr-5 pl-1.5"
              )}
            >
              <span className="text-[14px] font-bold tracking-wide">{t("nav.bookCall")}</span>
              <div className="bg-white rounded-full p-1.5 text-[#0095FF] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                <ArrowRight className={cn("w-4 h-4", isRtl && "rotate-180")} />
              </div>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="xl:hidden flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-700 transition-colors"
              aria-label={mobileMenuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="xl:hidden overflow-hidden w-full"
            >
              <div className="flex flex-col gap-1 pb-4 pt-4 border-t border-slate-100 mt-2">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-2xl text-base font-bold transition-colors flex items-center justify-between",
                      isRtl && "font-arabic-ui"
                    )}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </Link>
                ))}
                <Link
                  href={WHATSAPP_UK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "mt-4 mx-2 flex items-center justify-between bg-[#0095FF] hover:bg-[#0080FF] text-white rounded-full pl-6 pr-2 py-2 transition-all",
                    isRtl && "font-arabic-ui pr-6 pl-2"
                  )}
                >
                  <span className="text-[15px] font-bold">{t("nav.bookCall")}</span>
                  <div className="bg-white rounded-full p-2 text-[#0095FF]">
                    <ArrowRight className={cn("w-5 h-5", isRtl && "rotate-180")} />
                  </div>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
