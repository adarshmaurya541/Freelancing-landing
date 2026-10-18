import type { Project } from './types'

/**
 * Demo projects only. These are fictional showcases, not client case studies.
 * Add, remove, or edit entries here — the Portfolio section reads this list.
 */
export const projects: Project[] = [
  {
    id: 'northline',
    name: 'Northline Atelier',
    category: 'Web',
    description:
      'A concept website for a fictional architecture studio: studio story, selected work, and a calm inquiry path.',
    longDescription:
      'Designed as a quiet studio site rather than a marketing template. The pages use generous type, a stone palette, and a small set of project stories. This is a demonstration of visual identity and responsive layout, not a commissioned client project.',
    stack: ['React', 'TypeScript', 'Responsive layout'],
    features: [
      'Studio narrative and process',
      'Selected work grid',
      'Inquiry form (demo only)',
      'Phone-first spacing and type',
    ],
    status: 'Demo',
    featured: true,
    demoLabel: 'Demo Project',
    demoPath: '/demos/northline',
    liveUrl: '',
    sourceUrl: '',
    cover: 'atelier',
  },
  {
    id: 'lumen',
    name: 'Lumen — Personal Portfolio',
    category: 'Web',
    description:
      'A concept personal site for a fictional product designer, built around large type and case-study rows.',
    longDescription:
      'This demo explores a darker editorial layout: oversized name, sparse navigation, and case studies that read as a list rather than a card farm. It is a fictional portfolio used to show interaction and typography, not a real designer’s live site.',
    stack: ['React', 'TypeScript', 'CSS transitions'],
    features: [
      'Editorial case-study list',
      'Skill and availability strip',
      'Contact panel',
      'Distinct dark visual system',
    ],
    status: 'Demo',
    featured: true,
    demoLabel: 'Demo Project',
    demoPath: '/demos/lumen',
    liveUrl: '',
    sourceUrl: '',
    cover: 'lumen',
  },
  {
    id: 'pulseboard',
    name: 'Pulseboard',
    category: 'Full-stack',
    description:
      'A concept SaaS landing page for a fictional analytics product, including a dashboard mock and sample pricing.',
    longDescription:
      'Pulseboard is an invented product used to demonstrate a software marketing page: feature clusters, an illustrative dashboard, and pricing cards. Statistics on the page are sample data for layout only.',
    stack: ['React', 'TypeScript', 'Dashboard UI'],
    features: [
      'Product story and feature grid',
      'Illustrative dashboard',
      'Sample pricing (fictional product)',
      'Primary and secondary CTAs',
    ],
    status: 'Concept',
    featured: true,
    demoLabel: 'Concept Project',
    demoPath: '/demos/pulseboard',
    liveUrl: '',
    sourceUrl: '',
    cover: 'pulse',
  },
]
