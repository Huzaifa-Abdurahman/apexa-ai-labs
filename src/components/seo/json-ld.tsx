import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_SECONDARY,
  CONTACT_PHONES,
  HQ,
  SERVICE_CITIES,
  SITE_NAME,
  SITE_NAME_AR,
  SITE_TAGLINE,
  SITE_URL,
  WHATSAPP_URL,
  absoluteUrl,
  WHATSAPP_E164,
} from "@/lib/seo";

function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Organization + Local ProfessionalService + WebSite for Google & AI answer engines */
export function SiteJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: [SITE_NAME_AR, "Apexa", "Apexa AI", "Apexa Labs"],
    legalName: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo-512.png`,
      width: 512,
      height: 512,
    },
    image: `${SITE_URL}/logo-512.png`,
    description: SITE_TAGLINE,
    email: [CONTACT_EMAIL, CONTACT_EMAIL_SECONDARY],
    telephone: CONTACT_PHONES.map((p) => p.e164),
    foundingDate: "2022",
    slogan: "Universal-standard software delivery",
    knowsLanguage: ["en", "ar"],
    address: {
      "@type": "PostalAddress",
      addressLocality: HQ.city,
      addressRegion: HQ.region,
      addressCountry: HQ.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.5074,
      longitude: -0.1278,
    },
    areaServed: [
      {
        "@type": "Country",
        name: "United Kingdom",
        sameAs: "https://www.wikidata.org/wiki/Q145",
      },
      {
        "@type": "Country",
        name: "United States",
        sameAs: "https://www.wikidata.org/wiki/Q30",
      },
      ...SERVICE_CITIES.map((city) => ({
        "@type": "City",
        name: city,
      })),
    ],
    serviceType: [
      "Custom Software Development",
      "Artificial Intelligence Automation",
      "AI Voice Agents",
      "WhatsApp AI Agents",
      "AI Applications",
      "Data Pipelines",
      "Business Process Automation",
      "ERP and CRM Development",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Custom Software Development",
      "UK digital transformation",
      "Arabic Natural Language Processing",
      "WhatsApp Business Automation",
      "Enterprise Resource Planning",
      "Tourism and Hospitality Operations",
      "USA market operations",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Apexa AI & Software Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Software Development",
            description:
              "Bespoke ERP, CRM, portals, and internal tools for UK and USA businesses.",
            areaServed: ["GB", "US"],
            provider: { "@id": `${SITE_URL}/#organization` },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Automations & Voice Agents",
            description:
              "Multi-language ready voice and WhatsApp AI agents connected to real business systems.",
            areaServed: ["GB", "US"],
            provider: { "@id": `${SITE_URL}/#organization` },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Live Reports, Insights & Workflow Automation",
            description:
              "Data pipelines and process automation for scalable UK and USA operations.",
            areaServed: ["GB", "US"],
            provider: { "@id": `${SITE_URL}/#organization` },
          },
        },
      ],
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONES[0].e164,
        url: absoluteUrl("/contact"),
        availableLanguage: ["English", "Arabic"],
        areaServed: ["GB", "US"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: CONTACT_EMAIL_SECONDARY,
        telephone: WHATSAPP_E164,
        url: WHATSAPP_URL,
        availableLanguage: ["English", "Arabic"],
        areaServed: ["GB", "US"],
      },
    ],
    sameAs: [
      SITE_URL,
      absoluteUrl("/about"),
      absoluteUrl("/services"),
    ],
    priceRange: "$$",
    currenciesAccepted: "GBP, USD",
    paymentAccepted: "Bank Transfer, Card",
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    alternateName: SITE_NAME_AR,
    description: SITE_TAGLINE,
    inLanguage: ["en", "ar"],
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/services`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const webPages = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: `${SITE_NAME} | AI & Custom Software Company (London)`,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      description: SITE_TAGLINE,
      inLanguage: ["en", "ar"],
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo-512.png`,
      },
    },
  ];

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/contact#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you only serve businesses in Saudi Arabia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Apexa AI Labs operates from London and serves UK and USA clients, with multilingual delivery for international teams.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI handle Arabic voice and WhatsApp?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Apexa builds Arabic-ready voice agents and WhatsApp automations connected to real CRM, ERP, and booking systems.",
        },
      },
      {
        "@type": "Question",
        name: "What services does Apexa AI Labs offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Custom software development, AI automations, AI apps, AI data pipelines, automation workflows, and voice/integration layers for UK and USA businesses.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Apexa AI Labs located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our headquarters is in London, UK. We serve operators across UK and USA markets.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={organization} />
      <JsonLd data={website} />
      <JsonLd data={webPages} />
      <JsonLd data={faq} />
    </>
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };

  return <JsonLd data={data} />;
}
