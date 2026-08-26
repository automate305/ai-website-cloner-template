"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Flashlight, FlashlightOff } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Web port of https://github.com/zhangchen0514/MouseSpotlight — a presenter's
 * tool that dims the screen except for a circle around the cursor. The
 * original is a Windows Forms app grabbing the whole desktop; here it's
 * scoped to this page via a fixed overlay driven by imperative style writes
 * (not React state) so it can track the cursor at 60fps without re-rendering.
 */

const SIZE_UNIT = 20; // px per size step, matches the original's SIZE_UNIT
const SIZE_MIN = 1;
const SIZE_MAX = 40;
const SIZE_DEFAULT = 7;

const ASPECT_UNIT = 0.2;
const ASPECT_MIN = -10;
const ASPECT_MAX = 10;
const ASPECT_DEFAULT = 0;

function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || target.isContentEditable;
}

export function MouseSpotlight() {
  const [enabled, setEnabled] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const size = useRef(SIZE_DEFAULT);
  const aspect = useRef(ASPECT_DEFAULT);
  const position = useRef({ x: 0, y: 0 });

  const redraw = useCallback(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const lightH = size.current * SIZE_UNIT;
    const aspectFactor = Math.pow(ASPECT_UNIT + 1, aspect.current);
    const lightW = lightH / aspectFactor;
    const { x, y } = position.current;

    overlay.style.background = `radial-gradient(ellipse ${lightW}px ${lightH}px at ${x}px ${y}px, transparent 0%, transparent 55%, rgba(0,0,0,0.82) 100%)`;
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      position.current = { x: e.clientX, y: e.clientY };
      redraw();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isEditableTarget(e.target) || e.metaKey || e.ctrlKey || e.altKey) return;

      switch (e.key.toLowerCase()) {
        case "escape":
          setEnabled(false);
          return;
        case "z":
          size.current = Math.min(SIZE_MAX, size.current + 1);
          break;
        case "x":
          size.current = Math.max(SIZE_MIN, size.current - 1);
          break;
        case "a":
          aspect.current = Math.max(ASPECT_MIN, aspect.current - 1);
          break;
        case "s":
          aspect.current = Math.min(ASPECT_MAX, aspect.current + 1);
          break;
        case "w":
          size.current = SIZE_DEFAULT;
          aspect.current = ASPECT_DEFAULT;
          break;
        default:
          return;
      }
      e.preventDefault();
      redraw();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("keydown", handleKeyDown);
    redraw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [enabled, redraw]);

  useEffect(() => {
    const handleToggleShortcut = (e: KeyboardEvent) => {
      if (isEditableTarget(e.target)) return;
      // Ctrl/Cmd+Shift+L — avoids the browser's own Ctrl+Q ("quit") binding.
      if (e.shiftKey && (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "l") {
        e.preventDefault();
        setEnabled((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleToggleShortcut);
    return () => window.removeEventListener("keydown", handleToggleShortcut);
  }, []);

  return (
    <>
      {enabled && (
        <div
          ref={overlayRef}
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[9998]"
        />
      )}
      <button
        type="button"
        onClick={() => setEnabled((prev) => !prev)}
        aria-pressed={enabled}
        title={`${enabled ? "Exit" : "Enter"} spotlight mode (Ctrl+Shift+L). While active: Z/X resize, A/S width, W reset, Esc exit.`}
        className={cn(
          "fixed bottom-4 right-4 z-[9999] flex size-10 items-center justify-center rounded-full border shadow-lg transition-colors",
          enabled
            ? "border-primary bg-primary text-primary-foreground"
            : "border-border bg-background text-foreground hover:bg-muted",
        )}
      >
        {enabled ? <FlashlightOff className="size-5" /> : <Flashlight className="size-5" />}
        <span className="sr-only">Toggle spotlight mode</span>
      </button>
    </>
  );
}
