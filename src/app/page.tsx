import Link from "next/link";
import { getFeaturedWork } from "@/lib/work";
import { getLatestPost } from "@/lib/posts";
import { SITE } from "@/lib/site";
import ButtonLink from "@/components/ButtonLink";
import WorkList from "@/components/WorkList";
import ExperienceList from "@/components/ExperienceList";

export default function Home() {
  const featured = getFeaturedWork();
  const latest = getLatestPost();

  return (
    <main className="mx-auto max-w-page px-6">
      <section className="pt-20 pb-24 sm:pt-28 sm:pb-32">
        <h1 className="font-display italic text-5xl sm:text-6xl md:text-7xl text-ink tracking-tight">
          {SITE.name}
        </h1>
        <p className="mt-5 font-ui text-xs uppercase tracking-[0.16em] text-amber">
          {SITE.role}
        </p>
        <p className="settle mt-4 max-w-measure text-xl sm:text-2xl text-charcoal leading-relaxed">
          {SITE.positioning}
        </p>
        <p className="mt-4 font-ui text-sm text-charcoal/80">
          {SITE.location}. Open to conversations.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/work">Selected work</ButtonLink>
          <ButtonLink href="/talk" variant="outline">
            Talk
          </ButtonLink>
        </div>
      </section>

      <section aria-labelledby="work-heading" className="pb-24 border-t border-charcoal/10 pt-16">
        <div className="flex items-baseline justify-between gap-4 mb-6">
          <h2 id="work-heading" className="settle font-ui text-sm uppercase tracking-[0.14em] text-charcoal">
            Selected work
          </h2>
          <ButtonLink href="/work" variant="outline" className="px-3 py-1.5">
            All work
          </ButtonLink>
        </div>
        <WorkList items={featured} />
      </section>

      <section aria-labelledby="about-heading" className="pb-24 pt-8">
        <h2 id="about-heading" className="settle font-ui text-sm uppercase tracking-[0.14em] text-charcoal mb-8">
          About
        </h2>
        <p className="max-w-measure text-lg text-charcoal leading-relaxed mb-10">
          IT student at PUP, Manila.
        </p>
        <ExperienceList />
      </section>

      {latest && (
        <section aria-labelledby="writing-heading" className="pb-24 border-t border-charcoal/10 pt-16">
          <div className="flex items-baseline justify-between gap-4 mb-8">
            <h2 id="writing-heading" className="settle font-ui text-sm uppercase tracking-[0.14em] text-charcoal">
              Writing
            </h2>
            <ButtonLink href="/blog" variant="outline" className="px-3 py-1.5">
              All
            </ButtonLink>
          </div>
          <Link href={`/blog/${latest.slug}`} className="block group max-w-measure">
            <p className="font-ui text-xs text-charcoal/70">{latest.date}</p>
            <h3 className="mt-2 text-2xl text-ink group-hover:text-charcoal transition-colors">
              {latest.title}
            </h3>
            <p className="mt-2 text-charcoal">{latest.dek}</p>
          </Link>
        </section>
      )}

      <section id="contact" aria-labelledby="contact-heading" className="pb-8 border-t border-charcoal/10 pt-16">
        <h2 id="contact-heading" className="settle font-ui text-sm uppercase tracking-[0.14em] text-charcoal mb-6">
          Contact
        </h2>
        <p className="max-w-measure text-lg text-charcoal leading-relaxed mb-8">
          Work starts with a conversation.
        </p>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/talk">Book a conversation</ButtonLink>
          <ButtonLink href={`mailto:${SITE.email}`} variant="outline">
            Email
          </ButtonLink>
          <ButtonLink href={SITE.linkedin} variant="outline">
            LinkedIn
          </ButtonLink>
          <ButtonLink href={SITE.github} variant="outline">
            GitHub
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
