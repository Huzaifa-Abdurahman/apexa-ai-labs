import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { PAGE_SEO, SITE_NAME, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: PAGE_SEO.contact.title,
  description: PAGE_SEO.contact.description,
  path: PAGE_SEO.contact.path,
  keywords: [
    "contact AI company",
    "book AI consultation Dubai",
    "book AI consultation London",
    "custom software quote",
    "تواصل أبيكسا دبي",
  ],
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: SITE_NAME, path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      {children}
    </>
  );
}
