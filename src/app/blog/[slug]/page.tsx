import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { BLOG_POSTS, getBlogPost } from "@/content/blog-posts";
import { CONTACT_PHONES, SITE_NAME, buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    return buildMetadata({
      title: "Article not found",
      description: "This article does not exist.",
      path: "/blog",
      noIndex: true,
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

const dateFormat = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title={post.title}
        description={post.description}
        path={`/blog/${post.slug}`}
        publishedAt={post.publishedAt}
      />
      <BreadcrumbJsonLd
        items={[
          { name: SITE_NAME, path: "/" },
          { name: "Insights", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <Link href="/blog" className="hover:underline">
          Insights
        </Link>
      </nav>

      <header className="mt-6">
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span className="font-semibold text-primary">{post.category}</span>
          <time dateTime={post.publishedAt}>{dateFormat.format(new Date(`${post.publishedAt}T00:00:00Z`))}</time>
        </div>
        <h1 className="mt-4 font-heading text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{post.intro}</p>
      </header>

      <div className="mt-12 flex flex-col gap-10 text-base leading-relaxed text-foreground">
        {post.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-heading text-2xl font-bold tracking-tight">{section.heading}</h2>
            <div className="mt-4 flex flex-col gap-4">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {section.bullets && (
              <ul className="mt-4 list-disc space-y-2 ps-6">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <footer className="mt-14 rounded-2xl border border-slate-200 p-6 dark:border-white/10">
        <p className="text-base leading-relaxed text-foreground">{post.closing}</p>
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
        {post.disclaimer && <p className="mt-5 text-sm text-muted-foreground">{post.disclaimer}</p>}
      </footer>
    </article>
  );
}
