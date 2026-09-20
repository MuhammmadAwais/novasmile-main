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
| Background       | Full-width section with high-definition tactile alabaster marble canvas (`marble-texture-3-1.jpg`) at 75% opacity with gentle warm linen wash (`#fbf9f5`/25) |
| Display Header   | `text-4xl sm:text-5xl md:text-6xl lg:text-[70px] xl:text-[76px] font-sans tracking-tight text-on-surface` (`your` in `font-light lowercase` + `beautiful smile` in `font-extrabold lowercase`) |
| Asymmetrical Grid| `grid grid-cols-1 lg:grid-cols-12`: Photography dominates at `lg:col-span-7` (~58.3% width), Marble Text block at `lg:col-span-5` (~41.7% width) |
| Row Titles       | `titlePart1` (lowercase `font-sans font-extrabold text-4xl sm:text-5xl lg:text-[52px] xl:text-[56px] tracking-tight text-on-surface`) + `titlePart2` (lowercase `font-sans font-extralight text-4xl sm:text-5xl lg:text-[52px] xl:text-[56px] text-on-surface/90`) |
| Body Text        | `font-sans text-sm sm:text-base text-on-surface-variant leading-relaxed max-w-sm sm:max-w-md my-5 lg:my-6` |
| Text Layout      | Asymmetrical centered alignment: Rows 1 & 3 are `text-right items-end lg:pr-14 xl:pr-20`, Row 2 is `text-left items-start lg:pl-14 xl:pl-20` |
| CTA Button       | `bg-primary text-on-primary hover:bg-primary-container rounded-sm px-7 sm:px-8 py-3.5 font-sans font-medium text-xs sm:text-sm tracking-wide lowercase shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]` |
| Image Frame      | High-impact dominant photo panels (`features-1.jpg`, `features-2.jpg`, `features-3.jpg`) with `min-h-[600px] xl:min-h-[660px] group-hover:scale-105 transition-transform duration-700` |
| Layout Pattern   | Un-symmetrical 7:5 / 5:7 column split matching `features-section.png` where wide clinical photography commands visual focus and text blocks sit balanced in the marble column |

**Pattern notes:**
Directly matches reference design `features-section.png`. Features asymmetrical 58/42 column split, giving photography visual dominance while text sits cleanly balanced in the marble panel. Uses two-tone bold/light typography, right-aligned and left-aligned text blocks towards the seam, and warm ochre gold CTAs.

---

### InteractiveBubbleCursor

File: `components/ui/interactive-cursor.tsx`
Last updated: 2026-09-20

| Property         | Class |
| ---------------- | ----- |
| Outer Bubble     | `rounded-full border border-white/80 bg-white/15 backdrop-blur-[0.5px] mix-blend-difference` |
| Center Micro-Dot | `w-1.5 h-1.5 rounded-full bg-white mix-blend-difference` |
| Bubble Sizes     | Resting: `w-11 h-11`, Hovered: `w-16 h-16` or `w-20 h-20` (with action text), Pressed: `w-8 h-8 scale-90` |
| Animation Loop   | 60fps linear interpolation (`lerpFactor = 0.18`) via `requestAnimationFrame` |
| Target Detection | Automatically expands and displays uppercase badges on `button, a, input, select, [data-cursor]` |
| Accessibility    | Disabled on touch screens via `window.matchMedia('(pointer: fine)')` check |

**Pattern notes:**
Global floating luxury companion cursor. Inverts text, photo colors, and backgrounds dynamically without layout reflows or React re-render lag.

---

### ServicesTopPillars ("Comprehensive Care, One Convenient Location")

File: `features/services/components/services-top-pillars.tsx`
Last updated: 2026-09-20

| Property         | Class |
| ---------------- | ----- |
| Background       | Tactile alabaster marble plate (`marble-texture-3-1.jpg` at 35% opacity, `mix-blend-multiply`) layered over `bg-[#fdfbf8]` with linen sheen (`bg-gradient-to-b from-white/70 via-white/40 to-white/60`), `rounded-3xl p-5 sm:p-7 border border-[#836a2c]/20 hover:border-[#836a2c]/50 hover:shadow-2xl` |
| Arched Portal    | `w-full aspect-[4/3] rounded-t-[2.5rem] rounded-b-xl overflow-hidden bg-surface-container mb-6 shadow-sm border border-outline-variant/30` |
| Typography       | Eyebrow: `text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#836a2c]`, Headline: `font-serif text-3xl sm:text-4xl lg:text-5xl text-[#201815]`, Card Title: `font-serif text-2xl sm:text-3xl text-[#201815]`, Body: `font-sans text-xs sm:text-[13px] text-[#4d4639]` |
| CTA Button       | `border border-[#836a2c]/80 text-[#201815] bg-white/60 backdrop-blur-xs hover:bg-[#836a2c] hover:border-[#836a2c] hover:text-[#fcf9f6] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] py-3.5 px-6 rounded-sm transition-all` |
| Layout Pattern   | 3-column responsive grid (`grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10`) |

