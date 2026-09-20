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
  category: "association" | "college" | "specialty" | "insurance" | "technology";
  acronym?: string;
  logoUrl?: string;
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
  photoUrl?: string;
  treatmentCategory?: string;
  treatingDoctor?: string;
  verifiedGoogle?: boolean;
}

export interface AnnouncementConfig {
  emergencyNotice: string;
  badgeText: string;
  actionText: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface SmileHookConfig {
  headlinePart1: string;
  headlinePart2: string;
  subtitle: string;
  paragraphs: string[];
  highlightBadge: string;
  galleryImages: GalleryImage[];
}

export interface DentistPromiseConfig {
  headline: string;
  description: string;
  features: string[];
  quote: string;
  image: string;
  warrantySealText: {
    title: string;
    description: string;
  };
}

export interface DentistSpotlightMember {
  id: string;
  indexNumber: string;
  name: string;
  role: string;
  credentials?: string;
  bio: string;
  ctaText: string;
  badgeText: string;
  badgeIcon: string;
  photoUrl: string;
}

export interface SpecialistTeamMember {
  id: string;
  name: string;
  credentials: string;
  specialty: string;
  bio: string;
  photoUrl: string;
  marbleBg?: string;
}

export interface ExperiencePillarItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ExperiencePillarsConfig {
  eyebrow: string;
  title: string;
  pillars: ExperiencePillarItem[];
}

export interface TreatmentShowcaseItem {
  id: string;
  titlePart1: string;
  titlePart2: string;
  description: string;
  ctaText: string;
  categoryKey: string;
  image: string;
  imageAlt: string;
  imagePosition: "left" | "right";
}

export interface TreatmentShowcaseConfig {
  headlinePart1: string;
  headlinePart2: string;
  marbleBg?: string;
  items: TreatmentShowcaseItem[];
}

export interface ServicePillarItem {
  id: string;
  title: string;
  categoryKey: "general" | "cosmetic" | "surgical";
  description: string;
  ctaText: string;
  image: string;
  imageAlt: string;
}

export interface ServiceRowProcedure {
  id: string;
  indexNumber: string;
  titlePart1: string;
  titlePart2: string;
  category: string;
  description: string;
  specs: string;
  turnaround: string;
  comfortProtocol: string;
  image: string;
  imageAlt: string;
  ctaText: string;
}

export interface ServicesSuiteConfig {
  topEyebrow: string;
  topHeadline: string;
  topSubtitle: string;
  pillars: ServicePillarItem[];
  rowEyebrow: string;
  rowHeadline: string;
  rowSubtitle: string;
  procedures: ServiceRowProcedure[];
}

export interface TransformationCase {
  id: string;
  indexTag: string;
  category: string;
  title: string;
  description: string;
  treatment: string;
  ctaText: string;
  patientImage: string;
  patientAlt: string;
  patientName?: string;
  beforeImage: string;
  afterImage: string;
  clinicalStats?: { label: string; value: string }[];
}

export interface TransformationsConfig {
  eyebrow: string;
  sectionIndex: string;
  headline: string;
  subtitle: string;
  cases: TransformationCase[];
}

export interface TestimonialsConfig {
  sectionIndex: string;
  eyebrow: string;
  headlinePart1: string;
  highlightBadge: string;
  subtitle: string;
  googleRating: number;
  googleReviewCount: string;
  googleBadgeText: string;
  ctaText: string;
  reviews: PatientTestimonial[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface FAQConfig {
  headlinePart1: string;
  headlinePart2: string;
  highlightBadge: string;
  subtitle?: string;
  items: FAQItem[];
}

export interface StudioComfortSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
}

export interface InsuranceNetworkItem {
  id: string;
  name: string;
  type: string;
  badge?: string;
}

export interface FinancingOptionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  ctaText: string;
}

export interface ModernComfortsConfig {
  headline: string;
  description: string;
  comfortPillars: string[];
  slides: StudioComfortSlide[];
  insuranceSection: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    networks: InsuranceNetworkItem[];
    financingOptions: FinancingOptionItem[];
  };
}

export interface CtaSectionConfig {
  scriptAccent: string;
  title: string;
  reassuranceText: string;
  primaryCtaText: string;
  secondaryCtaText?: string;
  phoneText?: string;
  backgroundImage: string;
  personImage: string;
  badgeText?: string;
}

export interface FooterLinkItem {
  label: string;
  href: string;
  badge?: string;
}

export interface SocialLinkItem {
  platform: "instagram" | "linkedin" | "facebook" | "x" | "youtube";
  href: string;
  label: string;
}

export interface FooterConfig {
  tagline: string;
  accreditations: string[];
  quickLinks: FooterLinkItem[];
  treatmentLinks: FooterLinkItem[];
  socialLinks: SocialLinkItem[];
  copyright: string;
  legalLinks: FooterLinkItem[];
  watermarkText: string;
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
  smileHook?: SmileHookConfig;
  dentistPromise?: DentistPromiseConfig;
  dentistSpotlight?: DentistSpotlightMember[];
  specialistTeam?: SpecialistTeamMember[];
  experiencePillars?: ExperiencePillarsConfig;
  treatmentShowcase?: TreatmentShowcaseConfig;
  servicesSuite?: ServicesSuiteConfig;
  transformations?: TransformationsConfig;
  testimonialsConfig?: TestimonialsConfig;
  faqConfig?: FAQConfig;
  modernComfortsConfig?: ModernComfortsConfig;
  ctaSection?: CtaSectionConfig;
  footer?: FooterConfig;
}

