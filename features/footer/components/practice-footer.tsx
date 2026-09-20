"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { practiceData } from "@/content/practice-data";

interface PracticeFooterProps {
  onBookClick?: (treatment?: string) => void;
}

export function PracticeFooter({ onBookClick }: PracticeFooterProps) {
  const footer = practiceData.footer || {
    tagline:
      "Thoughtful, modern dentistry designed around patient comfort, clinical precision, and enduring natural aesthetics.",
    accreditations: [
      "American Dental Association (ADA)",
      "American Academy of Cosmetic Dentistry (AACD)",
      "San Francisco Top Dentists 2026",
      "Invisalign® Diamond Plus Provider",
    ],
    quickLinks: [
      { label: "Our Story & Philosophy", href: "#our-story" },
      { label: "The NovaSmile Experience", href: "#experience" },
      { label: "Doctors & Specialists", href: "#doctors" },
      { label: "Patient Transformations", href: "#transformations" },
      { label: "Studio Comfort Amenities", href: "#comforts" },
      { label: "Verified Reviews", href: "#reviews" },
      { label: "Frequently Asked Questions", href: "#faq" },
    ],
    treatmentLinks: [
      { label: "Handcrafted Porcelain Veneers", href: "#services" },
      { label: "Full Arch Dental Implants", href: "#services" },
      { label: "Invisalign® Clear Aligners", href: "#services" },
      { label: "Biomimetic Ceramic Crowns", href: "#services" },
      { label: "Zero-Anxiety Comfort Sedation", href: "#services" },
      { label: "24/7 Same-Day Emergency Relief", href: "#emergency" },
    ],
    socialLinks: [
      { platform: "x", href: "https://x.com", label: "X (Twitter)" },
      { platform: "linkedin", href: "https://linkedin.com", label: "LinkedIn" },
      { platform: "instagram", href: "https://instagram.com", label: "Instagram" },
      { platform: "facebook", href: "https://facebook.com", label: "Facebook" },
    ],
    copyright: "© 2026 NovaSmile Dental Care. All rights reserved.",
    legalLinks: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "ADA Accessibility Statement", href: "#accessibility" },
    ],
    watermarkText: "NOVASMILE",
  };

  return (
    <footer className="relative w-full bg-[#18110e] text-[#fcf9f6] overflow-hidden pt-36 sm:pt-44 md:pt-52 lg:pt-60 pb-8 sm:pb-12 border-t border-[#836a2c]/20">
      {/* Tactile Roasted Espresso Marble & Lighting Depth */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/download.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.14] mix-blend-luminosity filter contrast-125"
        />
        {/* Soft Radial Ambient Gold Glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-radial-gradient from-[#836a2c]/20 via-[#836a2c]/5 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-radial-gradient from-[#836a2c]/10 via-transparent to-transparent blur-2xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Navigation Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[#836a2c]/20">
          {/* Column 1: Brand & Clinical Accreditations */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Practice Main Logo with White / Neutral Filter */}
              <Link href="/" className="inline-block mb-6 group">
                <div className="relative h-11 sm:h-13 w-48 sm:w-56 flex items-center">
                  <Image
                    src="/logo-main.png"
                    alt={practiceData.name}
                    fill
                    sizes="(max-width: 640px) 200px, 240px"
                    className="object-contain object-left filter brightness-0 invert opacity-95 transition-opacity duration-200 group-hover:opacity-100"
                  />
                </div>
              </Link>

              {/* Tagline / Philosophy */}
              <p className="text-sm text-[#d4cbbf] leading-relaxed max-w-sm font-light">
                {footer.tagline}
              </p>
            </div>
          </div>


          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-sans text-xs uppercase tracking-[0.22em] text-[#e2c37b] font-semibold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3.5 text-sm">
              {footer.quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-[#c7bcac] hover:text-[#fcf9f6] hover:translate-x-1 transition-all duration-200 inline-block font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => onBookClick?.()}
                  className="text-[#e2c37b] hover:text-white font-medium inline-flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Book Appointment</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Signature Treatments */}
          <div className="lg:col-span-3">
            <h3 className="font-sans text-xs uppercase tracking-[0.22em] text-[#e2c37b] font-semibold mb-6">
              Clinical Services
            </h3>
            <ul className="space-y-3.5 text-sm">
              {footer.treatmentLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    type="button"
                    onClick={() => onBookClick?.(link.label)}
                    className="text-[#c7bcac] hover:text-[#fcf9f6] text-left hover:translate-x-1 transition-all duration-200 inline-block font-light cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Studio Locations & Concierge Hours */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h3 className="font-sans text-xs uppercase tracking-[0.22em] text-[#e2c37b] font-semibold mb-4">
                Studio Locations
              </h3>
              <div className="space-y-3.5 text-sm text-[#c7bcac]">
                {practiceData.locations.map((loc, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#e2c37b] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#fcf9f6] font-medium block text-xs tracking-wide">
                        {loc.city} Studio
                      </strong>
                      <span className="text-xs text-[#a89e92] leading-relaxed block">
                        {loc.address}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <h4 className="font-sans text-xs uppercase tracking-[0.22em] text-[#e2c37b] font-semibold mb-3">
                Concierge Hours
              </h4>
              <div className="space-y-2 text-xs text-[#a89e92]">
                {practiceData.hours.map((h, idx) => (
                  <div key={idx} className="flex items-center justify-between border-b border-[#836a2c]/15 pb-1.5">
                    <span className="text-[#c7bcac]">{h.dayRange}</span>
                    <span className="text-[#fcf9f6] font-medium">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => onBookClick?.("General Consultation")}
              className="w-full py-3 px-5 rounded-full bg-[#836a2c] hover:bg-[#9c8037] text-[#faf7f2] text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>Reserve Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Legal Notice, Copyright & Social Channels Row (Matching Reference 2) */}
        <div className="pt-8 pb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright & Legal Links */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs text-[#a89e92] text-center sm:text-left">
            <span>{footer.copyright}</span>
            <div className="flex items-center gap-4 text-[#c7bcac]">
              {footer.legalLinks.map((legal, idx) => (
                <Link
                  key={idx}
                  href={legal.href}
                  className="hover:text-[#fcf9f6] underline-offset-4 hover:underline transition-colors"
                >
                  {legal.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Channels (Circular Badges Matching Reference 2) */}
          <div className="flex items-center gap-3">
            {footer.socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-[#251b17] hover:bg-[#836a2c] text-[#fcf9f6] border border-[#836a2c]/30 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md cursor-pointer group"
              >
                {social.platform === "x" && (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                )}
                {social.platform === "linkedin" && (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.88 0-1.6.72-1.6 1.6s.72 1.6 1.6 1.6 1.6-.72 1.6-1.6-.72-1.6-1.6-1.6z" />
                  </svg>
                )}
                {social.platform === "instagram" && (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                )}
                {social.platform === "facebook" && (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Monumental Architectural Brand Watermark (Matching Reference 2 LOTUSFI style) */}
        <div className="relative w-full select-none pointer-events-none overflow-hidden pt-4 sm:pt-6">
          <div className="text-center font-serif font-black uppercase text-[#836a2c]/[0.07] text-[13.5vw] leading-[0.8] tracking-[0.22em] sm:tracking-[0.28em] whitespace-nowrap">
            {footer.watermarkText || "NOVASMILE"}
          </div>
        </div>
      </div>
    </footer>
  );
}
