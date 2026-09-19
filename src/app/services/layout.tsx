import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { PAGE_SEO, SITE_NAME, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: PAGE_SEO.services.title,
  description: PAGE_SEO.services.description,
  path: PAGE_SEO.services.path,
  keywords: [
    "AI automation London",
    "custom software development UK",
    "WhatsApp AI agent London",
    "voice AI UK",
    "ERP CRM development UK",
    "AI pipelines UK",
    "software company London Manchester",
    "تطوير برمجيات لندن",
    "أتمتة ذكاء اصطناعي لندن",
  ],
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: SITE_NAME, path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />
      {children}
    </>
  );
}