**Pattern notes:**
Directly matches Screenshot 1 elevated with tactile alabaster marble backgrounds. Features arched portal photography, subtle warm linen sheen, authoritative serif headers, benefit narrative, and ochre outline buttons.


---

### ServicesRowAccordion (Architectural Split-Word Procedure Rows)

File: `features/services/components/services-row-accordion.tsx`
Last updated: 2026-09-20

| Property         | Class |
| ---------------- | ----- |
| Section Width    | Full-screen width (`w-full border-t border-b border-white/10 overflow-hidden`) edge-to-edge |
| Background       | Dark roasted espresso `bg-[#120b0a] text-[#fcf9f6]` with alabaster marble texture (`marble-texture-3-1.jpg`) at 7% opacity and ambient radial glow |
| Left/Right Wireframes | Geometric polyline (left) and criss-cross diamond chevron (right) SVGs (`opacity-35 scale-100` on hover, `opacity-0 scale-95` idle) |
| Row Interaction  | Idle: collapsed clean title. Hover: expands smoothly to show split title, inline photo with center dot halo, clean subtitle, and dual CTAs |
| Split Title      | `font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-medium` split around embedded thumbnail portal (`h-16 sm:h-20 lg:h-24 w-32 sm:w-44 lg:w-56 border border-[#836a2c]/60 shadow-2xl`) |
| Dot Halo Stamp   | Circular badge with center dot resting atop inline photo (`w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/50 bg-black/60`) |
| Subtitle Text    | Clean single-line sans subtitle in `#d0c5b4]/85` (yellow monospace text removed) |
| Dual CTAs        | Primary: `bg-[#fcf9f6] text-[#201815] hover:bg-[#c4a96a] text-xs font-semibold uppercase rounded-full py-3 px-6`, Secondary: `bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs rounded-full py-3 px-5` |
| Index & Action   | Left: `font-mono text-[11px] sm:text-xs text-[#c4a96a]`, Right: `font-mono text-[11px] text-white/50 group-hover:text-white` with `ArrowUpRight` |

**Pattern notes:**
Directly matches Reference Images 2 & 3 powered by GreenSock GSAP animations. Full-screen width architectural typography with zero initial expanded thumbnails. Hovering a row smoothly slides title words apart with `power3.out` easing while expanding the thumbnail portal from `width: 0` to full frame, animates the inner photo from `scale: 1.3 -> 1`, pops in the signature circular dot halo (`back.out(2)`), reveals the details drawer, and illuminates geometric wireframes on the left and right.

---

### TransformationsStackedSection & TransformationCard (Interactive Before & After Stacking Cards)

File: `features/transformations/components/transformations-stacked-section.tsx` & `features/transformations/components/transformation-card.tsx`
Last updated: 2026-09-20

| Property         | Class / Animation |
| ---------------- | ----------------- |
| Section Canvas   | `bg-surface-container-low` with tactile stone texture (`stone-background-1400.jpg` at 20% opacity, `mix-blend-multiply`), top/bottom hairline dividers, and warm gradient vignette |
| Section Header   | Title: `font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-on-surface`, Subtitle: `font-sans text-sm sm:text-base text-on-surface-variant max-w-2xl` |
| Card Chassis     | 100% opaque solid white backing with alabaster marble texture (`marble-texture-3-1.jpg` at 20% opacity), `rounded-2xl sm:rounded-3xl border border-outline-variant/35 shadow-[0_20px_50px_-12px_rgba(45,33,29,0.18)]`, top hairline gold highlight |
| Composition      | Minimalist 3-column wide rectangular grid: Left (Editorial headline, narrative, procedure indicators, CTA button), Middle (Patient portrait photo in arched frame), Right (`BeforeAfterSlider`) |
| GSAP Pinning     | `ScrollTrigger.create({ pin: true, pinSpacing: true, scrub: 1.2, start: "top top", end: () => "+=" + cards.length * 1.35 * vh })` with `matchMedia("(min-width: 1024px)")` |
| Card Deck Scrub  | Initial dwell on Card 1, slow graceful transition from Card 1 to Card 2, active card slides in from `yPercent: 115 -> 0`, while previous cards scale to `1 - (i-prev)*0.035`, shift `y: -16px`, and dim to reveal stacked physical deck tabs |
| Custom Scrollbar | 8px width, `#fcf9f6` track, `#c4a96a` pill thumb (`hover:bg-[#836a2c]`), `scrollbar-width: thin` |
| Mobile Fallback  | Fluid natural vertical stacked list without viewport pinning for mobile ergonomics |

---

### BeforeAfterSlider (Split Comparison Frame)

File: `features/transformations/components/before-after-slider.tsx`
Last updated: 2026-09-20

