import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { PAGE_SEO, SITE_NAME, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: PAGE_SEO.about.title,
  description: PAGE_SEO.about.description,
  path: PAGE_SEO.about.path,
  keywords: [
    "Apexa AI Labs about",
    "Dubai AI company",
    "London AI company",
    "Global AI software team",
    "شركة ذكاء اصطناعي دبي",
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
