# System Architecture — NovaSmile Dental Care

## 1. Architectural Philosophy & Core Objectives

NovaSmile Dental Care is architected as an **enterprise-grade, high-conversion healthcare web application** and **turnkey sales demonstration platform** engineered for modern dental practices.

### Core Architectural Pillars
1. **Unidirectional Personalization Architecture:** The entire visual presentation layer is strictly decoupled from the clinical data layer. A single strongly-typed configuration module (`content/practice-data.ts`) powers all page content, typography, practitioner profiles, treatments, and social proof. When pitching to any dental practice, updating this single module personalizes the entire digital experience in under 2 minutes without altering component markup.
2. **Unified CTA Conversion State Engine:** Conversion touchpoints across the application (Sticky Header, Sanctuary Hero, Quick Booking Strip, Treatment Grid, Doctor Profile, and Sticky Mobile Footer) communicate through a centralized booking state engine (`useBookingStore`). Any interactive trigger can open the booking drawer, pre-select specific treatments or practitioners, and streamline the patient straight to slot selection.
3. **Server-First Partial Hydration (Next.js 16 + React 19):** Static editorial sections, clinical credentials, and treatment catalogs render entirely on the server for instant page delivery (LCP < 1.0s, zero CLS) and comprehensive search engine indexability (Schema.org `Dentist` JSON-LD). Client boundaries (`"use client"`) are strictly isolated to interactive leaves (modals, drawers, comparison sliders, and accordions).
4. **Warm Minimalism & Tactile Craft (`DESIGN.md`):** Zero hardcoded hex codes or arbitrary utility classes. Built entirely on a tokenized Tailwind CSS v4 design system utilizing linen surfaces (`#fcf9f6`), grounding espresso typography (`#33231f`), and warm ochre accents (`#836a2c`) designed specifically to dissolve patient dental anxiety.

---

## 2. Technology Stack

| Layer | Technology | Version | Purpose & Rationale |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | `16.3.5` | React Server Components, file-based routing, SEO metadata engine, asset optimization |
| **UI Runtime** | React | `19.2.8` | Concurrent rendering, `useActionState`, Server Actions, transitions |
| **Styling & Design System** | Tailwind CSS v4 | `^4.0` | Zero-runtime CSS variables via `@theme`, container queries, fluid typography |
| **Language** | TypeScript | `^5.0` | Strict type safety, exact property verification, branded domain types |
| **Global UI State** | Zustand / React 19 Context | Lightweight | Decoupled cross-section CTA orchestration and booking drawer lifecycle |
| **Form Management** | React Hook Form | `^7.50` | Uncontrolled high-performance inputs, minimal re-renders |
| **Schema Validation** | Zod | `^3.24` | Strict input sanitization and appointment request validation |
| **Iconography** | Lucide React | `^1.0` | Accessible, tree-shakeable SVG dental and UI icons |
| **Fonts** | `next/font/google` | Built-in | Zero-layout-shift self-hosted `EB Garamond` (Editorial) & `Plus Jakarta Sans` (UI) |

---

## 3. Directory Structure

The repository follows a **Domain-Driven Feature Section** architecture with atomic UI primitives and a centralized data layer:

