---
name: Novasmile Dental Care
colors:
  surface: '#fcf9f6'
  surface-dim: '#dcdad7'
  surface-bright: '#fcf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f0'
  surface-container: '#f0edea'
  surface-container-high: '#eae8e5'
  surface-container-highest: '#e5e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#4d4639'
  inverse-surface: '#31302f'
  inverse-on-surface: '#f3f0ed'
  outline: '#7e7667'
  outline-variant: '#d0c5b4'
  surface-tint: '#735b1e'
  primary: '#695216'
  on-primary: '#ffffff'
  primary-container: '#836a2c'
  on-primary-container: '#ffefd1'
  inverse-primary: '#e2c37b'
  secondary: '#715c25'
  on-secondary: '#ffffff'
  secondary-container: '#fedf9b'
  on-secondary-container: '#78622a'
  tertiary: '#64504b'
  on-tertiary: '#ffffff'
  tertiary-container: '#7e6863'
  on-tertiary-container: '#ffece8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdf98'
  primary-fixed-dim: '#e2c37b'
  on-primary-fixed: '#251a00'
  on-primary-fixed-variant: '#594407'
  secondary-fixed: '#fedf9b'
  secondary-fixed-dim: '#e0c382'
  on-secondary-fixed: '#251a00'
  on-secondary-fixed-variant: '#58440f'
  tertiary-fixed: '#f9dcd6'
  tertiary-fixed-dim: '#dbc1ba'
  on-tertiary-fixed: '#271814'
  on-tertiary-fixed-variant: '#55423e'
  background: '#fcf9f6'
  on-background: '#1b1c1a'
  surface-variant: '#e5e2df'
typography:
  display:
    fontFamily: EB Garamond
    fontSize: 56px
    fontWeight: '500'
    lineHeight: 64px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 40px
    fontWeight: '500'
    lineHeight: 48px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 30px
    fontWeight: '500'
    lineHeight: 38px
  headline-md:
    fontFamily: EB Garamond
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  headline-sm:
    fontFamily: EB Garamond
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
---

## Brand & Style

This design system embodies a mindful departure from clinical anxiety, transmuting the conventional dental encounter into a serene, hospitality-inspired wellness ritual. Designed for discerning patients seeking comprehensive care in an atmosphere of warmth and elevated calm, the interface feels restorative, trustworthy, and organic.

The design movement blends **Warm Minimalism** with subtle **Tactile Craft**. It emphasizes generous negative space, gentle linen-inspired textural contrasts, and deliberate typographic rhythm. Avoid harsh sterile whites, sharp dropshadows, or cold medical blues; every visual element evokes natural materials like warm sand, aged ochre, and roasted espresso woods.

## Colors

The palette is rooted in grounding earth elements, balanced to promote calm while sustaining clear transactional clarity.

- **Primary Accent (`#836A2C` / Deep Ochre Gold):** Used for primary conversion touchpoints, active states, and grounding brand elements where WCAG AA contrast against light linens is mandatory.
- **Secondary Accent (`#C4A96A` / Soft Ochre):** Applied for decorative highlights, subtle badge backgrounds, and warm secondary interactive cues.
- **Deep Charcoal Espresso Family (`#33231F`, `#3D2E2A`, `#4A3A34`):** Replaces harsh pure black for all typography, structured line dividers, and high-emphasis framing. Provides a warm, comforting legibility.
- **Linen & Sand Neutrals (`#FDFAF7`, `#F8F2EB`, `#F2E8DE`, `#E5E7EB`):** Form the architectural foundation. The core canvas rests on `#FDFAF7`, transitioning through `#F8F2EB` and `#F2E8DE` to create soft layered cards and tactile surfaces without relying on heavy shadows.

## Typography

The typographic expression unites classical editorial grace with contemporary ergonomic readability:

- **EB Garamond** acts as the primary voice of sanctuary, authority, and warmth. Its organic, humanist proportions lend dental treatments and clinic messaging a bespoke, high-end private practice quality.
- **Plus Jakarta Sans** anchors interactive elements, appointment flows, medical descriptions, and microcopy. Its gentle terminal curves match the calm brand aura while sustaining pristine legibility across small mobile displays.
- Strict visual separation is enforced: headings must never be paired with aggressive all-caps treatments; labels may use slight tracking to enhance legibility in form contexts.

## Layout & Spacing

