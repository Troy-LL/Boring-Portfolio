import Link from "next/link";
import TextLink from "@/components/TextLink";
import type { WorkItem } from "@/lib/work";

export default function WorkList({ items }: { items: WorkItem[] }) {
  return (
    <ul className="border-t border-hairline">
      {items.map((item) => {
        const proof = item.links[0];
        return (
          <li key={item.slug} className="border-b border-hairline py-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <Link
                href={`/work/${item.slug}`}
                className="font-medium text-ink hover:underline"
              >
                {item.title}
              </Link>
              <span className="text-muted">{item.category}</span>
            </div>
            <p className="mt-3 text-muted leading-relaxed">{item.summary}</p>
            {proof ? (
              <div className="mt-5">
                <TextLink href={proof.href}>{proof.label}</TextLink>
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
