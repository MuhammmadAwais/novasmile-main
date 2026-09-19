"use client";

import React, { useState } from "react";
import { Phone, Clock, AlertCircle, X, ChevronRight, Sparkles } from "lucide-react";
import { practiceData } from "@/content/practice-data";
import { cn } from "@/lib/utils/cn";

interface AnnouncementBarProps {
  onEmergencyClick?: () => void;
  onCallClick?: () => void;
}

export function AnnouncementBar({ onEmergencyClick, onCallClick }: AnnouncementBarProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <aside
      aria-label="Emergency dental care announcement"
      className="relative z-50 bg-[#f5f1eb] border-b border-outline-variant/30 text-[#2c221e] text-[11px] sm:text-xs py-2 px-4 transition-all duration-300 select-none"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-4">
        {/* Left: Emergency Alert / Notice */}
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#e8decf] text-[#836a2c] font-semibold text-[10px] sm:text-[11px] uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#836a2c] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#836a2c]" />
            </span>
            {practiceData.announcement.badgeText}
          </span>

          <span className="font-sans font-medium text-[#3a2e29] hidden sm:inline">
            {practiceData.announcement.emergencyNotice}
          </span>
          <span className="font-sans font-medium text-[#3a2e29] sm:hidden">
            Same-day emergency slots open today
          </span>
        </div>

        {/* Center/Right: Hours & Quick Action */}
        <div className="flex items-center gap-3 sm:gap-6 ml-auto sm:ml-0">
          {/* Operating hours indicator */}
          <div className="hidden md:flex items-center gap-1.5 text-[#63554e]">
            <Clock className="w-3.5 h-3.5 text-[#836a2c]" />
            <span>Open Today: 7:30 AM – 6:00 PM</span>
          </div>

          {/* 1-Tap Emergency Hotline dialer */}
          <button
            onClick={onCallClick}
            className="flex items-center gap-1 text-[#3a2e29] hover:text-primary font-medium transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#836a2c]" />
            <span className="hidden lg:inline">24/7 Triage:</span>
            <span className="font-semibold underline decoration-[#836a2c]/40 underline-offset-2">
              {practiceData.emergencyHotline}
            </span>
          </button>

          {/* Reserve Emergency Slot CTA button */}
          <button
            onClick={onEmergencyClick}
            className="inline-flex items-center gap-1 bg-[#3a2e29] hover:bg-[#201815] text-[#fcf9f6] px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase transition-all shadow-xs hover:shadow"
          >
            <span>{practiceData.announcement.actionText}</span>
            <ChevronRight className="w-3 h-3" />
          </button>

          {/* Dismiss button */}
          <button
            onClick={() => setDismissed(true)}
            className="p-1 text-[#807068] hover:text-[#2c221e] rounded-md transition-colors"
            aria-label="Dismiss announcement banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
