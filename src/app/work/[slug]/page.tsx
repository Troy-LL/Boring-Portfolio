import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import TextLink from "@/components/TextLink";
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
      <p className="mt-10 text-muted">
        {item.category}
      </p>
      <h1 className="mt-3 font-medium text-ink">
        {item.title}
      </h1>
      <p className="mt-6 max-w-measure text-muted leading-relaxed">
        {item.summary}
      </p>
      <div className="mt-10 space-y-5 max-w-measure text-muted leading-relaxed">
        {item.body.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
      <p className="mt-10 text-muted">
        {item.tech.join(" · ")}
      </p>
      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
        {item.links.map((link) => (
          <TextLink key={link.href} href={link.href}>
            {link.label}
          </TextLink>
        ))}
      </div>
    </main>
  );
}
