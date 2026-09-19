export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string; description?: string }[];
}

export interface PracticeConfig {
  id: string;
  name: string;
  tagline: string;
  emergencyHotline: string;
  officePhone: string;
  email: string;
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
}
