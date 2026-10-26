import Link from "next/link";
import { BLOG_POSTS } from "@/content/blog-posts";

const dateFormat = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default function BlogIndexPage() {
  const posts = [...BLOG_POSTS].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return (
    <div className="mx-auto max-w-4xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold text-primary">Insights</p>
      <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl">
        AI, security and privacy for UK and US businesses
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
        Practical guides on AI chatbots, WhatsApp agents, custom software and data protection, written by the team that builds them.
      </p>

      <ul className="mt-12 flex flex-col gap-6">
        {posts.map((post) => (
          <li key={post.slug} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="font-semibold text-primary">{post.category}</span>
              <time dateTime={post.publishedAt}>{dateFormat.format(new Date(`${post.publishedAt}T00:00:00Z`))}</time>
            </div>
            <h2 className="mt-3 text-xl font-semibold text-foreground">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-muted-foreground">{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
