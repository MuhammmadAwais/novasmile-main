"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { practiceData } from "@/content/practice-data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function SmileHookSection() {
  const config = practiceData.smileHook;
  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined" || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Left editorial text stagger reveal
      if (textRef.current) {
        const textElements = textRef.current.children;
        gsap.fromTo(
          textElements,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 82%",
              once: true,
            },
          }
        );
      }

      // Right 3-image gallery staggered entrance
      if (galleryRef.current) {
        const galleryCards = galleryRef.current.querySelectorAll("[data-hook-card]");
        gsap.fromTo(
          galleryCards,
          { y: 65, opacity: 0, scale: 0.94 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.95,
            stagger: 0.16,
            ease: "power3.out",
            scrollTrigger: {
              trigger: galleryRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );

        // Subtle parallax displacement on the 3 columns as user scrolls
        const col1 = galleryRef.current.querySelector("[data-hook-col='1']");
        const col2 = galleryRef.current.querySelector("[data-hook-col='2']");
        const col3 = galleryRef.current.querySelector("[data-hook-col='3']");

        if (col1 && col2 && col3) {
          gsap.to(col1, {
            y: -25,
            ease: "none",
            scrollTrigger: {
              trigger: galleryRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          });
          gsap.to(col2, {
            y: 20,
            ease: "none",
            scrollTrigger: {
              trigger: galleryRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          });
          gsap.to(col3, {
            y: -15,
            ease: "none",
            scrollTrigger: {
              trigger: galleryRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (!config) return null;

  return (
    <section
      ref={sectionRef}
      id="our-specialty"
      className="relative w-full py-20 md:py-28 bg-surface-container-lowest text-on-surface overflow-hidden border-b border-outline-variant/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Philosophy & Authority */}
          <div ref={textRef} className="lg:col-span-6 flex flex-col justify-center">
            {/* Top Hairline Accent */}
            <div className="w-full h-px bg-outline-variant/40 mb-8" />

            {/* Display Headline */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-on-surface leading-[1.08] mb-4">
              <span className="block">{config.headlinePart1}</span>
              <span className="block text-primary font-normal">{config.headlinePart2}</span>
            </h2>

            {/* Subtitle */}
            <p className="font-sans text-lg sm:text-xl font-medium text-on-surface mb-6">
              {config.subtitle}
            </p>

            {/* Mid Hairline Divider */}
            <div className="w-full h-px bg-outline-variant/40 mb-6" />

            {/* Clinical Philosophy Paragraphs */}
            <div className="space-y-4 font-sans text-sm sm:text-base text-on-surface-variant leading-relaxed mb-6">
              {config.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Bold Geographical Scope Callout */}
            <p className="font-sans text-sm sm:text-base font-semibold text-on-surface/90 leading-snug">
              {config.highlightBadge}
            </p>
          </div>

          {/* Right Column: 3-Column Staggered Image Gallery */}
          {/* Mounted guard: prevents browser-extension DOM mutations causing hydration mismatch */}
          <div ref={galleryRef} className="lg:col-span-6">
            {mounted ? (
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 items-center">

                {/* Image 1: Shade Matching (Offset Downward) */}
                <div data-hook-col="1" className="relative flex flex-col pt-8 sm:pt-12 group">
                  <div
                    data-hook-card
                    className="relative aspect-[9/18] sm:aspect-[9/19] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-surface-container shadow-md transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1"
                  >
                    <Image
                      src={config.galleryImages[0]?.src || "/your-smile-1.webp"}
                      alt={config.galleryImages[0]?.alt || "Dental veneer shade matching"}
                      fill
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 33vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Image 2: Doctor Consultation (Offset Centered) */}
                <div data-hook-col="2" className="relative flex flex-col -translate-y-2 sm:-translate-y-4 group">
                  <div
                    data-hook-card
                    className="relative aspect-[9/18] sm:aspect-[9/19] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-surface-container shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1"
                  >
                    <Image
                      src={config.galleryImages[1]?.src || "/your-smile-2.webp"}
                      alt={config.galleryImages[1]?.alt || "Specialist patient consultation"}
                      fill
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 33vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Image 3: In-House Dental Lab Artistry (Offset Top) */}
                <div data-hook-col="3" className="relative flex flex-col pt-4 sm:pt-6 group">
                  <div
                    data-hook-card
                    className="relative aspect-[9/18] sm:aspect-[9/19] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-surface-container shadow-md transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1"
                  >
                    <Image
                      src={config.galleryImages[2]?.src || "/your-smile-3.webp"}
                      alt={config.galleryImages[2]?.alt || "In-house dental lab precision craft"}
                      fill
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 33vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

              </div>
            ) : (
              /* SSR placeholder — same height as the gallery, invisible to users */
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 items-center" aria-hidden>
                {[0, 1, 2].map((i) => (
                  <div key={i} className="relative aspect-[9/18] sm:aspect-[9/19] w-full rounded-xl sm:rounded-2xl bg-surface-container" />
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
