"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { practiceData } from "@/content/practice-data";
import { ServicePillarItem } from "@/lib/types/practice";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ServicesTopPillarsProps {
  onSelectCategory?: (categoryKey: "general" | "cosmetic" | "surgical") => void;
  onBookClick?: (treatmentName?: string) => void;
}

/**
 * ServicesTopPillars
 * Matches Screenshot 1 ("Comprehensive care, one convenient location"):
 * 3 Department Pillars (General, Cosmetic, Surgical) with arched-top photography,
 * authoritative serif titles, benefit copy, ochre-outlined CTA buttons,
 * and high-definition tactile alabaster marble backgrounds.
 */
export function ServicesTopPillars({
  onSelectCategory,
  onBookClick,
}: ServicesTopPillarsProps) {
  const config = practiceData.servicesSuite;
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Header reveal
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // 3 Pillar cards staggered entrance
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll("[data-service-pillar]");
        gsap.fromTo(
          cards,
          { y: 55, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.95,
            stagger: 0.16,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );

        // Images gentle settling
        const images = gridRef.current.querySelectorAll("[data-service-image]");
        gsap.fromTo(
          images,
          { scale: 1.08, opacity: 0.8 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            stagger: 0.16,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (!config) return null;

  return (
    <div ref={containerRef} className="w-full">
      {/* Section Header */}
      <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
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

      {/* 3 Pillars Grid with Tactile Alabaster Marble Texture */}
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {config.pillars.map((pillar: ServicePillarItem) => (
          <div
            key={pillar.id}
            data-service-pillar
            className="relative overflow-hidden flex flex-col justify-between group bg-[#fdfbf8] rounded-3xl p-5 sm:p-6 lg:p-7 border border-[#836a2c]/20 hover:border-[#836a2c]/50 hover:shadow-2xl transition-all duration-500 shadow-md"
          >
            {/* 1. Alabaster Marble Texture Layer */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-[0.35] mix-blend-multiply pointer-events-none group-hover:opacity-[0.45] transition-opacity duration-700"
              style={{ backgroundImage: `url('/marble-texture-3-1.jpg')` }}
            />

            {/* 2. Soft Ambient Linen Sheen */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/60 pointer-events-none" />

            {/* 3. Subtle Warm Ochre Glow on Hover */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#836a2c]/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

            {/* Arched Top Image Portal */}
            <div
              data-service-image
              className="relative z-10 w-full aspect-[4/3] rounded-t-[2.5rem] rounded-b-xl overflow-hidden bg-surface-container mb-6 shadow-sm border border-outline-variant/30 group-hover:border-primary/40 transition-colors"
            >
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
            <div className="relative z-10 flex-1 flex flex-col justify-between">
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
                  className="w-full sm:w-auto min-w-[200px] border border-[#836a2c]/80 text-[#201815] bg-white/60 backdrop-blur-xs hover:bg-[#836a2c] hover:border-[#836a2c] hover:text-[#fcf9f6] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] py-3.5 px-6 rounded-sm transition-all duration-300 shadow-xs hover:shadow-md active:scale-[0.98]"
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
