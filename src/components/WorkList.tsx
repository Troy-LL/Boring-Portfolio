import Expandable from "@/components/Expandable";
import ButtonLink from "@/components/ButtonLink";
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
                  <span className="font-body text-2xl text-ink block">
                    {item.title}
                  </span>
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
            <div className="mt-5 flex flex-wrap gap-3">
              {item.links.map((link, index) => (
                <ButtonLink
                  key={link.href}
                  href={link.href}
                  variant={index === 0 ? "solid" : "outline"}
                >
                  {link.label}
                </ButtonLink>
              ))}
              <ButtonLink href={`/work/${item.slug}`} variant="outline">
                Open page
              </ButtonLink>
            </div>
          </Expandable>
        </li>
      ))}
    </ul>
  );
}
