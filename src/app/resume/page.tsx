import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

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
        <div className="mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-4">
            My <span className="text-gray-cool">Resume.</span>
          </h1>
        </div>

        {/* Resume Embed */}
        <div className="flex-grow w-full bg-muted/20 rounded-xl overflow-hidden border border-muted animate-in fade-in slide-in-from-bottom-12 duration-1000 min-h-[75vh]">
          <iframe 
            src="https://docs.google.com/document/d/1yyjqeEqSVWKLruBkglLBhCLlDdN5OXuWYwKMfIwDzOc/preview" 
            className="w-full h-full border-0 min-h-[75vh]"
            title="Resume"
            allowFullScreen
          />
        </div>
      </div>
    </main>
  );
}
