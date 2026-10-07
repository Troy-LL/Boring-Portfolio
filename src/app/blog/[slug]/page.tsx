import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
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
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />
      <p className="mt-10 text-muted">{post.date}</p>
      <h1 className="mt-3 font-medium text-ink max-w-measure">
        {post.title}
      </h1>
      <p className="mt-6 max-w-measure text-muted">{post.dek}</p>
      <div className="mt-10 space-y-5 max-w-measure text-muted leading-relaxed">
        {post.body.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
    </main>
  );
}
