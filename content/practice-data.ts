import type { PracticeConfig } from "@/lib/types/practice";

export const practiceData: PracticeConfig = {
  id: "novasmile-care",
  name: "Novasmile Care",
  tagline: "Modern dental care, thoughtfully delivered.",
  emergencyHotline: "+1 (415) 890-3450",
  officePhone: "+1 (415) 555-0192",
  email: "care@novasmiledental.com",
  locations: [
    {
      city: "San Francisco",
      state: "CA",
      address: "450 Sutter St, Suite 1800, San Francisco, CA 94108",
    },
    {
      city: "Mountain View",
      state: "CA",
      address: "2500 Hospital Dr, Building 4B, Mountain View, CA 94040",
    },
  ],
  hero: {
    locationTag: "SAN FRANCISCO · MOUNTAIN VIEW",
    headlinePart1: "Modern dental care,",
    headlinePart2: "thoughtfully delivered.",
    subheading:
      "Comprehensive dentistry in calm, well-designed spaces across the Bay Area.",
    primaryCtaText: "BOOK A VISIT",
    secondaryCtaText: "CALL NOW",
  },
  navigation: {
    links: [
      {
        label: "OUR STORY",
        href: "#our-story",
        hasDropdown: false,
      },
      {
        label: "SERVICES",
        href: "#services",
        hasDropdown: true,
        dropdownItems: [
          {
            label: "Preventative & Hygiene",
            href: "#preventative",
            description: "Gentle cleanings, exams & biomimetic cavity prevention",
          },
          {
            label: "Cosmetic & Veneers",
            href: "#cosmetic",
            description: "Handcrafted porcelain veneers & natural smile enhancements",
          },
          {
            label: "Invisalign & Clear Aligners",
            href: "#invisalign",
            description: "Discreet orthodontic alignment tailored to your facial symmetry",
          },
          {
            label: "Dental Implants",
            href: "#implants",
            description: "Precision-guided, permanent titanium & ceramic restoration",
          },
          {
            label: "Comfort Sedation",
            href: "#sedation",
            description: "Zero-anxiety appointments with mindful sedation options",
          },
        ],
      },
      {
        label: "PATIENTS",
        href: "#patients",
        hasDropdown: true,
        dropdownItems: [
          {
            label: "First Visit Ritual",
            href: "#first-visit",
            description: "What to expect during your unhurried consultation",
          },
          {
            label: "Comfort Amenities",
            href: "#amenities",
            description: "Noise-canceling headphones, warm blankets & warm teas",
          },
          {
            label: "Insurance & Financing",
            href: "#financing",
            description: "Transparent coverage, 0% APR plans & direct PPO billing",
          },
          {
            label: "Patient Stories",
            href: "#reviews",
            description: "Real reviews and smile transformations from our community",
          },
        ],
      },
      {
        label: "CONTACT",
        href: "#contact",
        hasDropdown: true,
        dropdownItems: [
          {
            label: "San Francisco Studio",
            href: "#sf-office",
            description: "450 Sutter St • Union Square",
          },
          {
            label: "Mountain View Studio",
            href: "#mv-office",
            description: "2500 Hospital Dr • Silicon Valley",
          },
          {
            label: "Emergency Care",
            href: "#emergency",
            description: "Same-day urgent relief appointments available daily",
          },
        ],
      },
    ],
    ctaText: "BOOK NOW",
  },
  address: {
    street: "450 Sutter St",
    suite: "Suite 1800",
    city: "San Francisco",
    stateProvince: "CA",
    postalCode: "94108",
    mapCoordinates: { lat: 37.7897, lng: -122.4074 },
    directionsTip: "Convenient validated parking adjacent to Union Square.",
  },
  hours: [
    { dayRange: "Monday – Thursday", hours: "7:30 AM – 6:00 PM", isOpenToday: true },
    { dayRange: "Friday", hours: "8:00 AM – 4:00 PM", isOpenToday: false },
    { dayRange: "Saturday", hours: "9:00 AM – 2:00 PM (By Appt)", isOpenToday: false },
  ],
  leadDentist: {
    name: "Dr. Elena Vance, DDS",
    credentials: "DDS, FAGD, AACD",
    role: "Founding Lead Clinician",
    experienceYears: 14,
    education: [
      "Harvard School of Dental Medicine — Doctor of Dental Surgery",
      "UCSF Medical Center — Advanced General Dentistry Residency",
      "American Academy of Cosmetic Dentistry (AACD) Fellow",
    ],
    bio: "Dr. Vance founded Novasmile Care to redefine the healthcare experience — combining biocompatible clinical precision with the serene calm of an intentional wellness sanctuary.",
    personalPhilosophy:
      "Dentistry shouldn't be something you endure. When modern technology meets unhurried empathy, clinical care transforms into a peaceful wellness ritual.",
    photoUrl: "/zen-hero-room.avif",
  },
  trustMetrics: {
    googleRating: 5.0,
    reviewCount: 382,
    smilesTransformed: 4200,
    satisfactionRate: 99.4,
  },
};