This design system uses a flexible 12-column grid layout on desktop that collapses to 8 columns on tablet and 4 columns on mobile devices.

- **Negative Space as Medicine:** Generous vertical padding creates breathing room, intentionally reducing visual clutter and patient cognitive strain during appointment booking and service discovery.
- **Rhythm & Alignments:** Outer container bounds conform to a maximum width of `1280px` for optimal viewing distance on large displays.
- **Breakpoints:**
  - `Mobile (< 768px)`: Gaps collapse to `space-md` (16px), outer margins set to `1.25rem`. Single-column stack for scheduling workflows and services.
  - `Tablet (768px - 1024px)`: Fluid 8-column layout with `1.5rem` gutters.
  - `Desktop (> 1024px)`: Full 12-column grid with `3rem` section margins and comfortable lateral offsets.

## Elevation & Depth

Visual hierarchy is communicated through **Tonal Layering** and **Linen Surface Subtlety** rather than elevated cast shadows:

- **Surface Layering:** Depth is primarily established by placing lighter cards (`#FDFAF7`) atop slightly warmer foundational planes (`#F8F2EB` and `#F2E8DE`).
- **Ambient Tinted Shadows:** When interactive floating panels (such as booking drawers, datepickers, or popovers) require separation, use a diffused, warm espresso tint:
  - `box-shadow: 0 12px 32px -8px rgba(51, 35, 31, 0.08), 0 4px 12px -2px rgba(51, 35, 31, 0.04);`
- **Subtle Organic Borders:** Low-contrast hairline outlines (`1px solid rgba(51, 35, 31, 0.08)`) frame form fields and cards cleanly without clinical sharpness.

## Shapes

The geometric architecture balances modern refinement with organic calm:

- Standard components (buttons, text inputs, appointment selectors) carry an initial corner radius of `0.5rem` (`rounded-md`).
- Content modules and clinic highlight cards utilize `1rem` (`rounded-lg`), creating an inviting, approachable contour.
- Modal dialogues, treatment packages, and specialty panels utilize `1.5rem` (`rounded-xl`) to accentuate a soft architectural sanctuary feel.
- Fully rounded pills are reserved exclusively for contextual status chips, operational tags (e.g., "Accepting New Patients"), and doctor profile badges.

## Components

### Buttons
- **Primary:** Filled with `#836A2C`, crisp `#FDFAF7` text, `0.5rem` radius, subtle transition to `#6D5724` on hover. Padding: `0.75rem 1.75rem`.
- **Secondary / Outline:** Border `1.5px solid #836A2C`, color `#836A2C`, background transparent. Hover transitions to `rgba(196, 169, 106, 0.12)`.
- **Tertiary (Subtle):** Deep charcoal espresso text (`#33231F`) with an animated warm ochre underline on focus/hover.

### Input Fields & Selectors
- Background filled with `#FDFAF7` surrounded by a `1px solid rgba(51, 35, 31, 0.12)` border.
- Floating labels set in `label-sm` with `#574139`.
- Active focus rings use a soft double ring: `1px solid #836A2C` with an ambient glow `0 0 0 3px rgba(196, 169, 106, 0.25)`.

### Cards & Service Panels
- Built over `#F8F2EB` or `#FDFAF7` with fine `rgba(51, 35, 31, 0.06)` border containment.
- Internal padding calibrated generously with `space-lg`.
- Top-level treatment summaries feature an organic accent band or warm ochre icon glyph.

### Chips & Badges
- Compact pill-shaped containers (`border-radius: 9999px`) utilizing `#F2E8DE` background with `#4A3A34` text.
- Featured states adopt a delicate `#C4A96A` background tint at `20%` opacity with `#836A2C` bold typographic labels.

### Checkboxes & Radio Buttons
- Custom circular radios and rounded square checkboxes (`roundedness: 4px`).
- Inactive state: `1.5px solid #574139` with warm neutral core.
- Checked state: Filled with `#836A2C`, displaying an off-white `#FDFAF7` check/dot indicator.

### Specialized Clinic Components
- **Appointment Slot Matrix:** Time cards arranged in responsive grids displaying morning, afternoon, and evening availability using `#F8F2EB` tiles with soft ochre border transitions upon selection.
- **Practitioner Bio Cards:** Portrait frames with gentle `rounded-lg` corners, quiet serif designations, and muted specialty tags.