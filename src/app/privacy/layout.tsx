import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import { PAGE_SEO, SITE_NAME, buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: PAGE_SEO.privacy.title,
  description: PAGE_SEO.privacy.description,
  path: PAGE_SEO.privacy.path,
  keywords: [
    "Apexa privacy policy",
    "PDPL Saudi Arabia",
    "SDAIA data protection",
    "سياسة خصوصية أبيكسا",
    "نظام حماية البيانات الشخصية",
  ],
})

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: SITE_NAME, path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ]}
      />
      {children}
    </>
  )
}
