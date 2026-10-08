"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { practiceData } from "@/content/practice-data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function DentistTeamGrid() {
  const team = practiceData.specialistTeam;
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header smooth reveal
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // Doctor cards staggered entrance
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll("[data-doctor-card]");
        gsap.fromTo(
          cards,
          { y: 55, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.95,
            stagger: 0.14,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 82%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (!team || team.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      id="specialist-team"
      className="relative w-full py-16 sm:py-24 md:py-28 bg-surface-container-lowest text-on-surface border-t border-outline-variant/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="font-sans text-xs sm:text-sm font-bold uppercase tracking-widest text-primary mb-3">
            Our Specialist Clinicians
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-on-surface">
            Multidisciplinary Care, Harmoniously United
          </h2>
        </div>

        {/* 2x2 Interactive Team Grid matching our-all-dentist.png */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {team.map((member) => {
            const isHovered = activeCard === member.id;

            return (
              <div
                key={member.id}
                data-doctor-card
                className="group relative aspect-square sm:aspect-[4/4.2] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg bg-surface-container cursor-pointer select-none"
                onMouseEnter={() => setActiveCard(member.id)}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => setActiveCard(isHovered ? null : member.id)}
                tabIndex={0}
                onFocus={() => setActiveCard(member.id)}
                onBlur={() => setActiveCard(null)}
              >
                {/* Doctor Base Portrait */}
                <Image
                  src={member.photoUrl}
                  alt={member.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />

                {/* Subtle base gradient for mobile tap affordance */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none sm:hidden flex items-end p-5">
                  <div className="text-white">
                    <p className="font-serif text-xl font-normal">{member.name}</p>
                    <p className="text-xs text-white/80">{member.specialty}</p>
                  </div>
                </div>

                {/* Interactive Marble Texture Reveal Card (matching reference design) */}
                <div
                  className={`absolute inset-0 z-20 flex flex-col justify-center p-6 sm:p-8 lg:p-10 transition-all duration-500 ease-in-out ${
                    isHovered
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-98 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto"
                  }`}
                >
                  {/* Marble Texture Background Plate */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${member.marbleBg || "/images/textures/marble-texture-3-1.jpg"}')`,
                    }}
                  />
                  
                  {/* Roasted Espresso & Mineral Tint Overlay */}
                  <div className="absolute inset-0 bg-[#251b17]/88 backdrop-blur-[2px]" />

                  {/* Content Container */}
                  <div className="relative z-10 flex flex-col items-center text-center text-white h-full justify-center">
                    
                    {/* Doctor Name */}
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-white mb-1">
                      {member.name}
                    </h3>

                    {/* Credentials */}
                    <p className="font-sans text-xs sm:text-sm font-semibold tracking-wider text-primary-light uppercase mb-1">
                      {member.credentials}
                    </p>

                    {/* Specialty */}
                    <p className="font-serif italic text-xs sm:text-sm text-white/80 mb-5">
                      {member.specialty}
                    </p>

                    {/* Framed Bio Box (matching our-all-dentist.png frame) */}
                    <div className="border border-white/25 rounded-xl p-4 sm:p-5 bg-black/10">
                      <p className="font-sans text-xs sm:text-sm text-white/90 leading-relaxed font-light">
                        {member.bio}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
