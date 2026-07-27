export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
export const LOCALE_STORAGE_KEY = "apexa-locale";

export function isLocale(value: unknown): value is Locale {
  return value === "en" || value === "ar";
}

export function localeDirection(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}
