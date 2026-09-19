import type { MetadataRoute } from "next";
import { SERVICE_SLUGS } from "@/lib/service-slugs";
import { absoluteUrl, PAGE_SEO } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const servicePages = SERVICE_SLUGS.map((slug) => ({
    url: absoluteUrl(`/services/${slug}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [
    {
      url: absoluteUrl(PAGE_SEO.home.path),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl(PAGE_SEO.services.path),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    ...servicePages,
    {
      url: absoluteUrl(PAGE_SEO.industries.path),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl(PAGE_SEO.projects.path),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl(PAGE_SEO.about.path),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl(PAGE_SEO.aiTrainings.path),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl(PAGE_SEO.contact.path),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: absoluteUrl(PAGE_SEO.privacy.path),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: absoluteUrl(PAGE_SEO.terms.path),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: absoluteUrl(PAGE_SEO.cookies.path),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.35,
    },
  ];
}
