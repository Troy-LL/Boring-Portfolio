'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const RESUME_PREVIEW_URL =
  'https://docs.google.com/document/d/1yyjqeEqSVWKLruBkglLBhCLlDdN5OXuWYwKMfIwDzOc/preview';

/** Typical Google Docs page width at 100% zoom — keeps layout instead of squishing. */
const DOC_WIDTH = 850;
const DOC_HEIGHT = 1100;

export default function ResumeEmbed({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateScale = () => {
      const width = container.clientWidth;
      setScale(width >= DOC_WIDTH ? 1 : width / DOC_WIDTH);
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const scaledWidth = DOC_WIDTH * scale;
  const scaledHeight = DOC_HEIGHT * scale;

  return (
    <div
      ref={containerRef}
      className={cn('w-full flex justify-center', className)}
      style={{ minHeight: scaledHeight }}
    >
      <div
        className="relative shrink-0"
        style={{
          width: scaledWidth,
          height: scaledHeight,
        }}
      >
        <div
          className="absolute top-0 left-0 origin-top-left"
          style={{
            width: DOC_WIDTH,
            height: DOC_HEIGHT,
            transform: `scale(${scale})`,
          }}
        >
          <iframe
            src={RESUME_PREVIEW_URL}
            width={DOC_WIDTH}
            height={DOC_HEIGHT}
            className="border-0 bg-white"
            title="Resume"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
