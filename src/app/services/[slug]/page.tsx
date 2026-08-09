import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ServiceDetailView } from "@/components/services/service-detail-view";
import { serviceDetailsEn } from "@/i18n/service-details-en";
import {
  isServiceSlug,
  SERVICE_SLUGS,
} from "@/lib/service-slugs";
import { SITE_NAME, buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!isServiceSlug(slug)) {
    return buildMetadata({
      title: "Service not found",
      description: "This service page does not exist.",
      path: "/services",
      noIndex: true,
    });
  }

  const item = serviceDetailsEn.items[slug];
  return buildMetadata({
    title: `${item.headline} | ${SITE_NAME}`,
    description: item.tagline,
    path: `/services/${slug}`,
    keywords: [item.headline, ...item.tech.slice(0, 4), "Global", "Apexa AI Labs"],
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  if (!isServiceSlug(slug)) notFound();

  const item = serviceDetailsEn.items[slug];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: SITE_NAME, path: "/" },
          { name: "Services", path: "/services" },
          { name: item.headline, path: `/services/${slug}` },
        ]}
      />
      <ServiceDetailView slug={slug} />
    </>
  );
}
