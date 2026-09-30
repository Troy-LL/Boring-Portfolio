import Link from "next/link";
import type { Metadata } from "next";
import ResumeEmbed from "@/components/ResumeEmbed";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume for Troy Lazaro.",
};

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-page px-6 py-16 sm:py-24">
      <Link
        href="/"
        className="font-ui text-sm text-charcoal hover:text-ink underline-offset-4 hover:underline"
      >
        Back home
      </Link>
      <div className="mt-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <h1 className="font-display italic text-4xl sm:text-5xl text-ink">Resume</h1>
        <a
          href="https://docs.google.com/document/d/1yyjqeEqSVWKLruBkglLBhCLlDdN5OXuWYwKMfIwDzOc/export?format=pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-ui text-sm inline-flex items-center justify-center px-5 py-2.5 bg-ink text-paper hover:bg-warm-black transition-colors"
        >
          Download PDF
        </a>
      </div>
      <div className="w-full border border-charcoal/15 min-h-[75vh] bg-paper overflow-hidden">
        <ResumeEmbed className="min-h-[75vh]" />
      </div>
    </main>
  );
}
