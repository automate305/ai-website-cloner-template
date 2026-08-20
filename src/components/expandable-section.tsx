"use client";

import { useState } from "react";
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

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-5 md:px-8 md:py-6 bg-card hover:bg-muted/50 transition-colors cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              {summary}
            </p>
          </div>
          <ChevronDown
            className={cn(
              "size-5 mt-1 shrink-0 text-primary transition-transform duration-300",
              isOpen && "rotate-180"
            )}
          />
        </div>
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-2 md:px-8 md:pb-8 border-t border-border">
            <div className="prose prose-invert prose-sm md:prose-base max-w-none text-muted-foreground leading-relaxed space-y-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
