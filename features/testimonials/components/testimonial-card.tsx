"use client";

import Image from "next/image";
import { Star, ShieldCheck, Quote } from "lucide-react";
import { PatientTestimonial } from "@/lib/types/practice";

interface TestimonialCardProps {
  testimonial: PatientTestimonial;
  index: number;
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <div
      data-testimonial-card
      className="group relative w-full rounded-2xl sm:rounded-3xl border border-[#836a2c]/30 bg-[#fdfbf9] p-6 sm:p-8 lg:p-10 pl-16 sm:pl-24 md:pl-28 lg:pl-32 shadow-[0_14px_40px_-12px_rgba(45,33,29,0.12)] hover:shadow-[0_24px_55px_-12px_rgba(45,33,29,0.22)] hover:border-[#c4a96a]/85 transition-all duration-300 ease-out"
    >
      {/* 100% Solid Opaque Backing to prevent any see-through */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl bg-[#fdfbf9]" aria-hidden="true" />

      {/* Tactile Alabaster Marble Plate with Filter */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden opacity-35 mix-blend-multiply"
        style={{
          backgroundImage: `url('/images/textures/marble-texture-3-1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "contrast(1.1) brightness(1.02)",
        }}
        aria-hidden="true"
      />

      {/* Warm Linen Sheen Overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/95 via-[#fdfbf8]/85 to-[#f6f1e8]/90"
        aria-hidden="true"
      />

      {/* Subtle Top Gold Accent Line */}
      <div
        className="pointer-events-none absolute inset-x-8 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#c4a96a]/60 to-transparent"
        aria-hidden="true"
      />

      {/* Horizontally Popping Patient Portrait */}
      {testimonial.photoUrl && (
        <div
          data-testimonial-avatar
          className="absolute -left-6 sm:-left-10 md:-left-12 lg:-left-14 top-1/2 -translate-y-1/2 z-20 transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-x-1"
        >
          <div className="relative w-20 h-24 sm:w-26 sm:h-32 md:w-28 md:h-34 lg:w-32 lg:h-38 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white shadow-[0_16px_36px_-8px_rgba(45,33,29,0.3)] ring-4 ring-[#fcf9f6]/95 bg-surface-container">
            <Image
              src={testimonial.photoUrl}
              alt={`${testimonial.author} patient portrait`}
              fill
              sizes="(max-width: 640px) 80px, (max-width: 1024px) 112px, 128px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-black/10"
              aria-hidden="true"
            />
          </div>

          {/* Mini Verified Badge on Portrait */}
          <div
            className="absolute -bottom-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#836a2c] text-[#fcf9f6] border-2 border-white shadow-md flex items-center justify-center text-[10px] font-bold"
            title="Verified Patient Case"
          >
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#fcf9f6]" />
          </div>
        </div>
      )}

      {/* Card Content Interior */}
      <div className="relative z-10 flex flex-col justify-between space-y-4 sm:space-y-5">
        {/* Top Header Row: Gold Stars + Treatment Category Pill */}
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-1 sm:gap-1.5" aria-label={`${testimonial.rating} out of 5 stars`}>
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 sm:w-5 sm:h-5 fill-[#c4a96a] text-[#c4a96a] drop-shadow-xs"
              />
            ))}
            <span className="ml-1.5 text-xs font-semibold text-[#836a2c] font-mono tracking-tight">
              5.0
            </span>
          </div>

          {testimonial.treatmentCategory && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#836a2c]/10 px-3 py-0.5 text-[11px] sm:text-xs font-medium text-[#836a2c] border border-[#836a2c]/25">
              {testimonial.treatmentCategory}
            </span>
          )}
        </div>

        {/* Testimonial Quote */}
        <div className="relative">
          <Quote
            className="pointer-events-none absolute -top-2 -left-3 w-8 h-8 text-[#836a2c]/12 -scale-x-100"
            aria-hidden="true"
          />
          <p className="font-sans text-sm sm:text-base lg:text-[16.5px] text-[#2c221e] leading-relaxed italic relative z-10 font-normal">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
        </div>

        {/* Patient Signature Attribution (Clean without awkward badge) */}
        <div className="pt-3 border-t border-[#836a2c]/18 flex items-center justify-between">
          <div>
            <h4 className="font-serif text-lg sm:text-xl font-medium text-[#201815] tracking-tight">
              {testimonial.author}
            </h4>
            <p className="font-sans text-xs sm:text-[13px] text-[#836a2c] font-medium mt-0.5">
              {testimonial.treatment} • <span className="text-[#6b5c56]">{testimonial.location}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
