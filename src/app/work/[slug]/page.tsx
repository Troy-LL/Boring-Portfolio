import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ButtonLink from "@/components/ButtonLink";
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
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Work", href: "/work" },
          { label: item.title },
        ]}
      />
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
      <div className="mt-8 flex flex-wrap gap-3">
        {item.links.map((link, index) => (
          <ButtonLink
            key={link.href}
            href={link.href}
            variant={index === 0 ? "solid" : "outline"}
          >
            {link.label}
          </ButtonLink>
        ))}
      </div>
    </main>
  );
}
