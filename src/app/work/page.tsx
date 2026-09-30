import Link from "next/link";
import type { Metadata } from "next";
import { WORK } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work",
};

export default function WorkIndexPage() {
  return (
    <main className="mx-auto max-w-page px-6 py-16 sm:py-24">
      <h1 className="font-display italic text-4xl sm:text-5xl text-ink mb-4">Work</h1>
      <p className="font-ui text-sm text-charcoal max-w-measure mb-12">
        Shortlist that survives a harsh bar. Proof links. No costume.
      </p>
      <ul className="divide-y divide-charcoal/10 border-y border-charcoal/10">
        {WORK.map((item) => (
          <li key={item.slug}>
            <Link href={`/work/${item.slug}`} className="block py-8 group">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <h2 className="text-2xl text-ink group-hover:text-charcoal transition-colors">
                  {item.title}
                </h2>
                <span className="font-ui text-xs text-charcoal/70">{item.category}</span>
              </div>
              <p className="mt-3 max-w-measure text-charcoal leading-relaxed">
                {item.summary}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
