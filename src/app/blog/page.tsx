import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogList from "@/components/BlogList";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogIndexPage() {
  return (
    <main className="mx-auto max-w-page px-6 py-16 sm:py-24">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
      <h1 className="mt-8 font-medium text-ink mb-4">Blog</h1>
      <p className="text-muted max-w-measure mb-8">
        Notes on shipping, tools, and the paper site.
      </p>
      <BlogList />
    </main>
  );
}
