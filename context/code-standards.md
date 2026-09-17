# Code Standards — NovaSmile Dental Care

Implementation guidelines, architectural conventions, and engineering standards for NovaSmile. Follow these in every session without exception to guarantee production-grade code quality and zero pattern drift.

---

## 1. Senior Engineering Principles

- **Think Before Implementing:** Understand the patient conversion psychology and warm aesthetic goal before writing code. Use `/architect` before building any complex section or state-driven component.
- **Read Context Files First:** Always consult `DESIGN.md`, `context/architecture.md`, `context/ui-tokens.md`, and `context/ui-rules.md`.
- **Zero Hardcoded Practice Data:** Practice name, doctor information, address, phone numbers, hours, services, and testimonials MUST be imported from `content/practice-data.ts`. This ensures the site remains instantly personalizable for any dentist pitch.
- **Clean Over Clever:** Clear, readable React 19 components with explicit TypeScript interfaces are always preferred over convoluted abstractions.
- **One Feature at a Time:** Complete each section visually and interactively, test it, run `/imprint`, and update `progress-tracker.md` before moving to the next.

---

## 2. TypeScript Strictness

- Strict mode enabled (`tsconfig.json`) — zero compiler errors or warnings.
- **No `any`:** Use strict types or `unknown` with type narrowing.
- Explicit prop typing for every component:
  ```typescript
  interface ServiceCardProps {
    id: string;
    title: string;
    description: string;
    duration: string;
    startingPrice?: number;
    iconName: string;
    onBookClick: (serviceId: string) => void;
  }
  ```
- All data models organized in `lib/types/`.

---

## 3. Next.js 16 & React 19 Conventions

- **Server Components by Default:** Keep layout, static text, SEO metadata, and structural wrappers as Server Components.
- **Client Boundaries (`"use client"`):** Mark files with `"use client"` only when they manage state (`useState`), effects (`useEffect`), browser APIs (local storage, scroll listeners), or user event handling (drawers, modals, accordions, sliders).
- **Font Optimization:** Use `next/font/google` for `EB Garamond` and `Plus Jakarta Sans` in `app/layout.tsx`.
- **Next Image:** Always use `next/image` with explicit `alt` text, aspect ratios, and priority loading for the hero image to ensure zero layout shift (CLS).

---

## 4. Component Structure & Naming Conventions

- **File Naming:** Consistent kebab-case for all files:
  - Component files: `service-card.tsx`, `booking-drawer.tsx`, `announcement-bar.tsx`
  - Utility & schema files: `cn.ts`, `booking.schema.ts`, `date-helpers.ts`
  - Domain types: `practice.ts`, `treatment.ts`, `booking.ts`
- **Folder Organization:** Domain-driven feature directories (`components/sections/hero/`, `components/sections/services/`, `components/booking/`, `components/ui/`).
- **One Component Per File:** Never export multiple complex components from a single file.

### Component Code Ordering:
```typescript
"use client"; // only if client-interactive

// 1. External dependencies
import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Clock, CheckCircle2 } from "lucide-react";

// 2. Internal UI & Store imports
import { Button } from "@/components/ui/button";
import { useBookingStore } from "@/lib/store/use-booking-store";
import { practiceData } from "@/content/practice-data";
import type { Treatment } from "@/lib/types/treatment";

// 3. Types / Interfaces
interface ServiceCardProps {
  treatment: Treatment;
  onLearnMore: (treatment: Treatment) => void;
}

// 4. Component Implementation
export function ServiceCard({ treatment, onLearnMore }: ServiceCardProps) {
  const { openBooking } = useBookingStore();

  return (
    <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-6 flex flex-col justify-between">
      {/* Visual content */}
    </div>
  );
}
```

---

## 5. Accessibility & Mobile Optimization

- **Touch Targets:** All interactive buttons, chips, and time slots must measure at least `44px × 44px` on mobile screens.
- **ARIA Attributes:** Modals, drawers, and accordions must include `aria-expanded`, `aria-controls`, `aria-label`, and `role="dialog"`.
- **Keyboard Navigation:** Modals and drawers must trap focus and close on `Escape`.
- **Color Contrast:** All text must meet WCAG AA standards (minimum 4.5:1 contrast ratio against linen surfaces).
