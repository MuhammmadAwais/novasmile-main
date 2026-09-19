"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/features/hero";
import { TrustMetricsSection } from "@/features/trust-metrics";
import { SmileHookSection } from "@/features/smile-hook";
import {
  DentistPromiseCard,
  DentistSpotlightCarousel,
  DentistTeamGrid,
} from "@/features/dentists";
import { BookingModal, CallModal } from "@/features/booking";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [callOpen, setCallOpen] = useState(false);

  return (
    <main className="min-h-screen bg-surface text-on-surface overflow-x-hidden flex flex-col">
      {/* Pinned Top Navigation Bar */}
      <Navbar
        onBookClick={() => setBookingOpen(true)}
        onCallClick={() => setCallOpen(true)}
      />

      {/* Hero Section matching reference (hero-section-reference.png) */}
      <HeroSection
        onBookVisit={() => setBookingOpen(true)}
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

      {/* Interactive Appointment Reservation Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />

      {/* Interactive Immediate Call & 24/7 Triage Modal */}
      <CallModal
        isOpen={callOpen}
        onClose={() => setCallOpen(false)}
      />
    </main>
  );
}
