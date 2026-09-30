import type { Metadata } from "next";
import { SITE, getBookingUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Talk",
  description: "Book a conversation with Troy Lazaro.",
};

export default function TalkPage() {
  const bookingUrl = getBookingUrl();

  return (
    <main className="mx-auto max-w-page px-6 py-16 sm:py-24">
      <h1 className="font-display italic text-4xl sm:text-5xl text-ink">Talk</h1>
      <p className="mt-6 max-w-measure text-xl text-charcoal leading-relaxed">
        Work starts with a conversation. Twenty minutes. No pitch deck needed.
      </p>
      <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4 font-ui text-sm">
        {bookingUrl ? (
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-ink text-paper hover:bg-warm-black transition-colors"
          >
            Pick a time
          </a>
        ) : (
          <span
            className="inline-flex items-center justify-center px-5 py-2.5 border border-charcoal/20 text-charcoal/60 cursor-not-allowed"
            title="Set NEXT_PUBLIC_BOOKING_URL"
          >
            Scheduling link coming soon
          </span>
        )}
        <a
          href={`mailto:${SITE.email}?subject=Conversation`}
          className="inline-flex items-center justify-center px-5 py-2.5 border border-charcoal/30 text-ink hover:border-ink transition-colors"
        >
          Or email {SITE.email}
        </a>
      </div>
      <p className="mt-10 font-ui text-sm text-charcoal/70 max-w-measure">
        Booking opens in Google Calendar Appointment schedules. This page stays paper. No widget embed.
      </p>
    </main>
  );
}
