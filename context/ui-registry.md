# UI Registry — NovaSmile Dental Care

Living document. Updated after every component is built. Read this before building any new component — match existing patterns exactly before creating new ones.

---

## How to Use

Before building any component:
1. Check if a similar component already exists in this registry.
2. If yes — match its exact classes, padding, borders, and tokens.
3. If no — build it following `DESIGN.md`, `context/ui-tokens.md`, and `context/ui-rules.md`, then run `/imprint` to add it here.

After building any component — run `/imprint` or append to this file with the component name, file path, and exact classes used.

---

## Baseline Patterns (Derived from DESIGN.md)

| Property             | Baseline Class / Pattern                                                                     |
| -------------------- | -------------------------------------------------------------------------------------------- |
| **Page Canvas**      | `bg-surface text-on-surface min-h-screen font-sans antialiased`                             |
| **Display Title**    | `font-serif text-4xl sm:text-5xl lg:text-6xl text-on-surface font-normal tracking-tight`    |
| **Section Title**    | `font-serif text-3xl sm:text-4xl text-on-surface font-normal`                                 |
| **Card (Elevated)**  | `bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-6 sm:p-8 shadow-sm` |
| **Card (Subtle)**    | `bg-surface-container-low border border-outline-variant/20 rounded-lg p-6`                   |
| **Button (Primary)** | `bg-primary text-on-primary hover:bg-primary-container rounded-md px-6 py-3 font-medium text-sm transition-all duration-200` |
| **Button (Outline)** | `border border-primary text-primary hover:bg-secondary-container/20 rounded-md px-6 py-3 font-medium text-sm transition-all` |
| **Badge (Default)**  | `bg-surface-container text-on-surface-variant text-xs font-medium px-3 py-1 rounded-full`   |
| **Badge (Accent)**   | `bg-secondary-container/40 text-primary border border-secondary/30 text-xs font-semibold px-3 py-1 rounded-full` |
| **Input / Select**   | `bg-surface-container-lowest border border-outline-variant/50 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-3 focus:ring-secondary/25` |

---

## Components

### Navbar

File: `components/layout/navbar.tsx`
Last updated: 2026-09-19

| Property         | Class |
| ---------------- | ----- |
| Background       | `bg-transparent` (resting) / `bg-[#fdfbf8]/95 backdrop-blur-md` (scrolled) |
| Border           | `border-b border-outline-variant/30` (scrolled) |
| Border radius    | `rounded-full` (CTA button), `rounded-xl` (dropdown menus) |
| Text — primary   | `text-[#2e2320]` (nav links) |
| Text — secondary | `text-[#6b5c56]` (dropdown descriptions) |
| Spacing          | `py-5 sm:py-6 px-6 sm:px-12 lg:px-16` |
| Hover state      | `hover:text-primary transition-colors duration-150` |
| Shadow           | `shadow-xs` (scrolled header), `shadow-xl ring-1 ring-black/5` (dropdown menu) |
| Accent usage     | `bg-[#c5a767] hover:bg-[#b49553] text-[#2c221e]` (pill CTA) |

**Pattern notes:**
The top bar floats over the ambient hero plate with transparent background until scrolled. Nav links use `Plus Jakarta Sans` uppercase with medium letter tracking (`text-[13px] tracking-[0.08em] font-medium`).

---

### HeroSection

File: `features/hero/components/hero-section.tsx`
Last updated: 2026-09-19

| Property         | Class |
| ---------------- | ----- |
| Background       | Photographic room plate (`zen-hero-room.avif`) + `bg-gradient-to-r from-[#fdfbf8] via-[#fdfbf8]/95 to-transparent` |
| Border           | Hairline location indicator rule (`h-[1.5px] bg-[#a68644]/70 rounded-full`) |
| Border radius    | `rounded-full` (dual buttons) |
| Text — primary   | `font-serif text-[#2c221e] text-4xl sm:text-5xl lg:text-[62px] xl:text-[68px]` (EB Garamond) |
| Text — secondary | `font-sans text-[#4d443e] text-base sm:text-[17px] leading-[1.65]` (Plus Jakarta Sans) |
| Spacing          | `max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-24 sm:pt-28 pb-8` |
| Hover state      | `hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200` |
| Shadow           | `shadow-sm hover:shadow-md` |
| Accent usage     | `text-[#9b7b37]` (location badge), delicate botanical leaf watermark in `text-[#a68644]/25` |

