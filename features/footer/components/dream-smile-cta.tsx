"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { practiceData } from "@/content/practice-data";

interface DreamSmileCtaProps {
  onBookClick?: (treatment?: string) => void;
}

export function DreamSmileCta({ onBookClick }: DreamSmileCtaProps) {
  const cta = practiceData.ctaSection || {
    scriptAccent: "Ready",
    title: "for your dream smile?",
    reassuranceText:
      "Are you interested in dental Implants or cosmetic and reconstructive dentistry? Previous work failing? Have you been told your case is too complex? When your smile requires more than routine care, a dental specialist's perspective can make all the difference.",
    primaryCtaText: "Book Your Smile Consultation",
    backgroundImage: "/cta-behind-bg.webp",
    personImage: "/cta-person-img.webp",
  };

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !cardRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 88%",
            once: true,
          },
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, []);


  return (
    <section className="relative w-full overflow-visible z-20">
      {/* Clinic Room Background Container */}
      <div className="relative w-full pt-16 sm:pt-20 md:pt-28 pb-32 sm:pb-36 md:pb-44 lg:pb-52 overflow-hidden">
        {/* Background Image of Clinic */}
        <div className="absolute inset-0 z-0">
          <Image
            src={cta.backgroundImage}
            alt="NovaSmile Modern Clinic Sanctuary"
            fill
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.98] contrast-[1.02]"
            priority
          />
          {/* Tactile Stone & Ambient Tint Layer */}
          <div className="absolute inset-0 bg-[#fbf9f5]/55 backdrop-blur-[2px]" />
          <Image
            src="/stone-background-1400.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-15 mix-blend-multiply pointer-events-none"
          />
          {/* Radial Warm Glow & Top/Bottom Edge Blends */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#faf7f2]/30 to-[#faf7f2]/90 pointer-events-none" />
          <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#faf7f2] to-transparent pointer-events-none" />
        </div>

        {/* Floating Overlapping CTA Card */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mb-28 sm:-mb-32 md:-mb-40 lg:-mb-48">
          <div
            ref={cardRef}
            className="relative rounded-[28px] sm:rounded-[36px] md:rounded-[42px] overflow-hidden bg-[#faf7f2]/95 backdrop-blur-xl border border-[#836a2c]/25 shadow-[0_30px_70px_-15px_rgba(28,20,17,0.22)] transition-all duration-500 hover:shadow-[0_35px_80px_-12px_rgba(131,106,44,0.26)]"
          >
            {/* Tactile Alabaster Marble Texture Filter */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-25 mix-blend-multiply">
              <Image
                src="/marble-texture-3-1.jpg"
                alt=""
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
              />
            </div>

            {/* Subtle Gold Corner Accent Light */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-radial-gradient from-[#836a2c]/10 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Left Column: Reassurance & Conversion Controls */}
              <div className="lg:col-span-7 flex flex-col justify-between p-7 sm:p-10 md:p-14 lg:p-16">
                <div>
                  {/* Headline Pairing: Script 'Ready' + Serif Title */}
                  <div className="mb-4 sm:mb-5">
                    <span className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-primary font-light tracking-wide block leading-[0.95] drop-shadow-sm select-none">
                      {cta.scriptAccent}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#231a16] font-normal tracking-tight leading-[1.15] mt-1 sm:mt-2">
                      {cta.title}
                    </h2>
                  </div>

                  {/* Narrative Specialist Copy */}
                  <p className="text-on-surface-variant text-sm sm:text-base md:text-[15px] leading-relaxed max-w-xl font-normal text-[#4d4639]">
                    {cta.reassuranceText}
                  </p>
                </div>

                {/* Interactive CTA Controls */}
                <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#836a2c]/15 flex items-center">
                  <button
                    type="button"
                    onClick={() => onBookClick?.("Comprehensive Smile Consultation")}
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#231a16] text-[#faf7f2] hover:bg-primary font-sans font-medium text-sm sm:text-base transition-all duration-300 shadow-[0_8px_20px_-4px_rgba(35,26,22,0.35)] hover:shadow-[0_12px_28px_-4px_rgba(131,106,44,0.4)] hover:scale-[1.02] cursor-pointer group active:scale-[0.98]"
                  >
                    <span>{cta.primaryCtaText}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#e2c37b] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>


              {/* Right Column: Natural Smiling Patient Portrait */}
              <div className="lg:col-span-5 relative min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] w-full overflow-hidden bg-[#e5e0d8]/30">
                <Image
                  src={cta.personImage}
                  alt="NovaSmile Dream Smile Patient"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-[center_15%] filter contrast-[1.03] brightness-[1.01] transition-transform duration-700 hover:scale-105"
                />

                {/* Subtle Inner Gradient for Contrast Transition */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
