# UI Tokens — NovaSmile Dental Care

Design tokens extracted directly from [`DESIGN.md`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/DESIGN.md). All colors, surfaces, typography scales, radii, and spacing conform to the **Warm Minimalism with subtle Tactile Craft** aesthetic.

---

## How to Use with Tailwind CSS v4

This project utilizes **Tailwind CSS v4**. Tokens are defined using the `@theme` directive in `app/globals.css`.
Tailwind v4 automatically generates utility classes from these variables:

- `--color-primary` → `bg-primary`, `text-primary`, `border-primary`
- `--color-surface` → `bg-surface`, `text-surface`
- `--color-surface-container` → `bg-surface-container`

```tsx
// Correct — uses design token utilities
<button className="bg-primary text-on-primary hover:bg-primary-container rounded-md px-6 py-3">
  Book Visit
</button>

// Correct — tonal layered card with hairline border
<div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-6">
  ...
</div>

// NEVER — hardcoded hex values
<div className="bg-[#FDFAF7] text-[#1b1c1a]">

// NEVER — raw Tailwind generic color classes
<button className="bg-amber-600 text-white">
```

---

## Complete `@theme` Definition (`app/globals.css`)

```css
@import "tailwindcss";

@theme {
  /* Typography Families */
  --font-serif: "EB Garamond", serif;
  --font-sans: "Plus Jakarta Sans", sans-serif;

  /* Brand Ochre Gold Accents */
  --color-primary: #695216;
  --color-on-primary: #ffffff;
  --color-primary-container: #836a2c;
  --color-on-primary-container: #ffefd1;
  --color-inverse-primary: #e2c37b;
  --color-primary-fixed: #ffdf98;
  --color-primary-fixed-dim: #e2c37b;
  --color-on-primary-fixed: #251a00;
  --color-on-primary-fixed-variant: #594407;

  /* Secondary Soft Ochre Accents */
  --color-secondary: #715c25;
  --color-on-secondary: #ffffff;
  --color-secondary-container: #fedf9b;
  --color-on-secondary-container: #78622a;
  --color-secondary-fixed: #fedf9b;
  --color-secondary-fixed-dim: #e0c382;

  /* Tertiary Warm Rose Espresso */
  --color-tertiary: #64504b;
  --color-on-tertiary: #ffffff;
  --color-tertiary-container: #7e6863;
  --color-on-tertiary-container: #ffece8;

  /* Surfaces & Linen Backgrounds */
  --color-background: #fcf9f6;
  --color-on-background: #1b1c1a;
  --color-surface: #fcf9f6;
  --color-surface-dim: #dcdad7;
  --color-surface-bright: #fcf9f6;
  --color-surface-container-lowest: #ffffff;
  --color-surface-container-low: #f6f3f0;
  --color-surface-container: #f0edea;
  --color-surface-container-high: #eae8e5;
  --color-surface-container-highest: #e5e2df;
  --color-surface-variant: #e5e2df;

  /* Text & Inverses */
  --color-on-surface: #1b1c1a;
  --color-on-surface-variant: #4d4639;
  --color-inverse-surface: #31302f;
  --color-inverse-on-surface: #f3f0ed;

  /* Outlines & Dividers */
  --color-outline: #7e7667;
  --color-outline-variant: #d0c5b4;
  --color-surface-tint: #735b1e;

  /* Error & Alerts */
  --color-error: #ba1a1a;
  --color-on-error: #ffffff;
  --color-error-container: #ffdad6;
  --color-on-error-container: #93000a;

  /* Radii */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
  --radius-full: 9999px;
}
```

---

## Typography Hierarchy

| Style Token      | Font Family          | Size   | Weight | Line Height | Letter Spacing | Usage                                    |
| ---------------- | -------------------- | ------ | ------ | ----------- | -------------- | ---------------------------------------- |
| `display`        | `EB Garamond`        | 56px   | 500    | 64px        | -0.02em        | Hero main headline                       |
| `headline-lg`    | `EB Garamond`        | 40px   | 500    | 48px        | -0.015em       | Major section titles (desktop)           |
| `headline-md`    | `EB Garamond`        | 28px   | 500    | 36px        | normal         | Subsection headings, card group titles   |
| `headline-sm`    | `EB Garamond`        | 22px   | 600    | 30px        | normal         | Service card titles, modal headings      |
| `body-lg`        | `Plus Jakarta Sans`  | 18px   | 400    | 28px        | normal         | Hero lead paragraph, testimonial quotes  |
| `body-md`        | `Plus Jakarta Sans`  | 15px   | 400    | 24px        | normal         | Standard content, service descriptions   |
| `body-sm`        | `Plus Jakarta Sans`  | 13px   | 400    | 20px        | normal         | Captions, footnote notes, input hints    |
| `label-lg`       | `Plus Jakarta Sans`  | 14px   | 600    | 20px        | 0.02em         | Button text, tab titles, nav links       |
| `label-md`       | `Plus Jakarta Sans`  | 12px   | 600    | 16px        | 0.04em         | Badges, status pills, table headers      |
| `label-sm`       | `Plus Jakarta Sans`  | 11px   | 600    | 14px        | 0.05em         | Overline categories, micro tags          |

---

## Elevation & Depth (Ambient Tinted Shadows)

Rather than stark cold grey dropshadows, NovaSmile utilizes warm, diffused espresso shadows:

```css
/* Card resting */
box-shadow: 0 4px 12px -2px rgba(51, 35, 31, 0.04);

/* Floating panels, dropdowns, booking drawer */
box-shadow: 0 12px 32px -8px rgba(51, 35, 31, 0.08), 0 4px 12px -2px rgba(51, 35, 31, 0.04);

/* Interactive focus glow */
box-shadow: 0 0 0 3px rgba(196, 169, 106, 0.25);
```

---

## Spacing & Rhythm

- `space-xs`: `0.25rem` (4px)
- `space-sm`: `0.5rem` (8px)
- `space-md`: `1rem` (16px)
- `space-lg`: `1.75rem` (28px)
- `space-xl`: `3rem` (48px)
- **Container Max-Width**: `1280px` centered with responsive gutter padding (`1rem` on mobile, `1.5rem` on tablet, `3rem` on desktop).
