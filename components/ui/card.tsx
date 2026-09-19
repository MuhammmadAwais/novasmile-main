import React from "react";
import { cn } from "@/lib/utils/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "surface" | "elevated" | "espresso";
}

export function Card({
  className,
  variant = "surface",
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    surface: "bg-surface-container-lowest border border-outline-variant/30 shadow-xs",
    elevated: "bg-surface-container-lowest border border-outline-variant/40 shadow-md hover:shadow-xl transition-all duration-300",
    espresso: "bg-[#2d211d] text-white border border-[#836a2c]/25 shadow-md hover:shadow-xl transition-all duration-300",
  };

  return (
    <div
      className={cn(
        "rounded-2xl p-6 sm:p-8",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