| Property         | Class / Animation |
| ---------------- | ----------------- |
| Outer Frame      | `relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden select-none cursor-ew-resize` with `touch-action: none` |
| Split Technique  | CSS polygon clip-path: `clipPath: polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` |
| Divider Line     | 2px solid `bg-white/95` with soft shadow `shadow-[0_0_8px_rgba(0,0,0,0.4)]` |
| Gold Handle Pill | `w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-on-primary border-2 border-white/95 shadow-xl flex items-center justify-center` with `ChevronLeft` and `ChevronRight` |
| Status Badges    | Glassmorphic pills: "BEFORE" (`bg-black/60 text-white backdrop-blur-md border border-white/15`), "AFTER" (`bg-primary/90 text-on-primary backdrop-blur-md border border-white/20`) |
| Drag Engine      | Pointer capture (`onPointerDown`, `onPointerMove`, `onPointerUp`) clamping position between 2% and 98% without layout reflows |

---

### TestimonialsSection & TestimonialCard (Sticky Editorial & Popping Portraits)

File: `features/testimonials/components/testimonials-section.tsx` & `features/testimonials/components/testimonial-card.tsx`
Last updated: 2026-09-20

| Property         | Class / Animation |
| ---------------- | ----------------- |
| Section Canvas   | `bg-surface-container-low` with tactile stone texture (`stone-background-1400.jpg` at 18% opacity, `mix-blend-multiply`), hairline border, and `overflow-x-clip` |
| Sticky Column    | Desktop sticky container `lg:col-span-5 lg:sticky lg:top-28 self-start space-y-6 z-20` (pinned while right stream scrolls) |
| Editorial Title  | Headline: `font-serif text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] text-[#201815] font-normal leading-[1.08] tracking-tight`, with warm ochre gold highlight badge `bg-[#836a2c] text-[#fcf9f6] px-3.5 sm:px-5 py-1 sm:py-1.5 rounded-lg font-serif italic shadow-sm` and pulsing gold dot |
| Google Trust Box | `relative overflow-hidden rounded-2xl border border-[#836a2c]/30 bg-[#fdfbf9] p-5 max-w-sm shadow-[0_12px_32px_-10px_rgba(45,33,29,0.12)]` with tactile alabaster marble plate (`marble-texture-3-1.jpg` at 30% opacity, `contrast(1.1) brightness(1.02)`) and `top-rated-icon.png` |
| Action Button    | Outlined pill `border border-[#836a2c] bg-white/70 px-6 sm:px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#201815] hover:bg-[#836a2c] hover:text-[#fcf9f6] hover:shadow-md active:scale-95 transition-all duration-300` |
| Card Chassis     | 100% solid opaque `#fdfbf9` backing with tactile alabaster marble plate (`marble-texture-3-1.jpg` at 35% opacity, `contrast(1.1) brightness(1.02)`, `mix-blend-multiply`), warm linen sheen overlay, `rounded-2xl sm:rounded-3xl border border-[#836a2c]/30 shadow-[0_14px_40px_-12px_rgba(45,33,29,0.12)] hover:shadow-[0_24px_55px_-12px_rgba(45,33,29,0.22)] hover:border-[#c4a96a]/85` |
| Popping Portrait | Horizontally breaks outside left border: `absolute -left-6 sm:-left-10 md:-left-12 lg:-left-14 top-1/2 -translate-y-1/2 z-20` in arched frame (`rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white ring-4 ring-[#fcf9f6]/95 shadow-[0_16px_36px_-8px_rgba(45,33,29,0.3)]`) with mini gold verification badge |
| Card Padding     | `p-6 sm:p-8 lg:p-10 pl-16 sm:pl-24 md:pl-28 lg:pl-32` to ensure generous clearance for popping portrait |
| Star Rating      | 5 gold stars (`fill-[#c4a96a] text-[#c4a96a]`) + `5.0` mono score |
| Card Typography  | Quote: `font-sans text-sm sm:text-base lg:text-[16.5px] text-[#2c221e] leading-relaxed italic`, Patient Name: `font-serif text-lg sm:text-xl font-medium text-[#201815]`, Treatment: `font-sans text-xs sm:text-[13px] text-[#836a2c] font-medium` |
| Scroll Entrance  | Refined GSAP reveal with `once: true`: card enters with subtle ease (`y: 32 -> 0, opacity: 0 -> 1, duration: 0.65s, power2.out`), portrait slides horizontally (`x: -20 -> 0, scale: 0.95 -> 1, duration: 0.75s, power2.out`), no re-hiding on scroll up |
| Marquee Ticker   | Full-width espresso ribbon (`bg-[#190f0c] text-[#fcf9f6] py-4 sm:py-5 border-y border-[#836a2c]/40`) with 10% marble texture, infinite `.animate-marquee-smooth`, moving sentence `SCHEDULE YOUR APPOINTMENT WITH OUR EXPERT TEAM TODAY`, and ochre gold circle `ArrowUpRight` pills |

**Pattern notes:**
Directly matches user-specified editorial layout with sticky desktop column, horizontally popping portraits, rich filtered marble texture, clean signature attribution (awkward inline badges removed), non-funky entrance reveals, and hospitality-grade infinite moving sentence marquee carousel.


