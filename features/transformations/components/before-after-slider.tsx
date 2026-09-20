"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  alt,
  className = "",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = (x / rect.width) * 100;
    const clamped = Math.max(2, Math.min(98, position));
    setSliderPosition(clamped);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    setHasInteracted(true);
    // Capture pointer to track smoothly even if cursor leaves frame
    e.currentTarget.setPointerCapture(e.pointerId);
    handleMove(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      data-cursor-text="DRAG"
      className={`relative w-full overflow-hidden select-none touch-none cursor-ew-resize rounded-2xl group ${className}`}
      style={{ touchAction: "none" }}
      role="slider"
      aria-label={`Before and after smile comparison for ${alt}`}
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* BASE LAYER: "AFTER" (Radiant Transformed Smile) */}
      <div className="relative w-full h-full aspect-[4/3] sm:aspect-[16/11] bg-surface-container-low overflow-hidden">
        <Image
          src={afterImage}
          alt={`After treatment: ${alt}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
          className="object-cover object-center pointer-events-none"
          priority={false}
        />
        {/* "AFTER" Glass Badge */}
        <div className="absolute top-3 right-3 z-10 pointer-events-none">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-widest text-on-primary bg-primary/90 backdrop-blur-md border border-white/20 shadow-sm uppercase">
            After
          </span>
        </div>
      </div>

      {/* OVERLAY LAYER: "BEFORE" (Initial Clinical Presentation) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
        }}
      >
        <Image
          src={beforeImage}
          alt={`Before treatment: ${alt}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
          className="object-cover object-center pointer-events-none"
          priority={false}
        />
        {/* "BEFORE" Glass Badge */}
        <div className="absolute top-3 left-3 z-10 pointer-events-none">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-widest text-white bg-black/60 backdrop-blur-md border border-white/15 shadow-sm uppercase">
            Before
          </span>
        </div>
      </div>

      {/* VERTICAL DIVIDER LINE & LUXURY OCHRE DRAG HANDLE */}
      <div
        className="absolute top-0 bottom-0 z-20 pointer-events-none flex items-center justify-center"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        {/* Hairline Divider with Glow */}
        <div className="w-[2px] h-full bg-white/95 shadow-[0_0_8px_rgba(0,0,0,0.4)]" />

        {/* Tactile Gold Handle Pill */}
        <div
          className={`absolute w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-on-primary border-2 border-white/95 shadow-xl flex items-center justify-center transition-transform duration-150 ${
            isDragging ? "scale-110 ring-4 ring-primary/30" : "group-hover:scale-105"
          }`}
          aria-hidden="true"
        >
          <div className="flex items-center justify-center -space-x-0.5">
            <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
        </div>
      </div>

      {/* Subtle First-Time Interaction Hint */}
      {!hasInteracted && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none animate-pulse">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-medium tracking-wide text-white/95 bg-black/55 backdrop-blur-md border border-white/15 shadow-md">
            Drag divider to compare
          </span>
        </div>
      )}
    </div>
  );
}
