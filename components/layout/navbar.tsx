"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X, Phone, Calendar } from "lucide-react";
import { practiceData } from "@/content/practice-data";
import { cn } from "@/lib/utils/cn";

interface NavbarProps {
  onBookClick?: () => void;
  onCallClick?: () => void;
}

export function Navbar({ onBookClick, onCallClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#fdfbf8]/95 backdrop-blur-md shadow-xs border-b border-outline-variant/30 py-3.5"
          : "bg-transparent py-5 sm:py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex items-center justify-between">
        {/* Practice Logo */}
        <Link
          href="/"
          className="flex items-center group transition-transform duration-200 hover:scale-[1.01]"
        >
          <div className="relative h-11 sm:h-14 w-52 sm:w-64 flex items-center" suppressHydrationWarning>
            <Image
              src="/logo-main.png"
              alt={practiceData.name}
              fill
              priority
              className="object-contain object-left"
              sizes="(max-width: 640px) 210px, 260px"
              suppressHydrationWarning
            />
          </div>
        </Link>

        {/* Center / Desktop Navigation Links (Matches Reference Typography & Chevrons) */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-9">
          {practiceData.navigation.links.map((link) => {
            const hasDropdown = Boolean(link.hasDropdown && link.dropdownItems?.length);

            return (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => hasDropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1.5 font-sans text-[13px] font-medium tracking-[0.08em] uppercase transition-colors duration-150 py-2",
                    activeDropdown === link.label
                      ? "text-primary font-semibold"
                      : "text-[#2e2320] hover:text-primary"
                  )}
                >
                  <span>{link.label}</span>
                  {hasDropdown && (
                    <ChevronDown
                      className={cn(
                        "w-3 h-3 text-[#5e4f49] stroke-[2.2] transition-transform duration-200",
                        activeDropdown === link.label ? "rotate-180 text-primary" : ""
                      )}
                    />
                  )}
                </Link>

                {/* Dropdown Menu Panel */}
                {hasDropdown && activeDropdown === link.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 z-50">
                    <div className="bg-[#fdfbf8]/98 backdrop-blur-md rounded-xl p-3 border border-outline-variant/40 shadow-xl ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-150">
                      {link.dropdownItems?.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block px-3 py-2.5 rounded-lg hover:bg-surface-container-low transition-colors group"
                        >
                          <div className="text-xs font-semibold text-[#2e2320] group-hover:text-primary">
                            {item.label}
                          </div>
                          {item.description && (
                            <p className="text-[11px] text-[#6b5c56] mt-0.5 leading-snug">
                              {item.description}
                            </p>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right CTA Button (Matches Reference: Pill shape, warm camel/ochre color) */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={onBookClick}
            className="bg-[#c5a767] hover:bg-[#b49553] text-[#2c221e] font-sans font-medium text-[12px] tracking-[0.08em] uppercase px-7 py-2.5 rounded-full transition-all duration-200 shadow-xs hover:shadow hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            {practiceData.navigation.ctaText}
          </button>
        </div>

        {/* Mobile Menu & CTA */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={onBookClick}
            className="bg-[#c5a767] text-[#2c221e] font-sans font-medium text-[11px] tracking-wider uppercase px-4 py-2 rounded-full shadow-xs"
          >
            BOOK NOW
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#2e2320] hover:text-primary transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Out Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fdfbf8]/98 backdrop-blur-xl border-b border-outline-variant/40 px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-4">
            {practiceData.navigation.links.map((link) => (
              <div key={link.label} className="border-b border-outline-variant/20 pb-3">
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-sm font-semibold tracking-wider text-[#2e2320] hover:text-primary uppercase flex items-center justify-between"
                >
                  <span>{link.label}</span>
                </Link>
                {link.dropdownItems && (
                  <div className="mt-2 pl-3 space-y-2 border-l border-primary/20">
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-xs text-[#5e4f49] hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick?.();
                }}
                className="w-full bg-[#c5a767] hover:bg-[#b49553] text-[#2c221e] font-medium text-xs tracking-widest uppercase py-3 rounded-full flex items-center justify-center gap-2 shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK APPOINTMENT</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onCallClick?.();
                }}
                className="w-full border border-[#4d4639]/30 text-[#2e2320] font-medium text-xs tracking-widest uppercase py-3 rounded-full flex items-center justify-center gap-2 hover:bg-surface-container"
              >
                <Phone className="w-4 h-4" />
                <span>CALL CLINIC ({practiceData.officePhone})</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
