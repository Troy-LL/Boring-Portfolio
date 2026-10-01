import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ButtonLink, { buttonClass } from "@/components/ButtonLink";
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
      <h1 className="mt-8 font-display italic text-4xl sm:text-5xl text-ink">Talk</h1>
      <p className="mt-6 max-w-measure text-xl text-charcoal leading-relaxed">
        Work starts with a conversation. Twenty minutes. No pitch deck needed.
      </p>
      <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-3">
        {bookingUrl ? (
          <ButtonLink href={bookingUrl}>Pick a time</ButtonLink>
        ) : (
          <span
            className={buttonClass(
              "outline",
              "border-charcoal/20 text-charcoal/60 cursor-not-allowed hover:border-charcoal/20"
            )}
            title="Set NEXT_PUBLIC_BOOKING_URL"
          >
            Scheduling link coming soon
          </span>
        )}
        <ButtonLink href={`mailto:${SITE.email}?subject=Conversation`} variant="outline">
          Or email {SITE.email}
        </ButtonLink>
      </div>
      <p className="mt-10 font-ui text-sm text-charcoal/70 max-w-measure">
        Booking opens in Google Calendar Appointment schedules. This page stays paper. No widget embed.
      </p>
    </main>
  );
}
