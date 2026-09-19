"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, Sparkles, CheckCircle2, User, Phone, Mail } from "lucide-react";
import { practiceData } from "@/content/practice-data";

export interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedTreatment, setSelectedTreatment] = useState("Comprehensive New Patient Exam & Clean");
  const [selectedLocation, setSelectedLocation] = useState("San Francisco");
  const [selectedDate, setSelectedDate] = useState("Tomorrow");
  const [selectedSlot, setSelectedSlot] = useState("10:00 AM");
  const [anxietyCare, setAnxietyCare] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const treatments = [
    "Comprehensive New Patient Exam & Clean",
    "Cosmetic Smile Makeover Consultation",
    "Invisalign Clear Aligner Assessment",
    "Dental Implant Consultation",
    "Same-Day Emergency Relief",
  ];

  const timeSlots = ["9:00 AM", "10:00 AM", "11:30 AM", "2:00 PM", "3:30 PM", "4:45 PM"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-y-auto bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-2xl border border-outline-variant/40 my-8">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 text-[#5e4f49] hover:text-[#2c221e] rounded-full hover:bg-surface-container transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-[#e8e0d0] text-[#836a2c] rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-3xl text-[#2c221e] mb-3">Reservation Received</h3>
            <p className="font-sans text-sm text-[#4d4639] max-w-sm mx-auto mb-6 leading-relaxed">
              Thank you for trusting Novasmile Care. Our patient care concierge will confirm your appointment at our {selectedLocation} studio shortly.
            </p>
            <div className="bg-surface-container-low rounded-xl p-4 text-left mb-6 text-xs text-[#4d4639] space-y-1.5 border border-outline-variant/20">
              <div className="flex justify-between">
                <span className="font-medium text-[#2c221e]">Treatment:</span>
                <span>{selectedTreatment}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-[#2c221e]">Studio:</span>
                <span>{selectedLocation}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-[#2c221e]">Time:</span>
                <span>{selectedDate} at {selectedSlot}</span>
              </div>
              {anxietyCare && (
                <div className="pt-2 text-primary font-medium flex items-center gap-1.5 border-t border-outline-variant/20">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Anxiety-free gentle care protocol requested</span>
                </div>
              )}
            </div>
            <button
              onClick={handleReset}
              className="bg-[#3b2d29] hover:bg-[#201815] text-[#fcf9f6] text-xs font-semibold uppercase tracking-wider px-8 py-3 rounded-full transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#836a2c]">
                Reserve Your Visit
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2c221e] mt-1">
                Begin Your Smile Journey
              </h2>
              <p className="font-sans text-xs text-[#5e4f49] mt-1">
                Unhurried consultations designed around comfort and clinical precision.
              </p>
            </div>

            {/* Step Navigation Indicator */}
            <div className="flex items-center gap-2 mb-6">
              <div
                className={`h-1.5 flex-1 rounded-full ${
                  step >= 1 ? "bg-primary" : "bg-surface-container"
                }`}
              />
              <div
                className={`h-1.5 flex-1 rounded-full ${
                  step >= 2 ? "bg-primary" : "bg-surface-container"
                }`}
              />
              <div
                className={`h-1.5 flex-1 rounded-full ${
                  step >= 3 ? "bg-primary" : "bg-surface-container"
                }`}
              />
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#2c221e] mb-2 uppercase tracking-wider">
                    Select Studio Location
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {practiceData.locations.map((loc) => (
                      <button
                        key={loc.city}
                        type="button"
                        onClick={() => setSelectedLocation(loc.city)}
                        className={`p-3 rounded-xl text-left border text-xs transition-all ${
                          selectedLocation === loc.city
                            ? "border-primary bg-secondary-container/20 text-[#2c221e] font-semibold"
                            : "border-outline-variant/40 bg-surface-container-low text-[#4d4639] hover:border-outline"
                        }`}
                      >
                        <div className="font-semibold">{loc.city}</div>
                        <div className="text-[10px] text-[#6b5c56] truncate mt-0.5">
                          {loc.address}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2c221e] mb-2 uppercase tracking-wider">
                    Select Treatment Or Care
                  </label>
                  <div className="space-y-2">
                    {treatments.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setSelectedTreatment(item)}
                        className={`w-full p-3 rounded-xl text-left border text-xs transition-all flex items-center justify-between ${
                          selectedTreatment === item
                            ? "border-primary bg-secondary-container/20 text-[#2c221e] font-semibold"
                            : "border-outline-variant/40 bg-surface-container-low text-[#4d4639] hover:border-outline"
                        }`}
                      >
                        <span>{item}</span>
                        {selectedTreatment === item && (
                          <Sparkles className="w-3.5 h-3.5 text-primary" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full bg-[#3b2d29] hover:bg-[#201815] text-[#fcf9f6] text-xs font-semibold uppercase tracking-wider py-3.5 rounded-full transition-all"
                  >
                    Continue To Schedule
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#2c221e] mb-2 uppercase tracking-wider">
                    Select Day
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {["Today (Urgent)", "Tomorrow", "Next Available"].map((day) => (
                      <button
                        key={day}
                        type="button"
                        onClick={() => setSelectedDate(day)}
                        className={`p-3 rounded-xl text-center border text-xs transition-all ${
                          selectedDate === day
                            ? "border-primary bg-secondary-container/20 text-[#2c221e] font-semibold"
                            : "border-outline-variant/40 bg-surface-container-low text-[#4d4639]"
                        }`}
                      >
                        <Calendar className="w-4 h-4 mx-auto mb-1 text-[#836a2c]" />
                        <span>{day}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2c221e] mb-2 uppercase tracking-wider">
                    Preferred Time Slot
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
                        className={`py-2.5 px-2 rounded-lg text-center border text-xs transition-all ${
                          selectedSlot === slot
                            ? "border-primary bg-secondary-container/30 text-[#2c221e] font-semibold"
                            : "border-outline-variant/40 bg-surface-container-low text-[#4d4639]"
                        }`}
                      >
                        <Clock className="w-3 h-3 inline mr-1 text-[#836a2c]" />
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-2.5 p-3 rounded-xl border border-[#836a2c]/20 bg-secondary-container/10 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={anxietyCare}
                      onChange={(e) => setAnxietyCare(e.target.checked)}
                      className="mt-0.5 rounded text-primary focus:ring-primary"
                    />
                    <span className="text-xs text-[#4d4639] leading-snug">
                      <strong className="text-[#2c221e] block">Gentle & Anxiety-Free Care</strong>
                      I experience dental apprehension and would like sedation or gentle pacing.
                    </span>
                  </label>
                </div>

                <div className="flex gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 border border-outline-variant text-[#2c221e] text-xs font-semibold uppercase tracking-wider py-3.5 rounded-full"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="flex-1 bg-[#3b2d29] hover:bg-[#201815] text-[#fcf9f6] text-xs font-semibold uppercase tracking-wider py-3.5 rounded-full transition-all"
                  >
                    Patient Details
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#2c221e] mb-1 uppercase tracking-wider">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#7e7667] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#2c221e] focus:outline-none focus:border-primary focus:ring-2 focus:ring-secondary/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2c221e] mb-1 uppercase tracking-wider">
                    Mobile Phone (For SMS Confirmation)
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#7e7667] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="(415) 000-0000"
                      className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#2c221e] focus:outline-none focus:border-primary focus:ring-2 focus:ring-secondary/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2c221e] mb-1 uppercase tracking-wider">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#7e7667] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="eleanor@example.com"
                      className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#2c221e] focus:outline-none focus:border-primary focus:ring-2 focus:ring-secondary/20"
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 border border-outline-variant text-[#2c221e] text-xs font-semibold uppercase tracking-wider py-3.5 rounded-full"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-[#3b2d29] hover:bg-[#201815] text-[#fcf9f6] text-xs font-semibold uppercase tracking-wider py-3.5 rounded-full transition-all shadow-md"
                  >
                    Confirm Visit
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
