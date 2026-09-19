import React from "react";
import { cn } from "@/lib/utils/cn";

export interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "article";
  maxWidth?: "default" | "narrow" | "wide" | "full";
  noPadding?: boolean;
}

export function SectionContainer({
  as: Component = "section",
  maxWidth = "default",
  noPadding = false,
  className,
  children,
  ...props
}: SectionContainerProps) {
  const maxWidthStyles = {
    narrow: "max-w-5xl",
    default: "max-w-7xl",
    wide: "max-w-[1400px]",
    full: "max-w-full",
  };

  return (
    <Component
      className={cn(
        "relative w-full mx-auto",
        !noPadding && "px-6 sm:px-12 lg:px-16 py-16 sm:py-24",
        maxWidthStyles[maxWidth],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
