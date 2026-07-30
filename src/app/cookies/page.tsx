"use client"

import { LegalDocumentView } from "@/components/legal/legal-document-view"
import { legalAr } from "@/i18n/legal-ar"
import { legalEn } from "@/i18n/legal-en"
import { useLocale } from "@/i18n/locale-provider"

const LABELS = {
  en: {
    effective: "Effective",
    updated: "Last updated",
    related: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    cookies: "Cookie Policy",
    backHome: "Back to home",
    contactCta: "Contact us",
  },
  ar: {
    effective: "تاريخ النفاذ",
    updated: "آخر تحديث",
    related: "قانوني",
    privacy: "سياسة الخصوصية",
    terms: "الشروط والأحكام",
    cookies: "سياسة ملفات الارتباط",
    backHome: "العودة للرئيسية",
    contactCta: "تواصل معنا",
  },
} as const

export default function CookiesPage() {
  const { locale } = useLocale()
  const doc = locale === "ar" ? legalAr.cookies : legalEn.cookies
  return <LegalDocumentView doc={doc} labels={LABELS[locale === "ar" ? "ar" : "en"]} />
}
