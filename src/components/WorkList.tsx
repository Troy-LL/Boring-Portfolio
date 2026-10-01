import Link from "next/link";
import Expandable from "@/components/Expandable";
import type { WorkItem } from "@/lib/work";

export default function WorkList({ items }: { items: WorkItem[] }) {
  return (
    <ul className="border-t border-charcoal/10">
      {items.map((item) => (
        <li key={item.slug}>
          <Expandable
            summary={
              <>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <h3 className="font-body text-2xl text-ink">{item.title}</h3>
                  <span className="font-ui text-xs text-charcoal/70">
                    {item.category}
                  </span>
                </div>
                <p className="mt-3 text-charcoal leading-relaxed">{item.summary}</p>
              </>
            }
          >
            <div className="space-y-4 text-charcoal leading-relaxed">
              {item.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-5 font-ui text-sm text-charcoal/80">
              {item.tech.join(" · ")}
            </p>
            <div className="mt-5 flex flex-wrap gap-5 font-ui text-sm">
              {item.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline underline-offset-4"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href={`/work/${item.slug}`}
                className="text-charcoal hover:text-ink underline-offset-4 hover:underline"
              >
                Open page
              </Link>
            </div>
          </Expandable>
        </li>
      ))}
    </ul>
  );
}
