"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type ExpandableProps = {
  summary: ReactNode;
  children: ReactNode;
  className?: string;
};

export default function Expandable({ summary, children, className }: ExpandableProps) {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const measure = useCallback(() => {
    const node = panelRef.current;
    if (!node) return;
    setHeight(node.scrollHeight);
  }, []);

  useEffect(() => {
    measure();
    const node = panelRef.current;
    if (!node || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, [measure, children]);

  return (
    <div className={cn("border-b border-charcoal/10", className)}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="w-full text-left py-6 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
      >
        <div className="flex items-start gap-4">
          <div className="flex-1 min-w-0">{summary}</div>
          <span
            aria-hidden
            className={cn(
              "font-ui text-charcoal/50 text-sm mt-1 shrink-0 origin-center",
              "transition-transform duration-[420ms] ease-apple",
              open && "rotate-180"
            )}
          >
            ▾
          </span>
        </div>
      </button>
      <div
        id={panelId}
        role="region"
        aria-hidden={!open}
        className={cn(
          "overflow-hidden",
          !reduceMotion && "transition-[height] duration-[420ms] ease-apple"
        )}
        style={{ height: open ? height : 0 }}
      >
        <div ref={panelRef} className="pb-6 pr-8 max-w-measure">
          <div
            className={cn(
              !reduceMotion &&
                "transition-[opacity,transform] duration-[420ms] ease-apple",
              open
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-1"
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
