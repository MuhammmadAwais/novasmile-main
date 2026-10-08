"use client";

import React from "react";
import { ShieldCheck, Check, ArrowUpRight, CreditCard, Sparkles, FileText } from "lucide-react";
import { ModernComfortsConfig } from "@/lib/types/practice";

interface InsuranceGridProps {
  insuranceConfig: ModernComfortsConfig["insuranceSection"];
  onBookClick?: (reason?: string) => void;
}

export function InsuranceGrid({ insuranceConfig, onBookClick }: InsuranceGridProps) {
  return (
    <div className="w-full mt-20 sm:mt-28 lg:mt-32 pt-16 sm:pt-20 border-t border-[#836a2c]/20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
        <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#836a2c]">
          {insuranceConfig.eyebrow}
        </span>
        <h3 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#201815] font-normal tracking-tight">
          {insuranceConfig.headline}
        </h3>
        <p className="font-sans text-sm sm:text-base text-[#4d4639] leading-relaxed max-w-xl mx-auto">
          {insuranceConfig.subtitle}
        </p>
      </div>

      {/* PPO Partner Networks Badges Ribbon */}
      <div className="mb-12 sm:mb-14">
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
          {insuranceConfig.networks.map((net) => (
            <div
              key={net.id}
              className="inline-flex items-center gap-2 rounded-full border border-[#836a2c]/25 bg-white/80 backdrop-blur-xs px-4 sm:px-5 py-2 text-xs font-medium text-[#201815] shadow-xs hover:border-[#836a2c]/60 hover:shadow-sm transition-all"
            >
              <ShieldCheck className="w-4 h-4 text-[#836a2c]" />
              <span className="font-semibold">{net.name}</span>
              <span className="text-[10px] uppercase tracking-wider text-[#8a7b74] font-mono">
                {net.type}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3 Financial Clarity Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {insuranceConfig.financingOptions.map((option, idx) => (
          <div
            key={option.id}
            className="group relative rounded-2xl sm:rounded-3xl border border-[#836a2c]/30 bg-[#fdfbf9] p-6 sm:p-8 flex flex-col justify-between shadow-[0_12px_36px_-12px_rgba(45,33,29,0.1)] hover:shadow-[0_22px_50px_-12px_rgba(45,33,29,0.2)] hover:border-[#c4a96a]/80 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            {/* Tactile Alabaster Marble Texture Plate */}
            <div
              className="pointer-events-none absolute inset-0 opacity-25 mix-blend-multiply rounded-2xl sm:rounded-3xl"
              style={{
                backgroundImage: `url('/images/textures/marble-texture-3-1.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "contrast(1.08) brightness(1.02)",
              }}
              aria-hidden="true"
            />

            {/* Subtle Top Gold Highlight Line */}
            <div
              className="pointer-events-none absolute inset-x-8 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#c4a96a]/60 to-transparent"
              aria-hidden="true"
            />

            <div className="relative z-10 space-y-4">
              {/* Icon Header */}
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-[#836a2c]/10 text-[#836a2c] flex items-center justify-center border border-[#836a2c]/20">
                  {idx === 0 && <FileText className="w-5 h-5" />}
                  {idx === 1 && <CreditCard className="w-5 h-5" />}
                  {idx === 2 && <Sparkles className="w-5 h-5" />}
                </div>
                <span className="font-mono text-xs font-semibold text-[#836a2c]">
                  0{idx + 1}
                </span>
              </div>

              <div>
                <h4 className="font-serif text-xl sm:text-2xl font-normal text-[#201815] tracking-tight">
                  {option.title}
                </h4>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#836a2c] mt-0.5">
                  {option.subtitle}
                </p>
              </div>

              <p className="font-sans text-xs sm:text-sm text-[#4d4639] leading-relaxed">
                {option.description}
              </p>

              {/* Feature Checklist */}
              <ul className="space-y-2 pt-2 border-t border-[#836a2c]/15">
                {option.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2 text-xs text-[#201815]">
                    <div className="w-4 h-4 rounded-full bg-[#836a2c]/15 text-[#836a2c] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action CTA Button */}
            <div className="relative z-10 mt-6 pt-4">
              <button
                type="button"
                onClick={() => onBookClick && onBookClick(option.title)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-md border border-[#836a2c] bg-white/70 hover:bg-[#836a2c] hover:text-[#fcf9f6] text-[#201815] py-2.5 px-4 text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-xs cursor-pointer"
              >
                <span>{option.ctaText}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
