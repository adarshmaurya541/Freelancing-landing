import type { SiteConfig } from './types'

/**
 * Central place to edit business details.
 * Fields wrapped in [BRACKETS] or starting with "your." are placeholders.
 * Set `ui.showConfigHints` to false after you fill in real values.
 */
export const siteConfig: SiteConfig = {
  ui: {
    showConfigHints: false,
  },

  personal: {
    fullName: 'Adarsh Maurya',
    brandName: 'Adarsh Maurya',
    initials: 'AM',
    title: 'Full-stack developer for web, Android, and Telegram products',
    shortIntro:
      'I help businesses and startups turn their ideas into reliable digital products, from modern websites and Android apps to powerful APIs, backend systems, and custom Telegram bots.',
    biography:
      'I am an independent software developer focused on building practical, scalable, and user-friendly digital solutions. I work with businesses, startups, and individuals to transform their requirements into functional products, with an emphasis on clean code, reliable performance, and long-term maintainability. Whether you need a website, a mobile application, backend infrastructure, or automation through Telegram bots and APIs, I aim to deliver solutions that solve real problems and support your goals.',
    philosophy:
      'Great software should be simple to use, reliable in production, and easy to maintain. I believe in clean architecture, thoughtful UI/UX, efficient performance, and choosing the right technology for each problem. Every feature should serve a purpose, every interface should feel intuitive, and every solution should be built with future growth in mind.',
    workApproach:
      'I follow a transparent, collaborative development process, starting with understanding your goals and defining a clear scope. I then plan the solution, build it in manageable stages, and share progress regularly so you can provide feedback along the way. Before delivery, I focus on testing, refinement, and documentation to ensure the final product is reliable, maintainable, and ready for real-world use.',
    profileImage: '',
    email: 'adarshmaurya541@gmail.com',
    phone: '',
    location: 'India',
    yearsOfExperience: '',
    availability: 'Available for new freelance projects',
    available: true,
    resumeUrl: '',
    telegramUsername: '@Contact_xbot',
    telegramUrl: 'https://t.me/Contact_xbot',
    github: 'https://github.com/dev-adarsh-maurya',
    linkedin: '',
    socials: [],
  },

  seo: {
    title: 'Adarsh Maurya — Freelance Developer',
    description:
      'Freelance developer for websites, Android apps, backend systems, APIs, and Telegram bots.',
    siteUrl: '',
    ogImage: '/favicon.svg',
  },

  hero: {
    primaryCta: 'Hire Me',
    secondaryCta: 'View My Work',
    botCta: 'Open Save Restricted Content Bot',
    stack: ['React', 'TypeScript', 'Android', 'Node.js', 'Telegram Bots', 'APIs'],
  },

  about: {
    heading: 'A practical partner for product work',
  },

  services: [
    {
      id: 'web',
      title: 'Web Development',
      summary:
        'Marketing sites, portfolios, and React applications with a clear structure and a layout that holds up on phones.',
      details: [
        'Responsive landing pages',
        'Business and portfolio websites',
        'Full-stack web applications',
        'Modern React interfaces',
      ],
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
      icon: 'globe',
      pricingModel: 'quote',
      price: null,
      currency: 'USD',
      priceSuffix: '',
      deliveryEstimate: 'Timeline agreed after scope',
      ctaLabel: 'Discuss a website',
    },
    {
      id: 'android',
      title: 'Android App Development',
      summary:
        'Native-feeling Android apps connected to a real backend, with login, data, and the unglamorous work of making them reliable.',
      details: [
        'Android application development',
        'API integration',
        'Authentication and user management',
        'Backend-connected mobile apps',
        'Debugging and performance work',
      ],
      technologies: ['Android', 'Kotlin', 'REST APIs'],
      icon: 'smartphone',
      pricingModel: 'quote',
      price: null,
      currency: 'USD',
      priceSuffix: '',
      deliveryEstimate: 'Timeline agreed after scope',
      ctaLabel: 'Discuss an app',
    },
    {
      id: 'backend',
      title: 'Backend Development',
      summary:
        'APIs, data models, auth, and the operations needed to keep a product running after launch.',
      details: [
        'Backend architecture',
        'Database design',
        'Authentication and authorization',
        'Performance review',
        'Deployment and maintenance',
      ],
      technologies: ['Node.js', 'REST', 'SQL', 'Auth'],
      icon: 'server',
      pricingModel: 'quote',
      price: null,
      currency: 'USD',
      priceSuffix: '',
      deliveryEstimate: 'Retainer or project-based',
      ctaLabel: 'Discuss backend work',
    },
    {
      id: 'telegram',
      title: 'Telegram Bot Development',
      summary:
        'Custom bots for support, automation, membership, and product workflows inside Telegram.',
      details: [
        'Custom Telegram bots',
        'Automated workflows',
        'User and access management',
        'Subscription and premium access',
        'Admin tools and automation',
      ],
      technologies: ['Telegram Bot API', 'Node.js', 'Payments'],
      icon: 'bot',
      pricingModel: 'quote',
      price: null,
      currency: 'USD',
      priceSuffix: '',
      deliveryEstimate: 'Timeline agreed after scope',
      ctaLabel: 'Discuss a bot',
    },
    {
      id: 'api',
      title: 'API Development',
      summary:
        'REST APIs and third-party integrations with authentication, documentation, and testable contracts.',
      details: [
        'REST API development',
        'Third-party integrations',
        'API authentication',
        'Database integration',
        'Documentation and testing',
      ],
      technologies: ['REST', 'JSON', 'Auth', 'Postman / tests'],
      icon: 'webhook',
      pricingModel: 'quote',
      price: null,
      currency: 'USD',
      priceSuffix: '',
      deliveryEstimate: 'Depends on endpoints and systems',
      ctaLabel: 'Discuss an API',
    },
  ],

  skillGroups: [
    {
      id: 'frontend',
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'HTML', 'CSS', 'Vite', 'Tailwind CSS'],
    },
    {
      id: 'backend',
      title: 'Backend',
      skills: ['Node.js', 'REST APIs', 'Authentication', 'Server maintenance'],
    },
    {
      id: 'android',
      title: 'Android',
      skills: ['Android apps', 'API integration', 'Auth flows'],
    },
    {
      id: 'data',
      title: 'Data',
      skills: ['SQL', 'Schema design', 'API-to-database flows'],
    },
    {
      id: 'cloud',
      title: 'Cloud and deployment',
      skills: ['Static hosting', 'Server deployment', 'Environment configuration'],
    },
    {
      id: 'automation',
      title: 'Automation and Telegram',
      skills: ['Telegram Bot API', 'Workflow automation', 'User access systems'],
    },
  ],

  pricing: {
    intro:
      'Every project is scoped before work starts. Contact me for pricing based on your requirements — rates are not listed on this page.',
    plans: [
      {
        id: 'site',
        name: 'Website project',
        description: 'A marketing, business, or portfolio site with a defined set of pages.',
        pricingModel: 'quote',
        price: null,
        currency: 'USD',
        priceSuffix: '',
        features: [
          'Responsive page set',
          'Contact path that you can actually receive',
          'Basic SEO metadata',
          'Handoff notes for future edits',
        ],
        deliveryEstimate: 'Timeline agreed after scope',
        recommended: false,
        ctaLabel: 'Contact for pricing',
        ctaHref: '#contact',
      },
      {
        id: 'product',
        name: 'Product build',
        description: 'A web app, Android app, or combined product with accounts and data.',
        pricingModel: 'quote',
        price: null,
        currency: 'USD',
        priceSuffix: '',
        features: [
          'Scoped feature list',
          'Auth and core workflows',
          'API or backend work as needed',
          'Review builds during the project',
        ],
        deliveryEstimate: 'Timeline agreed after scope',
        recommended: true,
        ctaLabel: 'Contact for pricing',
        ctaHref: '#contact',
      },
      {
        id: 'retainer',
        name: 'Care and iteration',
        description: 'Ongoing fixes, small features, and operational help after launch.',
        pricingModel: 'quote',
        price: null,
        currency: 'USD',
        priceSuffix: '',
        features: [
          'Priority bug fixes',
          'Small feature batches',
          'Deployments and monitoring check-ins',
          'Monthly or hourly arrangement',
        ],
        deliveryEstimate: 'Ongoing',
        recommended: false,
        ctaLabel: 'Contact for pricing',
        ctaHref: '#contact',
      },
    ],
  },

  telegramBot: {
    name: 'Save Restricted Content Bot',
    username: '@PrivateContentDownloader_Bot',
    url: 'https://t.me/PrivateContentDownloader_Bot',
    shortPitch:
      'Download and save supported Telegram content with convenient commands and batch processing.',
    description:
      'A Telegram bot that helps users save and download supported content from public and private Telegram chats and channels, including restricted content.',
    targetAudience:
      'Telegram users who want to save or download supported content from chats and channels.',
    userCountLabel: '5,000+ users',
    promotionalText:
      'Start the bot on Telegram to try the public commands. Premium options, if you need them, are shown only inside the bot.',
    openCtaLabel: 'Open Telegram Bot',
    supportUsername: '@Contact_xbot',
    supportUrl: 'https://t.me/Contact_xbot',
    paymentMethods: [],
    autoActivation: true,
    howToStart: [
      {
        step: '01',
        title: 'Open the bot',
        detail: 'Start a conversation with @PrivateContentDownloader_Bot.',
      },
      {
        step: '02',
        title: 'Try public commands',
        detail: 'Explore the available commands and follow the bot’s instructions.',
      },
      {
        step: '03',
        title: 'Need more access?',
        detail: 'Open the bot to see current premium options. Plan details are not listed on this website.',
      },
    ],
    features: [
      {
        title: 'Restricted content downloads',
        description:
          'Save or download supported Telegram content, including content with forwarding or saving restrictions.',
      },
      {
        title: 'Batch downloads',
        description: 'Process supported content in batches using the /batch command.',
      },
      {
        title: 'Premium access',
        description: 'Additional features are available through the bot. Details stay inside Telegram.',
      },
      {
        title: 'Automatic activation',
        description:
          'If you purchase premium in the bot, access is activated automatically after a successful payment.',
      },
    ],
    plans: [],
  },

  contact: {
    formMode: 'mailto',
    budgetRanges: [
      'Not sure yet',
      'Under $1,000',
      '$1,000 – $3,000',
      '$3,000 – $8,000',
      '$8,000+',
      'Retainer / hourly',
    ],
    successMessage:
      'Your email app should open with the inquiry filled in. If nothing happens, copy the message or email me directly.',
  },
}
