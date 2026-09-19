import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { PAGE_SEO, SITE_NAME, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: PAGE_SEO.aiTrainings.title,
  description: PAGE_SEO.aiTrainings.description,
  path: PAGE_SEO.aiTrainings.path,
  keywords: [
    "AI consulting London",
    "AI training UK",
    "AI implementation agency London",
    "AI team enablement UK",
    "تدريب الذكاء الاصطناعي لندن",
  ],
});

export default function AiTrainingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: SITE_NAME, path: "/" },
          { name: "AI Trainings", path: "/ai-trainings" },
        ]}
      />
      {children}
    </>
  );
}
