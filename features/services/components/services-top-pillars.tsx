"use client";

import React from "react";
import Image from "next/image";
import { practiceData } from "@/content/practice-data";
import { ServicePillarItem } from "@/lib/types/practice";

interface ServicesTopPillarsProps {
  onSelectCategory?: (categoryKey: "general" | "cosmetic" | "surgical") => void;
  onBookClick?: (treatmentName?: string) => void;
}

/**
 * ServicesTopPillars
 * Matches Screenshot 1 ("Comprehensive care, one convenient location"):
 * 3 Department Pillars (General, Cosmetic, Surgical) with arched-top photography,
 * authoritative serif titles, benefit copy, and ochre-outlined CTA buttons.
 */
export function ServicesTopPillars({
  onSelectCategory,
  onBookClick,
}: ServicesTopPillarsProps) {
  const config = practiceData.servicesSuite;
  if (!config) return null;

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#836a2c] mb-3 block">
          {config.topEyebrow}
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#201815] font-normal tracking-tight leading-[1.15]">
          {config.topHeadline}
        </h2>
        <p className="font-sans text-xs sm:text-sm text-[#5e4f49] mt-3.5 max-w-xl mx-auto leading-relaxed">
          {config.topSubtitle}
        </p>
      </div>

      {/* 3 Pillars Grid matching Screenshot 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {config.pillars.map((pillar: ServicePillarItem) => (
          <div
            key={pillar.id}
            className="flex flex-col group bg-surface-container-lowest/60 backdrop-blur-xs rounded-2xl p-4 sm:p-5 border border-outline-variant/30 hover:border-primary/40 hover:shadow-lg transition-all duration-500"
          >
            {/* Arched Top Image Portal */}
            <div className="relative w-full aspect-[4/3] rounded-t-[2.5rem] rounded-b-xl overflow-hidden bg-surface-container mb-6 shadow-sm border border-outline-variant/20">
              <Image
                src={pillar.image}
                alt={pillar.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Gentle Warm Linen Sheen Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            </div>

            {/* Content Details */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#201815] font-medium mb-2.5">
                  {pillar.title}
                </h3>
                <p className="font-sans text-xs sm:text-[13px] text-[#4d4639] leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Action Button matching Reference Outline */}
              <div>
                <button
                  type="button"
                  data-cursor-text="EXPLORE"
                  onClick={() => {
                    if (onSelectCategory) {
                      onSelectCategory(pillar.categoryKey);
                    } else if (onBookClick) {
                      onBookClick(pillar.title + " Dentistry Consultation");
                    }
                  }}
                  className="w-full sm:w-auto min-w-[200px] border border-[#836a2c]/70 text-[#201815] hover:bg-[#836a2c] hover:border-[#836a2c] hover:text-[#fcf9f6] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] py-3 px-6 rounded-sm transition-all duration-300 shadow-xs hover:shadow-md active:scale-[0.98]"
                >
                  {pillar.ctaText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
