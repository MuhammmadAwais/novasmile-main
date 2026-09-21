"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { practiceData } from "@/content/practice-data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function DentistSpotlightCarousel() {
  const spotlightList = practiceData.dentistSpotlight;
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Main card elevation and entrance
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { y: 45, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // Text elements stagger
      if (textRef.current) {
        const textElements = textRef.current.children;
        gsap.fromTo(
          textElements,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // Photo frame reveal
      if (photoRef.current) {
        gsap.fromTo(
          photoRef.current,
          { scale: 1.07, opacity: 0.7 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (!spotlightList || spotlightList.length === 0) return null;

  const current = spotlightList[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? spotlightList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === spotlightList.length - 1 ? 0 : prev + 1));
  };

  return (
    <section ref={sectionRef} className="relative w-full py-12 sm:py-16 md:py-20 bg-surface text-on-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Framed Card (matching our-top-dentist.png) */}
        <div
          ref={cardRef}
          className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] border border-outline-variant/60 bg-surface-container-lowest overflow-hidden shadow-lg"
        >
          
          {/* Inner Top Hairline Divider */}
          <div className="w-full h-px bg-outline-variant/40 mt-6 sm:mt-8 mx-auto" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch p-6 sm:p-10 lg:p-12 pt-4 sm:pt-6">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div ref={textRef}>
                {/* Index Pill Badge */}
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-outline-variant text-on-surface-variant font-mono text-xs mb-6 sm:mb-8">
                  {current.indexNumber || `0${currentIndex + 1}`}
                </div>

                {/* Name */}
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-on-surface mb-1">
                  {current.name}
                </h3>

                {/* Role / Title in Serif Italic */}
                <p className="font-serif italic text-lg sm:text-xl text-on-surface-variant mb-6">
                  {current.role}
                </p>

                {/* Bio Paragraph */}
                <p className="font-sans text-sm sm:text-base text-on-surface-variant/90 leading-relaxed max-w-lg mb-8 font-light">
                  {current.bio}
                </p>
              </div>

              {/* Bottom Actions Row: CTA, Star Seal, and Arrow Nav Controls */}
              <div className="flex flex-wrap items-center justify-between gap-6 pt-4 border-t border-outline-variant/30">
                
                {/* Pill CTA */}
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("specialist-team");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-7 py-3 rounded-full bg-primary text-white font-sans text-sm font-semibold tracking-wide shadow-sm hover:bg-primary-dark hover:shadow-md transition-all duration-300"
                >
                  {current.ctaText || "About Us"}
                </button>

                {/* Right side group: Circular Star Seal + Prev/Next Controls */}
                <div className="flex items-center gap-4 sm:gap-6">
                  
                  {/* Rotating Circular Stamp / Star Icon */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                    <Image
                      src={current.badgeIcon || "/top-rated-icon.png"}
                      alt={current.badgeText || "Rated 5-Stars"}
                      fill
                      className="object-contain animate-spin-slow opacity-85 hover:opacity-100 transition-opacity"
                    />
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous clinician"
                      className="w-10 h-10 rounded-lg border border-outline-variant/80 flex items-center justify-center text-on-surface hover:bg-surface-container hover:border-primary transition-all duration-200"
                    >
                      <ChevronLeft className="w-5 h-5 stroke-[1.75]" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next clinician"
                      className="w-10 h-10 rounded-lg border border-outline-variant/80 flex items-center justify-center text-on-surface hover:bg-surface-container hover:border-primary transition-all duration-200"
                    >
                      <ChevronRight className="w-5 h-5 stroke-[1.75]" />
                    </button>
                  </div>

                </div>

              </div>
            </div>

            {/* Right Photo Column */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div
                ref={photoRef}
                className="relative w-full aspect-[4/5] sm:aspect-[3/4] max-h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md bg-surface-container"
              >
                <Image
                  src={current.photoUrl || "/top-rated-dentist-img.jpg"}
                  alt={current.name}
                  fill
                  className="object-cover object-top transition-all duration-500 ease-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
