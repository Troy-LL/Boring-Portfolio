import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import TextLink from "@/components/TextLink";
import { SITE, getBookingUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Talk",
  description: "Book a conversation with Troy Lazaro.",
};

export default function TalkPage() {
  const bookingUrl = getBookingUrl();

  return (
    <main className="mx-auto max-w-page px-6 py-16 sm:py-24">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Talk" }]} />
      <h1 className="mt-8 font-medium text-ink">Talk</h1>
      <p className="mt-6 max-w-measure text-ink leading-relaxed">
        Work starts with a conversation. Twenty minutes. No pitch deck needed.
      </p>
      <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-2">
        {bookingUrl ? (
          <TextLink href={bookingUrl} external>
            Pick a time
          </TextLink>
        ) : (
          <TextLink href={`mailto:${SITE.email}?subject=Conversation`}>
            Email {SITE.email}
          </TextLink>
        )}
        {bookingUrl ? (
          <TextLink href={`mailto:${SITE.email}?subject=Conversation`}>
            Or email {SITE.email}
          </TextLink>
        ) : null}
      </div>
      {bookingUrl ? (
        <p className="mt-10 text-muted max-w-measure">
          Opens Google Calendar in a new tab.
        </p>
      ) : null}
    </main>
  );
}
