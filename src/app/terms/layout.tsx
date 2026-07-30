import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import { PAGE_SEO, SITE_NAME, buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: PAGE_SEO.terms.title,
  description: PAGE_SEO.terms.description,
  path: PAGE_SEO.terms.path,
  keywords: [
    "Apexa terms and conditions",
    "Saudi Arabia software services terms",
    "شروط وأحكام أبيكسا",
  ],
})

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: SITE_NAME, path: "/" },
          { name: "Terms & Conditions", path: "/terms" },
        ]}
      />
      {children}
    </>
  )
}
