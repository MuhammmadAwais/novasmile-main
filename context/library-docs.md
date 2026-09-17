# Library Docs — NovaSmile Dental Care

Usage patterns, recipes, and constraints for all third-party libraries and core modules in NovaSmile Dental Care. Read the relevant section before implementing features touching these modules.

---

## 1. Tailwind CSS v4

NovaSmile uses **Tailwind CSS v4** with zero-configuration CSS variables declared in `@theme` in `app/globals.css`.

### Tokens Reference
All custom design tokens are available as standard utility classes:

```tsx
// Backgrounds
className="bg-surface"                   // #fcf9f6 (Linen canvas)
className="bg-surface-container-lowest"  // #ffffff (Pure white card surface)
className="bg-surface-container-low"     // #f6f3f0 (Soft card plane)
className="bg-surface-container"         // #f0edea (Base neutral surface)

// Brand Accents
className="bg-primary text-on-primary"   // Primary Ochre Gold (#695216 / #836a2c)
className="bg-secondary-container"       // Soft Ochre pill badge
className="border-outline-variant"       // Subtle hairline divider

// Typography
className="font-serif"                   // EB Garamond (Editorial display & titles)
className="font-sans"                    // Plus Jakarta Sans (UI, body, labels)
```

### Invariants
- **NEVER** use arbitrary hex codes like `bg-[#836a2c]`.
- **NEVER** use default Tailwind color names like `bg-amber-600` or `text-blue-900`.
- Use opacity modifiers safely with tokens: `border-outline-variant/30` or `bg-secondary-container/20`.

---

## 2. Next.js 16 & Google Fonts

### Font Initialization (`app/layout.tsx`)
We use `next/font/google` to optimize and self-host both fonts without layout shift:

```tsx
import { EB_Garamond, Plus_Jakarta_Sans } from "next/font/google";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${plusJakartaSans.variable}`}>
      <body className="bg-surface text-on-surface font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
```

---

## 3. Global Booking State Engine (`lib/store/use-booking-store.ts`)

To allow any conversion element on the page (Header, Hero, Quick Bar, Service Cards, Doctor Profile, Mobile Bottom Bar) to trigger the interactive booking drawer with pre-selected data:

```typescript
// lib/store/use-booking-store.ts
import { create } from "zustand";

export interface BookingState {
  isOpen: boolean;
  step: 1 | 2 | 3 | 4;
  selectedServiceId: string | null;
  selectedDate: string | null;
  selectedSlot: string | null;
  isEmergency: boolean;

  // Actions
  openBooking: (params?: { serviceId?: string; isEmergency?: boolean }) => void;
  closeBooking: () => void;
  setStep: (step: 1 | 2 | 3 | 4) => void;
  selectService: (serviceId: string) => void;
  selectSlot: (date: string, slot: string) => void;
  resetBooking: () => void;
}

export const useBookingStore = create<BookingState>((set) => ({
  isOpen: false,
  step: 1,
  selectedServiceId: null,
  selectedDate: null,
  selectedSlot: null,
  isEmergency: false,

  openBooking: (params) =>
    set({
      isOpen: true,
      step: params?.serviceId ? 2 : 1,
      selectedServiceId: params?.serviceId || null,
      isEmergency: params?.isEmergency || false,
    }),
  closeBooking: () => set({ isOpen: false }),
  setStep: (step) => set({ step }),
  selectService: (serviceId) => set({ selectedServiceId: serviceId, step: 2 }),
  selectSlot: (date, slot) => set({ selectedDate: date, selectedSlot: slot, step: 3 }),
  resetBooking: () =>
    set({
      isOpen: false,
      step: 1,
      selectedServiceId: null,
      selectedDate: null,
      selectedSlot: null,
      isEmergency: false,
    }),
}));
```

---

## 4. React Hook Form + Zod (Appointment Booking Validation)

### Validation Schema (`lib/schemas/booking.schema.ts`)
```typescript
import { z } from "zod";

export const appointmentSchema = z.object({
  serviceId: z.string().min(1, "Please select a dental service"),
  dentistPreference: z.string().default("any"),
  selectedDate: z.string().min(1, "Please select an appointment date"),
  selectedSlot: z.string().min(1, "Please select a time slot"),
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^\+?[\d\s-]{10,}$/, "Please enter a valid 10-digit phone number"),
  dentalAnxiety: z.boolean().default(false),
  notes: z.string().max(500, "Notes cannot exceed 500 characters").optional(),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;
```

### Form Usage Pattern
```tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { appointmentSchema, type AppointmentFormData } from "@/lib/schemas/booking.schema";

export function PatientDetailsStep({ onSubmitSuccess }: { onSubmitSuccess: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      dentalAnxiety: false,
    },
  });

  const onSubmit = async (data: AppointmentFormData) => {
    // Call server action / API route
    onSubmitSuccess();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Inputs with floating labels and ochre focus glow */}
    </form>
  );
}
```

---

## 5. Lucide React (Dental & Clinical Icons)

Key icons used for medical authority and navigation:
- **Dental & Care:** `Sparkles`, `ShieldCheck`, `HeartHandshake`, `Smile`, `Activity`, `Award`
- **Calendar & Scheduling:** `Calendar`, `Clock`, `Hourglass`, `CalendarCheck2`
- **Communication & Location:** `Phone`, `PhoneCall`, `MapPin`, `Mail`, `ExternalLink`, `Navigation`
- **UI Navigation:** `Menu`, `X`, `ChevronRight`, `ChevronDown`, `Check`, `CheckCircle2`, `Star`
- **Comfort Amenities:** `Coffee`, `Tv`, `Headphones`, `Feather`, `ShieldAlert`

---

## 6. Schema.org JSON-LD (Local Dental SEO)

To rank at the top of Google Local Pack for dental inquiries, structured data is injected into `app/layout.tsx`:

```typescript
// lib/seo/json-ld.ts
import { practiceData } from "@/content/practice-data";

export function getDentalClinicJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": practiceData.name,
    "telephone": practiceData.officePhone,
    "email": practiceData.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": practiceData.address.street,
      "addressLocality": practiceData.address.city,
      "addressRegion": practiceData.address.stateProvince,
      "postalCode": practiceData.address.postalCode,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": practiceData.address.mapCoordinates.lat,
      "longitude": practiceData.address.mapCoordinates.lng
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": practiceData.trustMetrics.googleRating,
      "reviewCount": practiceData.trustMetrics.reviewCount
    },
    "priceRange": "$$"
  };
}
```
