"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/features/hero";
import { TrustMetricsSection } from "@/features/trust-metrics";
import { SmileHookSection } from "@/features/smile-hook";
import {
  DentistPromiseCard,
  DentistSpotlightCarousel,
  DentistTeamGrid,
} from "@/features/dentists";
import {
  ExperiencePillarsSection,
  TreatmentShowcaseSection,
} from "@/features/treatments";
import { ServicesSection } from "@/features/services";
import { BookingModal, CallModal } from "@/features/booking";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [callOpen, setCallOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string | undefined>(undefined);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleBookVisit = (treatmentName?: string) => {
    setSelectedTreatment(treatmentName);
    setBookingOpen(true);
  };

  if (!mounted) {
    return <main className="min-h-screen bg-surface text-on-surface" />;
  }

  return (
    <main className="min-h-screen bg-surface text-on-surface overflow-x-hidden flex flex-col">
      {/* Pinned Top Navigation Bar */}
      <Navbar
        onBookClick={() => handleBookVisit()}
        onCallClick={() => setCallOpen(true)}
      />

      {/* Hero Section matching reference (hero-section-reference.png) */}
      <HeroSection
        onBookVisit={() => handleBookVisit()}
        onCallNow={() => setCallOpen(true)}
      />

      {/* Clinical Milestone Stat Cards + Accredited Company/Partner Carousel (emergency-bar-section.png) */}
      <TrustMetricsSection />

      {/* 1. Smile Specialty Hook Section matching reference (hook-reference.png) */}
      <SmileHookSection />

      {/* 2. Dentistry Done Right Practice Promise Card (Our-dentist-top.png) */}
      <DentistPromiseCard />

      {/* 3. Lead Clinician Spotlight Carousel (our-top-dentist.png) */}
      <DentistSpotlightCarousel />

      {/* 4. Specialist Team Interactive Grid with Marble Reveal (our-all-dentist.png) */}
      <DentistTeamGrid />

      {/* 5. The Experience - 3 Value Pillars (feature-section-top.png) */}
      <ExperiencePillarsSection />

      {/* 6. Your Beautiful Smile - 3 Staggered Treatment Rows (features-section.png) */}
      <TreatmentShowcaseSection
        onBookClick={() => handleBookVisit()}
        onSelectCategory={() => handleBookVisit()}
      />

      {/* 7. Comprehensive Care Pillars & Signature Architectural Procedures Suite */}
      <ServicesSection
        onBookTreatment={handleBookVisit}
        onSelectCategory={(categoryKey) =>
          handleBookVisit(
            `${categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)} Dentistry Consultation`
          )
        }
      />

      {/* Interactive Appointment Reservation Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialTreatment={selectedTreatment}
      />

      {/* Interactive Immediate Call & 24/7 Triage Modal */}
      <CallModal
        isOpen={callOpen}
        onClose={() => setCallOpen(false)}
      />
    </main>
  );
}
