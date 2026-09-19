"use client";

import React from "react";
import Image from "next/image";
import { practiceData } from "@/content/practice-data";
import { cn } from "@/lib/utils/cn";

interface HeroSectionProps {
  onBookVisit?: () => void;
  onCallNow?: () => void;
}

export function HeroSection({ onBookVisit, onCallNow }: HeroSectionProps) {
  const { hero } = practiceData;

  return (
    <section className="relative w-full h-screen min-h-[720px] max-h-[1080px] overflow-hidden flex items-center bg-surface select-none">
      {/* 1. Main Background Photographic Plate */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/zen-hero-room.avif"
          alt="Modern Zen Dental Operatory Studio"
          fill
          priority
          className="object-cover object-[72%_center] lg:object-[70%_center]"
          sizes="100vw"
          quality={95}
        />

        {/* 2. Soft Tactile Stone Texture Overlay (Warm Craft Detail) */}
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage: "url('/stone-background-1400.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* 3. Luminous Linen Fog & Gradient Wash (Exact match to reference) */}
        {/* Soft sunlight/linen wash from the left that diffuses into the room */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fdfbf8] via-[#fdfbf8]/95 via-32% md:via-45% to-transparent to-70% pointer-events-none" />

        {/* Top subtle vignette for crisp navigation legibility */}
        <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-black/25 via-black/10 to-transparent pointer-events-none" />
      </div>

      {/* 4. Foreground Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-24 sm:pt-28 pb-8">
        <div className="max-w-xl lg:max-w-2xl relative">
          {/* Delicate Botanical Zen Leaf Emblem Watermark (Matches Reference) */}
          <div className="absolute -top-20 sm:-top-28 -left-6 sm:-left-10 pointer-events-none z-0">
            <svg
              viewBox="0 0 120 190"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-36 h-56 sm:w-44 sm:h-72 text-[#a68644]/25"
            >
              {/* Outer pointed leaf contour */}
              <path
                d="M60 12C60 12 20 54 20 108C20 146 36 172 60 172C84 172 100 146 100 108C100 54 60 12 60 12Z"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
              />
              {/* Central delicate stem */}
              <path
                d="M60 172V30"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="3 3"
                opacity="0.75"
              />
              {/* Soft lateral veins */}
              <path
                d="M60 76C72 68 84 72 90 80"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.6"
              />
              <path
                d="M60 102C48 94 36 98 30 106"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.6"
              />
              <path
                d="M60 128C72 120 84 124 90 132"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.6"
              />
            </svg>
          </div>

          {/* Location Badge with Horizontal Rule */}
          <div className="relative z-10 flex items-center gap-3 mb-5 sm:mb-6">
            <span className="w-8 sm:w-10 h-[1.5px] bg-[#a68644]/70 rounded-full" />
            <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-[#9b7b37] uppercase">
              {hero.locationTag}
            </span>
          </div>

          {/* Editorial Serif Headline */}
          <h1 className="relative z-10 font-serif text-4xl sm:text-5xl lg:text-[62px] xl:text-[68px] text-[#2c221e] font-normal leading-[1.12] tracking-tight mb-5 sm:mb-6">
            <span>{hero.headlinePart1}</span>
            <br />
            <span>{hero.headlinePart2}</span>
          </h1>

          {/* Calming Subheading */}
          <p className="relative z-10 font-sans text-base sm:text-[17px] text-[#4d443e] leading-[1.65] max-w-lg mb-9 sm:mb-11 font-normal">
            Comprehensive dentistry in calm,
            <br className="hidden sm:inline" />{" "}
            well-designed spaces across the Bay Area.
          </p>

          {/* Dual CTAs (Matches Reference Shape & Tone) */}
          <div className="relative z-10 flex flex-wrap items-center gap-4 sm:gap-5">
            {/* Primary Button: BOOK A VISIT */}
            <button
              onClick={onBookVisit}
              className={cn(
                "bg-[#3f322e] hover:bg-[#29201d] text-[#fcf9f6]",
                "font-sans text-xs sm:text-[12px] font-semibold uppercase tracking-[0.14em]",
                "px-8 sm:px-9 py-3.5 sm:py-4 rounded-full",
                "transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
                "cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#836a2c]/40"
              )}
            >
              {hero.primaryCtaText}
            </button>

            {/* Secondary Button: CALL NOW */}
            <button
              onClick={onCallNow}
              className={cn(
                "border border-[#55423e]/40 hover:border-[#2c221e]",
                "bg-[#fcf9f6]/40 hover:bg-[#fcf9f6]/95 backdrop-blur-xs text-[#2c221e]",
                "font-sans text-xs sm:text-[12px] font-semibold uppercase tracking-[0.14em]",
                "px-8 sm:px-9 py-3.5 sm:py-4 rounded-full",
                "transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0",
                "cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#836a2c]/40"
              )}
            >
              {hero.secondaryCtaText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
