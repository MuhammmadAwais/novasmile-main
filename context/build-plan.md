# Build Plan — NovaSmile Dental Care

## Core Principle

**Visual-first, conversion-engineered implementation.** Every section is built with complete mock clinic data from `content/practice-data.ts`, visually verified against `DESIGN.md` (and any reference designs provided in `context/designs/`), and imprinted into `ui-registry.md` before moving to the next.

---

## Phase 1 — Foundation & Design System Setup

### 01 Tokens & Typography Initialization
- Configure `app/globals.css` with exact Tailwind CSS v4 `@theme` tokens matching `DESIGN.md` (Linen surfaces, Deep Ochre Gold `#836a2c`, Charcoal Espresso typography `#33231f`, hairlines, and ambient shadows).
- Configure `app/layout.tsx` with self-hosted Google Fonts (`EB Garamond` and `Plus Jakarta Sans`).
- Establish `lib/types.ts` defining `PracticeConfig`, `Treatment`, `TimeSlot`, `Testimonial`, `BeforeAfterCase`, and `FAQItem`.
- Populate `content/practice-data.ts` with rich clinic demo data (NovaSmile Dental Care, Dr. Elena Vance DDS, full service menu, patient stories, hours, and contact information).

---

## Phase 2 — Header & Conversion Shell

### 02 Announcement & Emergency Bar
- Top utility strip featuring operating hours, clinic address, and 1-tap emergency dental phone call trigger.
- Subtle warm linen backdrop (`bg-surface-container-low`) with crisp espresso micro-text.

### 03 Sticky Navigation & Mobile Drawer
- Glassmorphic pinned navbar with clinic logo mark, navigation links (Treatments, Our Care Philosophy, Smile Gallery, Meet Dr. Vance, Patient Reviews).
- Prominent Primary CTA button: "Book Appointment".
- Accessible slide-out mobile menu (`MobileMenu.tsx`) with 1-tap call and booking triggers.
- Sticky mobile conversion footer (`StickyMobileCTA.tsx`) visible on scroll on small screens.

---

## Phase 3 — Hero Section & Trust Architecture

### 04 Sanctuary Hero
- Large editorial display title in `EB Garamond` emphasizing gentle, anxiety-free dental excellence.
- Calming subheading reassuring nervous patients.
- Dual Conversion CTAs:
  - Primary: "Book Consultation" (opens interactive booking drawer).
  - Secondary: "Explore Treatments" (smooth-scrolls to treatment grid).
- Floating Trust Pills / Badges:
  - 5.0 Star Google Rating (380+ verified reviews).
  - "Accepting New Patients" active badge.
  - "100% Pain-Free Promise" comfort pledge.
- High-resolution sanctuary clinical image (warm ambient dental lounge, natural light, no scary drills).

### 05 Quick Appointment Filter Strip
- Rapid horizontal booking widget docked beneath hero:
  - Dropdown 1: Treatment Category.
  - Dropdown 2: Preferred Time (Morning / Afternoon / Evening).
  - Dropdown 3: Provider Preference.
  - Action Button: "Check Available Slots" → pre-fills and launches the booking drawer.

---

## Phase 4 — Practice Philosophy & Treatments Catalog

### 06 Philosophy & Gentle Care Statement
- Editorial section articulating the "hospitality-grade wellness ritual" approach.
- 3 Pillar cards: Mindful Sedation, Biological Dentistry, Unrushed Consultations.

### 07 Comprehensive Treatment Grid & Detail Modal
- Categorized service cards (Preventative Care, Cosmetic Makeovers, Dental Implants, Invisalign, Restorative, Emergency).
- Each card features: Icon, treatment name in `EB Garamond`, brief description, estimated duration, starting investment, and "Learn More & Book" button.
- Interactive Treatment Modal (`TreatmentModal.tsx`): Opens upon clicking "Learn More", displaying procedure walkthrough, pain management protocol, and direct booking trigger.

---

## Phase 5 — Visual Proof & Modern Technology

### 08 Interactive Before & After Smile Gallery
- High-impact visual transformation showcase.
- Interactive comparison slider (`BeforeAfterSlider.tsx`) allowing users to drag the divider to view Before vs. After results (Veneers, Teeth Whitening, Alignment).
- Case details badge (procedure name, duration, and patient satisfaction quote).

### 09 Modern Comforts & Anxiety-Free Technology
- 4-card feature layout highlighting modern patient-comfort amenities:
  - 3D Digital Impressions (no messy putty).
  - Computer-Guided Painless Injections.
  - In-Chair Streaming (Noise-canceling headphones & Netflix).
  - Comprehensive Sedation Options (Nitrous oxide & oral conscious sedation).

---

## Phase 6 — Clinical Authority & Social Proof

### 10 Lead Dentist Profile & Clinical Team
- Portrait of Dr. Elena Vance, DDS with credentials (ADA, AACD, Harvard School of Dental Medicine).
- Personal message regarding patient comfort and compassionate bedside care.
- Accreditation trust logos and clinical milestones.

### 11 Patient Stories & Google Reviews Carousel
- Real patient testimonial cards with 5-star ratings, treatment tag, and patient photo/initials.
- Live-style Google Review summary widget with direct review link.

---

## Phase 7 — Interactive Appointment Booking Drawer

### 12 Step-by-Step Booking Experience (`BookingDrawer.tsx`)
- Slide-over drawer with backdrop blur.
- **Step 1:** Select Treatment & Reason for Visit.
- **Step 2:** Interactive Slot Matrix (`SlotMatrix.tsx`) — calendar date picker + responsive grid showing Morning (8:00 AM - 12:00 PM), Afternoon (1:00 PM - 5:00 PM), and Evening (5:00 PM - 8:00 PM) availability.
- **Step 3:** Patient Details form with anxiety flag checkbox ("I experience dental anxiety and request extra gentle care").
- **Confirmation State:** Warm success screen with appointment recap and add-to-calendar option.

---

## Phase 8 — Transparent Pricing, FAQ & Office Details

### 13 Insurance & Flexible Financing
- Direct billing list (Delta Dental, Cigna, MetLife, Sun Life, Blue Cross, etc.).
- Flexible 0% interest monthly financing breakdown.

### 14 Frequently Asked Questions (Accordion)
- Expandable questions addressing common patient fears: pain management, emergency visits, insurance coverage, and first appointment expectations.

### 15 Clinic Location, Hours & Interactive Map
- Practice address, parking availability, public transit guidance, and interactive Google Map iframe.
- Full operating hours table.

### 16 Practice Footer
- Complete footer with brand mark, emergency protocols, ADA/CDA member badges, navigation links, and copyright.

---

## Phase 9 — Verification, Polish & Registry Imprint

### 17 Quality Assurance & Responsiveness
- Test on 320px, 375px, 768px, 1024px, and 1440px displays.
- Verify zero raw hex colors or unapproved classes.
- Ensure all interactive elements (drawer, modals, accordions, slider) perform smoothly with zero console errors.
- Run `/imprint` to populate `ui-registry.md` with every built component.
