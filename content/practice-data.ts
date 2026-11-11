import type { PracticeConfig } from "@/lib/types/practice";

export const practiceData: PracticeConfig = {
  id: "mr-dentist-san-antonio",
  name: "Mr. Dentist",
  tagline: "Comprehensive, compassionate family & cosmetic dentistry in San Antonio.",
  emergencyHotline: "+1 (210) 623-3900",
  officePhone: "+1 (210) 541-4132",
  email: "Mr.dentistop@gmail.com",
  announcement: {
    badgeText: "SAME-DAY CARE & WALK-INS",
    emergencyNotice: "Same-Day Exams, Cleanings & Urgent Dental Relief Available Daily",
    actionText: "Reserve Immediate Slot",
  },
  locations: [
    {
      city: "San Antonio",
      state: "TX",
      address: "6338 Old Pearsall Rd, Suite 105, San Antonio, TX 78242",
    },
  ],
  hero: {
    locationTag: "MR. DENTIST · SAN ANTONIO, TEXAS",
    headlinePart1: "Healthy smiles for",
    headlinePart2: "the whole family.",
    subheading:
      "Veteran-led family, cosmetic, and implant dentistry in a warm, welcoming San Antonio studio. Same-day exams, gentle cleanings, and effortless online booking.",
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
            label: "General & Preventive Care",
            href: "#preventative",
            description:
              "Same-day exams, ultrasonic cleanings & cavity prevention for all ages",
          },
          {
            label: "Cosmetic & Veneers",
            href: "#cosmetic",
            description:
              "Handcrafted porcelain veneers, whitening & natural smile makeovers",
          },
          {
            label: "Invisalign & Clear Aligners",
            href: "#invisalign",
            description:
              "Discreet orthodontic alignment tailored to your facial symmetry",
          },
          {
            label: "Dental Implants & Crowns",
            href: "#implants",
            description:
              "Permanent titanium & ceramic restorations, bridges, and dentures",
          },
          {
            label: "Wisdom Teeth & Gentle Extractions",
            href: "#sedation",
            description:
              "Safe, anxiety-free extractions & root canals with sedation options",
          },
        ],
      },
      {
        label: "PATIENTS",
        href: "#patients",
        hasDropdown: true,
        dropdownItems: [
          {
            label: "First Visit Experience",
            href: "#first-visit",
            description: "Same-day exam and cleaning without having to book a second trip",
          },
          {
            label: "Comfort & Anxiety-Free Care",
            href: "#amenities",
            description:
              "Gentle chairside manner, nitrous/oral sedation & multilingual care",
          },
          {
            label: "Insurance & Financing",
            href: "#financing",
            description:
              "All PPOs, Medicaid/CHIP, VA Care, CareCredit® & LendingClub accepted",
          },
          {
            label: "Patient Stories",
            href: "#reviews",
            description:
              "230+ verified Google reviews from families across San Antonio",
          },
        ],
      },
      {
        label: "CONTACT",
        href: "#contact",
        hasDropdown: true,
        dropdownItems: [
          {
            label: "Old Pearsall Rd Office",
            href: "#san-antonio-office",
            description: "6338 Old Pearsall Rd • Suite 105, San Antonio, TX 78242",
          },
          {
            label: "Walk-In & Emergency Relief",
            href: "#emergency",
            description: "Call (210) 541-4132 or (210) 623-3900 for same-day urgent care",
          },
        ],
      },
    ],
    ctaText: "BOOK NOW",
  },
  address: {
    street: "6338 Old Pearsall Rd",
    suite: "Suite 105",
    city: "San Antonio",
    stateProvince: "TX",
    postalCode: "78242",
    mapCoordinates: { lat: 29.3398518, lng: -98.6218656 },
    directionsTip:
      "Conveniently located on Old Pearsall Rd (Suite 105) with free storefront parking and full wheelchair accessibility.",
  },
  hours: [
    {
      dayRange: "Monday – Friday",
      hours: "10:00 AM – 6:00 PM",
      isOpenToday: true,
    },
    {
      dayRange: "Same-Day Walk-Ins & Emergencies",
      hours: "10:00 AM – 5:00 PM Daily",
      isOpenToday: true,
    },
    {
      dayRange: "Saturday – Sunday",
      hours: "Sat 10 AM – 3 PM (By Appt) • Sun Closed",
      isOpenToday: false,
    },
  ],
  leadDentist: {
    name: "Dr. Medhat G. Bader, DMD",
    credentials: "DMD, Boston University '99 • USAF Veteran",
    role: "Founder & Lead Cosmetic & Restorative Dentist",
    experienceYears: 30,
    education: [
      "Doctor of Dental Medicine (DMD) — Boston University Goldman School of Dental Medicine (Top of Class, 1999)",
      "12-Year United States Air Force Dental Officer & Veteran",
      "American Dental Association (ADA), Texas Dental Association (TDA) & VA Credentialed",
    ],
    bio: "With over 30 years of clinical experience and 12 years of distinguished service as a U.S. Air Force dentist, Dr. Medhat Bader founded Mr. Dentist to deliver honest, unhurried, and compassionate family and cosmetic dentistry to the San Antonio community.",
    personalPhilosophy:
      "Great dentistry is never about pressuring patients into work they don't need. It is about listening, easing anxiety with a warm smile, and doing precise clinical work that lasts.",
    photoUrl: "/images/dentists/our-dentists-2.webp",
  },
  trustMetrics: {
    googleRating: 4.5,
    reviewCount: 231,
    smilesTransformed: 6500,
    satisfactionRate: 99.2,
  },

  /* 4 Milestone Cards directly matching reference design emergency-bar-section.png */
  milestones: [
    {
      label: "Years of Clinical Experience",
      value: "30+",
      subtext: "Boston University DMD & USAF Veteran Led",
    },
    {
      label: "Verified Google Reviews",
      value: "231+",
      subtext: "4.5 ★ trusted by San Antonio families",
    },
    {
      label: "Same-Day Exam & Cleaning",
      value: "100%",
      subtext: "No second return trip required",
    },
    {
      label: "Languages Spoken Fluently",
      value: "3",
      subtext: "English, Spanish & Arabic care",
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
      logoUrl: "/images/icons/company1-icon.png",
    },
    {
      id: "tda-partner",
      name: "Texas Dental Association",
      subtitle: "Charter Member Society",
      category: "association",
      acronym: "TDA",
      logoUrl: "/images/icons/company2-icon.png",
    },
    {
      id: "bu-partner",
      name: "Boston University Goldman School",
      subtitle: "DMD Top of Class Clinical Honors",
      category: "specialty",
      acronym: "BU DMD",
      logoUrl: "/images/icons/company-5-icon.png",
    },
    {
      id: "va-partner",
      name: "U.S. Veterans Affairs & TriCare",
      subtitle: "Veteran-Owned & VA Credentialed Practice",
      category: "association",
      acronym: "USAF / VA",
      logoUrl: "/images/icons/company4-icon.png",
    },
    {
      id: "invisalign-partner",
      name: "Clear Aligner & Cosmetic Partner",
      subtitle: "Precision Orthodontics & Veneers",
      category: "technology",
      acronym: "INVISALIGN",
      logoUrl: "/images/icons/company3-icon.png",
    },
    {
      id: "delta-partner",
      name: "Delta Dental & Major PPOs",
      subtitle: "Direct Electronic PPO Billing",
      category: "insurance",
      acronym: "DELTA PPO",
      logoUrl: "/images/icons/safe-icon.png",
    },
    {
      id: "medicaid-partner",
      name: "Medicaid, CHIP & DentaQuest",
      subtitle: "In-Network Family & Pediatric Coverage",
      category: "insurance",
      acronym: "CHIP / MED",
      logoUrl: "/images/icons/safe-icon.png",
    },
    {
      id: "carecredit-partner",
      name: "CareCredit® & LendingClub",
      subtitle: "0% APR Flexible Monthly Financing",
      category: "insurance",
      acronym: "FINANCING",
      logoUrl: "/images/icons/safe-icon.png",
    },
  ],

  /* Authentic Patient Testimonials Carousel Data */
  testimonials: [
    {
      id: "test-1",
      author: "Patricia",
      location: "San Antonio, TX",
      treatment: "Same-Day Exam & Teeth Cleaning",
      rating: 5,
      date: "3 months ago",
      avatarInitial: "P",
      quote:
        "This office is simply amazing. I walked in to inquire about teeth cleaning and was able to be seen right then and there. The office staff is very polite and professional, and the Doctor is simply PHENOMENAL — super friendly, professional, and truly cares about your dental health.",
    },
    {
      id: "test-2",
      author: "Melissa Vasquez",
      location: "San Antonio, TX",
      treatment: "Urgent Infection Relief & Gentle Extractions",
      rating: 5,
      date: "3 months ago",
      avatarInitial: "M",
      quote:
        "Came in for a tooth infection and ended up having a couple extractions. I get really nervous at the dentist, but Dr. Bader made me feel relaxed and not so scared. From the front office to the nurses in the back to the Doctor himself, it was by far the best experience I've ever had at a dentist office!",
    },
    {
      id: "test-3",
      author: "Lacie Allen-Bey",
      location: "San Antonio, TX",
      treatment: "Family & Children's Dentistry",
      rating: 5,
      date: "1 month ago",
      avatarInitial: "L",
      quote:
        "Best dentist ever! Dr. Bader is kind, professional, and helpful. He takes the time to explain things to you and is reassuring. All of the staff is always kind and friendly. My whole family goes to Mr. Dentist and the whole staff is great with kids as well!",
    },
    {
      id: "test-4",
      author: "Jose Luis Martinez",
      location: "San Antonio, TX",
      treatment: "Comprehensive Consultation & Restorative Care",
      rating: 5,
      date: "2 months ago",
      avatarInitial: "J",
      quote:
        "My experience with Mr. Dentist was outstanding. The doctors and the staff were very knowledgeable and professional! They went out of the way to help me out and gave me great advice. I would definitely recommend them!",
    },
  ],

  /* Smile Hook Section Config matching hook-reference.png */
  smileHook: {
    headlinePart1: "YOUR SMILE.",
    headlinePart2: "OUR SPECIALTY.",
    subtitle: "Veteran-Led Family, Cosmetic & Implant Dentistry",
    paragraphs: [
      "Founded by Boston University graduate and retired U.S. Air Force dentist Dr. Medhat G. Bader, DMD, Mr. Dentist brings together over 60 years of combined clinical experience under one welcoming San Antonio roof. From your child's first check-up to porcelain veneers, root canals, and full-mouth implant restorations, we handle every need without bouncing you between offices.",
      "You will always see your digital X-rays, hear every treatment option in plain language (in English, Spanish, or Arabic), and never be pressured into treatment you don't need. Even better, we complete your exam and cleaning in the same visit so your time is always respected.",
    ],
    highlightBadge:
      "Proudly serving families, veterans, and walk-in patients across Southwest San Antonio from our Old Pearsall Rd studio.",
    galleryImages: [
      {
        src: "/images/smile-hook/your-smile-1.webp",
        alt: "Custom porcelain shade matching and cosmetic veneer perfection",
        caption: "Cosmetic Smile Design",
      },
      {
        src: "/images/smile-hook/your-smile-2.webp",
        alt: "Unhurried dentist consultation and gentle patient care",
        caption: "Honest, No-Pressure Care",
      },
      {
        src: "/images/smile-hook/your-smile-3.webp",
        alt: "Precision dental restorations and crown craftsmanship",
        caption: "60+ Years Combined Mastery",
      },
    ],
  },

  /* Dentist Promise Card Config matching Our-dentist-top.png */
  dentistPromise: {
    headline: "Dentistry Done Right",
    description:
      "Kids, teens, adults, and seniors — we welcome the whole family! Led by Dr. Medhat Bader and our caring San Antonio team, every visit is built on honesty, comfort, and respect:",
    features: [
      "Same-Day Exam & Cleaning",
      "Honest, No-Pressure Plans",
      "PPO, Medicaid, CHIP & VA Welcome",
    ],
    quote:
      "We recommend only the treatment you actually need and show you why. If a tooth can wait, we tell you it can wait.",
    image: "/images/dentists/our-dentist-top-img.jpg",
    warrantySealText: {
      title: "Patient First",
      description: "Transparent pricing & benefits verified before your visit.",
    },
  },

  /* Lead Clinician Spotlight Carousel Config matching our-top-dentist.png */
  dentistSpotlight: [
    {
      id: "jenny-camille-concierge",
      indexNumber: "01",
      name: "Jenny & Camille",
      role: "Office Management & Patient Concierge",
      credentials: "20+ Years Patient Care Leadership",
      bio: "From the moment you walk into Suite 105 on Old Pearsall Rd, Jenny and Camille make you feel like family. Whether verifying your insurance benefits upfront, arranging flexible CareCredit® or LendingClub plans, or accommodating a same-day walk-in cleaning on your lunch break, they ensure a stress-free visit.",
      ctaText: "Book a Visit",
      badgeText: "Rated 5-Stars / Front Desk Concierge",
      badgeIcon: "/images/icons/top-rated-icon.png",
      photoUrl: "/images/dentists/top-rated-dentist-img.jpg",
    },
    {
      id: "dr-medhat-bader",
      indexNumber: "02",
      name: "Dr. Medhat G. Bader",
      role: "Founder & Lead Cosmetic & Restorative Dentist",
      credentials: "DMD, Boston University '99 • USAF Veteran",
      bio: "Graduating at the top of his class from Boston University Goldman School of Dental Medicine and serving 12 years as a U.S. Air Force Dental Officer, Dr. Bader has spent 30+ years perfecting gentle dentistry. Patients love his joyful, reassuring chairside manner — often hearing him humming a tune as he puts even the most nervous patients completely at ease.",
      ctaText: "Meet Dr. Bader",
      badgeText: "30+ Years Exp. / USAF Veteran",
      badgeIcon: "/images/icons/top-rated-icon.png",
      photoUrl: "/images/dentists/our-dentists-2.webp",
    },
    {
      id: "dr-kent-hamilton",
      indexNumber: "03",
      name: "Dr. Kent Hamilton",
      role: "Periodontist & Dental Implant Specialist",
      credentials: "DDS, MS • 50,000+ Implants Placed",
      bio: "With more than 40 years of specialty periodontal experience and over 50,000 dental implants placed, Dr. Hamilton partners with Dr. Bader to deliver advanced implant surgery, connective-tissue gum grafting, and full-mouth rehabilitation with a remarkably gentle touch.",
      ctaText: "Explore Implants",
      badgeText: "40+ Years Specialty Mastery",
      badgeIcon: "/images/icons/top-rated-icon.png",
      photoUrl: "/images/dentists/our-dentists-1.webp",
    },
  ],

  /* Specialist Team Grid Config matching our-all-dentist.png */
  specialistTeam: [
    {
      id: "spec-1",
      name: "Dr. Medhat G. Bader",
      credentials: "DMD • USAF Veteran",
      specialty: "Founder & Cosmetic, Restorative & Family Dentist",
      bio: "Boston University DMD graduate (Class of '99, Top of Class) and retired U.S. Air Force dentist with 30+ years of experience. Leads cosmetic smile makeovers, porcelain veneers, crowns, bridges, gentle root canals, and painless extractions. Fluent in English, Spanish, and Arabic.",
      photoUrl: "/images/dentists/our-dentists-2.webp",
      marbleBg: "/images/textures/marble-texture-3-1.jpg",
    },
    {
      id: "spec-2",
      name: "Dr. Kent Hamilton",
      credentials: "DDS, MS",
      specialty: "Periodontist & Dental Implant Specialist",
      bio: "Board-trained periodontist with over 40 years of experience and 50,000+ dental implants placed. Specializes in 3D-guided implant placement, full-arch rehabilitation, periodontal laser therapy, and gum grafting.",
      photoUrl: "/images/dentists/our-dentists-1.webp",
      marbleBg: "/images/textures/marble-texture-3-1.jpg",
    },
    {
      id: "spec-3",
      name: "Dr. Evan Edwards",
      credentials: "DDS",
      specialty: "General, Preventive & Emergency Dentist",
      bio: "Caring for San Antonio families Monday through Friday with comprehensive exams, same-day cleanings, tooth-colored restorative fillings, urgent toothache relief, and cosmetic whitening consultations.",
      photoUrl: "/images/dentists/our-dentists-3.webp",
      marbleBg: "/images/textures/marble-texture-3-1.jpg",
    },
    {
      id: "spec-4",
      name: "Dr. Virendrasinh Chauhan",
      credentials: "DDS",
      specialty: "Associate Family & Restorative Dentist",
      bio: "Dedicated to conservative, tooth-preserving dentistry for children, teens, and adults on Old Pearsall Rd — delivering gentle preventive checkups, pediatric care, and durable aesthetic restorations.",
      photoUrl: "/images/dentists/our-dentists-4.webp",
      marbleBg: "/images/textures/marble-texture-3-1.jpg",
    },
  ],

  /* The Experience - 3 Value Pillars (matching feature-section-top.png) */
  experiencePillars: {
    eyebrow: "DENTISTRY BUILT ON TRUST, NOT PRESSURE",
    title: "The Mr. Dentist Experience",
    pillars: [
      {
        id: "exp-1",
        icon: "/images/icons/dentist-chair-icon.png",
        title: "Same-Day Exam & Cleaning",
        description:
          "We respect your schedule. Whether you book online or walk in on your lunch break, we strive to complete your exam and professional teeth cleaning in the very same visit.",
      },
      {
        id: "exp-2",
        icon: "/images/icons/safe-icon.png",
        title: "Every Insurance & Budget",
        description:
          "We welcome all major PPO plans, Medicaid, CHIP, Medicare, Military TriCare, and VA Community Care — plus 0% APR financing through CareCredit®, LendingClub, and Proceed Finance.",
      },
      {
        id: "exp-3",
        icon: "/images/icons/stars-icons.png",
        title: "Anxiety-Free & Multilingual",
        description:
          "Nervous patients and kids are met with patience, warmth, and gentle sedation options (nitrous oxide, oral & IV sedation). Our team proudly serves you in English, Spanish, and Arabic.",
      },
    ],
  },

  /* Treatment Showcase - 3 Staggered Treatment Rows (matching features-section.png) */
  treatmentShowcase: {
    headlinePart1: "your",
    headlinePart2: "healthy smile",
    marbleBg: "/images/textures/marble-texture-3-1.jpg",
    items: [
      {
        id: "feat-routine",
        titlePart1: "family &",
        titlePart2: "preventive care",
        description:
          "From a child's very first tooth to adult ultrasonic cleanings, digital X-rays, fluoride, and sealants — we keep your whole family smiling under one roof.",
        ctaText: "explore family dentistry",
        categoryKey: "general",
        image: "/images/treatments/features-1.jpg",
        imageAlt:
          "Dentist reviewing dental model with smiling patient during routine checkup",
        imagePosition: "right",
      },
      {
        id: "feat-restorative",
        titlePart1: "implants &",
        titlePart2: "restorative care",
        description:
          "Dealing with tooth pain, infection, or missing teeth? Our veteran-led team provides gentle root canals, crowns, bridges, custom dentures, and permanent dental implants.",
        ctaText: "explore restorative care",
        categoryKey: "surgical",
        image: "/images/treatments/features-2.jpg",
        imageAlt:
          "Restorative dental specialist performing delicate tooth restoration",
        imagePosition: "left",
      },
      {
        id: "feat-cosmetic",
        titlePart1: "cosmetic",
        titlePart2: "transformations",
        description:
          "Discover your most confident smile through custom porcelain veneers, professional teeth whitening, tooth-colored bonding, and discreet clear aligners.",
        ctaText: "explore cosmetic dentistry",
        categoryKey: "cosmetic",
        image: "/images/treatments/features-3.jpg",
        imageAlt:
          "Cosmetic dentist photographing radiant aesthetic smile transformation result",
        imagePosition: "right",
      },
    ],
  },

  /* Comprehensive Services Suite: Top Category Pillars + Bottom Architectural Split-Word Row Procedures */
  servicesSuite: {
    topEyebrow: "EVERY SERVICE UNDER ONE ROOF",
    topHeadline: "Comprehensive care on Old Pearsall Rd",
    topSubtitle:
      "With over 60 years of combined clinical experience, our doctors provide general, cosmetic, endodontic, periodontal, and oral surgical care in one convenient San Antonio location — no outside referrals required.",
    pillars: [
      {
        id: "serv-general",
        title: "General",
        categoryKey: "general",
        description:
          "Same-day exams, gentle cleanings, digital X-rays, children's dentistry, and tooth-colored fillings for all ages.",
        ctaText: "ABOUT GENERAL DENTISTRY",
        image: "/images/services/service-1.jpg",
        imageAlt:
          "Lead dentist consulting with patient in modern serene treatment room",
      },
      {
        id: "serv-cosmetic",
        title: "Cosmetic",
        categoryKey: "cosmetic",
        description:
          "Handcrafted porcelain veneers, professional teeth whitening, clear aligners, and custom smile makeovers.",
        ctaText: "ABOUT COSMETIC DENTISTRY",
        image: "/images/services/service-2.jpg",
        imageAlt:
          "Cosmetic dentist reviewing digital smile preview with relaxed patient",
      },
      {
        id: "serv-surgical",
        title: "Surgical",
        categoryKey: "surgical",
        description:
          "Wisdom teeth removal, gentle extractions, root canals, gum grafting, and permanent dental implants.",
        ctaText: "ABOUT SURGICAL & IMPLANT CARE",
        image: "/images/services/service-3.jpg",
        imageAlt:
          "Surgical dental specialist wearing loupes performing precise restorative procedure",
      },
    ],
    rowEyebrow: "SIGNATURE PROCEDURES",
    rowHeadline: "Gentle Dentistry, Built to Last",
    rowSubtitle:
      "Select any treatment below to explore how Dr. Bader and our clinical team combine modern CBCT 3D diagnostics with unhurried, anxiety-free care.",
    procedures: [
      {
        id: "proc-crowns",
        indexNumber: "/01",
        titlePart1: "Crowns &",
        titlePart2: "Bridges",
        category: "Restorative Dentistry",
        description:
          "Custom-shaded porcelain and zirconia crowns and fixed bridges crafted to protect cracked or weakened teeth and seamlessly replace missing teeth.",
        specs:
          "High-Strength Zirconia & Porcelain • Natural Shade Match • Precision Bite Fit",
        turnaround: "Fast Turnaround",
        comfortProtocol: "Gentle Local Anesthesia • Zero-Pressure Consult",
        image: "/images/services/dental-crown-service-box.jpg",
        imageAlt: "Precision ceramic dental crown ready for placement",
        ctaText: "Book Crown Consultation",
      },
      {
        id: "proc-implants",
        indexNumber: "/02",
        titlePart1: "Dental",
        titlePart2: "Implants",
        category: "Surgical Implantology",
        description:
          "Permanent titanium and ceramic tooth roots placed with CBCT 3D imaging to restore 100% natural chewing power and preserve jawbone health for life.",
        specs:
          "CBCT 3D Guided Planning • 50,000+ Implants Team Experience • VA & Financing Eligible",
        turnaround: "Single Tooth to Full Arch",
        comfortProtocol: "Nitrous, Oral & IV Sedation Available",
        image: "/images/services/dental-implants-service-box.jpg",
        imageAlt: "Bio-integrated dental implant fixture and crown restoration",
        ctaText: "Book Implant Consultation",
      },
      {
        id: "proc-rehab",
        indexNumber: "/03",
        titlePart1: "Dentures &",
        titlePart2: "Full Rehab",
        category: "Prosthodontic Reconstruction",
        description:
          "Comfortable full dentures, partials, and implant-supported full-mouth reconstructions tailored to restore your facial profile, speech, and bite.",
        specs:
          "Full, Partial & Implant-Retained • Custom Facial Proportions • Written Estimates",
        turnaround: "Phased Custom Plan",
        comfortProtocol: "Compassionate, Judgment-Free Care",
        image: "/images/services/full-mouth-rehab-before-and-after.jpeg",
        imageAlt: "Before and after full mouth oral rehabilitation comparison",
        ctaText: "Book Denture or Rehab Visit",
      },
      {
        id: "proc-whitening",
        indexNumber: "/04",
        titlePart1: "Professional",
        titlePart2: "Whitening",
        category: "Aesthetic Brightening",
        description:
          "Fast, enamel-safe in-office and custom take-home whitening treatments that lift years of coffee, tea, and everyday staining without harsh sensitivity.",
        specs:
          "In-Office & Take-Home Options • Enamel-Safe Gel • Dramatic Shade Lift",
        turnaround: "Single Visit (Under 1 Hour)",
        comfortProtocol: "Desensitizing Protection Included",
        image: "/images/services/glo-whitening-service-box.jpg",
        imageAlt: "Professional in-office teeth whitening treatment",
        ctaText: "Book Teeth Whitening",
      },
      {
        id: "proc-invisalign",
        indexNumber: "/05",
        titlePart1: "Braces &",
        titlePart2: "Aligners",
        category: "Family Orthodontics",
        description:
          "Straighten crowded or spaced teeth for teens and adults using discreet clear aligner therapy or modern orthodontic solutions tailored to your goals.",
        specs:
          "Clear Removable Trays • Digital Progress Tracking • Flexible Monthly Plans",
        turnaround: "Custom 6–18 Month Plans",
        comfortProtocol: "Smooth Edges • Easy Brushing & Flossing",
        image: "/images/services/invisalign-service-box.jpg",
        imageAlt: "Clear orthodontic aligner tray held by patient",
        ctaText: "Book Orthodontic Consult",
      },
      {
        id: "proc-root-canals",
        indexNumber: "/06",
        titlePart1: "Gentle",
        titlePart2: "Root Canals",
        category: "Pain-Relieving Endodontics",
        description:
          "Stop severe toothache pain and save your natural tooth from extraction with Dr. Bader's calm, gentle root canal therapy and same-day emergency relief.",
        specs:
          "Low-Radiation Digital X-Rays • Precision Rotary Cleaning • Natural Tooth Preservation",
        turnaround: "Same-Day Emergency Relief",
        comfortProtocol: "Thorough Numbing & Reassuring Pace",
        image: "/images/services/root-canals-service-box.jpg",
        imageAlt: "Modern gentle endodontic procedure",
        ctaText: "Book Root Canal Relief",
      },
      {
        id: "proc-extractions",
        indexNumber: "/07",
        titlePart1: "Wisdom Teeth &",
        titlePart2: "Extractions",
        category: "Gentle Oral Surgery",
        description:
          "Safe, quick, and remarkably gentle tooth removals and wisdom teeth extractions — praised by nervous San Antonio patients for being fast and stress-free.",
        specs:
          "Simple & Surgical Extractions • Infection Relief • Socket Preservation",
        turnaround: "Same-Day Urgent Slots Daily",
        comfortProtocol: "Dr. Bader's Calm Protocol & Sedation Options",
        image: "/images/services/solea-laser-filling-service-box.jpg",
        imageAlt: "Modern gentle dental treatment suite",
        ctaText: "Book Gentle Extraction",
      },
      {
        id: "proc-veneers",
        indexNumber: "/08",
        titlePart1: "Porcelain",
        titlePart2: "Veneers",
        category: "Cosmetic Smile Makeovers",
        description:
          "Ultra-thin, custom-crafted porcelain veneers designed by Dr. Bader to permanently correct chips, gaps, worn enamel, and deep discoloration.",
        specs:
          "Custom Handcrafted Porcelain • Natural Translucency • Long-Lasting Strength",
        turnaround: "2 Visits to Your New Smile",
        comfortProtocol: "Conservative Prep • Zero-Surprise Pricing",
        image: "/images/services/veneer_service-box.jpg",
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
      "Every smile has a story. Explore how precision restorative dentistry, dental implants, and compassionate care restore natural harmony, confident chewing, and lasting joy.",
    cases: [
      {
        id: "trans-full-mouth",
        indexTag: "CASE / 01",
        category: "Full-Mouth Reconstruction",
        title: "A Full-Mouth Reconstruction",
        description:
          "Years of wear had left their mark. The solution? A complete reimagining. Custom crowns and restorative care delivered what this patient deserved all along: a highly functional smile that looks flawless.",
        treatment: "Custom Ceramic Crowns & Full Rehabilitation",
        ctaText: "Explore Crowns",
        patientImage: "/images/transformations/person-1.avif",
        patientAlt: "Patient smiling radiantly after full mouth reconstruction",
        patientName: "George C.",
        beforeImage: "/images/transformations/person-1-before.webp",
        afterImage: "/images/transformations/person-1-after.webp",
        clinicalStats: [
          { label: "Procedure", value: "Custom Crowns & Rehab" },
          { label: "Primary Goal", value: "Aesthetics & Bite Stability" },
          { label: "Clinical Outcome", value: "Flawless Function & Alignment" },
        ],
      },
      {
        id: "trans-anterior-trauma",
        indexTag: "CASE / 02",
        category: "Anterior Restoration",
        title: "Front Tooth Bridge & Esthetic Symmetry",
        description:
          "After an injury resulted in a fractured front tooth, this patient was concerned about both the appearance and stability of their anterior teeth. A custom dental bridge restored natural esthetics, symmetry, and strength.",
        treatment: "Porcelain Dental Bridge & Esthetic Restoration",
        ctaText: "Explore Bridges & Implants",
        patientImage: "/images/transformations/person-2.avif",
        patientAlt: "Patient restored confident smile after front tooth trauma",
        patientName: "David K.",
        beforeImage: "/images/transformations/person-2-before.jpg",
        afterImage: "/images/transformations/person-2-after.jpg",
        clinicalStats: [
          { label: "Procedure", value: "Dental Bridge" },
          { label: "Indication", value: "Anterior Fracture / Trauma" },
          {
            label: "Clinical Outcome",
            value: "Natural Symmetry & High Strength",
          },
        ],
      },
      {
        id: "trans-trauma-dentures",
        indexTag: "CASE / 03",
        category: "Implant Rehabilitation",
        title: "Recovering Comfort & Chewing Power",
        description:
          "Advanced periodontal challenges and failing teeth left him in persistent discomfort. With fixed upper and lower implant-supported restorations, we rebuilt stability, comfort, and function so he can smile freely.",
        treatment: "Fixed Upper & Lower Implant-Supported Restorations",
        ctaText: "Explore Full Reconstruction",
        patientImage: "/images/transformations/person-3.avif",
        patientAlt:
          "Patient smiling comfortably after prosthodontic trauma reconstruction",
        patientName: "Robert H.",
        beforeImage: "/images/transformations/person-3-before.webp",
        afterImage: "/images/transformations/person-3-after.webp",
        clinicalStats: [
          { label: "Procedure", value: "Fixed Implant Dentures" },
          { label: "Indication", value: "Severe Tooth Loss" },
          {
            label: "Clinical Outcome",
            value: "Pain-Free Comfort & Confident Chewing",
          },
        ],
      },
      {
        id: "trans-agenesis-bridge",
        indexTag: "CASE / 04",
        category: "Cosmetic & Implant Bridge",
        title: "A Smile, Carefully Rebuilt",
        description:
          "She came to us with missing permanent teeth and spacing that made everyday function a real concern. With a coordinated plan using custom crowns and implant-supported bridges, we restored balance and a natural look.",
        treatment: "Crowns, Implant Crowns & Implant-Supported Bridge",
        ctaText: "Explore Bridges",
        patientImage: "/images/transformations/person-4.avif",
        patientAlt:
          "Patient smiling with restored harmony after congenital spacing reconstruction",
        patientName: "Cynthia S.",
        beforeImage: "/images/transformations/person-4-before.webp",
        afterImage: "/images/transformations/person-4-after.webp",
        clinicalStats: [
          { label: "Procedure", value: "Implant Bridge & Crowns" },
          { label: "Indication", value: "Missing Teeth & Spacing" },
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
      "Discover why San Antonio families trust Dr. Medhat Bader and the Mr. Dentist team on Old Pearsall Rd for gentle, honest, and anxiety-free dental care.",
    googleRating: 4.5,
    googleReviewCount: "231+ Verified Reviews",
    googleBadgeText: "Top Rated Southwest San Antonio Dentist",
    ctaText: "BOOK YOUR VISIT +",
    reviews: [
      {
        id: "rev-1",
        author: "Patricia",
        location: "San Antonio, TX",
        treatment: "Same-Day Exam & Teeth Cleaning",
        treatmentCategory: "Preventive Care",
        treatingDoctor: "Dr. Medhat G. Bader, DMD",
        rating: 5,
        date: "3 months ago",
        photoUrl: "/images/testimonials/review-person-1.avif",
        verifiedGoogle: true,
        quote:
          "This office is simply amazing. I walked in to inquire about teeth cleaning and was able to be seen right then and there. I love that they did my exam and teeth cleaning the same day! The office staff is very polite and the Doctor is simply PHENOMENAL — he walks around singing and truly cares about your dental health.",
      },
      {
        id: "rev-2",
        author: "Melissa Vasquez",
        location: "San Antonio, TX",
        treatment: "Urgent Infection Relief & Extractions",
        treatmentCategory: "Gentle Oral Surgery",
        treatingDoctor: "Dr. Medhat G. Bader, DMD",
        rating: 5,
        date: "3 months ago",
        photoUrl: "/images/testimonials/review-person-2.webp",
        verifiedGoogle: true,
        quote:
          "Came in for a tooth infection and ended up having a couple extractions. I get really nervous at the dentist, but Dr. Bader made me feel relaxed and not so scared. From the front office to the nurses in the back to the Doctor himself, it was by far the best experience I've ever had at a dentist office!",
      },
      {
        id: "rev-3",
        author: "Lacie Allen-Bey",
        location: "San Antonio, TX",
        treatment: "Family & Pediatric Dental Care",
        treatmentCategory: "Family Dentistry",
        treatingDoctor: "Dr. Medhat G. Bader, DMD",
        rating: 5,
        date: "Verified Patient",
        photoUrl: "/images/testimonials/review-person-3.avif",
        verifiedGoogle: true,
        quote:
          "Best dentist ever! Dr. Bader is kind, professional, and helpful. He takes the time to explain things to you and is reassuring. All of the staff is always kind and friendly. My whole family goes to Mr. Dentist and the whole staff is great with kids as well!",
      },
      {
        id: "rev-4",
        author: "Melissa Lumbreras",
        location: "San Antonio, TX",
        treatment: "Lunch-Break Cleaning & White Fillings",
        treatmentCategory: "Restorative & Hygiene",
        treatingDoctor: "Dr. Medhat G. Bader, DMD",
        rating: 5,
        date: "2 months ago",
        photoUrl: "/images/testimonials/review-person-4.avif",
        verifiedGoogle: true,
        quote:
          "They had me go to the back immediately on my lunch break. Every employee I met was super friendly and in such a good mood. I absolutely love the dentist! Definitely one of my best cleanings, and they refilled 2 fillings quickly and comfortably.",
      },
    ],
  },

  /* Phase 8 — Frequently Asked Questions (FAQ Section with Bold Contrasting Marble Tabs) */
  faqConfig: {
    headlinePart1: "ANSWERS TO YOUR COMMON",
    headlinePart2: "DENTAL",
    highlightBadge: "QUESTIONS",
    subtitle:
      "Everything you need to know about our same-day cleanings, accepted insurance & Medicaid/VA plans, anxiety-free sedation, and family dental care on Old Pearsall Rd.",
    items: [
      {
        id: "faq-1",
        question: "What insurance plans and payment options do you accept?",
        answer:
          "We welcome almost every coverage type so your family can get care without stress. We accept all major PPO dental insurance plans, Medicaid, CHIP, Medicare, Military TriCare, and are credentialed with the U.S. Department of Veterans Affairs (VA) for community care. No insurance? We offer 0% APR and flexible monthly payment plans through CareCredit®, LendingClub Patient Solutions, and Proceed Finance, with written estimates before any treatment begins.",
        category: "Financial Clarity",
      },
      {
        id: "faq-2",
        question: "Can I get my exam and teeth cleaning done in the same visit?",
        answer:
          "Yes! Unlike clinics that make you come in for an exam and schedule a second appointment weeks later for your cleaning, we strive to complete your comprehensive exam, digital X-rays, and professional teeth cleaning in the very same visit — including for walk-in and lunch-break patients.",
        category: "Same-Day Convenience",
      },
      {
        id: "faq-3",
        question: "What should I do if I have a toothache or dental emergency?",
        answer:
          "Call us right away at (210) 541-4132 or (210) 623-3900, or book an urgent slot online. We reserve time every day Monday through Friday (10:00 AM – 6:00 PM) for same-day emergencies including toothaches, infections, broken teeth, lost crowns, and gentle extractions.",
        category: "Emergency Care",
      },
      {
        id: "faq-4",
        question: "I get very nervous at the dentist. How do you help anxious patients?",
        answer:
          "You are in the right hands. Patients consistently praise Dr. Bader and our dental assistants for their calm, gentle, judgment-free approach. We explain every step in plain language, never rush you, and offer nitrous oxide (laughing gas), oral conscious sedation, and IV sedation so you can relax comfortably through any procedure.",
        category: "Anxiety-Free Care",
      },
      {
        id: "faq-5",
        question: "Do you treat children and speak Spanish or Arabic?",
        answer:
          "Absolutely! We are a true family dental practice caring for children from their very first tooth through teens, adults, and seniors. Our diverse San Antonio team proudly accommodates patients in English, Spanish, and Arabic.",
        category: "Family & Bilingual Care",
      },
    ],
  },

  /* Phase 6 & 8 — Combined Modern Comforts & Insurance Transparency Section */
  modernComfortsConfig: {
    headline: "It's all in the details",
    description:
      "Your comfort comes first. From our welcoming front desk team on Old Pearsall Rd to low-radiation CBCT 3D imaging, gentle sedation options, and Dr. Bader's warm, reassuring chairside manner, every detail is designed to take the fear out of visiting the dentist.",
    comfortPillars: [
      "Same-day exam & cleaning in a single convenient visit",
      "Nitrous oxide, oral & IV sedation for nervous patients",
      "CBCT 3D imaging & low-radiation digital X-rays",
      "Bilingual care in English, Spanish & Arabic for all ages",
    ],
    slides: [
      {
        id: "comfort-operatory",
        title: "Modern, Calm Treatment Suites",
        subtitle: "CBCT 3D Imaging & Gentle Chairside Care",
        description:
          "Equipped with low-radiation digital sensors and 3D diagnostics, our treatment suites are designed for quiet, unhurried, and pain-free appointments.",
        image: "/images/comforts/slide-1-1000.jpg",
        tag: "Precision Diagnostics",
      },
      {
        id: "comfort-beverage",
        title: "Warm, Family-First Hospitality",
        subtitle: "A Welcoming Atmosphere From Start to Finish",
        description:
          "Whether you're bringing in your kids after school or stopping by on your lunch break, our upbeat team makes every patient feel right at home.",
        image: "/images/comforts/slide-2-1000-1.jpg",
        tag: "Family Sanctuary",
      },
      {
        id: "comfort-reception",
        title: "Stress-Free Front Desk Concierge",
        subtitle: "Benefits Verified Before You Sit in the Chair",
        description:
          "Jenny, Camille, and our front-office team handle all insurance paperwork, Medicaid/VA coordination, and written estimates upfront so you never face surprise bills.",
        image: "/images/comforts/slide-3-1000.jpg",
        tag: "Concierge Welcome",
      },
      {
        id: "comfort-foyer",
        title: "Convenient Old Pearsall Rd Studio",
        subtitle: "Free Storefront Parking & Walk-In Access",
        description:
          "Located in Suite 105 at 6338 Old Pearsall Rd with step-free wheelchair access, dedicated parking right outside the door, and evening hours until 6:00 PM.",
        image: "/images/comforts/slide-4-1000.jpg",
        tag: "Easy Arrival",
      },
    ],
    insuranceSection: {
      eyebrow: "MEDICAID, CHIP, VA & MOST INSURANCE WELCOME",
      headline: "Transparent Coverage & Flexible Payment Plans",
      subtitle:
        "We believe every San Antonio family deserves honest, affordable dental care. Bring your insurance card and our team will verify your exact benefits before treatment begins.",
      networks: [
        { id: "net-delta", name: "Delta Dental & All PPOs", type: "PPO Network" },
        { id: "net-medicaid", name: "Medicaid & CHIP", type: "Family Coverage" },
        { id: "net-va", name: "VA & Military TriCare", type: "Veteran Care" },
        { id: "net-cigna", name: "Cigna & MetLife", type: "PPO Network" },
        { id: "net-aetna", name: "Aetna & Guardian", type: "PPO Network" },
        { id: "net-dentaquest", name: "DentaQuest & MCNA", type: "Texas Plans" },
      ],
      financingOptions: [
        {
          id: "fin-insurance",
          title: "PPO, Medicaid, CHIP & VA",
          subtitle: "100% Paperwork Managed",
          description:
            "We accept almost all major PPO plans, Medicaid, CHIP, Medicare, Military TriCare, and VA Community Care. We verify your benefits upfront with zero surprises.",
          features: [
            "Complimentary Pre-Visit Benefit Check",
            "Medicaid, CHIP & DentaQuest Welcome",
            "Veteran-Owned & VA Credentialed Clinic",
          ],
          ctaText: "Verify My Coverage",
        },
        {
          id: "fin-monthly",
          title: "CareCredit® & LendingClub",
          subtitle: "0% APR & Low Monthly Plans",
          description:
            "Break crowns, veneers, root canals, or dental implants into budget-friendly monthly payments using CareCredit®, LendingClub Patient Solutions, or Proceed Finance.",
          features: [
            "Instant In-Office or Digital Approval",
            "0% APR Promotional Plans Available",
            "Proceed Finance for Full-Mouth Cases",
          ],
          ctaText: "Explore Payment Plans",
        },
        {
          id: "fin-membership",
          title: "Honest Cash & Walk-In Pricing",
          subtitle: "For Patients Without Insurance",
          description:
            "No insurance? No problem. We provide clear written estimates before starting any work and never pressure you into treatments you don't need or can't afford.",
          features: [
            "Same-Day Exam & Cleaning Packages",
            "Written Upfront Treatment Estimates",
            "Conservative, Need-First Philosophy",
          ],
          ctaText: "Book New Patient Visit",
        },
      ],
    },
  },
  ctaSection: {
    scriptAccent: "Ready",
    title: "for a healthier, brighter smile?",
    reassuranceText:
      "Whether you need a same-day exam and cleaning, urgent relief for a toothache, or a cosmetic and implant consultation with Dr. Medhat Bader, our Old Pearsall Rd team is ready to welcome you.",
    primaryCtaText: "Book Your Visit Online",
    secondaryCtaText: "Call (210) 541-4132",
    phoneText: "+1 (210) 541-4132",
    backgroundImage: "/images/cta/cta-behind-bg.webp",
    personImage: "/images/cta/cta-person-img.webp",
    badgeText: "WALK-INS & NEW PATIENTS WELCOME",
  },
  footer: {
    tagline:
      "Veteran-led family, cosmetic, and restorative dentistry in San Antonio — combining 30+ years of clinical mastery with warm, honest, anxiety-free care.",
    accreditations: [
      "American Dental Association (ADA)",
      "Texas Dental Association (TDA)",
      "Boston University Goldman School DMD",
      "U.S. Air Force Veteran & VA Credentialed",
    ],
    quickLinks: [
      { label: "Our Story & Philosophy", href: "#our-story" },
      { label: "The Mr. Dentist Experience", href: "#experience" },
      { label: "Dr. Bader & Clinical Team", href: "#doctors" },
      { label: "Patient Transformations", href: "#transformations" },
      { label: "Comfort & Insurance", href: "#comforts" },
      { label: "231+ Verified Reviews", href: "#reviews" },
      { label: "Frequently Asked Questions", href: "#faq" },
    ],
    treatmentLinks: [
      { label: "Same-Day Exam & Cleaning", href: "#services" },
      { label: "Dental Implants & Bridges", href: "#services" },
      { label: "Porcelain Veneers & Whitening", href: "#services" },
      { label: "Crowns, Dentures & Rehab", href: "#services" },
      { label: "Gentle Root Canals & Extractions", href: "#services" },
      { label: "Same-Day Emergency Relief", href: "#emergency" },
    ],
    socialLinks: [
      { platform: "x", href: "https://x.com", label: "X (Twitter)" },
      { platform: "linkedin", href: "https://linkedin.com", label: "LinkedIn" },
      {
        platform: "instagram",
        href: "https://instagram.com",
        label: "Instagram",
      },
      { platform: "facebook", href: "https://facebook.com", label: "Facebook" },
    ],
    copyright: "© 2026 Mr. Dentist (San Antonio, TX). All rights reserved.",
    legalLinks: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "ADA Accessibility Statement", href: "#accessibility" },
      { label: "Notice of Non-Discrimination", href: "#nondiscrimination" },
    ],
    watermarkText: "MR. DENTIST",
  },
};