```
novasmile/
├── AGENTS.md                              → Agent workflow rules, read strategy & core invariants
├── DESIGN.md                              → Definitive design system tokens and visual specification
├── context/                               → Project memory and living architectural context
│   ├── project-overview.md                → Brand philosophy, conversion strategy & pitch objectives
│   ├── architecture.md                    → System architecture, stack, directory structure & state
│   ├── ui-tokens.md                       → Tailwind v4 @theme token variables and color mappings
│   ├── ui-rules.md                        → Typography hierarchy, negative space, tonal layering & a11y
│   ├── ui-registry.md                     → Living registry of built UI components and classes
│   ├── code-standards.md                  → Strict TypeScript rules, component guidelines & error handling
│   ├── library-docs.md                    → Third-party library recipes and implementation patterns
│   ├── build-plan.md                      → 9-phase visual-first execution roadmap
│   ├── progress-tracker.md                → Active phase status and milestone tracking
│   └── designs/                           → Visual references, mockups & section inspiration
├── content/
│   └── practice-data.ts                   → Centralized practice data configuration (Single Source of Truth)
├── app/
│   ├── layout.tsx                         → Root layout with fonts, JSON-LD Schema, and meta tags
│   ├── page.tsx                           → Complete landing page assembling all feature sections
│   ├── globals.css                        → Tailwind v4 @theme definitions, ambient shadows, and utilities
│   ├── sitemap.ts                         → Dynamic sitemap generator for local dental SEO
│   ├── robots.ts                          → Search engine crawler instructions
│   └── api/
│       └── booking/
│           └── route.ts                   → Appointment submission endpoint (email/SMS/webhook dispatch)
├── components/
│   ├── ui/                                → Atomic Design System Primitives
│   │   ├── button.tsx                     → Primary, Secondary, Outline & Ghost variants
│   │   ├── input.tsx                      → Tactile input with floating label & ochre focus ring
│   │   ├── badge.tsx                      → Pill badges (Default, Accent, Emergency, Accepting Patients)
│   │   ├── card.tsx                       → Tonal layered cards with subtle borders
│   │   ├── dialog.tsx                     → Accessible modal dialog container with backdrop blur
│   │   ├── drawer.tsx                     → Slide-in right drawer with smooth transitions
│   │   ├── accordion.tsx                  → Collapsible FAQ item with smooth height transitions
│   │   └── toast.tsx                      → Ambient notification toasts for feedback
│   ├── layout/                            → Global Chrome & Conversion Navigation
│   │   ├── announcement-bar.tsx           → Clinic hours, address, and 1-tap emergency dialer
│   │   ├── navbar.tsx                     → Sticky glassmorphic header with navigation & primary CTA
│   │   ├── mobile-menu.tsx                → Slide-out mobile navigation drawer
│   │   ├── sticky-mobile-cta.tsx          → Pinned bottom 1-tap dial/book bar for mobile screens
│   │   ├── section-container.tsx          → Standardized 1280px max-width container with responsive padding
│   │   ├── section-header.tsx             → Editorial category tag, serif title, and calming subhead
│   │   └── footer.tsx                     → Accreditations, legal notices, hours, and navigation links
│   ├── sections/                          → Self-Contained Domain Feature Sections
│   │   ├── hero/
│   │   │   ├── hero-section.tsx           → Serif headline, bedside reassurance, dual conversion CTAs
│   │   │   ├── trust-pills.tsx            → 5.0 Star rating, pain-free guarantee, volume counters
│   │   │   └── quick-booking-strip.tsx    → Rapid 3-field booking filter widget
│   │   ├── services/
│   │   │   ├── services-section.tsx       → Treatment category tabs and grid container
│   │   │   ├── service-card.tsx           → Procedure card with duration, investment, and CTA
│   │   │   └── service-detail-modal.tsx   → Deep dive into treatment steps, pain management, recovery
│   │   ├── transformation/
│   │   │   ├── before-after-section.tsx   → Visual proof container and clinical case notes
│   │   │   └── before-after-slider.tsx    → Interactive touch/drag horizontal image comparison slider
│   │   ├── philosophy/
│   │   │   ├── philosophy-section.tsx     → Hospitality-grade dental wellness statement
│   │   │   └── comfort-pillars.tsx        → Mindful sedation, biological health, unhurried consultations
│   │   ├── team/
│   │   │   ├── team-section.tsx           → Clinical leadership container
│   │   │   └── doctor-bio-card.tsx        → Portrait, credentials, bedside philosophy, and signature
│   │   ├── technology/
│   │   │   ├── technology-section.tsx     → Anxiety-reduction technology showcase
│   │   │   └── tech-feature-card.tsx      → 3D scanning, painless injection, entertainment amenities
│   │   ├── reviews/
│   │   │   ├── reviews-section.tsx        → Verified patient testimonial cards container
│   │   │   ├── testimonial-card.tsx       → Patient story with quote, star rating, and treatment tag
│   │   │   └── google-rating-widget.tsx   → Live Google review trust badge with external review link
│   │   ├── pricing-insurance/
│   │   │   ├── insurance-section.tsx      → Direct billing insurance logos and coverage guidelines
│   │   │   └── financing-calculator.tsx   → Monthly installment estimator for cosmetic/implant cases
│   │   ├── faq/
│   │   │   ├── faq-section.tsx            → Categorized patient question accordion container
│   │   │   └── faq-accordion.tsx          → Expandable accessible question/answer items
│   │   └── location-contact/
│   │       ├── location-section.tsx       → Clinic office layout, parking, and transit
│   │       ├── hours-table.tsx            → Operating hours with real-time "Open Now" status badge
│   │       └── map-view.tsx               → Interactive map embed with 1-tap directions
│   └── booking/                           → Interactive Appointment Engine
│       ├── booking-drawer.tsx             → Slide-over drawer container orchestrating the 3 steps
│       ├── step-indicator.tsx             → Visual breadcrumb indicator (1. Service → 2. Time → 3. Info)
│       ├── service-selector-step.tsx      → Treatment category and specific procedure selector
│       ├── slot-matrix-step.tsx           → Date picker and Morning/Afternoon/Evening slot grid
│       ├── patient-details-step.tsx       → Contact inputs, insurance provider, and anxiety flag
│       └── booking-confirmation-step.tsx  → Success card with calendar sync (.ics/Google) and clinic tips
├── actions/
│   └── submit-booking.ts                  → React 19 Server Action for appointment booking submission
└── lib/
    ├── types/                             → Domain Data Models
    │   ├── practice.ts                    → PracticeConfig, Address, Hours, Doctor interfaces
    │   ├── treatment.ts                   → Treatment, Category, ProcedureDetail interfaces
    │   ├── booking.ts                     → BookingRequest, TimeSlot, DayAvailability interfaces
    │   └── review.ts                      → Testimonial, GoogleReview interfaces
    ├── schemas/                           → Zod Form Validation Schemas
    │   ├── booking.schema.ts              → Schema for appointment request payload
    │   └── contact.schema.ts              → Schema for general inquiry form
    ├── store/                             → Global UI State
    │   └── use-booking-store.ts           → Zustand/Context store for drawer state and pre-selections
    ├── seo/                               → Local Healthcare SEO
    │   └── json-ld.ts                     → Schema.org Dentist & MedicalBusiness structured data generator
    └── utils/                             → Shared Helpers
        ├── cn.ts                          → Class name merger (clsx + twMerge)
        ├── date-helpers.ts                → Dynamic time slot generator and calendar day utilities
        └── formatters.ts                  → Phone numbers, currency formatting, and operating hours status
```

