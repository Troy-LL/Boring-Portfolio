import Link from "next/link";
import { POSTS } from "@/lib/posts";

export default function BlogList() {
  const posts = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <ul className="border-t border-hairline">
      {posts.map((post) => (
        <li key={post.slug} className="border-b border-hairline py-6">
          <p className="text-muted">{post.date}</p>
          <h2 className="mt-2">
            <Link
              href={`/blog/${post.slug}`}
              className="font-medium text-ink hover:underline"
            >
              {post.title}
            </Link>
          </h2>
          <p className="mt-2 text-muted max-w-measure">{post.dek}</p>
        </li>
      ))}
    </ul>
  );
}
