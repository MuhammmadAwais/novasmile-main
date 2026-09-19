"use client";

import React from "react";
import Image from "next/image";
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
      className={`relative w-full overflow-hidden bg-[#f4f1ec] text-on-surface ${className}`}
    >
      {/* 1. Global High-Definition Marble Canvas Layer */}
      {data.marbleBg && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src={data.marbleBg}
            alt="Tactile white alabaster marble background texture"
            fill
            priority
            className="object-cover opacity-75 mix-blend-multiply contrast-110 brightness-100"
          />
          {/* Ambient warm tone wash */}
          <div className="absolute inset-0 bg-[#fbf9f5]/25" />
        </div>
      )}

      {/* 2. Top Header: "your beautiful smile" */}
      <div className="relative z-10 w-full pt-14 sm:pt-18 lg:pt-20 pb-6 sm:pb-8 px-6 sm:px-12 text-center">
        <h2
          id="treatment-showcase-heading"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-sans tracking-tight text-on-surface inline-block"
        >
          <span className="font-light tracking-wide text-on-surface/85 mr-3 lowercase">
            {data.headlinePart1}
          </span>
          <span className="font-extrabold tracking-tight text-on-surface lowercase">
            {data.headlinePart2}
          </span>
        </h2>
      </div>

      {/* 3. Three Full-Bleed 50/50 Split Rows */}
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
                /* Text Column (Left Side -> Right-aligned towards center seam) */
                <div className="relative w-full min-h-[420px] sm:min-h-[480px] lg:min-h-[540px] xl:min-h-[580px] flex flex-col justify-center items-center lg:items-end text-center lg:text-right px-6 sm:px-10 lg:pr-12 lg:pl-8 xl:pr-16 py-10 lg:py-14 z-10">
                  <div className="max-w-md xl:max-w-lg flex flex-col items-center lg:items-end">
                    {/* Two-Tone Title */}
                    <h3 className="mb-2 leading-none">
                      <span className="block text-4xl sm:text-5xl lg:text-[54px] font-sans font-extrabold tracking-tight text-on-surface lowercase">
                        {item.titlePart1}
                      </span>
                      <span className="block text-4xl sm:text-5xl lg:text-[54px] font-sans font-extralight tracking-tight text-on-surface/90 lowercase mt-1">
                        {item.titlePart2}
                      </span>
                    </h3>

                    {/* Description Paragraph */}
                    <p className="text-sm sm:text-base text-on-surface-variant font-sans leading-relaxed my-5 max-w-sm sm:max-w-md text-center lg:text-right">
                      {item.description}
                    </p>

                    {/* Warm Ochre Gold CTA Button */}
                    <button
                      type="button"
                      onClick={() => handleCtaClick(item.categoryKey)}
                      className="group inline-flex items-center justify-center px-7 sm:px-8 py-3.5 rounded-sm font-sans font-medium text-xs sm:text-sm tracking-wide lowercase bg-primary text-on-primary hover:bg-primary-container shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                      <span>{item.ctaText}</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Image Column (Left Side -> Full Bleed) */
                <div className="relative w-full min-h-[360px] sm:min-h-[440px] lg:min-h-[540px] xl:min-h-[580px] overflow-hidden group order-2 lg:order-1">
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
                /* Image Column (Right Side -> Full Bleed) */
                <div className="relative w-full min-h-[360px] sm:min-h-[440px] lg:min-h-[540px] xl:min-h-[580px] overflow-hidden group order-2 lg:order-2">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              ) : (
                /* Text Column (Right Side -> Left-aligned towards center seam) */
                <div className="relative w-full min-h-[420px] sm:min-h-[480px] lg:min-h-[540px] xl:min-h-[580px] flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 sm:px-10 lg:pl-12 lg:pr-8 xl:pl-16 py-10 lg:py-14 z-10 order-1 lg:order-2">
                  <div className="max-w-md xl:max-w-lg flex flex-col items-center lg:items-start">
                    {/* Two-Tone Title */}
                    <h3 className="mb-2 leading-none">
                      <span className="block text-4xl sm:text-5xl lg:text-[54px] font-sans font-extrabold tracking-tight text-on-surface lowercase">
                        {item.titlePart1}
                      </span>
                      <span className="block text-4xl sm:text-5xl lg:text-[54px] font-sans font-extralight tracking-tight text-on-surface/90 lowercase mt-1">
                        {item.titlePart2}
                      </span>
                    </h3>

                    {/* Description Paragraph */}
                    <p className="text-sm sm:text-base text-on-surface-variant font-sans leading-relaxed my-5 max-w-sm sm:max-w-md text-center lg:text-left">
                      {item.description}
                    </p>

                    {/* Warm Ochre Gold CTA Button */}
                    <button
                      type="button"
                      onClick={() => handleCtaClick(item.categoryKey)}
                      className="group inline-flex items-center justify-center px-7 sm:px-8 py-3.5 rounded-sm font-sans font-medium text-xs sm:text-sm tracking-wide lowercase bg-primary text-on-primary hover:bg-primary-container shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                      <span>{item.ctaText}</span>
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
