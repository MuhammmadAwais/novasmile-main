"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Star, Plus, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { practiceData } from "@/content/practice-data";
import { TestimonialCard } from "./testimonial-card";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TestimonialsSectionProps {
  onExploreReviews?: () => void;
}

export function TestimonialsSection({ onExploreReviews }: TestimonialsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const config = practiceData.testimonialsConfig;

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll("[data-testimonial-card]");
      cards?.forEach((card) => {
        const avatar = card.querySelector("[data-testimonial-avatar]");

        gsap.fromTo(
          card,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          }
        );

        if (avatar) {
          gsap.fromTo(
            avatar,
            { opacity: 0, x: -20, scale: 0.95 },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.75,
              delay: 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                once: true,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (!config) return null;

  const marqueeSentence = "SCHEDULE YOUR APPOINTMENT WITH OUR EXPERT TEAM TODAY";
  const marqueeItems = Array(4).fill(marqueeSentence);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative w-full bg-surface-container-low border-t border-outline-variant/30 overflow-x-clip"
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

      {/* Ambient Radial Golden Glow */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#c4a96a]/15 via-transparent to-transparent blur-3xl"
        aria-hidden="true"
      />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 sm:pt-20 pb-20 sm:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Sticky Left Column (Pinned while Right Reviews Stream Scrolls) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-6 z-20">
            {/* Two-Tone Headline with Ochre Highlight Badge matching Reference */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] text-[#201815] font-normal leading-[1.08] tracking-tight">
              <span className="block uppercase tracking-tight">{config.headlinePart1}</span>
              <span className="inline-flex items-center gap-2.5 sm:gap-3 mt-1.5 sm:mt-2.5 flex-wrap">
                <span className="inline-block bg-[#836a2c] text-[#fcf9f6] px-3.5 sm:px-5 py-1 sm:py-1.5 rounded-lg font-serif italic text-3xl sm:text-4xl lg:text-[44px] shadow-sm tracking-normal">
                  {config.highlightBadge}
                </span>
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#836a2c] animate-pulse inline-block" />
              </span>
            </h2>

            {/* Narrative Subtitle */}
            <p className="font-sans text-sm sm:text-base text-[#4d4639] leading-relaxed max-w-md">
              {config.subtitle}
            </p>

            {/* Verified Google Trust Box with Tactile Marble Plate (matching Image 3) */}
            <div className="relative overflow-hidden rounded-2xl border border-[#836a2c]/30 bg-[#fdfbf9] p-5 max-w-sm shadow-[0_12px_32px_-10px_rgba(45,33,29,0.12)]">
              {/* Marble texture overlay inside trust card */}
              <div
                className="pointer-events-none absolute inset-0 opacity-30 mix-blend-multiply rounded-2xl"
                style={{
                  backgroundImage: `url('/images/textures/marble-texture-3-1.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "contrast(1.1) brightness(1.02)",
                }}
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/95 via-[#fdfbf8]/85 to-[#f6f1e8]/90"
                aria-hidden="true"
              />

              <div className="relative z-10 flex items-center gap-3.5">
                <div className="relative w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-[#836a2c]/30 shadow-xs overflow-hidden shrink-0">
                  <Image
                    src="/images/icons/top-rated-icon.png"
                    alt="Top rated clinic seal"
                    width={38}
                    height={38}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#c4a96a] text-[#c4a96a]" />
                    ))}
                    <span className="text-xs font-bold text-[#201815] ml-1 font-mono">
                      {config.googleRating.toFixed(1)}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-[#201815] mt-0.5">
                    {config.googleReviewCount}
                  </p>
                  <p className="text-[11px] text-[#6b5c56] font-medium">
                    {config.googleBadgeText}
                  </p>
                </div>
              </div>
            </div>

            {/* Outlined Action CTA */}
            <div>
              <button
                onClick={onExploreReviews}
                className="group inline-flex items-center gap-2.5 rounded-md border border-[#836a2c] bg-white/70 px-6 sm:px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#201815] backdrop-blur-xs transition-all duration-300 hover:bg-[#836a2c] hover:text-[#fcf9f6] hover:shadow-md active:scale-95 cursor-pointer shadow-xs"
              >
                <span>{config.ctaText}</span>
                <Plus className="w-4 h-4 text-[#836a2c] group-hover:text-[#fcf9f6] transition-transform duration-300 group-hover:rotate-90" />
              </button>
            </div>
          </div>

          {/* Right Column: Vertical Stream with Horizontally Popping Portraits */}
          <div className="lg:col-span-7 pl-6 sm:pl-12 md:pl-16 lg:pl-14 space-y-10 sm:space-y-14 lg:space-y-16">
            {config.reviews.map((testimonial, idx) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={idx}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Moving Sentence Marquee Carousel Ribbon (matching Image 4 with our theme & touch) */}
      <div
        onClick={onExploreReviews}
        className="w-full bg-[#190f0c] text-[#fcf9f6] py-4 sm:py-5 border-y border-[#836a2c]/40 overflow-hidden relative select-none cursor-pointer group shadow-lg"
        title="Click to schedule your appointment"
      >
        {/* Subtle Marble Texture in Marquee */}
        <div
          className="pointer-events-none absolute inset-0 opacity-10 mix-blend-screen"
          style={{
            backgroundImage: `url('/images/textures/marble-texture-3-1.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />

        {/* Continuous Marquee Track */}
        <div className="animate-marquee-smooth flex items-center">
          {/* Track 1 */}
          <div className="flex items-center gap-8 sm:gap-12 shrink-0 pr-8 sm:pr-12">
            {marqueeItems.map((text, idx) => (
              <div key={`track1-${idx}`} className="flex items-center gap-8 sm:gap-12 shrink-0">
                <span className="font-serif tracking-[0.06em] text-lg sm:text-2xl md:text-[26px] text-[#fcf9f6] uppercase font-normal group-hover:text-[#fedf9b] transition-colors duration-300">
                  {text}
                </span>
                <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#836a2c] text-[#fcf9f6] shadow-sm group-hover:bg-[#c4a96a] group-hover:text-[#190f0c] transition-colors duration-300 shrink-0">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-45" />
                </span>
              </div>
            ))}
          </div>

          {/* Track 2 (Seamless loop duplicate) */}
          <div className="flex items-center gap-8 sm:gap-12 shrink-0 pr-8 sm:pr-12" aria-hidden="true">
            {marqueeItems.map((text, idx) => (
              <div key={`track2-${idx}`} className="flex items-center gap-8 sm:gap-12 shrink-0">
                <span className="font-serif tracking-[0.06em] text-lg sm:text-2xl md:text-[26px] text-[#fcf9f6] uppercase font-normal group-hover:text-[#fedf9b] transition-colors duration-300">
                  {text}
                </span>
                <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#836a2c] text-[#fcf9f6] shadow-sm group-hover:bg-[#c4a96a] group-hover:text-[#190f0c] transition-colors duration-300 shrink-0">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-45" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
