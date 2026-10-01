import Link from "next/link";
import { POSTS } from "@/lib/posts";

export default function BlogList() {
  const posts = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <ul className="border-t border-charcoal/10">
      {posts.map((post) => (
        <li key={post.slug} className="border-b border-charcoal/10">
          <Link
            href={`/blog/${post.slug}`}
            className="block py-6 group"
          >
            <p className="font-ui text-xs text-charcoal/70">{post.date}</p>
            <h2 className="mt-2 text-2xl text-ink group-hover:text-charcoal transition-colors">
              {post.title}
            </h2>
            <p className="mt-2 text-charcoal max-w-measure">{post.dek}</p>
            <span className="mt-4 inline-block font-ui text-sm text-ink underline underline-offset-4">
              Read
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
