import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { PAGE_SEO, SITE_NAME, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: PAGE_SEO.about.title,
  description: PAGE_SEO.about.description,
  path: PAGE_SEO.about.path,
  keywords: [
    "Apexa AI Labs about",
    "Makkah AI company",
    "Saudi AI software team",
    "Vision 2030 AI partner",
    "شركة ذكاء اصطناعي مكة",
  ],
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: SITE_NAME, path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      {children}
    </>
  );
}
