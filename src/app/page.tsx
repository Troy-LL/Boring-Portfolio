import Link from "next/link";
import { getFeaturedWork } from "@/lib/work";
import { EXPERIENCE } from "@/lib/experience";
import { getLatestPost } from "@/lib/posts";
import { SITE } from "@/lib/site";

export default function Home() {
  const featured = getFeaturedWork();
  const peekRoles = EXPERIENCE.slice(0, 3);
  const latest = getLatestPost();

  return (
    <main className="mx-auto max-w-page px-6">
      <section className="pt-20 pb-24 sm:pt-28 sm:pb-32">
        <h1 className="font-display italic text-5xl sm:text-6xl md:text-7xl text-ink tracking-tight">
          {SITE.name}
        </h1>
        <p className="mt-6 max-w-measure text-xl sm:text-2xl text-charcoal leading-relaxed">
          {SITE.positioning}
        </p>
        <p className="mt-4 font-ui text-sm text-charcoal/80">
          {SITE.location}. Open to conversations.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 font-ui text-sm">
          <Link
            href="/work"
            className="inline-flex items-center px-5 py-2.5 bg-ink text-paper hover:bg-warm-black transition-colors"
          >
            Selected work
          </Link>
          <Link
            href="/talk"
            className="inline-flex items-center px-5 py-2.5 border border-charcoal/30 text-ink hover:border-ink transition-colors"
          >
            Talk
          </Link>
        </div>
      </section>

      <section aria-labelledby="work-heading" className="pb-24 border-t border-charcoal/10 pt-16">
        <div className="flex items-baseline justify-between gap-4 mb-10">
          <h2 id="work-heading" className="font-ui text-sm uppercase tracking-[0.14em] text-charcoal">
            Selected work
          </h2>
          <Link href="/work" className="font-ui text-sm text-charcoal hover:text-ink underline-offset-4 hover:underline">
            All work
          </Link>
        </div>
        <ul className="divide-y divide-charcoal/10 border-y border-charcoal/10">
          {featured.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/work/${item.slug}`}
                className="block py-8 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <h3 className="font-body text-2xl text-ink group-hover:text-charcoal transition-colors">
                    {item.title}
                  </h3>
                  <span className="font-ui text-xs text-charcoal/70">{item.category}</span>
                </div>
                <p className="mt-3 max-w-measure text-charcoal leading-relaxed">
                  {item.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="about-heading" className="pb-24">
        <h2 id="about-heading" className="font-ui text-sm uppercase tracking-[0.14em] text-charcoal mb-8">
          About
        </h2>
        <p className="max-w-measure text-lg text-charcoal leading-relaxed">
          I&apos;m Troy. IT student at PUP, based in Manila. I like making tools and sites, then sitting with them until they work and look cared for.
        </p>
        <ul className="mt-10 space-y-5 max-w-measure">
          {peekRoles.map((role) => (
            <li key={`${role.company}-${role.role}`} className="border-b border-charcoal/10 pb-5">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <p className="text-ink">
                  {role.role}
                  <span className="text-charcoal"> · {role.company}</span>
                </p>
                <span className="font-ui text-xs text-charcoal/70">{role.period}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {latest && (
        <section aria-labelledby="writing-heading" className="pb-24 border-t border-charcoal/10 pt-16">
          <div className="flex items-baseline justify-between gap-4 mb-8">
            <h2 id="writing-heading" className="font-ui text-sm uppercase tracking-[0.14em] text-charcoal">
              Writing
            </h2>
            <Link href="/blog" className="font-ui text-sm text-charcoal hover:text-ink underline-offset-4 hover:underline">
              All
            </Link>
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
        <h2 id="contact-heading" className="font-ui text-sm uppercase tracking-[0.14em] text-charcoal mb-6">
          Contact
        </h2>
        <p className="max-w-measure text-lg text-charcoal leading-relaxed mb-8">
          Work starts with a conversation.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-3 font-ui text-sm">
          <Link href="/talk" className="text-ink underline underline-offset-4">
            Book a conversation
          </Link>
          <a href={`mailto:${SITE.email}`} className="text-charcoal hover:text-ink underline-offset-4 hover:underline">
            {SITE.email}
          </a>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="text-charcoal hover:text-ink underline-offset-4 hover:underline">
            LinkedIn
          </a>
          <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="text-charcoal hover:text-ink underline-offset-4 hover:underline">
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
