"use client";

import React from "react";
import { Search, ChevronDown, ArrowUpRight } from "lucide-react";
import { FAQItem } from "@/lib/types/practice";

interface FaqItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  onBookTreatment?: (treatment?: string) => void;
}

export function FaqItemCard({ item, isOpen, onToggle, onBookTreatment }: FaqItemProps) {
  return (
    <div
      data-faq-item
      className={`group relative w-full rounded-xl sm:rounded-2xl transition-all duration-300 ease-out overflow-hidden ${
        isOpen
          ? "bg-[#1c120e] text-[#fcf9f6] border border-[#c4a96a] shadow-[0_18px_45px_-12px_rgba(45,33,29,0.35)] -translate-y-0.5"
          : "bg-[#fdfbf9] text-[#201815] border border-[#836a2c]/25 hover:border-[#836a2c]/60 shadow-[0_4px_18px_-4px_rgba(45,33,29,0.06)] hover:shadow-[0_10px_28px_-6px_rgba(45,33,29,0.12)] hover:-translate-y-0.5"
      }`}
    >
      {/* Resting State: Tactile Alabaster Marble Texture Plate */}
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-500 mix-blend-multiply ${
          isOpen ? "opacity-0" : "opacity-30"
        }`}
        style={{
          backgroundImage: `url('/images/textures/marble-texture-3-1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "contrast(1.08) brightness(1.02)",
        }}
        aria-hidden="true"
      />

      {/* Active State: Bold Contrasting Deep Marble Texture Plate (download.webp with screen blend) */}
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-500 mix-blend-screen ${
          isOpen ? "opacity-25" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url('/images/textures/download.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "contrast(1.25) brightness(1.15)",
        }}
        aria-hidden="true"
      />

      {/* Subtle Top Gold Highlight on Active */}
      {isOpen && (
        <div
          className="pointer-events-none absolute inset-x-6 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#c4a96a]/80 to-transparent"
          aria-hidden="true"
        />
      )}

      {/* Clickable Header Row */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="relative z-10 w-full text-left p-5 sm:p-6 lg:p-7 flex items-center justify-between gap-4 cursor-pointer select-none"
      >
        <div className="flex items-center gap-3.5 sm:gap-4.5 min-w-0 pr-2">
          {/* Magnifying Glass Icon matching Screenshot */}
          <div
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${
              isOpen
                ? "bg-[#836a2c] text-[#fcf9f6] shadow-sm"
                : "bg-white/80 border border-[#836a2c]/30 text-[#836a2c] group-hover:border-[#836a2c]/60 group-hover:text-[#201815]"
            }`}
          >
            <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.2]" />
          </div>

          <h3
            className={`font-sans text-base sm:text-lg lg:text-[19px] transition-colors duration-200 tracking-tight ${
              isOpen
                ? "font-serif text-[#ffefd1] font-normal sm:text-xl lg:text-[21px]"
                : "font-medium text-[#201815] group-hover:text-[#836a2c]"
            }`}
          >
            {item.question}
          </h3>
        </div>

        {/* Right Chevron Indicator */}
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ease-out ${
            isOpen
              ? "rotate-180 text-[#c4a96a] bg-white/10"
              : "text-[#836a2c]/70 group-hover:text-[#836a2c] group-hover:bg-[#836a2c]/10"
          }`}
        >
          <ChevronDown className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2.2]" />
        </div>
      </button>

      {/* Smooth 60fps CSS Grid Animated Answer */}
      <div
        className={`grid transition-all duration-300 ease-out relative z-10 px-5 sm:px-6 lg:px-7 ${
          isOpen ? "grid-rows-[1fr] opacity-100 pb-6 sm:pb-7" : "grid-rows-[0fr] opacity-0 pb-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pt-4 border-t border-white/15 space-y-3">
            <p className="font-sans text-sm sm:text-base text-[#d8c7be] leading-relaxed pl-12 sm:pl-14">
              {item.answer}
            </p>

            {onBookTreatment && (
              <div className="pl-12 sm:pl-14 pt-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onBookTreatment(item.question);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#c4a96a] hover:text-[#ffefd1] transition-colors cursor-pointer"
                >
                  <span>Have questions regarding this? Ask our clinician</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
