export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string; description?: string }[];
}

export interface ClinicalMilestone {
  label: string;
  value: string;
  subtext?: string;
}

export interface AffiliationPartner {
  id: string;
  name: string;
  subtitle?: string;
  category: "association" | "college" | "specialty" | "insurance";
  acronym?: string;
}

export interface PatientTestimonial {
  id: string;
  author: string;
  location: string;
  treatment: string;
  rating: number;
  date: string;
  quote: string;
  avatarInitial?: string;
}

export interface AnnouncementConfig {
  emergencyNotice: string;
  badgeText: string;
  actionText: string;
}

export interface PracticeConfig {
  id: string;
  name: string;
  tagline: string;
  emergencyHotline: string;
  officePhone: string;
  email: string;
  announcement: AnnouncementConfig;
  locations: {
    city: string;
    state: string;
    address: string;
  }[];
  hero: {
    locationTag: string;
    headlinePart1: string;
    headlinePart2: string;
    subheading: string;
    primaryCtaText: string;
    secondaryCtaText: string;
  };
  navigation: {
    links: NavLink[];
    ctaText: string;
  };
  address: {
    street: string;
    suite?: string;
    city: string;
    stateProvince: string;
    postalCode: string;
    mapCoordinates: { lat: number; lng: number };
    directionsTip: string;
  };
  hours: {
    dayRange: string;
    hours: string;
    isOpenToday?: boolean;
  }[];
  leadDentist: {
    name: string;
    credentials: string;
    role: string;
    experienceYears: number;
    education: string[];
    bio: string;
    personalPhilosophy: string;
    photoUrl: string;
  };
  trustMetrics: {
    googleRating: number;
    reviewCount: number;
    smilesTransformed: number;
    satisfactionRate: number;
  };
  milestones: ClinicalMilestone[];
  affiliations: AffiliationPartner[];
  testimonials: PatientTestimonial[];
}
