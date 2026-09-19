"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from "lucide-react";
import { practiceData } from "@/content/practice-data";
import { cn } from "@/lib/utils/cn";

export function TestimonialsCarousel() {
  const { testimonials } = practiceData;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const activeReview = testimonials[currentIndex];

  return (
    <section className="relative w-full bg-[#fbf8f4] py-16 sm:py-24 border-b border-outline-variant/30 select-none overflow-hidden">
      {/* Decorative ambient background element */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-secondary-container/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1.5px] bg-[#836a2c]/75 rounded-full" />
            <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#836a2c] uppercase">
              Patient Experiences
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] text-[#2c221e] font-normal leading-tight tracking-tight">
            A serene, anxiety-free departure from conventional dentistry.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#5e4f49] mt-3 max-w-lg">
            Read authentic stories from patients across San Francisco and Mountain View who chose unhurried, hospitality-grade wellness.
          </p>
        </div>

        {/* Featured Testimonial Spotlight Card */}
        <div className="relative bg-surface-container-lowest rounded-2xl p-8 sm:p-12 border border-outline-variant/35 shadow-sm">
          <Quote className="w-12 h-12 text-[#836a2c]/15 absolute top-6 right-6 sm:top-10 sm:right-10 pointer-events-none" />

          {/* Star Rating & Treatment Tag */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-1">
              {[...Array(activeReview.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#836a2c] text-[#836a2c]"
                />
              ))}
              <span className="font-sans text-xs font-semibold text-[#2c221e] ml-2">
                5.0 Verified Review
              </span>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/30 border border-secondary/30 text-[11px] font-semibold tracking-wide text-primary">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {activeReview.treatment}
            </span>
          </div>

          {/* Editorial Quote */}
          <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#2c221e] font-normal leading-relaxed mb-8 italic">
            &ldquo;{activeReview.quote}&rdquo;
          </blockquote>

          {/* Author Meta & Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-outline-variant/20">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-[#827278] text-white flex items-center justify-center font-serif text-lg font-medium">
                {activeReview.avatarInitial || activeReview.author[0]}
              </div>
              <div>
                <div className="font-sans text-sm font-semibold text-[#2c221e]">
                  {activeReview.author}
                </div>
                <div className="font-sans text-xs text-[#6b5c56]">
                  {activeReview.location} • {activeReview.date}
                </div>
              </div>
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-outline-variant/60 flex items-center justify-center text-[#2c221e] hover:bg-surface-container hover:border-primary transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-outline-variant/60 flex items-center justify-center text-[#2c221e] hover:bg-surface-container hover:border-primary transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Pagination Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={cn(
                "transition-all duration-300 rounded-full",
                currentIndex === idx
                  ? "w-8 h-1.5 bg-[#836a2c]"
                  : "w-1.5 h-1.5 bg-[#d0c5b4] hover:bg-[#836a2c]/60"
              )}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
