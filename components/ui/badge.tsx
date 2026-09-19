import React from "react";
import { cn } from "@/lib/utils/cn";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "emergency" | "neutral";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-[#836a2c]/10 text-primary border border-[#836a2c]/20",
    accent: "bg-[#fedf9b] text-[#2c221e] font-semibold",
    emergency: "bg-error-container/40 text-error border border-error/30 font-semibold",
    neutral: "bg-surface-container text-[#4d4639] border border-outline-variant/30",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-sans uppercase tracking-[0.14em]",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
