"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { practiceData } from "@/content/practice-data";
import { StudioCarousel } from "./studio-carousel";
import { Check } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ModernComfortsSectionProps {
  onBookClick?: (reason?: string) => void;
}

export function ModernComfortsSection({ onBookClick }: ModernComfortsSectionProps) {
  const config = practiceData.modernComfortsConfig;
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const ornamentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Left narrative stagger
      if (leftColRef.current) {
        const elements = leftColRef.current.querySelectorAll(":scope > h2, :scope > p, :scope > div:not([data-ornament])");
        gsap.fromTo(
          elements,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: leftColRef.current,
              start: "top 82%",
              once: true,
            },
          }
        );
      }

      // Right carousel entrance
      if (rightColRef.current) {
        gsap.fromTo(
          rightColRef.current,
          { x: 40, opacity: 0, scale: 0.97 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: {
              trigger: rightColRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      // Corner geometric ornament
      if (ornamentRef.current) {
        gsap.fromTo(
          ornamentRef.current,
          { opacity: 0, scale: 0.85 },
          {
            opacity: 0.75,
            scale: 1,
            duration: 1,
            delay: 0.35,
            ease: "power2.out",
            scrollTrigger: {
              trigger: leftColRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (!config) return null;

  return (
    <section
      ref={sectionRef}
      id="comforts"
      className="relative w-full py-20 sm:py-28 lg:py-36 bg-surface-container-low border-t border-outline-variant/30 overflow-x-clip"
    >
      {/* Tactile Stone Background Plate with Warm Linen Wash */}
      <div
        className="pointer-events-none absolute inset-0 opacity-18 mix-blend-multiply"
        style={{
          backgroundImage: `url('/images/textures/stone-background-1400.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />

      {/* Gentle Radial Amber Ambience */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#c4a96a]/15 via-transparent to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Split Layout: Editorial Narrative on Left, Studio Carousel on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Narrative matching Reference */}
          <div ref={leftColRef} className="lg:col-span-5 relative space-y-6 sm:space-y-8 pb-14 sm:pb-16 lg:pb-20">
            {/* Editorial Headline directly matching Reference */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] text-[#201815] font-normal leading-[1.08] tracking-tight">
              {config.headline}
            </h2>

            {/* Narrative Body directly matching Reference */}
            <p className="font-sans text-sm sm:text-base text-[#4d4639] leading-relaxed max-w-lg">
              {config.description}
            </p>

            {/* Comfort Features Checkmarks */}
            <div className="space-y-3 pt-2">
              {config.comfortPillars.map((pillar, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#836a2c]/15 text-[#836a2c] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="font-sans text-xs sm:text-[13.5px] text-[#201815] font-medium">
                    {pillar}
                  </span>
                </div>
              ))}
            </div>

            {/* Geometric Luxury Gold Corner Ornament (matching reference image bottom-left) */}
            <div
              ref={ornamentRef}
              data-ornament
              className="absolute -bottom-2 -left-2 sm:-left-4 pointer-events-none select-none"
              aria-hidden="true"
            >
              <svg
                width="140"
                height="140"
                viewBox="0 0 140 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-75"
              >
                {/* Vertical Guide Lines */}
                <line x1="8" y1="0" x2="8" y2="120" stroke="#836a2c" strokeWidth="1.5" />
                <line x1="14" y1="30" x2="14" y2="120" stroke="#836a2c" strokeWidth="1" strokeOpacity="0.4" />

                {/* Horizontal Guide Lines */}
                <line x1="8" y1="120" x2="140" y2="120" stroke="#836a2c" strokeWidth="1.5" />
                <line x1="14" y1="126" x2="110" y2="126" stroke="#836a2c" strokeWidth="1" strokeOpacity="0.4" />

                {/* Corner Geometric Square Motif */}
                <rect
                  x="2"
                  y="114"
                  width="12"
                  height="12"
                  stroke="#836a2c"
                  strokeWidth="2"
                  fill="#fcf9f6"
                />
              </svg>
            </div>
          </div>

          {/* Right Column: Studio Space Carousel with 4 Image Assets */}
          <div ref={rightColRef} className="lg:col-span-7">
            <StudioCarousel slides={config.slides} />
          </div>
        </div>
      </div>
    </section>
  );
}
