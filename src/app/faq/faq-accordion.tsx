"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={cn(
              "rounded-lg border transition-colors",
              isOpen ? "border-primary/40 bg-background" : "border-border bg-background"
            )}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex items-start justify-between gap-4 cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="text-base md:text-lg font-bold text-foreground leading-snug">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "size-5 mt-0.5 shrink-0 text-primary transition-transform duration-300",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-in-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 md:px-8 md:pb-8 border-t border-border">
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed pt-4">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