---

## 4. Component Boundaries & Hydration Strategy

To maximize performance, reduce client JavaScript payload, and ensure optimal SEO rankings, the architecture enforces strict separation between Server Components and Client Components:

```
[Server Components] (Static, Zero JS, Fast TTFB, SEO Rich)
├── Root Layout (Metadata, Google Fonts, JSON-LD Schema)
├── Landing Page Shell (app/page.tsx)
├── Announcement Bar (Initial static render)
├── Hero Section (Headline, Subhead, Trust Statistics)
├── Services Section (Treatment Grid Catalog)
├── Philosophy Section (Care Pillars)
├── Doctor Bio & Clinical Team Section
├── Technology & Comforts Section
├── Insurance Providers Grid
├── FAQ Section (Static content structure)
└── Footer & Legal Disclaimers

      │ passes data via props
      ▼

[Client Components ("use client")] (Interactive Leaves Only)
├── Navbar (Scroll glassmorphism detection, mobile menu toggle)
├── MobileMenu (Slide-out drawer animation)
├── StickyMobileCTA (Scroll threshold visibility)
├── QuickBookingStrip (Dropdown filters triggering booking drawer)
├── ServiceCard (Interactive "Learn More" opening ServiceDetailModal)
├── ServiceDetailModal (Dialog backdrop, interactive tabs)
├── BeforeAfterSlider (Mouse & touch coordinate tracking for divider)
├── FaqAccordion (Expandable question state)
├── BookingDrawer (Step transitions, active form validation, slot selection)
└── SlotMatrix (Date selection and dynamic time slot matrix selection)
```

---

## 5. Unified CTA State Machine (`useBookingStore`)

