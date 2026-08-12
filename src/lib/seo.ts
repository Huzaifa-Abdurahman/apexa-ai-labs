import type { Metadata } from "next";

/** Canonical production URL — override with NEXT_PUBLIC_SITE_URL */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://apexa.ai";

export const SITE_NAME = "Apexa AI Labs";
export const SITE_NAME_AR = "أبيكسا للذكاء الاصطناعي";

export const SITE_TAGLINE =
  "Dubai-based AI lab for custom software, AI automations, and scalable workflows for operators across multiple markets";

export const SITE_TAGLINE_AR =
  "مختبر ذكاء اصطناعي من دبي ولندن للبرمجيات المخصصة والأتمتة وسير العمل عبر الأسواق";

export const CONTACT_EMAIL = "info@apexaailabs.com";
export const CONTACT_EMAIL_SECONDARY = "galaxysoftwarehub@gmail.com";
export const CONTACT_EMAILS = [CONTACT_EMAIL, CONTACT_EMAIL_SECONDARY] as const;

export const WHATSAPP_PK_E164 = "+923451569778";
export const WHATSAPP_UK_E164 = "+447449703113";
export const WHATSAPP_PK_URL = "https://wa.me/923451569778";
export const WHATSAPP_UK_URL = "https://wa.me/447449703113";

/** Primary WhatsApp (defaulting to UK main line) */
export const WHATSAPP_E164 = WHATSAPP_UK_E164;
export const WHATSAPP_URL = WHATSAPP_UK_URL;

export const CONTACT_PHONES = [
  {
    e164: WHATSAPP_UK_E164,
    display: "+44 7449 703113",
    label: "WhatsApp UK",
    labelAr: "واتساب بريطانيا",
    href: WHATSAPP_UK_URL,
  },
] as const;

/** Primary local SEO geo focus */
export const HQ = {
  city: "Dubai",
  region: "Dubai, UAE",
  country: "AE",
  countryName: "United Arab Emirates",
  countryNameAr: "الإمارات العربية المتحدة",
} as const;

export const SERVICE_CITIES = [
  "Makkah",
  "Madinah",
  "Jeddah",
  "Dammam",
  "Riyadh",
] as const;

/** High-intent keywords for Google + AI answer engines */
export const PRIMARY_KEYWORDS = [
  "AI company Saudi Arabia",
  "custom software development KSA",
  "AI automation Makkah",
  "software development company Saudi Arabia",
  "AI WhatsApp agents Saudi Arabia",
  "Voice AI KSA",
  "ERP CRM development Saudi Arabia",
  "best AI lab Makkah",
  "Vision 2030 AI solutions",
  "Arabic AI software company",
  "أبيكسا ذكاء اصطناعي",
  "تطوير برمجيات مكة",
  "شركة ذكاء اصطناعي السعودية",
  "أتمتة الأعمال السعودية",
] as const;

export const DEFAULT_OG_IMAGE = `${SITE_URL}/opengraph-image`;

type BuildMetaInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [...PRIMARY_KEYWORDS],
  noIndex = false,
}: BuildMetaInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  return {
    // absolute avoids double suffixes from root title.template
    title: { absolute: fullTitle },
    description,
    keywords: keywords.join(", "),
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "Technology",
    classification: "Business",
    applicationName: SITE_NAME,
    referrer: "origin-when-cross-origin",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    alternates: {
      canonical: url,
      languages: {
        en: url,
        ar: url,
        "x-default": url,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_SA",
      alternateLocale: ["ar_SA"],
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — AI & custom software in Saudi Arabia`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [DEFAULT_OG_IMAGE],
      creator: "@apexa",
    },
    other: {
      "geo.region": "AE-01",
      "geo.placename": "Dubai",
      "geo.position": "25.2048;55.2708",
      ICBM: "25.2048, 55.2708",
    },
  };
}

export const PAGE_SEO = {
  home: {
    path: "/",
    title: "Apexa AI Labs | Best AI & Custom Software Company in Saudi Arabia (Makkah)",
    description:
      "Apexa AI Labs is a Makkah-based AI and custom software company serving KSA — Makkah, Madinah, Jeddah, Dammam, and Riyadh. We build AI automations, WhatsApp & voice agents, ERP/CRM platforms, and Arabic-ready workflows for Saudi businesses.",
  },
  services: {
    path: "/services",
    title: "AI Automation & Custom Software Services in KSA | Apexa AI Labs",
    description:
      "Custom software development, AI voice & WhatsApp agents, AI apps, data pipelines, and automation workflows for Saudi operators. City-mapped solutions for Makkah, Madinah, Jeddah, Dammam, and Riyadh.",
  },
  industries: {
    path: "/industries",
    title: "AI Solutions for KSA Industries | Hotels, Hospitality, Clinics, Logistics",
    description:
      "Pain-first AI and software for travel and hospitality agencies, hotels, healthcare, construction, logistics, manufacturing, law, and retail across Saudi Arabia. Built with local seasonality and Arabic customers in mind.",
  },
  about: {
    path: "/about",
    title: "About Apexa AI Labs | Dubai HQ AI Software Company",
    description:
      "Learn about Apexa AI Labs — a Dubai-based AI lab building practical custom software and intelligent automations for global operators, with multilingual delivery and practical scaling.",
  },
  contact: {
    path: "/contact",
    title: "Contact Apexa AI Labs | Book AI & Software Consultation — Dubai",
    description:
      "Contact Apexa AI Labs in Dubai. Tell us your city, industry, and bottleneck — get a clear AI + custom software plan. WhatsApp and email available.",
  },
  projects: {
    path: "/projects",
    title: "Projects & Portfolio | Websites and Digital Products by Apexa",
    description:
      "Browse 100+ websites and digital builds by Apexa AI Labs — software, e-commerce, hospitality, healthcare, publishing, and local service brands. Proof of craft for Saudi and global clients.",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy | Apexa AI Labs (PDPL Aligned)",
    description:
      "How Apexa AI Labs collects, uses, and protects personal data under Saudi Arabia’s Personal Data Protection Law (PDPL) and international privacy standards. Makkah HQ.",
  },
  terms: {
    path: "/terms",
    title: "Terms & Conditions | Apexa AI Labs",
    description:
      "Terms governing use of apexa.ai and Apexa AI Labs services — custom software, AI agents, and digital delivery. Governed by the laws of the Kingdom of Saudi Arabia.",
  },
  cookies: {
    path: "/cookies",
    title: "Cookie Policy | Apexa AI Labs",
    description:
      "How Apexa AI Labs uses cookies and similar technologies on apexa.ai, with transparency aligned to Saudi PDPL expectations and international cookie practices.",
  },
} as const;
