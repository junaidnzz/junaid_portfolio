import type { ExperienceRole } from './types';

// TODO(Junaid): the Arena Club AI bullets are credible drafts — replace with the
// real feature specifics you shipped.
export const experiences: ExperienceRole[] = [
  {
    id: 'arena-club',
    title: 'Senior Software Engineer',
    company: 'Arena Club',
    period: '04/2024 – Present',
    location: 'Los Angeles, United States',
    remote: true,
    description:
      'Building AI-driven product features and leading frontend development for a next-generation sports collectibles marketplace.',
    bullets: [
      { text: 'Shipped AI-powered product features in production, integrating LLM APIs into core marketplace flows', ai: true },
      { text: 'Adopted an AI-augmented engineering workflow (Claude Code, agentic refactors, AI-assisted code review) across daily development', ai: true },
      { text: 'Designed interactive UI components with React & Next.js and cut page load times by 40%' },
      { text: 'Integrated secure payment solutions with Stripe' },
      { text: 'Refactored legacy code to modern React patterns with 90% test coverage' },
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
