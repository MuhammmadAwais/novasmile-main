import type { PracticeConfig } from "@/lib/types/practice";

export const practiceData: PracticeConfig = {
  id: "dunn-dental-care",
  name: "Dunn Dental Care",
  tagline: "Exceptional clinical dentistry, streamlined appointment access.",
  emergencyHotline: "+1 (210) 292-0495",
  officePhone: "+1 (210) 292-0123",
  email: "care@dunndentalclinic.com",
  announcement: {
    badgeText: "DIRECT SCHEDULING",
    emergencyNotice: "Same-Day Urgent Care & Walk-In Sick Call Slots Daily",
    actionText: "Reserve Immediate Slot",
  },
  locations: [
    {
      city: "San Antonio",
      state: "TX",
      address: "1615 Truemper St, Bldg 6418, San Antonio, TX 78236",
    },
  ],
  hero: {
    locationTag: "SAN ANTONIO, TEXAS",
    headlinePart1: "Excellence in dentistry,",
    headlinePart2: "care without the wait.",
    subheading:
      "Comprehensive general dentistry, specialized surgical care, and seamless digital booking in San Antonio.",
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
            label: "San Antonio Practice",
            href: "#san-antonio-office",
            description: "1615 Truemper St • Bldg 6418",
          },
          {
            label: "Emergency & Urgent Care",
            href: "#emergency",
            description: "Same-day urgent relief appointments available daily",
          },
        ],
      },
    ],
    ctaText: "BOOK NOW",
  },
  address: {
    street: "1615 Truemper St",
    suite: "Bldg 6418",
    city: "San Antonio",
    stateProvince: "TX",
    postalCode: "78236",
    mapCoordinates: { lat: 29.3850859, lng: -98.6243533 },
    directionsTip: "Conveniently located on Truemper St with dedicated wheelchair-accessible parking.",
  },
  hours: [
    { dayRange: "Monday – Friday", hours: "7:00 AM – 4:30 PM", isOpenToday: true },
    { dayRange: "Sick Call & Walk-In Urgent Relief", hours: "7:30–9:30 AM & 12:30–1:30 PM", isOpenToday: true },
    { dayRange: "Saturday – Sunday", hours: "Closed (Emergency On-Call)", isOpenToday: false },
  ],
  leadDentist: {
    name: "Dr. Benjamin W. Dunn, DDS",
    credentials: "DDS, FAGD, Board Certified",
    role: "Founding Lead Clinician & Director",
    experienceYears: 18,
    education: [
      "Doctor of Dental Surgery (DDS) — Advanced Clinical Honors",
      "Advanced Education in General Dentistry (AEGD) Residency",
      "American Dental Association (ADA) & Fellow AGD",
    ],
    bio: "Dr. Dunn leads Dunn Dental Care to provide unhurried, precision dental medicine — combining state-of-the-art diagnostics with accessible, anxiety-free patient care.",
    personalPhilosophy:
      "Dentistry shouldn't involve long waits and unanswered calls. When clinical mastery meets seamless scheduling, every patient gets the prompt, gentle care they deserve.",
    photoUrl: "/zen-hero-room.avif",
  },
  trustMetrics: {
    googleRating: 5.0,
    reviewCount: 68,
    smilesTransformed: 4800,
    satisfactionRate: 99.4,
  },

  /* 4 Milestone Cards directly matching reference design emergency-bar-section.png */
  milestones: [
    {
      label: "Patients Seen",
      value: "4,800+",
      subtext: "Across Greater San Antonio",
    },
    {
      label: "Crowns & Restorations Completed",
      value: "8,500+",
      subtext: "Master ceramic artistry",
    },
    {
      label: "Dental Implants Placed",
      value: "3,200+",
      subtext: "3D-guided surgical precision",
    },
    {
      label: "Same-Day Emergency Relief",
      value: "100%",
      subtext: "Guaranteed urgent triage slots",
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
      id: "tda-partner",
      name: "Texas Dental Association",
      subtitle: "Charter Member Society",
      category: "association",
      acronym: "TDA",
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
      author: "Jerry Young",
      location: "San Antonio, TX",
      treatment: "Urgent Relief & Restorative Crown",
      rating: 5,
      date: "2 weeks ago",
      avatarInitial: "J",
      quote:
        "The staff was incredibly friendly and they fixed my dental emergency in under an hour! Scheduling online was completely effortless and saved me weeks of waiting. The team is warm, attentive, and genuinely cares about your comfort.",
    },
    {
      id: "test-2",
      author: "Marcus Sterling",
      location: "San Antonio, TX",
      treatment: "Full Arch Dental Implant Restoration",
      rating: 5,
      date: "1 month ago",
      avatarInitial: "M",
      quote:
        "The level of clinical precision at Dunn Dental Care is unmatched. The 3D scan took two minutes without gooey trays. My full arch implants feel completely natural, and I was back to work the very next morning. Best healthcare experience in Texas.",
    },
    {
      id: "test-3",
      author: "Sophia Lin",
      location: "San Antonio, TX",
      treatment: "Invisalign & Teeth Whitening",
      rating: 5,
      date: "3 weeks ago",
      avatarInitial: "S",
      quote:
        "Their unhurried, hospitality-grade approach is genuine. No upselling, no long hold times on the phone — just mindful, thoughtful care. The results of my aligners exceeded all my expectations.",
    },
    {
      id: "test-4",
      author: "David K.",
      location: "San Antonio, TX",
      treatment: "Same-Day Emergency Relief",
      rating: 5,
      date: "2 months ago",
      avatarInitial: "D",
      quote:
        "Needed urgent dental attention on short notice. Their digital scheduling confirmed my slot instantly and had me in the chair by 8 AM. Gentle, calm, and completely painless relief.",
    },
  ],

  /* Smile Hook Section Config matching hook-reference.png */
  smileHook: {
    headlinePart1: "YOUR SMILE.",
    headlinePart2: "OUR SPECIALTY.",
    subtitle: "Advanced Dental Care, Led by Specialists",
    paragraphs: [
      "Dunn Dental Care is a multidisciplinary specialty hub, bringing together prosthodontics, periodontics, and an in-house digital laboratory under one roof. We specialize in San Antonio dental implants, cosmetic dentistry, and advanced reconstructive care.",
      "Our clinic collaborates with leading specialists across Greater San Antonio, managing every detail to deliver beautiful, long-lasting smiles and frictionless appointment access for our patients.",
    ],
    highlightBadge:
      "We treat patients across San Antonio and South Texas requiring restorative care, urgent relief, or cosmetic smile transformations.",
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
      bio: "Jennifer knows the ins and outs of patient care and exactly how to make your visit feel seamless. Quick with a kind word, a steady hand, and reassuring guidance, she ensures you never feel rushed or stressed.",
      ctaText: "About Us",
      badgeText: "Rated 5-Stars / Patient Concierge",
      badgeIcon: "/top-rated-icon.png",
      photoUrl: "/top-rated-dentist-img.jpg",
    },
    {
      id: "dr-benjamin-dunn",
      indexNumber: "02",
      name: "Dr. Benjamin W. Dunn",
      role: "Lead Restorative & Aesthetic Clinician",
      credentials: "DDS, FAGD, Board Certified",
      bio: "With over 18 years perfecting restorative dentistry and biocompatible ceramic artistry, Dr. Dunn combines clinical mastery with an unhurried, empathetic bedside presence that puts even the most anxious patients completely at ease.",
      ctaText: "Meet Dr. Dunn",
      badgeText: "Board Certified / Top Dentist 2026",
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
      specialty: "San Antonio Periodontist & Dental Implant Specialist",
      bio: "University-trained with a Master of Science (MSc) in Periodontology, Dr. Reza is a specialist in periodontal and implant-supportive surgery. He provides the precision care behind strong, stable foundations, supporting implant success and protecting long-term oral health.",
      photoUrl: "/our-dentists-1.webp",
      marbleBg: "/marble-texture-3-1.jpg",
    },
    {
      id: "spec-2",
      name: "Dr. Benjamin W. Dunn",
      credentials: "DDS, FAGD",
      specialty: "Clinical Director & Biomimetic Restorative Surgeon",
      bio: "Leading clinician focused on conservative, tooth-preserving restorations. Utilizing 3D guided CAD/CAM ceramic milling, Dr. Dunn ensures natural strength, biocompatibility, and immaculate aesthetic harmony.",
      photoUrl: "/our-dentists-2.webp",
      marbleBg: "/marble-texture-3-1.jpg",
    },
    {
      id: "spec-3",
      name: "Dr. Marcus Vance",
      credentials: "DDS, FAGD",
      specialty: "Biomimetic Restorative Surgeon",
      bio: "Focused on conservative, tooth-preserving restorations. Utilizing 3D guided CAD/CAM ceramic milling, Dr. Vance ensures natural strength, biocompatibility, and immaculate aesthetic harmony.",
      photoUrl: "/our-dentists-3.webp",
      marbleBg: "/marble-texture-3-1.jpg",
    },
    {
      id: "spec-4",
      name: "Dr. Priya Sharma",
      credentials: "DDS, MS Ortho",
      specialty: "Orthodontics & Facial Symmetry Specialist",
      bio: "Orthodontic specialist focusing on discreet clear aligner biomechanics and airway-centered arch development. Passionate about crafting radiant smiles that harmonize with natural facial proportions.",
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
        imageAlt: "Lead dentist reviewing 3D dental model with smiling patient during routine checkup",
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

  /* Comprehensive Services Suite: Top Category Pillars + Bottom Architectural Split-Word Row Procedures */
  servicesSuite: {
    topEyebrow: "COMPREHENSIVE MULTI-DISCIPLINARY CARE",
    topHeadline: "Comprehensive care, one convenient location",
    topSubtitle:
      "From fundamental preventive hygiene to complex biological restorations and facial cosmetics, our integrated specialists deliver all disciplines under one serene roof.",
    pillars: [
      {
        id: "serv-general",
        title: "General",
        categoryKey: "general",
        description:
          "Everything you expect and then some. Cleanings, fillings, and x-rays are just the beginning.",
        ctaText: "ABOUT GENERAL DENTISTRY",
        image: "/service-1.jpg",
        imageAlt: "Lead dentist consulting with patient in modern serene treatment room",
      },
      {
        id: "serv-cosmetic",
        title: "Cosmetic",
        categoryKey: "cosmetic",
        description:
          "Discover your “wow!” factor. Invisalign, veneers, and in-office or take-home teeth whitening.",
        ctaText: "ABOUT COSMETIC DENTISTRY",
        image: "/service-2.jpg",
        imageAlt: "Cosmetic dentist reviewing digital smile preview with relaxed patient",
      },
      {
        id: "serv-surgical",
        title: "Surgical",
        categoryKey: "surgical",
        description:
          "We can fix anything. Our dentists repair damaged or lost teeth with cutting-edge implants and more.",
        ctaText: "ABOUT ORAL SURGERY",
        image: "/service-3.jpg",
        imageAlt: "Surgical dental specialist wearing loupes performing precise restorative procedure",
      },
    ],
    rowEyebrow: "SIGNATURE PROCEDURES",
    rowHeadline: "Precision Dentistry, Tailored For Longevity",
    rowSubtitle:
      "Hover or select any discipline below to reveal clinical parameters, same-day digital technology, and bespoke outcomes.",
    procedures: [
      {
        id: "proc-crowns",
        indexNumber: "/01",
        titlePart1: "Dental",
        titlePart2: "Crowns",
        category: "Biomimetic Restoration",
        description:
          "Precision CAD/CAM ceramic crowns digitally designed and milled chairside in a single visit, eliminating messy impressions and fragile temporary caps.",
        specs: "Same-Day 3D Milling • E-Max Lithium Disilicate • 15-Year Clinical Guarantee",
        turnaround: "Single Visit (90 Mins)",
        comfortProtocol: "Digital Impression Only • Zero Gag Reflex",
        image: "/dental-crown-service-box.jpg",
        imageAlt: "Precision milled ceramic dental crown ready for placement",
        ctaText: "Book Crown Consultation",
      },
      {
        id: "proc-implants",
        indexNumber: "/02",
        titlePart1: "Dental",
        titlePart2: "Implants",
        category: "Surgical Implantology",
        description:
          "Permanent, bio-integrated titanium and zirconia root replacements surgically anchored by our board-certified specialist to restore 100% natural bite force.",
        specs: "3D Guided CBCT Navigation • Biocompatible Zirconia/Titanium • 99.4% Success Rate",
        turnaround: "Same-Day Temporary Placement",
        comfortProtocol: "Twilight Sedation Available • Zero Pain Guarantee",
        image: "/dental-implants-service-box.jpg",
        imageAlt: "Bio-integrated dental implant fixture and crown restoration",
        ctaText: "Book Implant Consultation",
      },
      {
        id: "proc-rehab",
        indexNumber: "/03",
        titlePart1: "Full Mouth",
        titlePart2: "Rehab",
        category: "Comprehensive Reconstruction",
        description:
          "Complete structural and aesthetic restoration uniting neuromuscular jaw alignment, bite elevation, and artisan ceramics for severe wear or trauma.",
        specs: "Multi-Specialist Coordination • Airway-Centered Alignment • Lifetime Warranty",
        turnaround: "Phased Bespoke Plan",
        comfortProtocol: "Dedicated Concierge Nursing • Full Anxiety Protocol",
        image: "/full-mouth-rehab-before-and-after.jpeg",
        imageAlt: "Before and after full mouth oral rehabilitation comparison",
        ctaText: "Book Rehabilitation Assessment",
      },
      {
        id: "proc-whitening",
        indexNumber: "/04",
        titlePart1: "GLO™",
        titlePart2: "Whitening",
        category: "Aesthetic Brightening",
        description:
          "Patented Guided Light Optics combining gentle warming heat and blue LED light to lift up to 8 shades in just 32 minutes without clinical post-treatment sensitivity.",
        specs: "32-Minute In-Office Treatment • Dual Heat & Light Technology • Zero Zingers",
        turnaround: "Instant Same-Day Results",
        comfortProtocol: "Enamel-Safe Formulation • No Post-Op Dehydration",
        image: "/glo-whitening-service-box.jpg",
        imageAlt: "GLO professional in-office whitening treatment",
        ctaText: "Book GLO Whitening",
      },
      {
        id: "proc-invisalign",
        indexNumber: "/05",
        titlePart1: "Invisalign®",
        titlePart2: "Aligners",
        category: "Discreet Orthodontics",
        description:
          "Custom-molded SmartTrack clear aligners designed through high-resolution iTero digital scans to guide teeth into ideal harmony without wires or brackets.",
        specs: "iTero 3D Outcome Simulation • Removable Convenience • Average 6–9 Months",
        turnaround: "Express Aligners Available",
        comfortProtocol: "Laser-Trimmed Scalloped Margins • Zero Irritation",
        image: "/invisalign-service-box.jpg",
        imageAlt: "Clear Invisalign orthodontic aligner tray held by patient",
        ctaText: "Book Invisalign Scan",
      },
      {
        id: "proc-root-canals",
        indexNumber: "/06",
        titlePart1: "Gentle",
        titlePart2: "Root Canals",
        category: "Microscopic Endodontics",
        description:
          "Conservative endodontic therapy utilizing high-magnification surgical microscopes to gently clean infected root canals and preserve your natural tooth structure.",
        specs: "Surgical Microscope Guidance • Ultrasonic Decontamination • Same-Day Sealing",
        turnaround: "Single Visit (60 Mins)",
        comfortProtocol: "Gentle Wand Anesthesia • Pain-Free Guarantee",
        image: "/root-canals-service-box.jpg",
        imageAlt: "Modern microscopic gentle endodontic procedure",
        ctaText: "Book Gentle Root Canal",
      },
      {
        id: "proc-solea",
        indexNumber: "/07",
        titlePart1: "Solea®",
        titlePart2: "Laser Fillings",
        category: "Minimally Invasive Dentistry",
        description:
          "Revolutionary computer-guided CO2 dental laser that vaporizes enamel decay soundlessly without needles, drills, vibrations, or post-treatment facial numbness.",
        specs: "9.3 Micron CO2 Laser • 100% Drill-Free • Multi-Quadrant in 1 Visit",
        turnaround: "30 Mins (No Wait for Numbing)",
        comfortProtocol: "No Shots • No Drills • Walk Out Smiling",
        image: "/solea-laser-filling-service-box.jpg",
        imageAlt: "Solea computerized dental laser system for painless cavity treatment",
        ctaText: "Book Solea Laser Filling",
      },
      {
        id: "proc-veneers",
        indexNumber: "/08",
        titlePart1: "Porcelain",
        titlePart2: "Veneers",
        category: "Cosmetic Smile Design",
        description:
          "Ultra-thin, master-ceramist layered porcelain laminates hand-finished to emulate natural tooth translucency, correcting chips, spacing, and discoloration permanently.",
        specs: "Hand-Layered Feldspathic Porcelain • Minimal Tooth Prep • 15+ Year Durability",
        turnaround: "2 Appointments (Digital Preview First)",
        comfortProtocol: "Temporary Try-In Stage • Completely Reversible Trial",
        image: "/veneer_service-box.jpg",
        imageAlt: "Handcrafted porcelain veneer smile transformation",
        ctaText: "Book Veneer Consultation",
      },
    ],
  },

  /* Phase 6 — Interactive Before & After Smile Transformations with Stacking Cards */
  transformations: {
    sectionIndex: "/04",
    eyebrow: "CLINICAL EXCELLENCE & PATIENT OUTCOMES",
    headline: "Real Patients. Life-Changing Transformations.",
    subtitle:
      "Every smile has a story. Explore our interactive before-and-after cases to witness how precision biomimetic dentistry and compassionate care restore natural harmony, function, and enduring confidence.",
    cases: [
      {
        id: "trans-full-mouth",
        indexTag: "CASE / 01",
        category: "Full-Mouth Reconstruction",
        title: "A Full-Mouth Reconstruction",
        description:
          "Years of wear had left their mark. The solution? A complete reimagining. Custom crowns delivered what this patient deserved all along: a highly functional smile that looks flawless.",
        treatment: "Custom Ceramic Crowns & Full Rehabilitation",
        ctaText: "Explore Crowns",
        patientImage: "/person-1.avif",
        patientAlt: "Patient smiling radiantly after full mouth reconstruction",
        patientName: "Aria M.",
        beforeImage: "/person-1-before.webp",
        afterImage: "/person-1-after.webp",
        clinicalStats: [
          { label: "Procedure", value: "Custom Crowns" },
          { label: "Primary Goal", value: "Aesthetics & Bite Stability" },
          { label: "Clinical Outcome", value: "Flawless Function & Alignment" },
        ],
      },
      {
        id: "trans-anterior-trauma",
        indexTag: "CASE / 02",
        category: "Trauma Restorative",
        title: "Fractured Front Tooth Restoration",
        description:
          "After an injury resulted in a fractured front tooth, this patient was concerned about both the appearance and stability of their anterior teeth. A traditional dental bridge was used to restore the area, bringing back natural esthetics, symmetry, and strength.",
        treatment: "Traditional Dental Bridge & Esthetic Restoration",
        ctaText: "Explore Bridges & Implants",
        patientImage: "/person-2.avif",
        patientAlt: "Patient restored confident smile after front tooth trauma",
        patientName: "David K.",
        beforeImage: "/person-2-before.jpg",
        afterImage: "/person-2-after.jpg",
        clinicalStats: [
          { label: "Procedure", value: "Dental Bridge" },
          { label: "Indication", value: "Anterior Fracture / Trauma" },
          { label: "Clinical Outcome", value: "Natural Symmetry & High Strength" },
        ],
      },
      {
        id: "trans-trauma-dentures",
        indexTag: "CASE / 03",
        category: "Prosthodontic Rehabilitation",
        title: "Recovering Comfort After Trauma",
        description:
          "Severe dental trauma, advanced periodontal challenges, and failing teeth left him in persistent pain. With fixed upper and lower restorations, we rebuilt stability, comfort, and function. Today, he can chew confidently and smile freely without discomfort.",
        treatment: "Fixed Upper & Lower Implant-Supported Restorations",
        ctaText: "Explore Full Reconstruction",
        patientImage: "/person-3.avif",
        patientAlt: "Patient smiling comfortably after prosthodontic trauma reconstruction",
        patientName: "Robert H.",
        beforeImage: "/person-3-before.webp",
        afterImage: "/person-3-after.webp",
        clinicalStats: [
          { label: "Procedure", value: "Fixed Dentures" },
          { label: "Indication", value: "Severe Tooth Loss & Trauma" },
          { label: "Clinical Outcome", value: "Pain-Free Comfort & Confident Chewing" },
        ],
      },
      {
        id: "trans-agenesis-bridge",
        indexTag: "CASE / 04",
        category: "Congenital Restoration",
        title: "A Smile, Carefully Rebuilt",
        description:
          "She came to us with missing permanent teeth from birth, retained baby teeth, and spacing that made everyday function a real concern. With a carefully coordinated plan using crowns and implant-supported bridges, we restored balance, comfort, and a natural look.",
        treatment: "Crowns, Implant Crowns & Implant-Supported Bridge",
        ctaText: "Explore Bridges",
        patientImage: "/person-4.avif",
        patientAlt: "Patient smiling with restored harmony after congenital spacing reconstruction",
        patientName: "Elena R.",
        beforeImage: "/person-4-before.webp",
        afterImage: "/person-4-after.webp",
        clinicalStats: [
          { label: "Procedure", value: "Implant Bridge & Crowns" },
          { label: "Indication", value: "Congenitally Missing Teeth" },
          { label: "Clinical Outcome", value: "Harmonious Natural Smile" },
        ],
      },
    ],
  },

  /* Phase 7 — Patient Stories & Testimonials (Sticky Left + Horizontally Popping Portraits) */
  testimonialsConfig: {
    sectionIndex: "/05",
    eyebrow: "PATIENT EXPERIENCES & VERIFIED CARE",
    headlinePart1: "HEAR FROM",
    highlightBadge: "HAPPY PATIENTS",
    subtitle:
      "Discover why patients trust Dunn Dental Care for exceptional, anxiety-free dental medicine through genuine experiences, unhurried care, and life-changing smile transformations.",
    googleRating: 5.0,
    googleReviewCount: "65+ Verified Reviews",
    googleBadgeText: "Top Rated San Antonio Dental Clinic",
    ctaText: "VIEW ALL REVIEWS +",
    reviews: [
      {
        id: "rev-1",
        author: "Jerry Young",
        location: "San Antonio, TX",
        treatment: "Urgent Relief & Ceramic Restoration",
        treatmentCategory: "Restorative Dentistry",
        treatingDoctor: "Dr. Benjamin W. Dunn",
        rating: 5,
        date: "2 weeks ago",
        photoUrl: "/review-person-1.avif",
        verifiedGoogle: true,
        quote:
          "The team at Dunn Dental Care is phenomenal! The staff was very friendly and they fixed my dental problem in under an hour. Online booking was seamless and eliminated all the stress of waiting.",
      },
      {
        id: "rev-2",
        author: "Sophia Lin",
        location: "San Antonio, TX",
        treatment: "GLO Whitening & Porcelain Veneers",
        treatmentCategory: "Cosmetic Smile Design",
        treatingDoctor: "Dr. Benjamin W. Dunn",
        rating: 5,
        date: "1 month ago",
        photoUrl: "/review-person-2.webp",
        verifiedGoogle: true,
        quote:
          "My teeth whitening and porcelain veneer experience was flawless. The digital 3D preview showed me exactly what my smile would look like before we even began. No sensitivity and an exceptionally warm clinic environment.",
      },
      {
        id: "rev-3",
        author: "Marcus Vance",
        location: "San Antonio, TX",
        treatment: "Same-Day CAD/CAM Crown & Implant",
        treatmentCategory: "Biomimetic Surgery",
        treatingDoctor: "Dr. Ali Reza",
        rating: 5,
        date: "3 weeks ago",
        photoUrl: "/review-person-3.avif",
        verifiedGoogle: true,
        quote:
          "Unbelievably precise technology. Having my permanent ceramic crown placed in a single appointment completely eliminated messy silicone impressions. The bite is 100% natural and solid.",
      },
      {
        id: "rev-4",
        author: "David Henderson",
        location: "San Antonio, TX",
        treatment: "Invisalign Clear Aligners",
        treatmentCategory: "Discreet Orthodontics",
        treatingDoctor: "Dr. Priya Sharma",
        rating: 5,
        date: "2 months ago",
        photoUrl: "/review-person-4.avif",
        verifiedGoogle: true,
        quote:
          "Clear pricing, no surprise bills, and a clinical team that actually listens without lecturing. In just seven months, my crowded bite was completely aligned without anyone noticing I was wearing trays.",
      },
    ],
  },

  /* Phase 8 — Frequently Asked Questions (FAQ Section with Bold Contrasting Marble Tabs) */
  faqConfig: {
    headlinePart1: "ANSWERS TO YOUR COMMON",
    headlinePart2: "DENTAL",
    highlightBadge: "QUESTIONS",
    subtitle:
      "Everything you need to know about our unhurried approach, insurance clarity, anxiety protocols, and signature biological treatments.",
    items: [
      {
        id: "faq-1",
        question: "What are your payment options?",
        answer:
          "We believe premium healthcare should be transparent and predictable. We accept all major PPO dental plans and file claims directly on your behalf to maximize your benefits. For out-of-pocket costs and cosmetic procedures, we provide interest-free monthly financing through CareCredit® and Sunbit, as well as our in-house wellness plan with 15–20% fee courtesy.",
        category: "Financial Clarity",
      },
      {
        id: "faq-2",
        question: "How often should I visit the dentist for cleanings?",
        answer:
          "For patients with optimal periodontal health, a comprehensive clinical hygiene visit every six months maintains enamel integrity and catches microscopic changes early. If you are managing active gum inflammation, orthodontic aligners, or biological implant reconstructions, our clinicians may recommend tailored 3- to 4-month supportive periodontal maintenance intervals.",
        category: "Preventive Care",
      },
      {
        id: "faq-3",
        question: "What should I do during a dental emergency?",
        answer:
          "Contact our direct office line immediately at (210) 292-0123 or direct care desk at (210) 292-0495. We reserve dedicated daily priority blocks for same-day acute relief and walk-in sick calls (7:30–9:30 AM & 12:30–1:30 PM) — whether treating severe toothache pain, a chipped tooth, or a lost restoration.",
        category: "Emergency Care",
      },
      {
        id: "faq-4",
        question: "Are dental x-rays safe for children and adults?",
        answer:
          "Yes, absolutely. Our studio utilizes ultra-low-dose Green CBCT 3D imaging and pediatric-certified digital sensors that emit up to 90% less radiation than conventional dental film. The ambient exposure of a full digital diagnostic series is lower than a standard domestic commercial flight, ensuring complete safety for developing children and expectant mothers.",
        category: "Clinical Safety",
      },
      {
        id: "faq-5",
        question: "How long do professional teeth whitening results last?",
        answer:
          "With our in-office patented GLO™ Guided Light Optics technology, patients achieve 6 to 8 shades of enamel lift in just 32 minutes with zero clinical sensitivity. Results typically endure between 12 to 24 months depending on dietary habits (coffee, tea, red wine). Each in-office treatment includes a custom touch-up kit to keep your shade brilliantly maintained for life.",
        category: "Cosmetic Dentistry",
      },
    ],
  },

  /* Phase 6 & 8 — Combined Modern Comforts & Insurance Transparency Section */
  modernComfortsConfig: {
    headline: "It's all in the details",
    description:
      "Your experience matters. From the clean, modern design of our clinic to the calming little touches you never knew you needed — weighted blankets, warm essential oil towels, ceiling-mounted entertainment, and private garden views — we've designed our space to help you completely relax.",
    comfortPillars: [
      "Private tranquil operatory views & ergonomic chairs",
      "Heated neck pillows & weighted sensory blankets",
      "Noise-canceling Bose® headsets & ceiling streaming displays",
      "Hospitality refreshment bar with organic herbal teas & warm towels",
    ],
    slides: [
      {
        id: "comfort-operatory",
        title: "Zen Garden Operatories",
        subtitle: "Tranquil Natural Light & Floor-to-Ceiling Greenery",
        description:
          "Our treatment suites face private Japanese zen gardens with natural daylight, ergonomic memory foam chairs, and ceiling-mounted streaming displays to ease clinical anxiety.",
        image: "/slide-1-1000.jpg",
        tag: "Private Garden View",
      },
      {
        id: "comfort-beverage",
        title: "Hospitality Refreshment Bar",
        subtitle: "Artisanal Organic Beverages & Warm Accents",
        description:
          "Unwind before your appointment with freshly brewed herbal teas, sparkling water, espresso, and warm lavender essential oil towels crafted to transition your mindset from busy day to restorative sanctuary.",
        image: "/slide-2-1000-1.jpg",
        tag: "Hospitality Lounge",
      },
      {
        id: "comfort-reception",
        title: "Warm Architectural Reception",
        subtitle: "Curved Slatted Cedar & Ambient Ring Chandeliers",
        description:
          "Say goodbye to sterile waiting rooms. Our entrance is shaped by warm organic cedar slats, low-glare lighting, and serene ambient acoustics.",
        image: "/slide-3-1000.jpg",
        tag: "Concierge Welcome",
      },
      {
        id: "comfort-foyer",
        title: "Sunlit Glass Foyer",
        subtitle: "Spacious Transitions & Anxiety-Free Arrival",
        description:
          "An expansive, light-filled entry foyer designed to make your arrival feel seamless, spacious, and unhurried from the very first step.",
        image: "/slide-4-1000.jpg",
        tag: "Studio Arrival",
      },
    ],
    insuranceSection: {
      eyebrow: "FINANCIAL TRANSPARENCY & PEACE OF MIND",
      headline: "Insurance Optimization & Flexible Payment",
      subtitle:
        "We believe exceptional dentistry should be clear, honest, and accessible. We coordinate directly with your insurance provider and provide interest-free monthly payment plans.",
      networks: [
        { id: "net-delta", name: "Delta Dental Premier", type: "PPO Network" },
        { id: "net-metlife", name: "MetLife Dental", type: "PPO Network" },
        { id: "net-cigna", name: "Cigna Dental", type: "PPO Network" },
        { id: "net-guardian", name: "Guardian Dental", type: "PPO Network" },
        { id: "net-aetna", name: "Aetna Dental", type: "PPO Network" },
        { id: "net-anthem", name: "Anthem BlueCross", type: "PPO Network" },
      ],
      financingOptions: [
        {
          id: "fin-insurance",
          title: "Direct Insurance Optimization",
          subtitle: "100% Paperwork Managed",
          description:
            "We accept all major PPO insurance plans. Our concierge verifies your exact coverage before your visit so you understand benefits with zero surprise out-of-pocket bills.",
          features: [
            "Complimentary Pre-Visit Verification",
            "Electronic Claims Filing On Your Behalf",
            "Maximized Annual Preventative Benefits",
          ],
          ctaText: "Check My Insurance",
        },
        {
          id: "fin-monthly",
          title: "0% APR Flexible Financing",
          subtitle: "CareCredit® & Sunbit Plans",
          description:
            "Break comprehensive treatments, porcelain smile design, or dental implants into budget-friendly monthly installments with 0% interest promo terms.",
          features: [
            "Instant Digital Approval in Minutes",
            "No Prepayment Penalties",
            "Flexible Terms Up to 24 Months",
          ],
          ctaText: "Explore Monthly Plans",
        },
        {
          id: "fin-membership",
          title: "In-House Wellness Membership",
          subtitle: "For Patients Without Insurance",
          description:
            "No insurance? No problem. Our membership plan provides 2 annual cleanings, all exams and digital x-rays, plus 15–20% fee courtesy on all restorative and cosmetic care.",
          features: [
            "Zero Waiting Periods or Deductibles",
            "No Annual Maximum Coverage Caps",
            "Includes Complimentary Lifetime Whitening",
          ],
          ctaText: "Join Wellness Club",
        },
      ],
    },
  },
  ctaSection: {
    scriptAccent: "Ready",
    title: "for your dream smile?",
    reassuranceText:
      "Are you interested in dental implants or cosmetic and reconstructive dentistry? Need immediate relief from tooth discomfort? When your smile requires unhurried, expert care, our team is here for you.",
    primaryCtaText: "Book Your Smile Consultation",
    secondaryCtaText: "Call Our Office",
    phoneText: "+1 (210) 292-0123",
    backgroundImage: "/cta-behind-bg.webp",
    personImage: "/cta-person-img.webp",
    badgeText: "SPECIALIST CONSULTATION",
  },
  footer: {
    tagline:
      "Thoughtful, modern dentistry designed around patient comfort, clinical precision, and enduring natural aesthetics in San Antonio.",
    accreditations: [
      "American Dental Association (ADA)",
      "Texas Dental Association (TDA)",
      "San Antonio Top Dentists 2026",
      "Invisalign® Preferred Provider",
    ],
    quickLinks: [
      { label: "Our Story & Philosophy", href: "#our-story" },
      { label: "The Experience", href: "#experience" },
      { label: "Doctors & Specialists", href: "#doctors" },
      { label: "Patient Transformations", href: "#transformations" },
      { label: "Clinic Comfort Amenities", href: "#comforts" },
      { label: "Verified Reviews", href: "#reviews" },
      { label: "Frequently Asked Questions", href: "#faq" },
    ],
    treatmentLinks: [
      { label: "Handcrafted Porcelain Veneers", href: "#services" },
      { label: "Full Arch Dental Implants", href: "#services" },
      { label: "Invisalign® Clear Aligners", href: "#services" },
      { label: "Biomimetic Ceramic Crowns", href: "#services" },
      { label: "Zero-Anxiety Comfort Sedation", href: "#services" },
      { label: "Same-Day Emergency Relief", href: "#emergency" },
    ],
    socialLinks: [
      { platform: "x", href: "https://x.com", label: "X (Twitter)" },
      { platform: "linkedin", href: "https://linkedin.com", label: "LinkedIn" },
      { platform: "instagram", href: "https://instagram.com", label: "Instagram" },
      { platform: "facebook", href: "https://facebook.com", label: "Facebook" },
    ],
    copyright: "© 2026 Dunn Dental Care. All rights reserved.",
    legalLinks: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "ADA Accessibility Statement", href: "#accessibility" },
      { label: "Notice of Non-Discrimination", href: "#nondiscrimination" },
    ],
    watermarkText: "DUNN DENTAL",
  },
};
