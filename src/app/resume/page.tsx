import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import TextLink from "@/components/TextLink";
import ResumeEmbed from "@/components/ResumeEmbed";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume for Troy Lazaro.",
};

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-page px-6 py-16 sm:py-24">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resume" }]} />
      <div className="mt-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <h1 className="font-display italic text-4xl sm:text-5xl text-ink">Resume</h1>
        <TextLink
          href="https://docs.google.com/document/d/1yyjqeEqSVWKLruBkglLBhCLlDdN5OXuWYwKMfIwDzOc/export?format=pdf"
          external
        >
          Download PDF
        </TextLink>
      </div>
      <div className="w-full bg-beige p-3 sm:p-4 min-h-[75vh] overflow-hidden">
        <ResumeEmbed className="min-h-[75vh]" />
      </div>
    </main>
  );
}
