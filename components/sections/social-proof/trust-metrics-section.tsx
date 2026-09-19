"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { practiceData } from "@/content/practice-data";
import { ShieldCheck, Award, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils/cn";

export function TrustMetricsSection() {
  const { milestones, affiliations } = practiceData;
  const [activeSlide, setActiveSlide] = useState(0);

  // 4 partners visible per slide on desktop, 2 on tablet/mobile
  const itemsPerPage = 4;
  const totalSlides = Math.ceil(affiliations.length / itemsPerPage);

  // Gentle carousel rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const displayedAffiliations = affiliations.slice(
    activeSlide * itemsPerPage,
    activeSlide * itemsPerPage + itemsPerPage
  );

  return (
    <section className="relative w-full py-16 sm:py-24 select-none overflow-hidden bg-[#faf7f2] border-b border-outline-variant/30">
      {/* 1. Custom Marble & Stone Background Graphics (Tactile Wellness Aesthetic) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Natural Alabaster Marble Texture Layer */}
        <div
          className="absolute inset-0 opacity-[0.07] mix-blend-multiply"
          style={{
            backgroundImage: "url('/marble-texture-3-1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Subtle Stone Texture Grain */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: "url('/stone-background-1400.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Ambient Top & Bottom Radial Glows for Luminous Depth */}
        <div className="absolute left-1/2 -top-24 -translate-x-1/2 w-[800px] h-48 bg-[#fedf9b]/20 blur-3xl" />
        <div className="absolute right-10 bottom-0 w-72 h-72 bg-[#836a2c]/5 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Section Pre-header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-[1.5px] bg-[#836a2c]/70 rounded-full" />
            <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#836a2c] uppercase">
              Proven Clinical Authority & Mastery
            </span>
            <span className="w-6 h-[1.5px] bg-[#836a2c]/70 rounded-full" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2c221e] font-normal tracking-tight max-w-xl">
            Excellence quantified through thousands of peaceful smiles.
          </h2>
        </div>

        {/* 2. Four Milestone Stat Cards (Matches reference emergency-bar-section.png with tactile marble & espresso craft) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {milestones.map((item, idx) => (
            <div
              key={item.label}
              className={cn(
                "relative overflow-hidden rounded-2xl p-6 sm:p-7 min-h-[160px] sm:min-h-[175px]",
                "bg-[#2d211d] text-white",
                "border border-[#836a2c]/25 hover:border-[#c4a96a]/60",
                "flex flex-col justify-between",
                "transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1",
                "group cursor-default"
              )}
            >
              {/* Marble Texture Plate inside card for tactile organic luxury */}
              <div
                className="absolute inset-0 opacity-[0.14] mix-blend-screen pointer-events-none group-hover:opacity-[0.22] transition-opacity duration-300"
                style={{
                  backgroundImage: "url('/download.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Ambient Ochre Radial Gradient Highlight */}
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#836a2c]/25 rounded-full blur-2xl pointer-events-none group-hover:bg-[#c4a96a]/35 transition-all" />

              {/* Stat Header: Label + Subtle Index */}
              <div className="relative z-10 flex items-start justify-between gap-2">
                <span className="font-sans text-xs sm:text-[13px] text-[#d8c7be] font-medium tracking-wide leading-snug">
                  {item.label}
                </span>
                <span className="font-serif text-xs text-[#836a2c]/70 font-light italic">
                  0{idx + 1}
                </span>
              </div>

              {/* Stat Main Value in Refined Serif Typography */}
              <div className="relative z-10 mt-5 sm:mt-6">
                <div className="font-serif text-4xl sm:text-[46px] lg:text-[52px] font-light tracking-tight leading-none text-[#faf6f0] group-hover:text-[#ffefd1] transition-colors">
                  {item.value}
                </div>
                {item.subtext && (
                  <p className="font-sans text-[11px] text-[#a89890] mt-1.5 font-normal tracking-wide">
                    {item.subtext}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 3. Accredited Associations & Company Partner Carousel (Matches reference emergency-bar-section.png) */}
        <div className="relative pt-4 border-t border-outline-variant/30">
          <div className="text-center mb-8">
            <span className="font-sans text-[11px] font-semibold tracking-[0.2em] text-[#7a6a62] uppercase">
              Accredited Clinical Excellence & Direct Insurance Partners
            </span>
          </div>

          {/* Carousel Slide Area */}
          <div className="relative overflow-hidden py-4 px-2 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 items-center justify-items-center">
              {displayedAffiliations.map((partner) => (
                <div
                  key={partner.id}
                  className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-[#f2ece3]/80 transition-all duration-200 group w-full"
                >
                  {/* High-Fidelity Styled Logo Marks matching reference */}
                  <div className="h-16 flex items-center justify-center mb-2">
                    {partner.acronym === "ADA" && (
                      <div className="flex items-center gap-2.5 text-[#2c221e] group-hover:text-primary transition-colors">
                        <div className="w-10 h-10 rounded-lg border-[2px] border-[#2c221e] group-hover:border-primary flex items-center justify-center font-serif font-bold text-xs tracking-tighter shadow-2xs">
                          ADA
                        </div>
                        <div className="text-left font-sans text-xs font-semibold leading-tight text-[#2c221e]">
                          Alberta Dental<br />
                          <span className="font-normal text-[11px] text-[#63554e]">Association</span>
                        </div>
                      </div>
                    )}

                    {partner.acronym === "CDSA" && (
                      <div className="text-center text-[#2c221e] group-hover:text-primary transition-colors">
                        <span className="font-sans text-3xl font-extrabold tracking-tighter block leading-none text-[#2c221e]">
                          CDSA
                        </span>
                        <span className="font-sans text-[9px] uppercase tracking-[0.14em] text-[#63554e] block mt-1.5 font-medium">
                          College of Dental Surgeons of Alberta
                        </span>
                      </div>
                    )}

                    {partner.acronym === "RCDC" && (
                      <div className="text-center text-[#2c221e] group-hover:text-primary transition-colors">
                        <span className="font-serif text-2xl tracking-[0.2em] block font-medium text-[#2c221e]">
                          RCDC
                        </span>
                        <div className="flex items-center justify-center gap-2 mt-1">
                          <span className="w-6 h-[1px] bg-[#2c221e]/40" />
                          <span className="text-[11px] text-primary">🍁</span>
                          <span className="w-6 h-[1px] bg-[#2c221e]/40" />
                        </div>
                      </div>
                    )}

                    {partner.acronym === "ASDS" && (
                      <div className="flex items-center gap-2.5 text-[#2c221e] group-hover:text-primary transition-colors">
                        <div className="w-9 h-9 rounded-full bg-[#836a2c]/10 text-primary flex items-center justify-center">
                          <ShieldCheck className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-left font-sans text-xs font-semibold leading-tight text-[#2c221e]">
                          <span className="text-[9px] uppercase tracking-wider text-[#63554e] block">
                            Alberta Society of
                          </span>
                          Dental Specialists
                        </div>
                      </div>
                    )}

                    {partner.acronym === "AACD" && (
                      <div className="flex items-center gap-2.5 text-[#2c221e] group-hover:text-primary transition-colors">
                        <div className="w-9 h-9 rounded-full bg-[#836a2c]/10 text-primary flex items-center justify-center">
                          <Award className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-left font-sans text-xs font-semibold leading-tight text-[#2c221e]">
                          AACD Fellow<br />
                          <span className="font-normal text-[11px] text-[#63554e]">Cosmetic Dentistry</span>
                        </div>
                      </div>
                    )}

                    {["DELTA", "CIGNA", "METLIFE"].includes(partner.acronym || "") && (
                      <div className="text-center text-[#2c221e] group-hover:text-primary transition-colors">
                        <span className="font-sans text-lg font-bold tracking-wider block text-[#2c221e]">
                          {partner.name}
                        </span>
                        <span className="font-sans text-[10px] uppercase tracking-widest text-primary font-semibold">
                          Direct Billing Partner
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-[11px] text-[#786a63] font-sans">
                    {partner.subtitle}
                  </p>
                </div>
              ))}
            </div>

            {/* Left & Right Nav Arrows */}
            <button
              onClick={() =>
                setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-[#786a63] hover:text-[#2c221e] rounded-full hover:bg-surface-container transition-colors"
              aria-label="Previous partner companies"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveSlide((prev) => (prev + 1) % totalSlides)}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-[#786a63] hover:text-[#2c221e] rounded-full hover:bg-surface-container transition-colors"
              aria-label="Next partner companies"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Carousel Pagination Indicator Dots (Matches ••••• in reference) */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={cn(
                  "transition-all duration-300 rounded-full",
                  activeSlide === idx
                    ? "w-7 h-1.5 bg-[#836a2c]"
                    : "w-1.5 h-1.5 bg-[#d0c5b4] hover:bg-[#836a2c]/60"
                )}
                aria-label={`Go to carousel slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
