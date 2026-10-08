"use client";

import React from "react";
import { ServicesTopPillars } from "./services-top-pillars";
import { ServicesRowAccordion } from "./services-row-accordion";

interface ServicesSectionProps {
  onBookTreatment?: (treatmentName?: string) => void;
  onSelectCategory?: (categoryKey: "general" | "cosmetic" | "surgical") => void;
}

/**
 * ServicesSection
 * Master Services Suite:
 * - Part 1: Top Department Pillars (General, Cosmetic, Surgical) in warm linen canvas
 * - Part 2: Full-screen width dark architectural procedure rows (edge-to-edge)
 */
export function ServicesSection({
  onBookTreatment,
  onSelectCategory,
}: ServicesSectionProps) {
  return (
    <section id="services-suite" className="relative w-full overflow-hidden">
      {/* 1. Top Department Pillars (Warm Linen, Max Width 7XL) */}
      <div className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#faf7f2] overflow-hidden">
        {/* Alabaster Marble Backdrop Texture */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.06] mix-blend-multiply pointer-events-none"
          style={{ backgroundImage: `url('/images/textures/marble-texture-3-1.jpg')` }}
        />

        {/* Decorative Warm Ochre Fog Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#836a2c]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#836a2c]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServicesTopPillars
            onSelectCategory={onSelectCategory}
            onBookClick={onBookTreatment}
          />
        </div>
      </div>

      {/* 2. Full-Screen Width Architectural Row Procedures (Edge to edge, dark roasted espresso) */}
      <ServicesRowAccordion onBookTreatment={onBookTreatment} />
    </section>
  );
}
