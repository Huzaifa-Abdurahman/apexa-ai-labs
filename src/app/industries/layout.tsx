import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { PAGE_SEO, SITE_NAME, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: PAGE_SEO.industries.title,
  description: PAGE_SEO.industries.description,
  path: PAGE_SEO.industries.path,
    keywords: [
    "AI for hotels UK",
    "Tour operator software",
    "clinic AI appointment UK",
    "logistics software UK",
    "construction software UK",
    "retail automation London",
    "manufacturing ERP Birmingham",
    "حلول ذكاء اصطناعي للفنادق",
    "برمجيات لندن",
  ],
});

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: SITE_NAME, path: "/" },
          { name: "Industries", path: "/industries" },
        ]}
      />
      {children}
    </>
  );
}
