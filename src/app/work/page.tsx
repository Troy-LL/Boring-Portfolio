import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WORK } from "@/lib/work";
import WorkList from "@/components/WorkList";

export const metadata: Metadata = {
  title: "Work",
};

export default function WorkIndexPage() {
  return (
    <main className="mx-auto max-w-page px-6 py-16 sm:py-24">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Work" }]} />
      <h1 className="mt-8 font-display italic text-4xl sm:text-5xl text-ink mb-4">Work</h1>
      <p className="font-ui text-sm text-charcoal max-w-measure mb-8">
        Shortlist that survives a harsh bar. Proof links. No costume.
      </p>
      <WorkList items={WORK} />
    </main>
  );
}
