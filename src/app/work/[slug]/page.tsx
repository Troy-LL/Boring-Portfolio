import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { WORK, getWorkBySlug } from "@/lib/work";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return WORK.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const item = getWorkBySlug(params.slug);
  if (!item) return { title: "Work" };
  return {
    title: item.title,
    description: item.summary,
  };
}

export default function WorkDetailPage({ params }: Props) {
  const item = getWorkBySlug(params.slug);
  if (!item) notFound();

  return (
    <main className="mx-auto max-w-page px-6 py-16 sm:py-24">
      <Link
        href="/work"
        className="font-ui text-sm text-charcoal hover:text-ink underline-offset-4 hover:underline"
      >
        Back to work
      </Link>
      <p className="mt-10 font-ui text-xs uppercase tracking-[0.14em] text-charcoal">
        {item.category}
      </p>
      <h1 className="mt-3 font-display italic text-4xl sm:text-5xl text-ink">
        {item.title}
      </h1>
      <p className="mt-6 max-w-measure text-xl text-charcoal leading-relaxed">
        {item.summary}
      </p>
      <div className="mt-10 space-y-5 max-w-measure text-lg text-charcoal leading-relaxed">
        {item.body.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
      <p className="mt-10 font-ui text-sm text-charcoal">
        {item.tech.join(" · ")}
      </p>
      <div className="mt-8 flex flex-wrap gap-5 font-ui text-sm">
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
      </div>
    </main>
  );
}
