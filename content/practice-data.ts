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

  /* Accreditations, Clinical Technologies & Association Partners with Official Gold Icons */
  affiliations: [
    {
      id: "ada-partner",
      name: "American Dental Association",
      subtitle: "Accredited Member in Good Standing",
      category: "association",
      acronym: "ADA",
      logoUrl: "/company1-icon.png",
    },
    {
      id: "cda-partner",
      name: "California Dental Association",
      subtitle: "Charter Member Society",
      category: "association",
      acronym: "CDA",
      logoUrl: "/company2-icon.png",
    },
    {
      id: "invisalign-partner",
      name: "Invisalign Diamond Provider",
      subtitle: "Top 1% Global Clear Aligner Provider",
      category: "technology",
      acronym: "INVISALIGN",
      logoUrl: "/company3-icon.png",
    },
    {
      id: "solea-partner",
      name: "Solea Laser Dentistry",
      subtitle: "Anesthesia-Free CO2 Laser Technology",
      category: "technology",
      acronym: "SOLEA",
      logoUrl: "/company4-icon.png",
    },
    {
      id: "spear-partner",
      name: "Spear Education Faculty",
      subtitle: "Advanced Restorative Interdisciplinary Care",
      category: "specialty",
      acronym: "SPEAR",
      logoUrl: "/company-5-icon.png",
    },
    {
      id: "delta-partner",
      name: "Delta Dental Premier",
      subtitle: "Direct Electronic PPO Billing",
      category: "insurance",
      acronym: "DELTA",
      logoUrl: "/safe-icon.png",
    },
    {
      id: "cigna-partner",
      name: "Cigna Dental Network",
      subtitle: "In-Network Preferred Provider",
      category: "insurance",
      acronym: "CIGNA",
      logoUrl: "/safe-icon.png",
    },
    {
      id: "metlife-partner",
      name: "MetLife Dental",
      subtitle: "Direct Claims Processing",
      category: "insurance",
      acronym: "METLIFE",
      logoUrl: "/safe-icon.png",
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

  /* Smile Hook Section Config matching hook-reference.png */
  smileHook: {
    headlinePart1: "YOUR SMILE.",
    headlinePart2: "OUR SPECIALTY.",
    subtitle: "Advanced Dental Care, Led by Specialists",
    paragraphs: [
      "Novasmile Care is a multidisciplinary specialty hub, bringing together prosthodontics, periodontics, and an in-house dental laboratory under one roof. We specialize in Bay Area dental implants, cosmetic dentistry, and advanced reconstructive dentistry.",
      "Our multispecialty centre collaborates with leading dentists and specialists across San Francisco, Mountain View, and the surrounding area, managing every detail to deliver beautiful, long-lasting smiles for our patients.",
    ],
    highlightBadge:
      "We treat patients from across California and around the globe, requiring restoration or replacement of teeth.",
    galleryImages: [
      {
        src: "/your-smile-1.webp",
        alt: "Custom porcelain shade matching and cosmetic veneer perfection",
        caption: "Precision Shade Matching",
      },
      {
        src: "/your-smile-2.webp",
        alt: "Specialist consultation and unhurried patient care",
        caption: "Unhurried Specialist Care",
      },
      {
        src: "/your-smile-3.webp",
        alt: "Master in-house dental laboratory ceramic craftsmanship",
        caption: "In-House Digital Lab",
      },
    ],
  },

  /* Dentist Promise Card Config matching Our-dentist-top.png */
  dentistPromise: {
    headline: "Dentistry Done Right",
    description:
      "Adults and kids, we welcome patients from 3-year-olds to seniors! Our team is passionate about building lifetime relationships through positive experiences, featuring:",
    features: [
      "Transparent Pricing",
      "Unparalleled Warranty",
      "FREE Whitening (for life!)",
    ],
    quote:
      "Our word is our worth. We promise to do it right, timely, and for a fair price.",
    image: "/our-dentist-top-img.jpg",
    warrantySealText: {
      title: "Lifetime Warranty",
      description: "If it breaks, we fix it at no cost to you.",
    },
  },

  /* Lead Clinician Spotlight Carousel Config matching our-top-dentist.png */
  dentistSpotlight: [
    {
      id: "jennifer-da",
      indexNumber: "01",
      name: "Jennifer",
      role: "Dental Assistant & Patient Concierge",
      credentials: "RDA, CDA",
      bio: "Jennifer knows the ins and outs of dentistry and exactly how to make your visit feel seamless. Quick with a kind word, a steady hand, and just the right amount of reassurance, she's deeply knowledgeable and focused on making your visit feel comfortable.",
      ctaText: "About Us",
      badgeText: "Rated 5-Stars / Woman-Owned & Operated",
      badgeIcon: "/top-rated-icon.png",
      photoUrl: "/top-rated-dentist-img.jfif",
    },
    {
      id: "dr-elena-vance",
      indexNumber: "02",
      name: "Dr. Elena Vance",
      role: "Lead Cosmetic & Restorative Clinician",
      credentials: "DDS, FAGD, AACD",
      bio: "With over 14 years perfecting facial aesthetics and biocompatible porcelain artistry, Dr. Vance combines clinical mastery with an unhurried, empathetic bedside presence that puts even the most anxious patients completely at ease.",
      ctaText: "Meet Dr. Vance",
      badgeText: "AACD Fellow / Top Dentist 2026",
      badgeIcon: "/top-rated-icon.png",
      photoUrl: "/our-dentists-2.webp",
    },
    {
      id: "dr-ali-reza",
      indexNumber: "03",
      name: "Dr. Ali Reza",
      role: "Periodontist & Dental Implant Specialist",
      credentials: "MDS, MSc, Board Certified",
      bio: "Specializing in 3D-guided implantology, bone reconstruction, and minimally invasive microsurgical periodontal therapy, Dr. Reza provides the precision foundations that ensure lifetime restoration longevity.",
      ctaText: "Meet Dr. Reza",
      badgeText: "Diplomate ABO / 5-Star Rated",
      badgeIcon: "/top-rated-icon.png",
      photoUrl: "/our-dentists-1.webp",
    },
  ],

  /* Specialist Team Grid Config matching our-all-dentist.png */
  specialistTeam: [
    {
      id: "spec-1",
      name: "Dr. Ali Reza",
      credentials: "MDS, MSc",
      specialty: "Bay Area Periodontist & Dental Implant Specialist",
      bio: "University-trained with a Master of Science (MSc) in Periodontology, Dr. Reza is a specialist in periodontal and implant-supportive surgery. He provides the precision care behind strong, stable foundations, supporting implant success and protecting long-term oral health.",
      photoUrl: "/our-dentists-1.webp",
      marbleBg: "/marble-texture-3-1.jpg",
    },
    {
      id: "spec-2",
      name: "Dr. Nazia Abrol",
      credentials: "MDS, MSc",
      specialty: "Edmonton Periodontist & Dental Implant Specialist",
      bio: "University of Alberta-trained with a Master of Science (MSc) in Periodontology, Dr. Abrol is a specialist in periodontal and implant-supportive surgery. She provides the precision care behind strong, stable foundations, supporting implant success and protecting long-term oral health.",
      photoUrl: "/our-dentists-2.webp",
      marbleBg: "/marble-texture-3-1.jpg",
    },
    {
      id: "spec-3",
      name: "Dr. Marcus Vance",
      credentials: "DDS, FAGD",
      specialty: "Biomimetic Restorative Surgeon",
      bio: "Harvard-trained clinician focused on conservative, tooth-preserving restorations. Utilizing 3D guided CAD/CAM ceramic milling, Dr. Vance ensures natural strength, biocompatibility, and immaculate aesthetic harmony.",
      photoUrl: "/our-dentists-3.webp",
      marbleBg: "/marble-texture-3-1.jpg",
    },
    {
      id: "spec-4",
      name: "Dr. Priya Sharma",
      credentials: "DDS, MS Ortho",
      specialty: "Orthodontics & Facial Symmetry Specialist",
      bio: "UCSF Orthodontic Residency graduate specializing in discreet clear aligner biomechanics and airway-centered arch development. Passionate about crafting radiant smiles that harmonize with natural facial proportions.",
      photoUrl: "/our-dentists-4.webp",
      marbleBg: "/marble-texture-3-1.jpg",
    },
  ],

  /* The Experience - 3 Value Pillars (matching feature-section-top.png) */
  experiencePillars: {
    eyebrow: "DENTISTRY DONE DIFFERENTLY",
    title: "The Experience",
    pillars: [
      {
        id: "exp-1",
        icon: "/dentist-chair-icon.png",
        title: "Personalized Care",
        description:
          "We get to know your story — your habits, history, goals, and what makes you feel comfortable in the chair. Our approach is thoughtful and rooted in long-term wellness (not short-term fixes).",
      },
      {
        id: "exp-2",
        icon: "/safe-icon.png",
        title: "Financial Clarity",
        description:
          "We accept insurance, review benefits before your visit, and handle all the paperwork. No insurance? Ask us about flexible financing options and our in-house membership plan.",
      },
      {
        id: "exp-3",
        icon: "/stars-icons.png",
        title: "Comfort Add-Ons",
        description:
          "Our comfort menu is designed for those who appreciate a little extra TLC: weighted blankets, earbuds, warm towels, sedation options, and more.",
      },
    ],
  },

  /* Treatment Showcase - 3 Staggered Treatment Rows (matching features-section.png) */
  treatmentShowcase: {
    headlinePart1: "your",
    headlinePart2: "beautiful smile",
    marbleBg: "/marble-texture-3-1.jpg",
    items: [
      {
        id: "feat-routine",
        titlePart1: "routine",
        titlePart2: "dental care",
        description:
          "Clean and healthy has never been this easy — or this enjoyable. We're your entire family's partner in dental health.",
        ctaText: "explore general dentistry",
        categoryKey: "general",
        image: "/features-1.jpg",
        imageAlt: "Lead dentist reviewing 3D dental model with smiling teenager during routine checkup",
        imagePosition: "right",
      },
      {
        id: "feat-restorative",
        titlePart1: "restorative",
        titlePart2: "procedures",
        description:
          "With advanced training and a focus on full-mouth reconstruction, our doctors provide premier care for those dealing with damaged or missing teeth.",
        ctaText: "explore surgical dentistry",
        categoryKey: "surgical",
        image: "/features-2.jpg",
        imageAlt: "Restorative dental specialist wearing surgical loupes performing delicate tooth restoration",
        imagePosition: "left",
      },
      {
        id: "feat-cosmetic",
        titlePart1: "cosmetic",
        titlePart2: "transformations",
        description:
          "See what's possible through veneers, GLO whitening, or clear aligners. We're a certified Invisalign provider and have designed thousands of confident smiles.",
        ctaText: "explore cosmetic dentistry",
        categoryKey: "cosmetic",
        image: "/features-3.jpg",
        imageAlt: "Cosmetic dentist photographing radiant aesthetic smile transformation result",
        imagePosition: "right",
      },
    ],
  },
};

