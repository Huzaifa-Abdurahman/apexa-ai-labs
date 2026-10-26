import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import { PAGE_SEO, SITE_NAME, buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: PAGE_SEO.projects.title,
  description: PAGE_SEO.projects.description,
  path: PAGE_SEO.projects.path,
})

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: SITE_NAME, path: "/" },
          { name: "Projects", path: "/projects" },
        ]}
      />
      {children}
    </>
  )
}
