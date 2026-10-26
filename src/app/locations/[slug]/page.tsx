import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { LOCATION_PAGES, getLocationPage } from "@/content/locations";
import { CONTACT_PHONES, SITE_NAME, buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const services = [
  { label: "Custom software development", href: "/services/software" },
  { label: "AI automations", href: "/services/automations" },
  { label: "Voice AI agents", href: "/services/voice" },
  { label: "AI data pipelines", href: "/services/pipelines" },
];

export function generateStaticParams() {
  return LOCATION_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLocationPage(slug);
  if (!page) {
    return buildMetadata({
      title: "Location not found",
      description: "This page does not exist.",
      path: "/services",
      noIndex: true,
    });
  }

  return buildMetadata({
    title: page.title,
    description: page.description,
    path: `/locations/${page.slug}`,
  });
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getLocationPage(slug);
  if (!page) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <BreadcrumbJsonLd
        items={[
          { name: SITE_NAME, path: "/" },
          { name: "Services", path: "/services" },
          { name: page.city, path: `/locations/${page.slug}` },
        ]}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <Link href="/services" className="hover:underline">
          Services
        </Link>
      </nav>

      <header className="mt-6">
        <p className="text-sm font-semibold text-primary">{page.city}</p>
        <h1 className="mt-3 font-heading text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
          {page.h1}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{page.intro}</p>
      </header>

      <section className="mt-12">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">What we build</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {services.map((service) => (
            <li key={service.href}>
              <Link
                href={service.href}
                className="block rounded-xl border border-slate-200 px-4 py-3 font-semibold text-foreground hover:border-primary dark:border-white/10"
              >
                {service.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">Sectors we design for</h2>
        <ul className="mt-4 list-disc space-y-2 ps-6 text-foreground">
          {page.sectors.map((sector) => (
            <li key={sector}>{sector}</li>
          ))}
        </ul>
        <p className="mt-4 text-muted-foreground">
          See{" "}
          <Link href="/industries" className="text-primary hover:underline">
            all industries
          </Link>{" "}
          for the problems we solve in each.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">Questions</h2>
        <dl className="mt-4 flex flex-col gap-6">
          {page.faqs.map((faq) => (
            <div key={faq.q}>
              <dt className="font-semibold text-foreground">{faq.q}</dt>
              <dd className="mt-2 leading-relaxed text-muted-foreground">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <footer className="mt-14 rounded-2xl border border-slate-200 p-6 dark:border-white/10">
        <p className="text-base leading-relaxed text-foreground">
          Tell us your sector and the bottleneck you want to fix. We will reply with a scope, the data questions to settle first, and a rough timeline.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
            Book a consultation
          </Link>
          <a
            href={CONTACT_PHONES[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-foreground dark:border-white/20"
          >
            WhatsApp us
          </a>
        </div>
      </footer>
    </article>
  );
}
