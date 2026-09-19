"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "espresso";
  size?: "sm" | "md" | "lg" | "pill";
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      fullWidth = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-sans font-semibold transition-all duration-200 cursor-pointer select-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-[#836a2c]/30";

    const variantStyles = {
      primary:
        "bg-[#3f322e] hover:bg-[#29201d] text-[#fcf9f6] shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
      secondary:
        "bg-[#c5a767] hover:bg-[#b49553] text-[#2c221e] shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0",
      espresso:
        "bg-[#2d211d] hover:bg-[#1f1714] text-white border border-[#836a2c]/30 hover:border-[#c4a96a]/60 shadow-md hover:shadow-xl hover:-translate-y-0.5",
      outline:
        "border border-[#55423e]/40 hover:border-[#2c221e] bg-[#fcf9f6]/40 hover:bg-[#fcf9f6]/95 backdrop-blur-xs text-[#2c221e] hover:-translate-y-0.5 active:translate-y-0",
      ghost:
        "bg-transparent hover:bg-[#f2ece3]/80 text-[#2c221e]",
    };

    const sizeStyles = {
      sm: "text-xs px-4 py-2 rounded-lg",
      md: "text-xs sm:text-[13px] px-6 py-2.5 rounded-xl",
      lg: "text-sm px-8 py-3.5 rounded-xl",
      pill: "text-xs font-semibold uppercase tracking-[0.14em] px-8 sm:px-9 py-3.5 sm:py-4 rounded-full",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
