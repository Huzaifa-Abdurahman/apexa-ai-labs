import type { Metadata } from "next";

/** Canonical production URL — override with NEXT_PUBLIC_SITE_URL */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://apexa.ai";

export const SITE_NAME = "Apexa AI Labs";
export const SITE_NAME_AR = "أبيكسا للذكاء الاصطناعي";

export const SITE_TAGLINE =
  "UK-based AI lab for custom software, AI automations, and scalable workflows for operators across multiple markets";

export const SITE_TAGLINE_AR =
  "مختبر ذكاء اصطناعي مقره المملكة المتحدة للبرمجيات المخصصة والأتمتة وسير العمل عبر الأسواق";

export const CONTACT_EMAIL = "ceo@apexaailabs.me";
export const CONTACT_EMAIL_SECONDARY = "ceo@apexaailabs.me";
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
  city: "London",
  region: "England, UK",
  country: "GB",
  countryName: "United Kingdom",
  countryNameAr: "المملكة المتحدة",
} as const;

export const SERVICE_CITIES = [
  "London",
  "Manchester",
  "Birmingham",
  "New York",
  "Houston",
] as const;

/** High-intent keywords for Google + AI answer engines */
export const PRIMARY_KEYWORDS = [
  "AI company United Kingdom",
  "custom software development UK",
  "AI automation London",
  "software development company UK",
  "AI WhatsApp agents UK",
  "Voice AI UK",
  "ERP CRM development UK",
  "best AI lab London",
  "UK business AI solutions",
  "Arabic AI software company",
  "أبيكسا ذكاء اصطناعي بريطانيا",
  "تطوير برمجيات لندن",
  "شركة ذكاء اصطناعي في المملكة المتحدة",
  "أتمتة الأعمال في المملكة المتحدة",
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
      locale: "en_GB",
      alternateLocale: ["ar_GB"],
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — AI & custom software in the United Kingdom`,
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
      "geo.region": "GB-ENG",
      "geo.placename": "London",
      "geo.position": "51.5074;-0.1278",
      ICBM: "51.5074, -0.1278",
    },
  };
}

export const PAGE_SEO = {
  home: {
    path: "/",
    title: "Apexa AI Labs | UK AI & Custom Software Company (London)",
    description:
      "Apexa AI Labs is a London-based AI and custom software company. We build AI automations, WhatsApp & voice agents, ERP/CRM platforms, and Arabic-ready workflows for modern operators.",
  },
  services: {
    path: "/services",
    title: "AI Automation & Custom Software Services in the UK | Apexa AI Labs",
    description:
      "Custom software development, AI voice & WhatsApp agents, AI apps, data pipelines, and automation workflows from our UK headquarters, serving UK and USA city operations.",
  },
  industries: {
    path: "/industries",
    title: "AI Solutions for UK Industries | Hotels, Hospitality, Clinics, Logistics",
    description:
      "Pain-first AI and software for hospitality agencies, hotels, healthcare, construction, logistics, manufacturing, law, and retail. Built for multilingual teams in UK and USA markets.",
  },
  about: {
    path: "/about",
    title: "About Apexa AI Labs | UK HQ AI Software Company",
    description:
      "Learn about Apexa AI Labs — a UK-based AI lab building practical custom software and intelligent automations for global operators, with multilingual delivery and practical scaling.",
  },
  contact: {
    path: "/contact",
    title: "Contact Apexa AI Labs | Book AI & Software Consultation — London",
    description:
      "Contact Apexa AI Labs in London. Tell us your city, industry, and bottleneck — get a clear AI + custom software plan. WhatsApp and email available.",
  },
  projects: {
    path: "/projects",
    title: "Projects & Portfolio | Websites and Digital Products by Apexa",
    description:
      "Browse 100+ websites and digital builds by Apexa AI Labs — software, e-commerce, hospitality, healthcare, publishing, and local service brands. Proof of craft for UK, USA, and global clients.",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy | Apexa AI Labs (UK-focused)",
    description:
      "How Apexa AI Labs collects, uses, and protects personal data under UK-focused privacy standards and international best practices.",
  },
  terms: {
    path: "/terms",
    title: "Terms & Conditions | Apexa AI Labs",
    description:
      "Terms governing use of apexa.ai and Apexa AI Labs services — custom software, AI agents, and digital delivery.",
  },
  cookies: {
    path: "/cookies",
    title: "Cookie Policy | Apexa AI Labs",
    description:
      "How Apexa AI Labs uses cookies and similar technologies on apexa.ai, with transparency aligned to UK and international cookie practices.",
  },
} as const;
