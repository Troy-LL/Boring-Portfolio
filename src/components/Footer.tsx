import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 mt-24">
      <div className="mx-auto max-w-page px-6 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-ui text-sm text-charcoal">
        <p className="font-body text-ink/80">{SITE.motto}</p>
        <div className="flex flex-wrap gap-5">
          <Link href="/talk" className="hover:text-ink underline-offset-4 hover:underline">
            Talk
          </Link>
          <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink underline-offset-4 hover:underline">
            GitHub
          </a>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink underline-offset-4 hover:underline">
            LinkedIn
          </a>
          <a href={`mailto:${SITE.email}`} className="hover:text-ink underline-offset-4 hover:underline">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
