"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Calendar } from "lucide-react";
import gsap from "gsap";
import { practiceData } from "@/content/practice-data";
import { ServiceRowProcedure } from "@/lib/types/practice";

interface ServicesRowAccordionProps {
  onBookTreatment?: (treatmentName?: string) => void;
}

/**
 * Individual Procedure Row with Smooth GSAP Transformation
 */
function ProcedureRowItem({
  proc,
  isHovered,
  onMouseEnter,
  onClick,
  onBookTreatment,
}: {
  proc: ServiceRowProcedure;
  isHovered: boolean;
  onMouseEnter: () => void;
  onClick: () => void;
  onBookTreatment?: (name: string) => void;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const imagePortalRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const leftSvgRef = useRef<SVGSVGElement>(null);
  const rightSvgRef = useRef<SVGSVGElement>(null);
  const statusArrowRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!rowRef.current) return;

    const ctx = gsap.context(() => {
      // Calculate target thumbnail portal width based on viewport
      const isDesktop = window.innerWidth >= 1024;
      const isTablet = window.innerWidth >= 640;
      const targetWidth = isDesktop ? 260 : isTablet ? 200 : 150;

      if (isHovered) {
        // 1. Smoothly expand thumbnail portal width and push title words apart
        gsap.to(imagePortalRef.current, {
          width: targetWidth,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
          overwrite: "auto",
        });

        // 2. Cinematic zoom-in to normal scale for the photo
        gsap.fromTo(
          imageInnerRef.current,
          { scale: 1.3 },
          {
            scale: 1,
            duration: 0.75,
            ease: "power2.out",
            overwrite: "auto",
          }
        );

        // 3. Pop-in the signature halo dot atop the image
        gsap.fromTo(
          haloRef.current,
          { scale: 0, opacity: 0, y: 12 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: 0.12,
            ease: "back.out(2)",
            overwrite: "auto",
          }
        );

        // 4. Smoothly slide down and reveal details drawer
        gsap.to(detailsRef.current, {
          height: "auto",
          opacity: 1,
          y: 0,
          duration: 0.55,
          delay: 0.08,
          ease: "power3.out",
          overwrite: "auto",
        });

        // 5. Illuminate Left & Right wireframes with smooth translation
        gsap.to(leftSvgRef.current, {
          opacity: 0.35,
          x: 0,
          scale: 1,
          duration: 0.65,
          ease: "power3.out",
          overwrite: "auto",
        });

        gsap.to(rightSvgRef.current, {
          opacity: 0.35,
          x: 0,
          scale: 1,
          duration: 0.65,
          ease: "power3.out",
          overwrite: "auto",
        });

        // 6. Rotate status arrow
        gsap.to(statusArrowRef.current, {
          x: 3,
          y: -3,
          color: "#c4a96a",
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto",
        });
      } else {
        // Collapse state with smooth recoil
        gsap.to(imagePortalRef.current, {
          width: 0,
          opacity: 0,
          scale: 0.7,
          duration: 0.45,
          ease: "power3.inOut",
          overwrite: "auto",
        });

        gsap.to(haloRef.current, {
          scale: 0,
          opacity: 0,
          duration: 0.2,
          ease: "power2.in",
          overwrite: "auto",
        });

        gsap.to(detailsRef.current, {
          height: 0,
          opacity: 0,
          y: 10,
          duration: 0.35,
          ease: "power3.inOut",
          overwrite: "auto",
        });

        gsap.to(leftSvgRef.current, {
          opacity: 0,
          x: -20,
          scale: 0.95,
          duration: 0.4,
          ease: "power2.in",
          overwrite: "auto",
        });

        gsap.to(rightSvgRef.current, {
          opacity: 0,
          x: 20,
          scale: 0.95,
          duration: 0.4,
          ease: "power2.in",
          overwrite: "auto",
        });

        gsap.to(statusArrowRef.current, {
          x: 0,
          y: 0,
          color: "rgba(255, 255, 255, 0.4)",
          duration: 0.3,
          ease: "power2.inOut",
          overwrite: "auto",
        });
      }
    }, rowRef);

    return () => ctx.revert();
  }, [isHovered]);

  return (
    <div
      ref={rowRef}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      className={`relative py-8 sm:py-11 lg:py-14 px-3 sm:px-8 lg:px-12 transition-colors duration-500 ease-out cursor-pointer group overflow-hidden ${
        isHovered ? "bg-white/[0.035]" : "hover:bg-white/[0.015]"
      }`}
    >
      {/* Left Architectural Wireframe Pattern (illuminated when active, matching Reference Image 3) */}
      <svg
        ref={leftSvgRef}
        className="absolute left-0 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 w-48 sm:w-64 lg:w-80 h-28 sm:h-36 pointer-events-none"
        style={{ opacity: 0, transform: "scale(0.95) translateX(-20px)" }}
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

      {/* Right Architectural Criss-Cross Diamond Pattern (illuminated when active, matching Reference Image 3) */}
      <svg
        ref={rightSvgRef}
        className="absolute right-0 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 w-48 sm:w-64 lg:w-80 h-28 sm:h-36 pointer-events-none"
        style={{ opacity: 0, transform: "scale(0.95) translateX(20px)" }}
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

      {/* Top Row Status Bar: Index on left, /See more on right */}
      <div className="relative z-10 flex items-center justify-between text-xs mb-3 sm:mb-5 pointer-events-none">
        <span className="font-mono text-[11px] sm:text-xs text-[#c4a96a] tracking-widest font-medium">
          {proc.indexNumber}
        </span>

        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] text-white/50 group-hover:text-white transition-colors flex items-center gap-1">
            <span>{isHovered ? "/Active" : "/See more"}</span>
            <span ref={statusArrowRef} className="inline-block">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </span>
        </div>
      </div>

      {/* Main Headline Area: Title Words + Growing Thumbnail Portal */}
      <div className="relative z-10 text-center">
        <div className="flex items-center justify-center flex-wrap sm:flex-nowrap gap-x-2">
          {/* Title Word 1 */}
          <span
            className={`font-serif text-3xl sm:text-5xl lg:text-6xl tracking-tight transition-colors duration-300 whitespace-nowrap ${
              isHovered ? "text-white font-medium" : "text-white/70 font-light group-hover:text-white"
            }`}
          >
            {proc.titlePart1}
          </span>

          {/* Smooth Growing Thumbnail Portal Container */}
          <div
            ref={imagePortalRef}
            className="overflow-hidden inline-flex items-center justify-center align-middle"
            style={{ width: 0, opacity: 0 }}
          >
            <div className="relative mx-3 sm:mx-5 my-2 sm:my-0 flex-shrink-0">
              {/* Signature Circular Halo with Center Dot (from Reference Image 3) */}
              <div
                ref={haloRef}
                className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/50 flex items-center justify-center bg-black/70 backdrop-blur-xs shadow-lg z-20 pointer-events-none"
                style={{ transform: "scale(0)", opacity: 0 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>

              {/* High-Resolution Thumbnail Frame */}
              <div className="relative h-16 sm:h-20 lg:h-24 w-32 sm:w-44 lg:w-56 rounded-xl sm:rounded-2xl overflow-hidden border border-[#836a2c]/60 shadow-[0_14px_40px_rgba(0,0,0,0.7)] bg-black/40">
                <div ref={imageInnerRef} className="relative w-full h-full">
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
            </div>
          </div>

          {/* Title Word 2 */}
          <span
            className={`font-serif text-3xl sm:text-5xl lg:text-6xl tracking-tight transition-colors duration-300 whitespace-nowrap ${
              isHovered ? "text-white font-medium" : "text-white/70 font-light group-hover:text-white"
            }`}
          >
            {proc.titlePart2}
          </span>
        </div>

        {/* Details Drawer (Subtitle + Action CTAs) */}
        <div
          ref={detailsRef}
          className="overflow-hidden"
          style={{ height: 0, opacity: 0 }}
        >
          {/* Clean Subtitle matching Reference 3 */}
          <p className="font-sans text-xs sm:text-sm text-[#d0c5b4]/85 tracking-wide mt-4 text-center">
            San Francisco & Mountain View Studios | {proc.category} | Lifetime Clinical Care
          </p>

          {/* Dual Action CTAs matching Reference Image 3 */}
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
      </div>
    </div>
  );
}

/**
 * ServicesRowAccordion
 * Full-screen width luxury architectural editorial list powered by GSAP:
 * - Edge-to-edge full width
 * - Clean display headline (badge removed)
 * - Initial state completely collapsed until hovered
 * - Buttery GSAP interpolation: words slide apart, photo expands cinematically from 0 to full width
 * - Floating circle dot halo atop thumbnail portal
 * - Left/Right geometric wireframe vector patterns
 */
export function ServicesRowAccordion({
  onBookTreatment,
}: ServicesRowAccordionProps) {
  const config = practiceData.servicesSuite;
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

      {/* Section Header */}
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
        {config.procedures.map((proc: ServiceRowProcedure) => (
          <ProcedureRowItem
            key={proc.id}
            proc={proc}
            isHovered={hoveredId === proc.id}
            onMouseEnter={() => setHoveredId(proc.id)}
            onClick={() => setHoveredId(hoveredId === proc.id ? null : proc.id)}
            onBookTreatment={onBookTreatment}
          />
        ))}
      </div>
    </div>
  );
}
