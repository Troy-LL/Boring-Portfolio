import type { Metadata } from "next";
import { WORK } from "@/lib/work";
import WorkList from "@/components/WorkList";

export const metadata: Metadata = {
  title: "Work",
};

export default function WorkIndexPage() {
  return (
    <main className="mx-auto max-w-page px-6 py-16 sm:py-24">
      <h1 className="font-display italic text-4xl sm:text-5xl text-ink mb-4">Work</h1>
      <p className="font-ui text-sm text-charcoal max-w-measure mb-4">
        Shortlist that survives a harsh bar. Proof links. No costume.
      </p>
      <p className="font-ui text-xs text-charcoal/60 mb-8">Open a row for more.</p>
      <WorkList items={WORK} />
    </main>
  );
}
