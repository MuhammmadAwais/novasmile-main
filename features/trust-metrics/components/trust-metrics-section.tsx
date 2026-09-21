"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { practiceData } from "@/content/practice-data";
import { cn } from "@/lib/utils/cn";

export function TrustMetricsSection() {
  const { milestones, affiliations } = practiceData;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".trust-header",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".trust-header",
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".milestone-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".milestones-grid",
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Duplicate for seamless infinite marquee loop
  const marqueeItems = [...affiliations, ...affiliations];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 sm:py-24 select-none overflow-hidden bg-[#faf7f2] border-b border-outline-variant/30"
    >
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
        <div className="trust-header flex flex-col items-center text-center mb-10 sm:mb-14">
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

        {/* 2. Four Milestone Stat Cards */}
        <div className="milestones-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {milestones.map((item, idx) => (
            <div
              key={item.label}
              className={cn(
                "milestone-card relative overflow-hidden rounded-2xl p-6 sm:p-7 min-h-[160px] sm:min-h-[175px]",
                "bg-[#2d211d] text-white",
                "border border-[#836a2c]/25 hover:border-[#c4a96a]/60",
                "flex flex-col justify-between",
                "transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1",
                "group cursor-default"
              )}
            >

              {/* Marble Texture Plate inside card */}
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

              {/* Stat Main Value */}
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
      </div>

      {/* 3. Full-Width Professional Marquee with Gold Company Icons */}
      <div className="relative w-full pt-6 border-t border-outline-variant/30">
        <div className="text-center mb-6 px-4">
          <span className="font-sans text-[11px] font-semibold tracking-[0.2em] text-[#7a6a62] uppercase">
            Accredited Clinical Excellence & Technology Partners
          </span>
        </div>

        {/* Outer Full-Width Masked Container */}
        <div className="relative w-full overflow-hidden py-6 sm:py-8">
          {/* Left Side Gradient Fade Mask */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-52 md:w-64 bg-gradient-to-r from-[#faf7f2] via-[#faf7f2]/90 to-transparent z-20 pointer-events-none" />

          {/* Right Side Gradient Fade Mask */}
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-52 md:w-64 bg-gradient-to-l from-[#faf7f2] via-[#faf7f2]/90 to-transparent z-20 pointer-events-none" />

          {/* Infinite Moving Ribbon */}
          <div className="animate-marquee-smooth flex items-center gap-14 sm:gap-20 whitespace-nowrap">
            {marqueeItems.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex items-center gap-4 py-2.5 px-5 rounded-2xl hover:bg-[#f2ece3]/90 transition-all duration-200 group cursor-default shrink-0"
              >
                {/* Official Gold Company Logo Mark */}
                {partner.logoUrl ? (
                  <div className="flex items-center gap-3.5">
                    <div className="relative h-10 sm:h-12 w-24 sm:w-32 flex items-center justify-center">
                      <Image
                        src={partner.logoUrl}
                        alt={partner.name}
                        fill
                        className="object-contain filter brightness-95 group-hover:brightness-105 group-hover:scale-105 transition-all duration-200"
                        sizes="130px"
                      />
                    </div>
                    <div className="text-left font-sans">
                      <span className="block text-xs sm:text-[13px] font-semibold text-[#2c221e] group-hover:text-primary transition-colors">
                        {partner.name}
                      </span>
                      {partner.subtitle && (
                        <span className="block text-[10px] sm:text-[11px] text-[#7a6a62] font-normal">
                          {partner.subtitle}
                        </span>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="text-left text-[#2c221e] group-hover:text-primary transition-colors">
                    <span className="font-sans text-base sm:text-lg font-bold tracking-tight block">
                      {partner.name}
                    </span>
                    {partner.subtitle && (
                      <span className="font-sans text-[10px] uppercase tracking-widest text-primary font-semibold block">
                        {partner.subtitle}
                      </span>
                    )}
                  </div>
                )}

                {/* Subtle Dot Divider */}
                <div className="w-1.5 h-1.5 rounded-full bg-[#d0c5b4] ml-6 sm:ml-8 opacity-70" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
