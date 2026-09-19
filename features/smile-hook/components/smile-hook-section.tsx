"use client";

import React from "react";
import Image from "next/image";
import { practiceData } from "@/content/practice-data";

export function SmileHookSection() {
  const config = practiceData.smileHook;

  if (!config) return null;

  return (
    <section
      id="our-specialty"
      className="relative w-full py-20 md:py-28 bg-surface-container-lowest text-on-surface overflow-hidden border-b border-outline-variant/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Philosophy & Authority */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Top Hairline Accent */}
            <div className="w-full h-px bg-outline-variant/40 mb-8" />

            {/* Display Headline */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-on-surface leading-[1.08] mb-4">
              <span className="block">{config.headlinePart1}</span>
              <span className="block text-primary font-normal">{config.headlinePart2}</span>
            </h2>

            {/* Subtitle */}
            <p className="font-sans text-lg sm:text-xl font-medium text-on-surface mb-6">
              {config.subtitle}
            </p>

            {/* Mid Hairline Divider */}
            <div className="w-full h-px bg-outline-variant/40 mb-6" />

            {/* Clinical Philosophy Paragraphs */}
            <div className="space-y-4 font-sans text-sm sm:text-base text-on-surface-variant leading-relaxed mb-6">
              {config.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Bold Geographical Scope Callout */}
            <p className="font-sans text-sm sm:text-base font-semibold text-on-surface/90 leading-snug">
              {config.highlightBadge}
            </p>
          </div>

          {/* Right Column: 3-Column Staggered Image Gallery */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 items-center">
              
              {/* Image 1: Shade Matching (Offset Downward) */}
              <div className="relative flex flex-col pt-8 sm:pt-12 group">
                <div className="relative aspect-[9/18] sm:aspect-[9/19] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-surface-container shadow-md transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
                  <Image
                    src={config.galleryImages[0]?.src || "/your-smile-1.webp"}
                    alt={config.galleryImages[0]?.alt || "Dental veneer shade matching"}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 33vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Image 2: Doctor Consultation (Offset Centered) */}
              <div className="relative flex flex-col -translate-y-2 sm:-translate-y-4 group">
                <div className="relative aspect-[9/18] sm:aspect-[9/19] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-surface-container shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1">
                  <Image
                    src={config.galleryImages[1]?.src || "/your-smile-2.webp"}
                    alt={config.galleryImages[1]?.alt || "Specialist patient consultation"}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 33vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Image 3: In-House Dental Lab Artistry (Offset Top) */}
              <div className="relative flex flex-col pt-4 sm:pt-6 group">
                <div className="relative aspect-[9/18] sm:aspect-[9/19] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-surface-container shadow-md transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
                  <Image
                    src={config.galleryImages[2]?.src || "/your-smile-3.webp"}
                    alt={config.galleryImages[2]?.alt || "In-house dental lab precision craft"}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 33vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
