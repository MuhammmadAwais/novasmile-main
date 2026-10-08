"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { TransformationCase } from "@/lib/types/practice";
import { BeforeAfterSlider } from "./before-after-slider";

interface TransformationCardProps {
  caseItem: TransformationCase;
  index: number;
  totalCases: number;
  onBookTreatment?: (treatmentName: string) => void;
  className?: string;
}

export const TransformationCard = React.forwardRef<HTMLDivElement, TransformationCardProps>(
  function TransformationCard(
    { caseItem, index, totalCases, onBookTreatment, className = "" },
    ref
  ) {
    return (
      <div
        ref={ref}
        className={`relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-outline-variant/35 shadow-[0_20px_50px_-12px_rgba(45,33,29,0.18)] ${className}`}
        style={{
          transformOrigin: "top center",
          willChange: "transform, opacity",
        }}
      >
        {/* 100% OPAQUE SOLID BASE & TACTILE ALABASTER MARBLE TEXTURE */}
        <div className="absolute inset-0 bg-white pointer-events-none z-0">
          <Image
            src="/images/textures/marble-texture-3-1.jpg"
            alt=""
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover opacity-[0.20] mix-blend-multiply pointer-events-none"
            priority={index === 0}
          />
          {/* Subtle Warm Linen Light Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-surface/30 to-white/95" />
          {/* Top Hairline Gold Highlight */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
        </div>

        {/* CARD CONTENT: WIDE HORIZONTAL RECTANGULAR COMPOSITION */}
        <div className="relative z-10 p-5 sm:p-7 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center">
            
            {/* COLUMN 1: EDITORIAL NARRATIVE & CLINICAL PROMISE (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div>
                {/* Editorial Headline */}
                <h3 className="font-serif text-2xl sm:text-[28px] lg:text-[30px] font-normal text-on-surface leading-[1.18] tracking-tight">
                  {caseItem.title}
                </h3>

                {/* Clinical Story */}
                <p className="mt-3 text-xs sm:text-[13.5px] text-on-surface-variant leading-relaxed font-sans line-clamp-3 sm:line-clamp-4">
                  {caseItem.description}
                </p>

                {/* Clinical Indicators */}
                {caseItem.clinicalStats && caseItem.clinicalStats.length > 0 && (
                  <div className="mt-4 pt-3.5 border-t border-outline-variant/20 grid grid-cols-2 gap-3">
                    {caseItem.clinicalStats.slice(0, 2).map((stat, sIdx) => (
                      <div key={sIdx} className="space-y-0.5">
                        <span className="text-[9.5px] uppercase font-bold tracking-wider text-primary font-sans">
                          {stat.label}
                        </span>
                        <p className="text-xs font-semibold text-on-surface font-sans truncate">
                          {stat.value}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => onBookTreatment?.(caseItem.treatment)}
                  data-cursor-text="BOOK"
                  className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-on-primary text-xs font-semibold tracking-wide shadow-md hover:shadow-lg hover:bg-primary/95 active:scale-98 transition-all duration-200"
                >
                  <span>{caseItem.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* COLUMN 2: PATIENT PORTRAIT PORTAL (3 Cols) */}
            <div className="lg:col-span-3 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[160px] sm:max-w-[180px] lg:max-w-[200px] aspect-[3/4] rounded-2xl overflow-hidden border border-outline-variant/35 shadow-md group">
                <Image
                  src={caseItem.patientImage}
                  alt={caseItem.patientAlt}
                  fill
                  sizes="(max-width: 768px) 50vw, 200px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10 pointer-events-none" />

                {/* Patient Name */}
                {caseItem.patientName && (
                  <div className="absolute bottom-3 inset-x-2 text-center pointer-events-none">
                    <p className="text-xs font-semibold text-white tracking-wide">
                      {caseItem.patientName}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* COLUMN 3: INTERACTIVE BEFORE / AFTER SLIDER (4 Cols) */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <div className="w-full">
                <BeforeAfterSlider
                  beforeImage={caseItem.beforeImage}
                  afterImage={caseItem.afterImage}
                  alt={caseItem.title}
                  className="shadow-inner border border-outline-variant/30"
                />
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM PROGRESS STEPPER BAR */}
        <div className="h-1 w-full bg-surface-container">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${((index + 1) / totalCases) * 100}%` }}
          />
        </div>
      </div>
    );
  }
);
