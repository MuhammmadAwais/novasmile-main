"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { practiceData } from "@/content/practice-data";

interface TreatmentShowcaseSectionProps {
  className?: string;
  onSelectCategory?: (categoryKey: string) => void;
  onBookClick?: () => void;
}

export function TreatmentShowcaseSection({
  className = "",
  onSelectCategory,
  onBookClick,
}: TreatmentShowcaseSectionProps) {
  const data = practiceData.treatmentShowcase;

  if (!data) return null;

  const handleCtaClick = (categoryKey: string) => {
    if (onSelectCategory) {
      onSelectCategory(categoryKey);
    } else if (onBookClick) {
      onBookClick();
    }
  };

  return (
    <section
      aria-labelledby="treatment-showcase-heading"
      className={`relative w-full overflow-hidden bg-[#f7f5f0] text-on-surface ${className}`}
    >
      {/* 1. Global High-Definition Marble Canvas Layer across entire section */}
      {data.marbleBg && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src={data.marbleBg}
            alt="Tactile white alabaster marble background texture"
            fill
            priority
            className="object-cover opacity-70 mix-blend-multiply contrast-110"
          />
          {/* Subtle warm ambient wash */}
          <div className="absolute inset-0 bg-[#fcf9f5]/30" />
        </div>
      )}

      {/* 2. Top Header: "your beautiful smile" */}
      <div className="relative z-10 w-full pt-16 sm:pt-20 lg:pt-24 pb-6 sm:pb-10 px-6 sm:px-12 text-center">
        <h2
          id="treatment-showcase-heading"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-sans tracking-tight text-on-surface inline-block"
        >
          <span className="font-serif italic font-normal text-on-surface/85 mr-3">
            {data.headlinePart1}
          </span>
          <span className="font-sans font-bold tracking-tight text-on-surface">
            {data.headlinePart2}
          </span>
        </h2>
      </div>

      {/* 3. Three Equal Square / Full-Bleed 50/50 Split Rows */}
      <div className="relative z-10 w-full flex flex-col">
        {data.items.map((item) => {
          const isImageRight = item.imagePosition === "right";

          return (
            <div
              key={item.id}
              className="w-full grid grid-cols-1 lg:grid-cols-2 items-stretch"
            >
              {/* === Column 1 === */}
              {isImageRight ? (
                /* Text Column (Left Square -> Centered content in square marble space) */
                <div className="relative w-full min-h-[420px] sm:min-h-[500px] lg:min-h-[580px] xl:min-h-[640px] flex flex-col justify-center items-center text-center p-8 sm:p-12 lg:p-16 xl:p-20 z-10">
                  <div className="max-w-md xl:max-w-lg flex flex-col items-center">
                    {/* Category Title: Editorial Serif + Modern Sans Typography */}
                    <h3 className="mb-4 sm:mb-5 leading-tight">
                      <span className="block text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold tracking-tight text-on-surface">
                        {item.titlePart1}
                      </span>
                      <span className="block text-3xl sm:text-4xl lg:text-5xl font-serif italic font-normal text-on-surface/90 mt-1">
                        {item.titlePart2}
                      </span>
                    </h3>

                    {/* Description Paragraph */}
                    <p className="text-sm sm:text-base lg:text-[17px] text-on-surface-variant font-sans leading-relaxed mb-8 max-w-md">
                      {item.description}
                    </p>

                    {/* Warm Ochre Gold CTA Button */}
                    <button
                      type="button"
                      onClick={() => handleCtaClick(item.categoryKey)}
                      className="group inline-flex items-center justify-center px-8 py-3.5 sm:py-4 rounded-full font-sans font-medium text-xs sm:text-sm tracking-wider uppercase bg-primary text-on-primary hover:bg-primary-container shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                      <span>{item.ctaText}</span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              ) : (
                /* Image Column (Left Square -> Full Bleed) */
                <div className="relative w-full min-h-[380px] sm:min-h-[480px] lg:min-h-[580px] xl:min-h-[640px] overflow-hidden group">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              )}

              {/* === Column 2 === */}
              {isImageRight ? (
                /* Image Column (Right Square -> Full Bleed) */
                <div className="relative w-full min-h-[380px] sm:min-h-[480px] lg:min-h-[580px] xl:min-h-[640px] overflow-hidden group">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              ) : (
                /* Text Column (Right Square -> Centered content in square marble space) */
                <div className="relative w-full min-h-[420px] sm:min-h-[500px] lg:min-h-[580px] xl:min-h-[640px] flex flex-col justify-center items-center text-center p-8 sm:p-12 lg:p-16 xl:p-20 z-10">
                  <div className="max-w-md xl:max-w-lg flex flex-col items-center">
                    {/* Category Title: Editorial Serif + Modern Sans Typography */}
                    <h3 className="mb-4 sm:mb-5 leading-tight">
                      <span className="block text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold tracking-tight text-on-surface">
                        {item.titlePart1}
                      </span>
                      <span className="block text-3xl sm:text-4xl lg:text-5xl font-serif italic font-normal text-on-surface/90 mt-1">
                        {item.titlePart2}
                      </span>
                    </h3>

                    {/* Description Paragraph */}
                    <p className="text-sm sm:text-base lg:text-[17px] text-on-surface-variant font-sans leading-relaxed mb-8 max-w-md">
                      {item.description}
                    </p>

                    {/* Warm Ochre Gold CTA Button */}
                    <button
                      type="button"
                      onClick={() => handleCtaClick(item.categoryKey)}
                      className="group inline-flex items-center justify-center px-8 py-3.5 sm:py-4 rounded-full font-sans font-medium text-xs sm:text-sm tracking-wider uppercase bg-primary text-on-primary hover:bg-primary-container shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                      <span>{item.ctaText}</span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
