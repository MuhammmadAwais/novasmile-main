# UI Rules — NovaSmile Dental Care

Strict visual and behavioral rules for building NovaSmile UI. Derived from [`DESIGN.md`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/DESIGN.md). Every component built must adhere to these standards to maintain the serenity, warmth, and high-conversion efficacy of the platform.

---

## 1. Typography & Font Pairing

### The Dual-Font Rule
- **Display & Headlines (`EB Garamond`):** Used exclusively for editorial headlines (`h1`, `h2`, `h3`), section introductions, and doctor testimonial quotations. Conveys medical authority, quiet luxury, and tranquil bedside manner.
- **Interface & Body (`Plus Jakarta Sans`):** Used for all body text, navigation links, buttons, form fields, badges, and time slot indicators. Conveys ergonomic clarity, approachable modern healthcare, and pristine legibility down to mobile screens.

### Typographic Invariants
- **No Aggressive All-Caps:** Never render headlines in all-uppercase. It triggers patient tension and clinical anxiety. Use editorial Title Case or Sentence case.
- **Letter Spacing:** Apply slight tracking (`letter-spacing: 0.02em` - `0.05em`) exclusively to uppercase micro-labels (`label-sm`, `label-md`), never to serif headings.

---

## 2. Layout & Negative Space

- **Max Container Width:** `1280px` centered horizontally (`max-w-7xl mx-auto`).
- **Negative Space as Medicine:** Generous vertical section padding (`py-16` to `py-24` / 64px to 96px). Crowded layouts create subconscious anxiety in dental patients. Air and whitespace evoke cleanliness, calm, and precision.
- **Grid Structure:**
  - Mobile (<768px): Single-column stack, `1rem` outer horizontal margins.
  - Tablet (768px–1024px): 8-column layout with `1.5rem` gutters.
  - Desktop (>1024px): 12-column grid with `3rem` section margins.

---

## 3. Elevation & Tonal Layering

- **No Heavy Cast Shadows:** Never use harsh, dark, multi-directional dropshadows (`shadow-2xl` with black).
- **Tonal Layering First:** Depth must be created by placing lighter cards (`#ffffff` or `#fcf9f6`) over slightly warmer foundational surfaces (`#f6f3f0` or `#f0edea`).
- **Hairline Organic Borders:** Frame cards and form fields with delicate, low-contrast hairline borders:
  ```css
  border: 1px solid rgba(51, 35, 31, 0.08);
  ```
- **Ambient Warm Shadows:** When drawers, floating menus, or popovers float above the page, use warm espresso-tinted shadows:
  ```css
  box-shadow: 0 12px 32px -8px rgba(51, 35, 31, 0.08), 0 4px 12px -2px rgba(51, 35, 31, 0.04);
  ```

---

## 4. Component Patterns

### Buttons
1. **Primary Button:**
   - Background: `bg-primary` (`#695216` / `#836a2c`).
   - Text: `text-on-primary` (`#ffffff`), `font-medium`, `text-sm` (14px).
   - Corner Radius: `rounded-md` (`0.5rem`).
   - Padding: `px-7 py-3` (`0.75rem 1.75rem`).
   - Hover: Transitions smoothly to `#6D5724` with gentle lift (`hover:-translate-y-0.5 transition-all`).
2. **Secondary / Outline Button:**
   - Border: `border border-primary text-primary bg-transparent`.
   - Hover: `hover:bg-secondary-container/20`.
3. **Tertiary / Text Button:**
   - Color: `text-on-surface` with animated ochre underline on hover.

### Inputs & Selectors
- Background: `bg-surface-container-lowest` (`#ffffff`).
- Border: `border border-outline-variant/50`.
- Focus State: Dual-layer ochre glow: `focus:outline-none focus:border-primary focus:ring-3 focus:ring-secondary/25`.
- Floating labels or clear contextual microcopy in `text-xs text-on-surface-variant`.

### Service & Content Cards
- Background: `bg-surface-container-lowest` or `bg-surface-container-low`.
- Padding: `p-6` to `p-8`.
- Corner Radius: `rounded-lg` (`1rem`).
- Border: `border border-outline-variant/30`.

### Pills & Status Badges
- Corner Radius: `rounded-full`.
- Default: `bg-surface-container text-on-surface-variant text-xs px-3 py-1 font-medium`.
- Featured / Active: `bg-secondary-container/30 text-primary border border-secondary/30`.

---

## 5. CTA & Conversion Invariants

1. **Sticky Header:** The header stays fixed or pinned with backdrop-blur, keeping the primary "Book Appointment" CTA accessible on every scroll depth.
2. **Persistent Mobile Booking Strip:** On viewports `< 768px`, a fixed bottom bar offers instant 1-tap options:
   - "Call Clinic" (triggers `tel:` dialer).
   - "Book Visit" (opens interactive booking drawer).
3. **Frictionless Booking Drawer:** Clicking any booking trigger opens a step-by-step drawer with pre-selected service context rather than dumping the user into a generic 10-field contact form.
