"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { TrustMetricsSection } from "@/components/sections/social-proof/trust-metrics-section";
import { BookingModal } from "@/components/booking/booking-modal";
import { CallModal } from "@/components/booking/call-modal";

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
