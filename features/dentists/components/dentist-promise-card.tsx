"use client";

import React from "react";
import Image from "next/image";
import { Check, ShieldCheck } from "lucide-react";
import { practiceData } from "@/content/practice-data";

export function DentistPromiseCard() {
  const promise = practiceData.dentistPromise;

  if (!promise) return null;

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 bg-surface text-on-surface overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Textured Card Container */}
        <div className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#281d19]">
          
          {/* Filtered Custom Canvas Texture Layer */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-60 mix-blend-overlay"
            style={{
              backgroundImage: "url('/custom-graphic-blue.jpg')",
              filter: "sepia(1) saturate(1.6) hue-rotate(340deg) brightness(0.7) contrast(1.2)",
            }}
          />

          {/* Warm Roasted Espresso & Ochre Ambient Gradients */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#241915]/95 via-[#2e201b]/90 to-[#1e1411]/95" />
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

          {/* Inner Rounded Hairline Frame (matching reference) */}
          <div className="relative z-10 m-3.5 sm:m-6 md:m-8 rounded-[1.5rem] sm:rounded-[2rem] border border-white/20 p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Promise & Features */}
              <div className="lg:col-span-6 flex flex-col justify-center text-white">
                
                {/* Serif Title */}
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white mb-4 sm:mb-6">
                  {promise.headline}
                </h2>

                {/* Subtext */}
                <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed mb-6 sm:mb-8 font-light max-w-xl">
                  {promise.description}
                </p>

                {/* 3 Checkmark Feature Points */}
                <ul className="space-y-3.5 sm:space-y-4 mb-8 sm:mb-10 font-sans">
                  {promise.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3.5 text-white/95 text-base sm:text-lg">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary-light">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span className="font-medium tracking-wide">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Doctor Quotation Box */}
                <div className="relative border-l-2 border-primary pl-4 sm:pl-5 py-1">
                  <p className="font-serif italic text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed">
                    &ldquo;{promise.quote}&rdquo;
                  </p>
                </div>

              </div>

              {/* Right Column: Clinician Team Photo & Floating Guarantee Stamp */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-surface-container aspect-[4/3] sm:aspect-[16/11]">
                  <Image
                    src={promise.image || "/our-dentist-top-img.jpg"}
                    alt="Novasmile Care Lead Dentists"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Lifetime Warranty Circular Seal Badge */}
                <div className="absolute -bottom-6 -right-3 sm:-bottom-8 sm:-right-5 md:-bottom-10 md:-right-6 w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full bg-surface-container-lowest text-on-surface shadow-2xl p-2.5 sm:p-3 border-2 border-primary/40 flex flex-col items-center justify-center text-center transition-transform hover:scale-105 duration-300 z-20">
                  <div className="w-full h-full rounded-full border border-dashed border-primary/40 flex flex-col items-center justify-center p-2 sm:p-3">
                    <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-primary mb-1" />
                    <span className="font-sans text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-primary">
                      {promise.warrantySealText.title}
                    </span>
                    <span className="font-serif text-[8px] sm:text-[10px] text-on-surface-variant leading-tight mt-0.5 max-w-[120px]">
                      {promise.warrantySealText.description}
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
