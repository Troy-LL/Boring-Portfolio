import type { Metadata } from "next";
import BlogList from "@/components/BlogList";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogIndexPage() {
  return (
    <main className="mx-auto max-w-page px-6 py-16 sm:py-24">
      <h1 className="font-display italic text-4xl sm:text-5xl text-ink mb-4">Blog</h1>
      <p className="font-ui text-xs text-charcoal/60 mb-8">Open a row for more.</p>
      <BlogList />
    </main>
  );
}
