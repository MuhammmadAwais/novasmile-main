"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { practiceData } from "@/content/practice-data";

interface TreatmentShowcaseSectionProps {
  className?: string;
  onSelectCategory?: (categoryKey: string) => void;
  onBookClick?: () => void;
}

export function TreatmentShowcaseSection({
  className = "",
  onSelectCategory,
  onBookClick,
}: TreatmentShowcaseSectionProps) {
  const data = practiceData.treatmentShowcase;
  const sectionRef = useRef<HTMLElement>(null);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header smooth reveal
      gsap.fromTo(
        "#treatment-showcase-heading",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#treatment-showcase-heading",
            start: "top 85%",
            once: true,
          },
        }
      );

      // Staggered reveal for each treatment row
      rowsRef.current.forEach((row, i) => {
        if (!row) return;

        const textCol = row.querySelector(".treatment-text-col");
        const imgCol = row.querySelector(".treatment-img-col");

        if (textCol) {
          gsap.fromTo(
            textCol,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.85,
              delay: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: row,
                start: "top 80%",
                once: true,
              },
            }
          );
        }

        if (imgCol) {
          gsap.fromTo(
            imgCol,
            { scale: 1.04, opacity: 0.8 },
            {
              scale: 1,
              opacity: 1,
              duration: 1.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: row,
                start: "top 80%",
                once: true,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (!data) return null;

  const handleCtaClick = (categoryKey: string) => {
    if (onSelectCategory) {
      onSelectCategory(categoryKey);
    } else if (onBookClick) {
      onBookClick();
    }
  };

  return (
    <section
      ref={sectionRef}
      aria-labelledby="treatment-showcase-heading"
      className={`relative w-full overflow-hidden bg-[#f4f1ec] text-on-surface ${className}`}
    >
      {/* 1. Global High-Definition Marble Canvas Layer */}
      {data.marbleBg && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src={data.marbleBg}
            alt="Tactile white alabaster marble background texture"
            fill
            priority
            className="object-cover opacity-75 mix-blend-multiply contrast-110 brightness-100"
          />
          {/* Ambient warm tone wash */}
          <div className="absolute inset-0 bg-[#fbf9f5]/25" />
        </div>
      )}

      {/* 2. Top Header: "your beautiful smile" */}
      <div className="relative z-10 w-full pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 px-6 sm:px-12 text-center">
        <h2
          id="treatment-showcase-heading"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] xl:text-[76px] font-serif tracking-tight text-on-surface inline-block"
        >
          <span className="font-normal text-on-surface/80 mr-3 lowercase">
            {data.headlinePart1}
          </span>
          <span className="font-medium text-on-surface lowercase">
            {data.headlinePart2}
          </span>
        </h2>
      </div>

      {/* 3. Three Full-Bleed Asymmetrical 7:5 / 5:7 Rows (Image ~58% width, Marble ~42% width) */}
      <div className="relative z-10 w-full flex flex-col">
        {data.items.map((item, index) => {
          const isImageRight = item.imagePosition === "right";

          return (
            <div
              key={item.id}
              ref={(el) => {
                rowsRef.current[index] = el;
              }}
              className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch"
            >
              {isImageRight ? (
                <>
                  {/* Marble Text Column: Left Side (~41.7% width, col-span-5) */}
                  <div className="treatment-text-col relative w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[620px] xl:min-h-[680px] flex flex-col justify-center items-center lg:items-end text-center lg:text-right px-6 sm:px-10 lg:pl-8 lg:pr-8 xl:pl-12 xl:pr-10 py-12 lg:py-16 z-10 col-span-12 lg:col-span-5 order-1">
                    <div className="w-full max-w-lg xl:max-w-xl flex flex-col items-center lg:items-end">
                      {/* Two-Tone Title in Site's EB Garamond Serif */}
                      <h3 className="mb-3 leading-none">
                        <span className="block text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-serif font-medium tracking-tight text-on-surface lowercase">
                          {item.titlePart1}
                        </span>
                        <span className="block text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-serif font-normal tracking-tight text-on-surface/80 lowercase mt-1.5 sm:mt-2">
                          {item.titlePart2}
                        </span>
                      </h3>

                      {/* Description Paragraph */}
                      <p className="text-sm sm:text-base text-on-surface-variant font-sans leading-relaxed my-5 lg:my-6 text-center lg:text-right">
                        {item.description}
                      </p>

                      {/* Warm Ochre Gold CTA Button */}
                      <button
                        type="button"
                        onClick={() => handleCtaClick(item.categoryKey)}
                        className="group inline-flex items-center justify-center px-7 sm:px-8 py-3.5 rounded-sm font-sans font-medium text-xs sm:text-sm tracking-wide lowercase bg-primary text-on-primary hover:bg-primary-container shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                      >
                        <span>{item.ctaText}</span>
                      </button>
                    </div>
                  </div>

                  {/* Image Column: Right Side (~58.3% width, col-span-7) with Editorial Tactile Filters */}
                  <div className="treatment-img-col relative w-full min-h-[400px] sm:min-h-[480px] lg:min-h-[620px] xl:min-h-[680px] overflow-hidden group col-span-12 lg:col-span-7 order-2 bg-[#2c221e]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover object-center filter contrast-[1.06] brightness-[0.97] saturate-[0.93] transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Fine Tactile Analog Film Grain / Stone Texture Plate */}
                    <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.20] mix-blend-overlay">
                      <Image
                        src="/stone-background-1400.jpg"
                        alt=""
                        fill
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        className="object-cover"
                      />
                    </div>

                    {/* Editorial Hospitality Warm Lens Tint & Edge Vignette */}
                    <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#201815]/35 via-transparent to-[#201815]/15 mix-blend-multiply" />
                    <div className="absolute inset-0 z-10 pointer-events-none bg-[#836a2c]/[0.05] mix-blend-color" />
                  </div>
                </>
              ) : (
                <>
                  {/* Image Column: Left Side (~58.3% width, col-span-7) with Editorial Tactile Filters */}
                  <div className="treatment-img-col relative w-full min-h-[400px] sm:min-h-[480px] lg:min-h-[620px] xl:min-h-[680px] overflow-hidden group col-span-12 lg:col-span-7 order-2 lg:order-1 bg-[#2c221e]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover object-center filter contrast-[1.06] brightness-[0.97] saturate-[0.93] transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Fine Tactile Analog Film Grain / Stone Texture Plate */}
                    <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.20] mix-blend-overlay">
                      <Image
                        src="/stone-background-1400.jpg"
                        alt=""
                        fill
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        className="object-cover"
                      />
                    </div>

                    {/* Editorial Hospitality Warm Lens Tint & Edge Vignette */}
                    <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#201815]/35 via-transparent to-[#201815]/15 mix-blend-multiply" />
                    <div className="absolute inset-0 z-10 pointer-events-none bg-[#836a2c]/[0.05] mix-blend-color" />
                  </div>

                  {/* Marble Text Column: Right Side (~41.7% width, col-span-5) */}
                  <div className="treatment-text-col relative w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[620px] xl:min-h-[680px] flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 sm:px-10 lg:pr-8 lg:pl-8 xl:pr-12 xl:pl-10 py-12 lg:py-16 z-10 col-span-12 lg:col-span-5 order-1 lg:order-2">
                    <div className="w-full max-w-lg xl:max-w-xl flex flex-col items-center lg:items-start">
                      {/* Two-Tone Title in Site's EB Garamond Serif */}
                      <h3 className="mb-3 leading-none">
                        <span className="block text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-serif font-medium tracking-tight text-on-surface lowercase">
                          {item.titlePart1}
                        </span>
                        <span className="block text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-serif font-normal tracking-tight text-on-surface/80 lowercase mt-1.5 sm:mt-2">
                          {item.titlePart2}
                        </span>
                      </h3>

                      {/* Description Paragraph */}
                      <p className="text-sm sm:text-base text-on-surface-variant font-sans leading-relaxed my-5 lg:my-6 text-center lg:text-left">
                        {item.description}
                      </p>

                      {/* Warm Ochre Gold CTA Button */}
                      <button
                        type="button"
                        onClick={() => handleCtaClick(item.categoryKey)}
                        className="group inline-flex items-center justify-center px-7 sm:px-8 py-3.5 rounded-sm font-sans font-medium text-xs sm:text-sm tracking-wide lowercase bg-primary text-on-primary hover:bg-primary-container shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                      >
                        <span>{item.ctaText}</span>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

