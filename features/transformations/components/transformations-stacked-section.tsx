"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { practiceData } from "@/content/practice-data";
import { TransformationCard } from "./transformation-card";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TransformationsStackedSectionProps {
  onBookTreatment?: (treatmentName: string) => void;
}

export function TransformationsStackedSection({
  onBookTreatment,
}: TransformationsStackedSectionProps) {
  const config = practiceData.transformations;
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!config || !cardsWrapperRef.current || !sectionRef.current) return;

    // Responsive GSAP MatchMedia:
    // Desktop: Cinematic pinned card deck stacking
    // Mobile/Tablet: Natural fluid vertical flow
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
      if (cards.length === 0) return;

      // Initial setup: Card 0 is active at y: 0; Cards 1..N are translated down
      gsap.set(cards[0], {
        yPercent: 0,
        opacity: 1,
        scale: 1,
        y: 0,
      });

      gsap.set(cards.slice(1), {
        yPercent: 115,
        opacity: 1,
        scale: 1,
        y: 0,
      });

      // Pinned scrub timeline across all cards
      // Generous scroll distance so transitions feel deliberate, luxurious, and unhurried
      const scrollDistancePerCard = window.innerHeight * 1.35;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${cards.length * scrollDistancePerCard}`,
          pin: true,
          pinSpacing: true,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Initial dwell on Card 1 so the user can comfortably view and interact with the first case
      tl.to({}, { duration: 0.8 });

      cards.forEach((card, i) => {
        if (i === 0) return;

        const label = `step-${i}`;

        // Step A: Subtly scale and shift previous cards up to reveal stacked deck tabs
        for (let prev = 0; prev < i; prev++) {
          const depthScale = 1 - (i - prev) * 0.035;
          const depthOpacity = Math.max(0.35, 1 - (i - prev) * 0.22);
          const depthY = (i - prev) * -16;

          tl.to(
            cards[prev],
            {
              scale: depthScale,
              opacity: depthOpacity,
              y: depthY,
              ease: "power1.inOut",
              duration: i === 1 ? 1.6 : 1.2,
            },
            label
          );
        }

        // Step B: Smoothly slide incoming card up into primary focus
        // Slower duration on the first transition so card 1 to card 2 feels calm and graceful
        tl.to(
          card,
          {
            yPercent: 0,
            opacity: 1,
            scale: 1,
            ease: "power2.out",
            duration: i === 1 ? 1.6 : 1.2,
          },
          label
        );

        // Brief dwell on each newly stacked card
        tl.to({}, { duration: 0.5 });
      });

      // Trailing dwell so the final card stays in full view before unpinning
      tl.to({}, { duration: 0.6 });

      // Refresh ScrollTrigger after layout settles
      ScrollTrigger.refresh();

      return () => {
        // matchMedia handles clean revert
      };
    });

    return () => {
      mm.revert();
    };
  }, [config]);

  if (!config) return null;

  return (
    <section
      ref={sectionRef}
      id="transformations"
      className="relative w-full bg-surface-container-low text-on-surface overflow-hidden py-12 sm:py-16 lg:py-20"
    >
      {/* TACTILE STONE TEXTURE CANVAS OVERLAY */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/stone-background-1400.jpg"
          alt="Tactile Stone Background Texture"
          fill
          sizes="100vw"
          className="object-cover opacity-[0.20] mix-blend-multiply pointer-events-none"
          priority={false}
        />
        {/* Warm Ambient Vignette & Hairline Borders */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface/85 via-transparent to-surface/90 pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent pointer-events-none" />
      </div>

      {/* SECTION CONTENT WRAPPER */}
      <div
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-8 sm:mb-10 lg:mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-on-surface tracking-tight leading-[1.14]">
            {config.headline}
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-on-surface-variant leading-relaxed font-sans font-light max-w-2xl">
            {config.subtitle}
          </p>
        </div>

        {/* STACKED CARDS STAGE */}
        <div
          ref={cardsWrapperRef}
          className="relative w-full max-w-6xl mx-auto lg:h-[500px] max-lg:space-y-6"
        >
          {config.cases.map((caseItem, idx) => (
            <div
              key={caseItem.id}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              className="lg:absolute lg:inset-0 lg:top-0 lg:left-0 w-full"
              style={{ zIndex: idx + 1 }}
            >
              <TransformationCard
                caseItem={caseItem}
                index={idx}
                totalCases={config.cases.length}
                onBookTreatment={onBookTreatment}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
