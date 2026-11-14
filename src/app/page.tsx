import { getFeaturedWork } from "@/lib/work";
import { getLatestPost } from "@/lib/posts";
import { SITE } from "@/lib/site";
import { formatDisplayDate } from "@/lib/utils";
import TextLink from "@/components/TextLink";
import WorkList from "@/components/WorkList";
import ExperienceList from "@/components/ExperienceList";
import CardDoor from "@/components/CardDoor";

export default function Home() {
  const featured = getFeaturedWork();
  const latest = getLatestPost();

  return (
    <>
    <CardDoor />
    <main data-home-scroll className="mx-auto max-w-page px-6">
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-20 tracking-normal">
        <h1 className="text-5xl sm:text-6xl md:text-7xl text-ink tracking-tight">
          {SITE.name}
        </h1>
        <p className="mt-5 text-muted">{SITE.role}</p>
        <p className="settle mt-4 max-w-measure text-xl sm:text-2xl text-ink leading-relaxed">
          {SITE.positioning}
        </p>
      </section>

      <section aria-labelledby="work-heading" className="pb-24">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <h2 id="work-heading" className="font-medium text-ink">
            Work
          </h2>
          <TextLink href="/work">All work</TextLink>
        </div>
        <WorkList items={featured} />
      </section>

      <section aria-labelledby="about-heading" className="pb-24 pt-16">
        <h2 id="about-heading" className="mb-8 font-medium text-ink">
          About
        </h2>
        <p className="mb-10 max-w-measure leading-relaxed text-muted">
          IT student at PUP, Manila.
        </p>
        <ExperienceList limit={3} />
      </section>

      {latest && (
        <section aria-labelledby="writing-heading" className="pb-24 pt-16">
          <div className="mb-8 flex items-baseline justify-between gap-4">
            <h2 id="writing-heading" className="font-medium text-ink">
              Writing
            </h2>
            <TextLink href="/blog">All</TextLink>
          </div>
          <div className="max-w-measure">
            <p className="text-muted">{formatDisplayDate(latest.date)}</p>
            <h3 className="mt-2 font-medium text-ink">
              <TextLink href={`/blog/${latest.slug}`}>{latest.title}</TextLink>
            </h3>
            <p className="mt-2 text-muted">{latest.dek}</p>
          </div>
        </section>
      )}
    </main>
    </>
  );
}
