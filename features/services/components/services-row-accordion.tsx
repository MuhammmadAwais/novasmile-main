"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Calendar, CheckCircle2 } from "lucide-react";
import { practiceData } from "@/content/practice-data";
import { ServiceRowProcedure } from "@/lib/types/practice";

interface ServicesRowAccordionProps {
  onBookTreatment?: (treatmentName?: string) => void;
}

/**
 * ServicesRowAccordion
 * Full-screen width luxury architectural editorial list inspired by Reference Image 3:
 * - Full-bleed width across viewport
 * - No badge on top, clean editorial headline
 * - Hidden thumbnail/expansion by default until mouse hovers on a specific row
 * - Fluid smooth animations on enter/leave
 * - Clean subtitle and dual pill CTAs (yellow monospace spec text removed)
 * - Geometric architectural wireframe patterns illuminated on left & right of active row
 * - Signature circular dot indicator floating atop the embedded inline image
 */
export function ServicesRowAccordion({
  onBookTreatment,
}: ServicesRowAccordionProps) {
  const config = practiceData.servicesSuite;
  // Initially null so no thumbnail or hover effect appears until user hovers
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  if (!config) return null;

  return (
    <div className="relative w-full bg-[#120b0a] text-[#fcf9f6] border-t border-b border-white/10 py-20 sm:py-28 lg:py-32 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* 1. Alabaster Marble Texture Canvas Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.07] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url('/marble-texture-3-1.jpg')` }}
      />

      {/* Ambient Ochre Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#836a2c]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header (Clean headline without badge) */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-16 sm:mb-24">
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight leading-[1.15]">
          {config.rowHeadline}
        </h2>
        <p className="font-sans text-xs sm:text-sm text-[#d0c5b4]/80 mt-4 max-w-xl mx-auto leading-relaxed">
          {config.rowSubtitle}
        </p>
      </div>

      {/* The 8 Full-Width Architectural Split-Word Procedure Rows */}
      <div
        onMouseLeave={() => setHoveredId(null)}
        className="relative z-10 max-w-6xl xl:max-w-7xl mx-auto divide-y divide-white/10 border-t border-b border-white/10"
      >
        {config.procedures.map((proc: ServiceRowProcedure) => {
          const isHovered = hoveredId === proc.id;

          return (
            <div
              key={proc.id}
              onMouseEnter={() => setHoveredId(proc.id)}
              onClick={() => setHoveredId(isHovered ? null : proc.id)}
              className={`relative py-8 sm:py-11 lg:py-14 px-3 sm:px-8 lg:px-12 transition-all duration-500 ease-out cursor-pointer group overflow-hidden ${
                isHovered
                  ? "bg-white/[0.035] shadow-inner"
                  : "hover:bg-white/[0.015]"
              }`}
            >
              {/* Left Architectural Wireframe Pattern (illuminated when active, matching reference Image 3) */}
              <svg
                className={`absolute left-0 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 w-48 sm:w-64 lg:w-80 h-28 sm:h-36 pointer-events-none transition-all duration-500 ease-out ${
                  isHovered ? "opacity-35 scale-100" : "opacity-0 scale-95"
                }`}
                viewBox="0 0 320 140"
                fill="none"
                stroke="rgba(255, 255, 255, 0.7)"
                strokeWidth="0.8"
              >
                <polyline points="0,110 45,25 95,120 145,15 200,115 255,35 305,95" />
                <polyline
                  points="20,125 70,45 115,130 165,30 220,120 275,50 315,105"
                  strokeDasharray="3 3"
                  opacity="0.5"
                />
                <line x1="45" y1="25" x2="115" y2="130" strokeWidth="0.5" />
                <line x1="145" y1="15" x2="200" y2="115" strokeWidth="0.5" />
                <line x1="200" y1="115" x2="275" y2="50" strokeWidth="0.5" />
              </svg>

              {/* Right Architectural Criss-Cross Diamond Pattern (illuminated when active, matching reference Image 3) */}
              <svg
                className={`absolute right-0 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 w-48 sm:w-64 lg:w-80 h-28 sm:h-36 pointer-events-none transition-all duration-500 ease-out ${
                  isHovered ? "opacity-35 scale-100" : "opacity-0 scale-95"
                }`}
                viewBox="0 0 320 140"
                fill="none"
                stroke="rgba(255, 255, 255, 0.7)"
                strokeWidth="0.8"
              >
                <polyline points="0,120 40,20 80,130 120,25 160,125 200,20 240,130 280,25 320,115" />
                <polyline
                  points="0,20 40,120 80,25 120,130 160,20 200,125 240,25 280,130 320,25"
                  opacity="0.6"
                />
                <line x1="40" y1="20" x2="80" y2="130" strokeWidth="0.5" />
                <line x1="120" y1="25" x2="160" y2="125" strokeWidth="0.5" />
                <line x1="200" y1="20" x2="240" y2="130" strokeWidth="0.5" />
              </svg>

              {/* Top Row Indicators: Index on left, /See more on right */}
              <div className="relative z-10 flex items-center justify-between text-xs mb-3 sm:mb-5">
                <span className="font-mono text-[11px] sm:text-xs text-[#c4a96a] tracking-widest font-medium">
                  {proc.indexNumber}
                </span>

                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] text-white/50 group-hover:text-white transition-colors flex items-center gap-1">
                    <span>{isHovered ? "/Active" : "/See more"}</span>
                    <ArrowUpRight
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isHovered
                          ? "text-[#c4a96a] translate-x-0.5 -translate-y-0.5"
                          : "text-white/40 group-hover:text-white"
                      }`}
                    />
                  </span>
                </div>
              </div>

              {/* Main Headline Area */}
              <div className="relative z-10 text-center">
                {isHovered ? (
                  /* Expanded Split Headline with Embedded Inline Photo & Circle Dot Halo */
                  <div className="animate-in fade-in zoom-in-[0.98] duration-300 ease-out">
                    <div className="flex items-center justify-center flex-wrap gap-x-3 sm:gap-x-5 gap-y-3">
                      <span className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-medium tracking-tight">
                        {proc.titlePart1}
                      </span>

                      {/* Embedded Inline Image Portal with Reference Dot Halo */}
                      <div className="relative inline-block align-middle my-2 sm:my-0">
                        {/* Signature Circular Halo with Center Dot (from Reference Image 3) */}
                        <div className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/50 flex items-center justify-center bg-black/60 backdrop-blur-xs shadow-lg z-20 pointer-events-none">
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        </div>

                        {/* High-Resolution Thumbnail Frame */}
                        <div className="relative h-16 sm:h-20 lg:h-24 w-32 sm:w-44 lg:w-56 rounded-xl sm:rounded-2xl overflow-hidden border border-[#836a2c]/60 shadow-[0_14px_40px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-500 bg-black/40">
                          <Image
                            src={proc.image}
                            alt={proc.imageAlt}
                            fill
                            sizes="(max-width: 768px) 140px, 240px"
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </div>
                      </div>

                      <span className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-medium tracking-tight">
                        {proc.titlePart2}
                      </span>
                    </div>

                    {/* Clean Subtitle matching Reference 3 (no yellow monospace text) */}
                    <p className="font-sans text-xs sm:text-sm text-[#d0c5b4]/85 tracking-wide mt-3 sm:mt-4 text-center">
                      San Francisco & Mountain View Studios | {proc.category} | Lifetime Clinical Care
                    </p>

                    {/* Dual Action CTAs matching Reference Image 3 ('View Floor Plan & 3D View' + 'Check property ↗') */}
                    <div className="mt-5 sm:mt-6 flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
                      <button
                        type="button"
                        data-cursor-text="BOOK"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onBookTreatment) {
                            onBookTreatment(`${proc.titlePart1} ${proc.titlePart2}`);
                          }
                        }}
                        className="inline-flex items-center gap-2 bg-[#fcf9f6] text-[#201815] hover:bg-[#c4a96a] hover:text-[#18110f] text-xs font-semibold uppercase tracking-wider py-3 px-6 rounded-full transition-all duration-300 shadow-md active:scale-95"
                      >
                        <Calendar className="w-3.5 h-3.5 text-[#836a2c]" />
                        <span>{proc.ctaText}</span>
                      </button>

                      <button
                        type="button"
                        data-cursor-text="EXPLORE"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onBookTreatment) {
                            onBookTreatment(`${proc.titlePart1} ${proc.titlePart2}`);
                          }
                        }}
                        className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-semibold tracking-wide py-3 px-5 rounded-full transition-all duration-300"
                      >
                        <span>Clinical Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-white/70" />
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Idle Sleek Title (displayed until hovered) */
                  <h3 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-light text-white/70 group-hover:text-white transition-colors duration-300 tracking-tight">
                    {proc.titlePart1} {proc.titlePart2}
                  </h3>
                )}
              </div>
            </div>
          );
        })}
      </div>

      
    </div>
  );
}
