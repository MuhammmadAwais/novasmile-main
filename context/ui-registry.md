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
| Accent usage     | Official gold logos (`/company1-icon.png`, `/company2-icon.png`, `/company3-icon.png`, `/company4-icon.png`, `/company-5-icon.png`, `/safe-icon.png`) with `brightness-95 group-hover:brightness-105 group-hover:scale-105` |

**Pattern notes:**
Matches layout in [`emergency-bar-section.png`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/context/designs/emergency-bar-section.png) elevated to NovaSmile's Warm Minimalism & Tactile Craft palette. Features custom marble/stone backgrounds (`marble-texture-3-1.jpg`, `stone-background-1400.jpg`, `download.webp`), roasted espresso stat cards with glowing ochre highlights, and a full-width continuous marquee logo ribbon with official gold clinical authority and technology partner logos (ADA, CDA, Invisalign, Solea, Spear, Direct PPO) and smooth edge gradient fade masks on both sides.

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

---

### SmileHookSection

File: `features/smile-hook/components/smile-hook-section.tsx`
Last updated: 2026-09-19

| Property         | Class |
| ---------------- | ----- |
| Background       | `bg-surface-container-lowest` with bottom hairline `border-b border-outline-variant/30` |
| Typography       | Headline: `font-serif text-4xl sm:text-5xl lg:text-6xl text-on-surface`, Subtitle: `font-sans text-lg sm:text-xl font-medium`, Body: `font-sans text-sm sm:text-base text-on-surface-variant` |
| Dividers         | Hairline accents `w-full h-px bg-outline-variant/40` |
| Staggered Grid   | 3-column layout with vertical offsets (`pt-8 sm:pt-12`, `-translate-y-2 sm:-translate-y-4`, `pt-4 sm:pt-6`) |
| Image Cards      | `aspect-[9/18] sm:aspect-[9/19] rounded-xl sm:rounded-2xl overflow-hidden bg-surface-container shadow-md group-hover:shadow-xl` |
| Hover state      | `group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-500` |

**Pattern notes:**
Matches layout in `hook-reference.png`. Dual-column structure pairing high-authority clinical copy with 3 staggered vertical imagery columns for shade matching, patient consultation, and in-house digital laboratory craftsmanship.

---

### DentistPromiseCard ("Dentistry Done Right")

File: `features/dentists/components/dentist-promise-card.tsx`
Last updated: 2026-09-19

| Property         | Class |
| ---------------- | ----- |
| Background       | Filtered textured canvas `custom-graphic-blue.jfif` with warm espresso tone filter + `bg-[#281d19]` gradient |
| Frame Border     | Inner rounded frame `border border-white/20 rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-10 lg:p-12` |
| Outer Card       | `rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#281d19]` |
| Typography       | Title: `font-serif text-3xl sm:text-4xl lg:text-5xl text-white`, Quote: `font-serif italic text-base sm:text-lg lg:text-xl text-white/95` |
| Feature Items    | `flex items-center gap-3.5 text-white/95 text-base sm:text-lg` with `bg-primary/20 border-primary/50 text-primary-light` checkmark pills |
| Quotation Accent | Vertical amber rule `border-l-2 border-primary pl-4 sm:pl-5` |
| Floating Seal    | Circular seal `w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full bg-surface-container-lowest border-2 border-primary/40 shadow-2xl` |

**Pattern notes:**
Matches `Our-dentist-top.png`. Converts canvas graphic into a rich roasted espresso plate with checkmark benefits, clinician team photo, doctor quote, and floating Lifetime Warranty guarantee stamp.

---

### DentistSpotlightCarousel

File: `features/dentists/components/dentist-spotlight-carousel.tsx`
Last updated: 2026-09-19

| Property         | Class |
| ---------------- | ----- |
| Background       | `bg-surface-container-lowest` inside card with `border border-outline-variant/60 rounded-[2rem] sm:rounded-[2.5rem] shadow-lg` |
| Index Badge      | Numeric pill `w-9 h-9 rounded-full border border-outline-variant font-mono text-xs text-on-surface-variant` |
| Typography       | Name: `font-serif text-3xl sm:text-4xl lg:text-5xl text-on-surface`, Role: `font-serif italic text-lg sm:text-xl text-on-surface-variant` |
| Button CTA       | Ochre pill `bg-primary text-white hover:bg-primary-dark rounded-full px-7 py-3 font-semibold text-sm shadow-sm` |
| Star Seal        | Rotating circular stamp `w-16 h-16 sm:w-20 sm:h-20 animate-spin-slow` (`/top-rated-icon.png`) |
| Carousel Nav     | Prev/Next buttons `w-10 h-10 rounded-lg border border-outline-variant/80 hover:bg-surface-container hover:border-primary` |
| Portrait Frame   | `aspect-[4/5] sm:aspect-[3/4] max-h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md` |

