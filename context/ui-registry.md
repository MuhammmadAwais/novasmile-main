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

_Components will be imprinted here as they are constructed during the build._
