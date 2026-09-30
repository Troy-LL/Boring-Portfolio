import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { POSTS, getPostBySlug } from "@/lib/posts";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Blog" };
  return {
    title: post.title,
    description: post.dek,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main className="mx-auto max-w-page px-6 py-16 sm:py-24">
      <Link
        href="/blog"
        className="font-ui text-sm text-charcoal hover:text-ink underline-offset-4 hover:underline"
      >
        Back to blog
      </Link>
      <p className="mt-10 font-ui text-xs text-charcoal/70">{post.date}</p>
      <h1 className="mt-3 font-display italic text-4xl sm:text-5xl text-ink max-w-measure">
        {post.title}
      </h1>
      <p className="mt-6 max-w-measure text-xl text-charcoal">{post.dek}</p>
      <div className="mt-10 space-y-5 max-w-measure text-lg text-charcoal leading-relaxed">
        {post.body.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
    </main>
  );
}
