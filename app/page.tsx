"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { BookingModal } from "@/components/booking/booking-modal";
import { CallModal } from "@/components/booking/call-modal";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [callOpen, setCallOpen] = useState(false);

  return (
    <main className="min-h-screen bg-surface text-on-surface overflow-x-hidden flex flex-col justify-between">
      {/* Pinned Top Navigation Bar */}
      <Navbar
        onBookClick={() => setBookingOpen(true)}
        onCallClick={() => setCallOpen(true)}
      />

      {/* Hero Section matching reference */}
      <HeroSection
        onBookVisit={() => setBookingOpen(true)}
        onCallNow={() => setCallOpen(true)}
      />

      {/* Interactive Booking Drawer / Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />

      {/* Interactive Call Concierge Modal */}
      <CallModal
        isOpen={callOpen}
        onClose={() => setCallOpen(false)}
      />
    </main>
  );
}
