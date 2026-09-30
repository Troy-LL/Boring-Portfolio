import Link from "next/link";
import type { Metadata } from "next";
import { POSTS } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogIndexPage() {
  const posts = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main className="mx-auto max-w-page px-6 py-16 sm:py-24">
      <h1 className="font-display italic text-4xl sm:text-5xl text-ink mb-12">Blog</h1>
      <ul className="divide-y divide-charcoal/10 border-y border-charcoal/10">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="block py-8 group">
              <p className="font-ui text-xs text-charcoal/70">{post.date}</p>
              <h2 className="mt-2 text-2xl text-ink group-hover:text-charcoal transition-colors">
                {post.title}
              </h2>
              <p className="mt-2 max-w-measure text-charcoal">{post.dek}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
