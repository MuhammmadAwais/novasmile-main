"use client";

import React from "react";
import Image from "next/image";
import { practiceData } from "@/content/practice-data";

interface ExperiencePillarsSectionProps {
  className?: string;
}

export function ExperiencePillarsSection({ className = "" }: ExperiencePillarsSectionProps) {
  const data = practiceData.experiencePillars;

  if (!data) return null;

  return (
    <section
      aria-labelledby="experience-pillars-title"
      className={`relative w-full py-20 md:py-28 bg-surface text-on-surface border-t border-outline-variant/30 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-primary uppercase mb-3">
            {data.eyebrow}
          </p>
          <h2
            id="experience-pillars-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-on-surface tracking-tight"
          >
            {data.title}
          </h2>
          <div className="w-16 h-0.5 bg-primary/40 mx-auto mt-6 rounded-full" />
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {data.pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="group flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:bg-surface-container-low/60 hover:-translate-y-1"
            >
              {/* Gold Icon Container */}
              <div className="relative w-20 h-20 mb-6 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110">
                <div className="absolute inset-0 bg-primary-container/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src={pillar.icon}
                  alt={`${pillar.title} icon`}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain drop-shadow-sm filter contrast-105"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-serif font-medium text-on-surface mb-4 tracking-tight">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed font-sans max-w-sm">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
