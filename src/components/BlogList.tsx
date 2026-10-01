import Link from "next/link";
import Expandable from "@/components/Expandable";
import { POSTS } from "@/lib/posts";

export default function BlogList() {
  const posts = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <ul className="border-t border-charcoal/10">
      {posts.map((post) => (
        <li key={post.slug}>
          <Expandable
            summary={
              <>
                <p className="font-ui text-xs text-charcoal/70">{post.date}</p>
                <h2 className="mt-2 text-2xl text-ink">{post.title}</h2>
                <p className="mt-2 text-charcoal">{post.dek}</p>
              </>
            }
          >
            <div className="space-y-4 text-charcoal leading-relaxed">
              {post.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-block mt-5 font-ui text-sm text-ink underline underline-offset-4"
            >
              Open page
            </Link>
          </Expandable>
        </li>
      ))}
    </ul>
  );
}
