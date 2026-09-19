"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils/cn";

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function Dialog({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = "md",
  className,
}: DialogProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthStyles = {
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-y-auto bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className={cn(
          "relative w-full bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-2xl border border-outline-variant/40 my-8",
          maxWidthStyles[maxWidth],
          className
        )}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#5e4f49] hover:text-[#2c221e] rounded-full hover:bg-surface-container transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {(title || subtitle) && (
          <div className="mb-6">
            {subtitle && (
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#836a2c] block mb-1">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2c221e]">
                {title}
              </h2>
            )}
          </div>
        )}

        {children}
      </div>
    </div>
  );
}
