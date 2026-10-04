import { SITE } from "@/lib/site";
import TextLink from "@/components/TextLink";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-hairline">
      <div className="mx-auto max-w-page px-6 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <p className="text-muted">{SITE.motto}</p>
        <nav aria-label="Footer" className="flex flex-wrap items-center gap-5 sm:gap-6">
          <TextLink href={SITE.creative}>Creative</TextLink>
          <TextLink href={SITE.github}>GitHub</TextLink>
          <TextLink href={SITE.linkedin}>LinkedIn</TextLink>
          <TextLink href={`mailto:${SITE.email}`}>Email</TextLink>
        </nav>
      </div>
    </footer>
  );
}
