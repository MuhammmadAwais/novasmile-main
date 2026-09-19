import type { PracticeConfig } from "@/lib/types/practice";

export const practiceData: PracticeConfig = {
  id: "novasmile-care",
  name: "Novasmile Care",
  tagline: "Modern dental care, thoughtfully delivered.",
  emergencyHotline: "+1 (415) 890-3450",
  officePhone: "+1 (415) 555-0192",
  email: "care@novasmiledental.com",
  announcement: {
    badgeText: "EMERGENCY CARE",
    emergencyNotice: "Same-Day Emergency Dental Relief Slots Available Today",
    actionText: "Reserve Emergency Slot",
  },
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
    smilesTransformed: 7500,
    satisfactionRate: 99.4,
  },

  /* 4 Milestone Cards directly matching reference design emergency-bar-section.png */
  milestones: [
    {
      label: "Patients Seen",
      value: "7,500+",
      subtext: "Across the Bay Area",
    },
    {
      label: "Crowns & Veneers Completed",
      value: "10,000+",
      subtext: "Master porcelain artistry",
    },
    {
      label: "Dental Implants Restored",
      value: "5,000+",
      subtext: "3D-guided surgical precision",
    },
    {
      label: "Full Arches Completed",
      value: "2,000+",
      subtext: "Transformative rehabilitation",
    },
  ],

  /* Accreditations & Association Partners directly matching emergency-bar-section.png */
  affiliations: [
    {
      id: "ada-partner",
      name: "Alberta Dental Association",
      subtitle: "Member in Good Standing",
      category: "association",
      acronym: "ADA",
    },
    {
      id: "cdsa-partner",
      name: "CDSA",
      subtitle: "College of Dental Surgeons of Alberta",
      category: "college",
      acronym: "CDSA",
    },
    {
      id: "rcdc-partner",
      name: "RCDC",
      subtitle: "The Royal College of Dentists of Canada",
      category: "college",
      acronym: "RCDC",
    },
    {
      id: "asds-partner",
      name: "Alberta Society of Dental Specialists",
      subtitle: "Specialist Accredited",
      category: "specialty",
      acronym: "ASDS",
    },
    {
      id: "aacd-partner",
      name: "American Academy of Cosmetic Dentistry",
      subtitle: "Accredited Fellow Member",
      category: "association",
      acronym: "AACD",
    },
    {
      id: "delta-partner",
      name: "Delta Dental Premier",
      subtitle: "Direct PPO Billing Partner",
      category: "insurance",
      acronym: "DELTA",
    },
    {
      id: "cigna-partner",
      name: "Cigna Dental Network",
      subtitle: "In-Network Preferred Provider",
      category: "insurance",
      acronym: "CIGNA",
    },
    {
      id: "metlife-partner",
      name: "MetLife Dental",
      subtitle: "Direct Electronic Claims",
      category: "insurance",
      acronym: "METLIFE",
    },
  ],

  /* Authentic Patient Testimonials Carousel Data */
  testimonials: [
    {
      id: "test-1",
      author: "Julianne C.",
      location: "San Francisco, CA",
      treatment: "Porcelain Veneers & Smile Makeover",
      rating: 5,
      date: "2 weeks ago",
      avatarInitial: "J",
      quote:
        "I used to get crippling panic attacks whenever I smelled a dental office. Novasmile feels completely different — like stepping into a serene Japanese spa. Dr. Vance gave me noise-canceling headphones, warm chamomile tea, and completely transformed my front teeth with zero discomfort.",
    },
    {
      id: "test-2",
      author: "Marcus Sterling",
      location: "Mountain View, CA",
      treatment: "Full Arch Dental Implant Restoration",
      rating: 5,
      date: "1 month ago",
      avatarInitial: "M",
      quote:
        "The level of clinical precision here is unmatched. The 3D scan took two minutes without any gooey trays. My full arch implants feel completely natural, and I was back at work the very next morning. Best healthcare investment I have ever made.",
    },
    {
      id: "test-3",
      author: "Sophia Lin",
      location: "Palo Alto, CA",
      treatment: "Invisalign & Teeth Whitening",
      rating: 5,
      date: "3 weeks ago",
      avatarInitial: "S",
      quote:
        "Their unhurried, hospitality-grade approach is genuine. No upselling, no guilt trips about flossing — just mindful, thoughtful care. The results of my aligners exceeded all my expectations.",
    },
    {
      id: "test-4",
      author: "David K.",
      location: "San Francisco, CA",
      treatment: "Same-Day Emergency Relief",
      rating: 5,
      date: "2 months ago",
      avatarInitial: "D",
      quote:
        "Cracked a molar right before an international flight on a Sunday evening. Their emergency concierge took my call immediately and had me in the chair by 8 AM Monday. Gentle, calm, and completely painless relief.",
    },
  ],
};
