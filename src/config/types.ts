export type ServiceIconId = 'globe' | 'smartphone' | 'server' | 'bot' | 'webhook'

export type PricingModel = 'starting_at' | 'fixed' | 'hourly' | 'quote' | 'subscription'

export type ProjectStatus = 'Concept' | 'Demo' | 'In progress' | 'Shipped'

export type ProjectCategory = 'Web' | 'Android' | 'Backend' | 'Telegram' | 'Full-stack'

export interface SocialLink {
  label: string
  href: string
}

export interface ServicePackage {
  name: string
  description: string
}

export interface ServiceItem {
  id: string
  title: string
  summary: string
  details: string[]
  technologies: string[]
  icon: ServiceIconId
  pricingModel: PricingModel
  /** Leave null to show the quote label instead of a number. */
  price: number | null
  currency: string
  priceSuffix: string
  deliveryEstimate: string
  ctaLabel: string
}

export interface SkillGroup {
  id: string
  title: string
  skills: string[]
}

export interface PricingPlan {
  id: string
  name: string
  description: string
  pricingModel: PricingModel
  price: number | null
  currency: string
  priceSuffix: string
  features: string[]
  deliveryEstimate: string
  recommended: boolean
  ctaLabel: string
  ctaHref: string
}

export interface TelegramFeature {
  title: string
  description: string
}

export interface TelegramPlanPriceOption {
  label: string
  amount: string
}

export interface TelegramPlan {
  id: string
  name: string
  duration: string
  description: string
  price: number | null
  currency: string
  priceSuffix: string
  priceOptions?: TelegramPlanPriceOption[]
  features: string[]
  recommended: boolean
  badge?: string
  ctaLabel: string
}

export interface TelegramBotConfig {
  name: string
  username: string
  url: string
  shortPitch: string
  description: string
  targetAudience: string
  userCountLabel: string
  promotionalText: string
  openCtaLabel: string
  supportUsername: string
  supportUrl: string
  paymentMethods: string[]
  autoActivation: boolean
  howToStart: { step: string; title: string; detail: string }[]
  features: TelegramFeature[]
  plans: TelegramPlan[]
}

export interface ContactConfig {
  formMode: 'mailto'
  budgetRanges: string[]
  successMessage: string
}

export interface SeoConfig {
  title: string
  description: string
  siteUrl: string
  ogImage: string
}

export interface PersonalConfig {
  fullName: string
  brandName: string
  initials: string
  title: string
  shortIntro: string
  biography: string
  philosophy: string
  workApproach: string
  profileImage: string
  email: string
  phone: string
  location: string
  yearsOfExperience: string
  availability: string
  available: boolean
  resumeUrl: string
  telegramUsername: string
  telegramUrl: string
  github: string
  linkedin: string
  socials: SocialLink[]
}

export interface SiteConfig {
  personal: PersonalConfig
  seo: SeoConfig
  hero: {
    primaryCta: string
    secondaryCta: string
    botCta: string
    stack: string[]
  }
  about: {
    heading: string
  }
  services: ServiceItem[]
  skillGroups: SkillGroup[]
  pricing: {
    intro: string
    plans: PricingPlan[]
  }
  telegramBot: TelegramBotConfig
  contact: ContactConfig
  ui: {
    showConfigHints: boolean
  }
}

export interface Project {
  id: string
  name: string
  category: ProjectCategory
  description: string
  longDescription: string
  stack: string[]
  features: string[]
  status: ProjectStatus
  featured: boolean
  demoLabel: string
  demoPath: string
  liveUrl: string
  sourceUrl: string
  cover: 'atelier' | 'lumen' | 'pulse'
}
