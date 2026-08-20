"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExpandableSectionProps {
  title: string;
  summary: string;
  children: React.ReactNode;
}

export function ExpandableSection({
  title,
  summary,
  children,
}: ExpandableSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  const measureHeight = useCallback(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    measureHeight();
    // Re-measure on window resize for responsive layouts
    window.addEventListener("resize", measureHeight);
    return () => window.removeEventListener("resize", measureHeight);
  }, [measureHeight, children]);

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card">
      {/* Always-visible header with title + summary */}
      <div className="px-6 py-5 md:px-8 md:py-6">
        <h3 className="mb-2 text-lg font-bold text-foreground md:text-xl">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
          {summary}
        </p>
      </div>

      {/* Expandable content */}
      <div
        className="transition-[max-height] duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? `${contentHeight}px` : "0px" }}
      >
        <div ref={contentRef}>
          <div className="border-t border-border px-6 pb-6 pt-4 md:px-8 md:pb-8">
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {children}
            </div>
          </div>
        </div>
      </div>

      {/* Toggle button */}
      <div className="border-t border-border px-6 py-3 md:px-8">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="group flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-primary/80"
          aria-expanded={isOpen}
        >
          {isOpen ? "Read Less" : "Read More"}
          <ChevronDown
            className={cn(
              "size-4 transition-transform duration-300",
              isOpen && "rotate-180"
            )}
          />
        </button>
      </div>
    </div>
  );
}
