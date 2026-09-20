"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { StudioComfortSlide } from "@/lib/types/practice";

interface StudioCarouselProps {
  slides: StudioComfortSlide[];
}

export function StudioCarousel({ slides }: StudioCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const activeSlide = slides[currentIndex];

  return (
    <div className="relative w-full">
      {/* Outer Rounded Luxury Frame */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#836a2c]/35 shadow-[0_20px_50px_-12px_rgba(45,33,29,0.22)] bg-surface-container">
        {/* Slides rendering with crossfade */}
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority={idx === 0}
              className="object-cover object-center"
            />
            {/* Subtle Gradient Scrim at Bottom for Text Contrast */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
              aria-hidden="true"
            />
          </div>
        ))}

        {/* Floating Left Arrow Button (matching reference image) */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous slide"
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-white/90 hover:bg-white text-[#201815] shadow-[0_6px_20px_rgba(0,0,0,0.25)] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs"
        >
          <ArrowLeft className="w-5 h-5 stroke-[2]" />
        </button>

        {/* Floating Right Arrow Button (matching reference image) */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next slide"
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-white/90 hover:bg-white text-[#201815] shadow-[0_6px_20px_rgba(0,0,0,0.25)] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs"
        >
          <ArrowRight className="w-5 h-5 stroke-[2]" />
        </button>

        {/* Bottom Slide Info Overlay */}
        <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-7 flex items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="inline-block rounded-full bg-[#836a2c]/85 text-[#fcf9f6] backdrop-blur-md px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider border border-white/20">
              {activeSlide.tag}
            </span>
            <h3 className="font-serif text-lg sm:text-2xl text-white font-normal drop-shadow-sm">
              {activeSlide.title}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-white/80 hidden sm:block max-w-md line-clamp-1">
              {activeSlide.subtitle}
            </p>
          </div>

          {/* Slide Indicator Badge */}
          <div className="shrink-0 bg-black/50 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 font-mono text-xs text-white">
            <span className="font-bold text-[#c4a96a]">0{currentIndex + 1}</span> / 0{slides.length}
          </div>
        </div>
      </div>

      {/* Miniature Thumbnails Strip below on Desktop */}
      <div className="mt-4 hidden sm:grid grid-cols-4 gap-3">
        {slides.map((slide, idx) => (
          <button
            key={`thumb-${slide.id}`}
            onClick={() => setCurrentIndex(idx)}
            className={`relative aspect-[16/10] rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer ${
              idx === currentIndex
                ? "border-[#c4a96a] ring-2 ring-[#c4a96a]/50 shadow-md scale-102"
                : "border-outline-variant/40 opacity-70 hover:opacity-100"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="150px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
