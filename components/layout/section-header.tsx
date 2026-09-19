import React from "react";
import { cn } from "@/lib/utils/cn";

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col mb-12 sm:mb-16",
        align === "center" ? "items-center text-center mx-auto max-w-2xl" : "items-start text-left max-w-xl",
        className
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-2.5 mb-3.5">
          <span className="w-6 h-[1.5px] bg-[#836a2c]/70 rounded-full" />
          <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#836a2c] uppercase">
            {eyebrow}
          </span>
          {align === "center" && <span className="w-6 h-[1.5px] bg-[#836a2c]/70 rounded-full" />}
        </div>
      )}

      <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2c221e] font-normal tracking-tight leading-tight">
        {title}
      </h2>

      {description && (
        <p className="font-sans text-sm sm:text-base text-[#5e4f49] mt-3 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