**Pattern notes:**
Matches `our-top-dentist.png`. Interactive carousel with active index indicator, fluid profile navigation, star accreditation emblem, and high-res doctor portrait.

---

### DentistTeamGrid (Specialist Team Interactive Marble Grid)

File: `features/dentists/components/dentist-team-grid.tsx`
Last updated: 2026-09-19

| Property         | Class |
| ---------------- | ----- |
| Background       | Section `bg-surface-container-lowest`, Grid Cards `rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg bg-surface-container` |
| Layout           | 2×2 responsive grid (`grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto`) |
| Base Portrait    | Doctor photograph with subtle zoom `group-hover:scale-105 transition-transform duration-700` |
| Reveal Overlay   | Marble texture background plate (`marble-texture-3-1.jpg`) + `bg-[#251b17]/88 backdrop-blur-[2px]` |
| Typography       | Name: `font-serif text-2xl sm:text-3xl text-white`, Credentials: `font-sans text-xs sm:text-sm font-semibold text-primary-light uppercase tracking-wider` |
| Bio Frame        | Framed box `border border-white/25 rounded-xl p-4 sm:p-5 bg-black/10` with crisp typography |
| Transition       | `transition-all duration-500 ease-in-out` with hover, keyboard focus, and mobile tap toggle |

**Pattern notes:**
Matches `our-all-dentist.png`. Full 4-clinician roster showcasing periods, cosmetic prosthodontics, biomimetic surgery, and orthodontics with tactile marble reveal cards.

---

### ExperiencePillarsSection ("The Experience")

File: `features/treatments/components/experience-pillars-section.tsx`
Last updated: 2026-09-19

| Property         | Class |
| ---------------- | ----- |
| Background       | `bg-surface text-on-surface border-t border-outline-variant/30` |
| Typography       | Eyebrow: `text-xs sm:text-sm font-semibold tracking-[0.25em] text-primary uppercase`, Title: `font-serif text-4xl sm:text-5xl lg:text-6xl text-on-surface`, Card Title: `font-serif text-2xl sm:text-3xl font-medium`, Body: `font-sans text-sm sm:text-base text-on-surface-variant` |
| Pillars Layout   | 3-column grid (`grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 text-center`) |
| Gold Icon Frame  | `w-20 h-20 mb-6 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110` with `bg-primary-container/10` halo blur |
| Hover State      | `hover:bg-surface-container-low/60 hover:-translate-y-1 transition-all duration-300 rounded-2xl` |
| Accent usage     | Official gold icons (`/dentist-chair-icon.png`, `/safe-icon.png`, `/stars-icons.png`) |

**Pattern notes:**
Matches `feature-section-top.png`. 3 core clinical philosophy pillars with gold iconography (*Personalized Care*, *Financial Clarity*, *Comfort Add-Ons*) providing trust reassurance before exploring individual treatment catalogs.

---

### TreatmentShowcaseSection ("Your Beautiful Smile")

File: `features/treatments/components/treatment-showcase-section.tsx`
Last updated: 2026-09-19

| Property         | Class |
| ---------------- | ----- |
| Background       | Full-width section with high-definition tactile marble texture (`marble-texture-3-1.jpg`) at 60% opacity with warm wash (`#fdfbf7`/40) |
| Display Header   | `text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-sans tracking-tight text-on-surface` (`your` light + `beautiful smile` extrabold) |
| Row Titles       | `titlePart1` (extrabold sans `text-3xl sm:text-4xl lg:text-5xl`) + `titlePart2` (light sans `text-3xl sm:text-4xl lg:text-5xl text-on-surface/90`) |
| Body Text        | `font-sans text-sm sm:text-[15px] lg:text-base text-on-surface-variant leading-relaxed max-w-md xl:max-w-lg` |
| Text Alignment   | Left rows: Right-aligned (`text-right items-end pr-6 sm:pr-12 lg:pr-16 xl:pr-24`), Right rows: Left-aligned (`text-left items-start pl-6 sm:pl-12 lg:pl-16 xl:pl-24`) |
| CTA Button       | `bg-primary text-on-primary hover:bg-primary-container rounded-sm sm:rounded-md px-7 sm:px-8 py-3.5 sm:py-4 font-medium text-xs sm:text-sm tracking-wide shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]` |
| Image Frame      | Full-bleed 50% width photographic columns (`features-1.jpg`, `features-2.jpg`, `features-3.jpg`) with `min-h-[540px] group-hover:scale-105 transition-transform duration-700` |
| Layout           | Full-bleed 50/50 architectural grid matching `features-section.png` with edge-to-edge imagery and continuous marble backdrop |

**Pattern notes:**
Directly matches reference design `features-section.png`. Features seamless 50/50 edge-to-edge layout, prominent alabaster marble texture, right-aligned / left-aligned text blocks framing the photography, and warm ochre gold CTA buttons.


