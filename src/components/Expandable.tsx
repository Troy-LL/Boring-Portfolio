import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ExpandableProps = {
  summary: ReactNode;
  children: ReactNode;
  className?: string;
};

export default function Expandable({ summary, children, className }: ExpandableProps) {
  return (
    <details
      className={cn(
        "group border-b border-charcoal/10 open:bg-paper",
        className
      )}
    >
      <summary className="list-none cursor-pointer py-6 [&::-webkit-details-marker]:hidden">
        <div className="flex items-start gap-4">
          <div className="flex-1 min-w-0">{summary}</div>
          <span
            aria-hidden
            className="font-ui text-charcoal/50 text-sm mt-1 shrink-0 transition-transform duration-200 group-open:rotate-180"
          >
            ▾
          </span>
        </div>
      </summary>
      <div className="pb-6 pl-0 pr-8 max-w-measure animate-none">
        {children}
      </div>
    </details>
  );
}
