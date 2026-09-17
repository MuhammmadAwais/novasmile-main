<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version uses Next.js 16 (App Router) and React 19 with breaking changes — APIs, conventions, and file structures differ from older versions. Read relevant guides in `node_modules/next/dist/docs/` before writing code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## NovaSmile Read Strategy (Token-Efficient & Domain-Specific)

Do not read all 9 context files on every task. Read strictly what your current task touches:

1. **Always Check First:**
   - `context/progress-tracker.md` — Current milestone, active feature, completed items.
   - `context/architecture.md` — Section modularity, client/server boundaries, dynamic clinic data schema.

2. **When Building or Styling UI:**
   - `DESIGN.md` & `context/ui-tokens.md` — Exact Tailwind v4 `@theme` tokens (Linen, Soft Ochre, Deep Ochre Gold, Roasted Espresso).
   - `context/ui-rules.md` — Font Pairings (`EB Garamond` serif display/headlines + `Plus Jakarta Sans` UI/body), button hierarchies, mobile sticky CTAs.
   - `context/ui-registry.md` — Baseline and existing component patterns to match before creating new ones.
   - `context/designs/` — Visual references, mockups, or inspiration screenshots provided for sections.

3. **When Writing Logic, Forms, State, or Dynamic Data:**
   - `context/library-docs.md` — Next.js 16, React 19 hooks, React Hook Form + Zod, Lucide icons, Tailwind v4 patterns.
   - `context/code-standards.md` — TypeScript strictness, component isolation, accessibility, zero hardcoded content.

4. **When Starting a New Feature or Verifying Scope:**
   - `context/build-plan.md` — The phased, visual-first roadmap for NovaSmile Dental Care.
   - `context/project-overview.md` — Brand philosophy, patient acquisition psychology, dentist sales demo objectives.

---

## Rules That Never Change

- **Zero Hardcoded Hex / Raw Colors:** Never use raw hex values (`#836a2c`) or arbitrary utility colors (`bg-amber-700`, `bg-blue-500`) in markup. Use `@theme` tokens exclusively (`bg-primary`, `text-on-surface`, `bg-surface-container`, `border-outline-variant`).
- **Warm Minimalism Over Clinical Coldness:** Strictly follow `DESIGN.md` — avoid harsh clinical whites and stark medical blues. The interface must feel like a tranquil, hospitality-inspired wellness sanctuary (warm sand, linen `#fcf9f6`, deep ochre `#836a2c`, charcoal espresso `#33231f`).
- **Strict Typographic Roles:** `EB Garamond` is reserved for editorial headlines, display titles, and doctor quotations. `Plus Jakarta Sans` is strictly for body copy, microcopy, form controls, and CTAs. Headings must never be uppercase or aggressively tracked.
- **Frictionless CTA Architecture:** Every viewport on desktop and mobile must provide an effortless path to conversion:
  - Sticky / prominent header with "Book Appointment" and emergency call button.
  - Hero dual-action CTAs (Consultation booking + Treatment exploration).
  - Quick-booking bar / Appointment slot matrix.
  - Interactive appointment booking drawer/modal accessible from all service cards.
- **Turnkey Personalization Invariant:** Never hardcode practice-specific details (clinic name, dentist name, address, phone numbers, hours, service list, reviews) directly into components. Always consume from `content/practice-data.ts` so the entire demo can be re-branded for any dentist pitch in minutes.
- **Living Registry & Imprint:** Run `/imprint` or update `context/ui-registry.md` after completing any UI component to ensure spacing, borders, and radius never drift.
- **Break Doom-Loops:** If the same issue persists after one corrective prompt — stop immediately and run `/recover`.

---

## Available Skills

- `/architect` — before any complex feature or section. Think like a senior engineer before writing code.
- `/imprint` — after any new UI component. Capture visual patterns into `ui-registry.md`.
- `/review` — before demoing or when an implementation needs architectural verification.
- `/recover` — when code breaks after one failed correction. Diagnose failure mode fast.
- `/remember save` — when a session ends to compress memory for next time.
- `/remember restore` — when starting a new session to pick up right where you left off.