import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { PAGE_SEO, SITE_NAME, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: PAGE_SEO.blog.title,
  description: PAGE_SEO.blog.description,
  path: PAGE_SEO.blog.path,
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: SITE_NAME, path: "/" },
          { name: "Insights", path: "/blog" },
        ]}
      />
      {children}
    </>
  );
}
