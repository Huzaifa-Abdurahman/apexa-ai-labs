"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { useLocale } from "@/i18n/locale-provider";
import { cn } from "@/lib/utils";
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
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.industries"), href: "/industries" },
    { name: t("nav.projects"), href: "/projects" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  const selectLanguage = (next: Locale) => {
    setLocale(next);
    setLangDropdownOpen(false);
  };

  return (
    <div
      className={cn(
        "fixed top-9 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-500 ease-in-out",
        scrolled ? "pt-2 px-2" : "pt-4 px-4 sm:pt-5"
      )}
    >
      <motion.nav
        initial={false}
        animate={{
          width: "100%",
          maxWidth: scrolled || mobileMenuOpen ? "100%" : "1200px",
          borderRadius: scrolled || mobileMenuOpen ? "16px" : "9999px",
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "relative pointer-events-auto flex flex-col transition-colors duration-300 bg-[#0a0a0a] border border-white/10 shadow-2xl",
          scrolled ? "px-4 sm:px-6" : "px-4 sm:px-8"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between w-full",
            scrolled ? "h-16" : "h-16 sm:h-20"
          )}
        >
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="group flex items-center"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Apexa AI Labs — Home"
            >
              <Image
                src="/logo.png"
                alt="Apexa AI Labs"
                width={220}
                height={80}
                priority
                className={cn(
                  "h-14 w-auto object-contain object-left transition duration-300 group-hover:opacity-90 sm:h-16",
                  scrolled ? "sm:h-[3.75rem]" : "sm:h-16"
                )}
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-center gap-8 lg:gap-12 absolute left-1/2 -translate-x-1/2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-gray-300 hover:text-white text-sm font-medium transition-colors",
                  isRtl && "font-arabic-ui"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-4 md:gap-6 ms-auto md:ms-0">
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 text-gray-300 hover:text-white text-sm font-medium transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full"
                aria-label={t("nav.language")}
              >
                <Globe className="w-4 h-4" />
                <span>{locale === "ar" ? "AR" : "EN"}</span>
                <ChevronDown
                  className={cn(
                    "w-3 h-3 transition-transform duration-200",
                    langDropdownOpen && "rotate-180"
                  )}
                />
              </button>

              {langDropdownOpen && (
                <div className="absolute top-full end-0 mt-2 w-36 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-xl overflow-hidden py-1 z-50">
                  <button
                    type="button"
                    onClick={() => selectLanguage("en")}
                    className="w-full text-start px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between"
                  >
                    {t("nav.english")}{" "}
                    {locale === "en" && <span className="text-primary text-xs">✓</span>}
                  </button>
                  <button
                    type="button"
                    onClick={() => selectLanguage("ar")}
                    className="w-full text-start px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between font-arabic-ui"
                  >
                    {t("nav.arabic")}{" "}
                    {locale === "ar" && <span className="text-primary text-xs">✓</span>}
                  </button>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={cn(
                "hidden sm:inline-flex px-5 py-2 sm:px-6 sm:py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-200 transition-colors",
                isRtl && "font-arabic-ui"
              )}
            >
              {t("nav.bookCall")}
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
              aria-label={mobileMenuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden w-full"
            >
              <div className="flex flex-col gap-1 pb-4 pt-2 border-t border-white/10">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "px-3 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl text-base font-medium transition-colors",
                      isRtl && "font-arabic-ui"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "mt-2 mx-1 px-5 py-3 bg-white text-black text-sm font-semibold rounded-full text-center hover:bg-gray-200 transition-colors",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {t("nav.bookCall")}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
