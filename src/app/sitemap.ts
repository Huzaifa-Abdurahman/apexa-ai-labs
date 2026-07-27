import type { MetadataRoute } from "next";
import { absoluteUrl, PAGE_SEO } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

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
    {
      url: absoluteUrl(PAGE_SEO.industries.path),
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
      url: absoluteUrl(PAGE_SEO.contact.path),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];
}