**Pattern notes:**
Directly matches reference mockup (`hero-section-reference.png`). Features soft left sunlight wash, subtle stone texture at `0.05` opacity, dual CTAs ("BOOK A VISIT" espresso pill + "CALL NOW" hairline outline pill), and delicate zen leaf watermark.

---

### TrustMetricsSection (Milestones & Infinite Partner Ribbon)

File: `features/trust-metrics/components/trust-metrics-section.tsx`
Last updated: 2026-09-19

| Property         | Class |
| ---------------- | ----- |
| Background       | Section `bg-[#faf7f2]` with custom marble (`/marble-texture-3-1.jpg`) and stone (`/stone-background-1400.jpg`) textures |
| Cards Background | Rich roasted espresso `bg-[#2d211d]` with internal marble texture plate (`/download.webp` at 14% opacity) |
| Border           | `border border-[#836a2c]/25 hover:border-[#c4a96a]/60` |
| Border radius    | `rounded-2xl` (milestone stat cards) |
| Text — primary   | Stat numbers: `font-serif text-4xl sm:text-[46px] lg:text-[52px] font-light text-[#faf6f0] group-hover:text-[#ffefd1]` |
| Text — secondary | Stat labels: `font-sans text-xs sm:text-[13px] text-[#d8c7be] font-medium tracking-wide` |
| Spacing          | Cards: `p-6 sm:p-7`, Section: `py-16 sm:py-24 px-6 sm:px-12 lg:px-16` |
| Hover state      | `hover:-translate-y-1 hover:shadow-xl transition-all duration-300` |
| Shadow           | `shadow-md hover:shadow-xl` |
| Marquee Mask     | Edge fades `w-24 sm:w-52 md:w-64 bg-gradient-to-r / to-l from-[#faf7f2] via-[#faf7f2]/90 to-transparent z-20` |
| Accent usage     | Partner logos in `#2c221e`, enlarged badges (`w-12 h-12` to `w-14 h-14`), hover `text-primary`, subtle ochre highlights |

**Pattern notes:**
Matches layout in [`emergency-bar-section.png`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/context/designs/emergency-bar-section.png) elevated to NovaSmile's Warm Minimalism & Tactile Craft palette. Features custom marble/stone backgrounds (`marble-texture-3-1.jpg`, `stone-background-1400.jpg`, `download.webp`), roasted espresso stat cards with glowing ochre highlights, and a full-width continuous marquee logo ribbon with enlarged clinical authority emblems and smooth edge gradient fade masks on both sides.

---

### BookingModal & CallModal

File: `features/booking/components/booking-modal.tsx`, `features/booking/components/call-modal.tsx`
Last updated: 2026-09-18

| Property         | Class |
| ---------------- | ----- |
| Background       | `bg-surface-container-lowest` with `bg-black/50 backdrop-blur-sm` overlay |
| Border           | `border border-outline-variant/40` |
| Border radius    | `rounded-2xl` |
| Text — primary   | `font-serif text-2xl sm:text-3xl text-[#2c221e]` |
| Text — secondary | `font-sans text-xs sm:text-sm text-[#4d4639]` |
| Spacing          | `p-6 sm:p-8` |
| Hover state      | `hover:border-primary hover:bg-secondary-container/20 transition-all` |
| Shadow           | `shadow-2xl` |
| Accent usage     | `bg-secondary-container/20 text-[#2c221e] border-primary` (selected cards) |

**Pattern notes:**
3-step progressive disclosure flow (Studio Location & Treatment -> Slot Matrix -> Patient Details) with anxiety-free gentle care toggle and immediate confirmation screen.
