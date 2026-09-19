"use client";

import React from "react";
import { X, Phone, Clock, MapPin, AlertCircle } from "lucide-react";
import { practiceData } from "@/content/practice-data";

export interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CallModal({ isOpen, onClose }: CallModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-2xl border border-outline-variant/40">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#5e4f49] hover:text-[#2c221e] rounded-full hover:bg-surface-container transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#836a2c]">
            Immediate Assistance
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#2c221e] mt-1">
            Connect With Our Concierge
          </h2>
          <p className="font-sans text-xs text-[#5e4f49] mt-1">
            We are available to answer any questions or accommodate emergency care.
          </p>
        </div>

        <div className="space-y-4">
          {/* Office Phone */}
          <a
            href={`tel:${practiceData.officePhone.replace(/\D/g, "")}`}
            className="flex items-center justify-between p-4 rounded-xl border border-outline-variant/50 hover:border-primary bg-surface-container-low hover:bg-secondary-container/20 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-[#2c221e] uppercase tracking-wider">
                  Main Studio Concierge
                </div>
                <div className="text-sm font-medium text-primary">
                  {practiceData.officePhone}
                </div>
              </div>
            </div>
            <span className="text-xs font-semibold text-primary uppercase tracking-wider group-hover:translate-x-0.5 transition-transform">
              Call
            </span>
          </a>

          {/* Emergency Hotline */}
          <a
            href={`tel:${practiceData.emergencyHotline.replace(/\D/g, "")}`}
            className="flex items-center justify-between p-4 rounded-xl border border-error/30 hover:border-error bg-error-container/20 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-error/10 text-error flex items-center justify-center">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-[#93000a] uppercase tracking-wider">
                  24/7 Dental Emergency
                </div>
                <div className="text-sm font-medium text-error">
                  {practiceData.emergencyHotline}
                </div>
              </div>
            </div>
            <span className="text-xs font-semibold text-error uppercase tracking-wider group-hover:translate-x-0.5 transition-transform">
              Dial
            </span>
          </a>

          {/* Studio Locations */}
          <div className="pt-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#2c221e] mb-2 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span>Studio Locations</span>
            </div>
            <div className="space-y-2">
              {practiceData.locations.map((loc) => (
                <div
                  key={loc.city}
                  className="p-3 rounded-lg bg-surface-container-low text-xs border border-outline-variant/20"
                >
                  <span className="font-semibold text-[#2c221e]">{loc.city}:</span>{" "}
                  <span className="text-[#5e4f49]">{loc.address}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Operating Hours */}
          <div className="pt-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#2c221e] mb-1 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-primary" />
              <span>Hours</span>
            </div>
            <div className="text-xs text-[#5e4f49]">
              Monday – Thursday: 7:30 AM – 6:00 PM • Friday: 8:00 AM – 4:00 PM
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider border border-outline-variant text-[#2c221e] hover:bg-surface-container transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
