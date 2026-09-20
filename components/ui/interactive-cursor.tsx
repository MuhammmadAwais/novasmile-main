"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * InteractiveBubbleCursor
 *
 * A luxury fluid trailing bubble cursor with optical blend-inversion (mix-blend-difference).
 * Tracks mouse movement via high-frequency requestAnimationFrame lerping for 60fps butteriness.
 * Interactively expands, transforms, and inverts over interactive buttons, cards, images, and text.
 * Gracefully self-disables on touch screens (pointer: coarse) to prevent phantom artifacts.
 */
export function InteractiveBubbleCursor() {
  const [mounted, setMounted] = useState(false);
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Position references for physics lerping
  const mouseRef = useRef({ x: -100, y: -100 });
  const trailRef = useRef({ x: -100, y: -100 });
  const bubbleElemRef = useRef<HTMLDivElement>(null);
  const dotElemRef = useRef<HTMLDivElement>(null);
  const reqIdRef = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse/trackpad), skip touch screens
    if (typeof window === "undefined") return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    setMounted(true);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      if (!isVisible) setIsVisible(true);

      // Instantly position the center micro-dot
      if (dotElemRef.current) {
        dotElemRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check for interactive targets under cursor
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveParent = target.closest<HTMLElement>(
          'button, a, input, select, textarea, [data-cursor], [role="button"], .interactive-cursor-target'
        );

        if (interactiveParent) {
          setIsHovered(true);
          const customText = interactiveParent.getAttribute("data-cursor-text");
          setCursorText(customText || null);
        } else {
          setIsHovered(false);
          setCursorText(null);
        }
      }
    };

    const onMouseDown = () => setIsPressed(true);
    const onMouseUp = () => setIsPressed(false);

    const onMouseLeave = () => {
      setIsVisible(false);
      setIsHovered(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    // Animation loop: Smooth Linear Interpolation (Lerp) for trailing bubble
    const renderLoop = () => {
      const lerpFactor = 0.18; // smooth dampening
      trailRef.current.x += (mouseRef.current.x - trailRef.current.x) * lerpFactor;
      trailRef.current.y += (mouseRef.current.y - trailRef.current.y) * lerpFactor;

      if (bubbleElemRef.current) {
        bubbleElemRef.current.style.transform = `translate3d(${trailRef.current.x}px, ${trailRef.current.y}px, 0)`;
      }

      reqIdRef.current = requestAnimationFrame(renderLoop);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    reqIdRef.current = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      if (reqIdRef.current) {
        cancelAnimationFrame(reqIdRef.current);
      }
    };
  }, [isVisible]);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none"
    >
      {/* 1. Precision Center Micro Dot */}
      <div
        ref={dotElemRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white mix-blend-difference transition-opacity duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${isHovered ? "opacity-0" : "opacity-100"}`}
        style={{ willChange: "transform" }}
      />

      {/* 2. Fluid Trailing Bubble with Color Revert Inversion */}
      <div
        ref={bubbleElemRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/80 bg-white/15 backdrop-blur-[0.5px] mix-blend-difference flex items-center justify-center transition-[width,height,background-color,border-color,opacity,transform] duration-300 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          isPressed
            ? "w-8 h-8 scale-90"
            : isHovered
            ? cursorText
              ? "w-20 h-20 bg-white/30 border-white"
              : "w-16 h-16 bg-white/25 border-white"
            : "w-11 h-11"
        }`}
        style={{ willChange: "transform" }}
      >
        {cursorText && (
          <span className="text-[9px] font-bold tracking-[0.14em] uppercase text-black font-sans text-center px-1">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