All appointment triggers across the page communicate through a centralized store, ensuring that clicking "Book Teeth Whitening" from a service card opens the drawer directly with Teeth Whitening pre-selected:

```typescript
// lib/store/use-booking-store.ts
export interface BookingState {
  isOpen: boolean;
  step: 1 | 2 | 3 | 4; // 1: Service, 2: Slot, 3: Details, 4: Confirmation
  selectedServiceId?: string;
  selectedDentistId?: string;
  selectedDate?: string;
  selectedSlot?: string;
  isEmergency: boolean;

  // Actions
  openBooking: (params?: { serviceId?: string; isEmergency?: boolean }) => void;
  closeBooking: () => void;
  setStep: (step: 1 | 2 | 3 | 4) => void;
  selectService: (serviceId: string) => void;
  selectSlot: (date: string, slot: string) => void;
  resetBooking: () => void;
}
```

### Triggering Pattern from Any Component:
```tsx
const { openBooking } = useBookingStore();

<Button onClick={() => openBooking({ serviceId: treatment.id })}>
  Book Consultation
</Button>
```

---

## 6. Personalization Data Schema (`content/practice-data.ts`)

The centralized data contract ensures turn-key white-labeling for any prospective dentist pitch:

```typescript
// lib/types/practice.ts

export interface PracticeConfig {
  id: string;
  name: string;
  tagline: string;
  emergencyHotline: string;
  officePhone: string;
  email: string;
  address: {
    street: string;
    suite?: string;
    city: string;
    stateProvince: string;
    postalCode: string;
    mapCoordinates: { lat: number; lng: number };
    directionsTip: string;
  };
  hours: {
    dayRange: string;
    hours: string;
    isOpenToday?: boolean;
  }[];
  leadDentist: {
    name: string;
    credentials: string; // e.g., "DDS, FAGD, AACD"
    role: string;
    experienceYears: number;
    education: string[];
    bio: string;
    personalPhilosophy: string;
    signatureImage?: string;
    photoUrl: string;
  };
  trustMetrics: {
    googleRating: number;
    reviewCount: number;
    smilesTransformed: number;
    satisfactionRate: number;
  };
  services: Treatment[];
  beforeAfterCases: BeforeAfterCase[];
  comfortAmenities: ComfortAmenity[];
  testimonials: Testimonial[];
  insurancePartners: string[];
  faqs: FAQItem[];
}
```

---

## 7. Local Healthcare SEO & Schema.org Structured Data

NovaSmile automatically injects rich JSON-LD microdata (`lib/seo/json-ld.ts`) into `app/layout.tsx` to ensure dental practices dominate Google Local Pack and Google Maps search results:

```typescript
export function generateDentalClinicSchema(data: PracticeConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": data.name,
    "image": "https://novasmile.example/clinic-exterior.jpg",
    "telephone": data.officePhone,
    "email": data.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": data.address.street,
      "addressLocality": data.address.city,
      "addressRegion": data.address.stateProvince,
      "postalCode": data.address.postalCode,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": data.address.mapCoordinates.lat,
      "longitude": data.address.mapCoordinates.lng
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": data.trustMetrics.googleRating,
      "reviewCount": data.trustMetrics.reviewCount
    },
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "medicalSpecialty": [
      "Dentistry",
      "CosmeticDentistry",
      "Orthodontics",
      "Periodontics"
    ]
  };
}
```

---

## 8. Web Vitals & Performance Budget

- **Largest Contentful Paint (LCP):** < 1.0s. Achieved by priority preloading the hero image via `next/image` with `priority` flag, and pre-rendering hero markup on the server.
- **Cumulative Layout Shift (CLS):** `0.00`. Fixed aspect ratios for all treatment and doctor images, self-hosted font loading with `display: swap` via `next/font`.
- **First Input Delay (FID) / Interaction to Next Paint (INP):** < 50ms. Zero heavy runtime UI libraries; lightweight CSS transitions and minimal client JS bundle.
- **Accessibility:** 100% WCAG 2.1 AA compliance across contrast ratios, focus visible rings (`focus:ring-3 focus:ring-secondary/25`), semantic landmark elements (`<header>`, `<main>`, `<section>`, `<aside>`, `<footer>`), and ARIA attributes for dynamic dialogs.
