import Link from 'next/link';
import { ArrowLeft, Download } from 'lucide-react';
import ResumeEmbed from '@/components/ResumeEmbed';

export const metadata = {
  title: 'TL | Resume',
  description: 'View my professional resume.',
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-24 px-8 selection:bg-accent selection:text-foreground flex flex-col">
      <div className="max-w-6xl mx-auto w-full flex-grow flex flex-col">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back Home
        </Link>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
            My <span className="text-gray-cool">Resume.</span>
          </h1>
          <a 
            href="https://docs.google.com/document/d/1yyjqeEqSVWKLruBkglLBhCLlDdN5OXuWYwKMfIwDzOc/export?format=pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-foreground text-background font-medium tracking-wide hover:bg-silver transition-colors duration-300 w-full sm:w-auto"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </div>

        {/* Resume Embed — scaled on narrow viewports to preserve doc layout */}
        <div className="flex-grow w-full bg-muted/20 rounded-xl overflow-hidden border border-muted animate-in fade-in slide-in-from-bottom-12 duration-1000 min-h-[75vh] py-4 px-2 sm:px-4">
          <ResumeEmbed className="min-h-[calc(75vh-2rem)]" />
        </div>
      </div>
    </main>
  );
}
