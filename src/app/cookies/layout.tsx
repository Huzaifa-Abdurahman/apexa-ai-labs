import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import { PAGE_SEO, SITE_NAME, buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: PAGE_SEO.cookies.title,
  description: PAGE_SEO.cookies.description,
  path: PAGE_SEO.cookies.path,
  keywords: [
    "Apexa cookie policy",
    "website cookies UK",
    "سياسة ملفات تعريف الارتباط أبيكسا",
  ],
})

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: SITE_NAME, path: "/" },
          { name: "Cookie Policy", path: "/cookies" },
        ]}
      />
      {children}
    </>
  )
}
