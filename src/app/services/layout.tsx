import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { PAGE_SEO, SITE_NAME, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: PAGE_SEO.services.title,
  description: PAGE_SEO.services.description,
  path: PAGE_SEO.services.path,
  keywords: [
    "AI automation Saudi Arabia",
    "custom software development KSA",
    "WhatsApp AI agent Makkah",
    "voice AI Saudi Arabia",
    "ERP CRM development Saudi",
    "AI pipelines KSA",
    "software company Jeddah Riyadh",
    "تطوير برمجيات السعودية",
    "أتمتة ذكاء اصطناعي مكة",
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
