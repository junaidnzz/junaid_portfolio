import type { ExperienceRole } from './types';

export const experiences: ExperienceRole[] = [
  {
    id: 'arena-club',
    title: 'Senior Software Engineer',
    company: 'Arena Club',
    period: '04/2024 – Present',
    location: 'London, United Kingdom',
    remote: true,
    description:
      'Architecture and performance ownership for a sports collectibles marketplace, plus AI-driven product features.',
    bullets: [
      {
        text: 'Led the migration off the legacy front end onto a modern React and Next.js architecture, incrementally, with the app still serving customers throughout',
      },
      {
        text: 'Cut time to buy an item from 35 seconds to 15 through code splitting, API consolidation, API caching and image optimisation',
      },
      { text: 'Shipped AI-powered features in production, integrating LLM APIs into core marketplace flows', ai: true },
      { text: 'Refactored legacy code to modern React patterns with 90% test coverage' },
      { text: 'Integrated secure payment flows with Stripe' },
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'LLM APIs', 'Stripe', 'Jest'],
  },
  {
    id: 'mission',
    title: 'JavaScript Engineer',
    company: 'Mission',
    period: '07/2022 – 12/2024',
    location: 'Montreal, Canada',
    remote: true,
    description:
      'Full-stack development focused on scalable cloud-native applications.',
    bullets: [
      { text: 'Developed cloud functions for serverless architecture' },
      { text: 'Created a highly reusable component library (200+ components)' },
      { text: 'Led agile sprint planning sessions across a team of 8 engineers' },
    ],
    tech: ['JavaScript', 'Node.js', 'React', 'Cloud Functions', 'API Design'],
  },
  {
    id: 'sl2',
    title: 'Full Stack JavaScript Engineer',
    company: 'SL2 Studio',
    period: '10/2020 – 05/2022',
    location: 'Lahore, Pakistan',
    description:
      'Technical lead driving architecture decisions and mentoring development teams.',
    bullets: [
      { text: 'Led technical architecture design and microservice adoption' },
      { text: 'Managed and mentored 5+ developers' },
      { text: 'Delivered 15+ successful client projects' },
    ],
    tech: ['React', 'Express', 'MongoDB', 'PostgreSQL', 'Microservices'],
  },
  {
    id: 'arbisoft',
    title: 'Frontend Engineer',
    company: 'Arbisoft',
    period: '08/2019 – 09/2020',
    location: 'Lahore, Pakistan',
    description:
      'Modernized legacy applications (including KAYAK) and established testing best practices.',
    bullets: [
      { text: 'Migrated legacy code to React for KAYAK, one of the world’s leading travel platforms' },
      { text: 'Built E2E testing automation and improved code coverage by 70%' },
    ],
    tech: ['React', 'JavaScript', 'Jest', 'Cypress'],
  },
];
