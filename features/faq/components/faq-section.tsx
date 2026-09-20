"use client";

import React, { useState, useEffect, useRef } from "react";
import { practiceData } from "@/content/practice-data";
import { FaqItemCard } from "./faq-item";
import { MessageSquare, PhoneCall, Calendar } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FAQSectionProps {
  onBookClick?: (treatment?: string) => void;
  onCallClick?: () => void;
}

export function FAQSection({ onBookClick, onCallClick }: FAQSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const config = practiceData.faqConfig;
  const [openId, setOpenId] = useState<string | null>("faq-1");

  useEffect(() => {
    if (!itemsRef.current) return;

    const ctx = gsap.context(() => {
      const items = itemsRef.current?.querySelectorAll("[data-faq-item]");
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: itemsRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (!config) return null;

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative w-full py-20 sm:py-28 lg:py-36 bg-surface-container-low border-t border-outline-variant/30 overflow-x-clip"
    >
      {/* Tactile Stone Background Plate with Warm Linen Wash */}
      <div
        className="pointer-events-none absolute inset-0 opacity-18 mix-blend-multiply"
        style={{
          backgroundImage: `url('/stone-background-1400.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />

      {/* Gentle Radial Amber Ambience */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#c4a96a]/15 via-transparent to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header matching Reference Image */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-[#201815] font-normal tracking-tight leading-[1.1]">
            <span className="block uppercase">{config.headlinePart1}</span>
            <span className="flex items-center justify-center gap-3 sm:gap-4 mt-2 sm:mt-3 flex-wrap">
              <span className="uppercase">{config.headlinePart2}</span>
              <span className="inline-block bg-[#836a2c] text-[#fcf9f6] px-4 sm:px-6 py-1 sm:py-1.5 rounded-lg font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-[50px] shadow-sm tracking-normal">
                {config.highlightBadge}
              </span>
            </span>
          </h2>

          {config.subtitle && (
            <p className="font-sans text-sm sm:text-base text-[#4d4639] max-w-xl mx-auto mt-4 sm:mt-5 leading-relaxed">
              {config.subtitle}
            </p>
          )}
        </div>

        {/* Accordion Questions List */}
        <div ref={itemsRef} className="mt-12 sm:mt-16 space-y-4 sm:space-y-5">
          {config.items.map((item) => (
            <FaqItemCard
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
              onBookTreatment={onBookClick}
            />
          ))}
        </div>

        {/* Concierge Help Footnote */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-[#836a2c]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#836a2c]/15 text-[#836a2c] flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif text-base sm:text-lg font-medium text-[#201815]">
                Still have a question about your visit?
              </p>
              <p className="font-sans text-xs text-[#6b5c56]">
                Our dedicated clinical concierge is here to walk you through every detail.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {onCallClick && (
              <button
                type="button"
                onClick={onCallClick}
                className="inline-flex items-center gap-2 rounded-md border border-[#836a2c] bg-white/70 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#201815] hover:bg-[#836a2c] hover:text-[#fcf9f6] transition-all cursor-pointer shadow-xs"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Studio</span>
              </button>
            )}

            {onBookClick && (
              <button
                type="button"
                onClick={() => onBookClick("FAQ Consultation")}
                className="inline-flex items-center gap-2 rounded-md bg-[#836a2c] px-4.5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#fcf9f6] hover:bg-[#9c8037] transition-all cursor-pointer shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Visit</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
