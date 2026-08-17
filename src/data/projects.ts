import type { Project } from './types';

export const projects: Project[] = [
  {
    id: 'arenaclub',
    title: 'Arena Club',
    subtitle: 'AI-Powered Sports Card Marketplace',
    description:
      'The most trusted sports card marketplace featuring AI-assisted grading and pricing workflows, Slab Packs™, graded card auctions, and collection management.',
    technologies: ['React', 'Next.js', 'TypeScript', 'LLM APIs', 'Stripe', 'PostgreSQL'],
    category: 'E-Commerce · AI',
    gradient: 'from-cyan-500/20 to-violet-500/20',
    ai: true,
    link: 'https://arenaclub.com',
    year: '2024–2025',
  },
  {
    id: 'hatchpath',
    title: 'HatchPath',
    subtitle: 'Health Coaching Platform',
    description:
      'AI-powered platform connecting health coaches with clients, featuring personalized matching, video consultations, and progress tracking.',
    technologies: ['Next.js', 'Firebase', 'TypeScript', 'Tailwind CSS', 'WebRTC'],
    category: 'Healthcare',
    gradient: 'from-cyan-500/15 to-blue-500/15',
    ai: true,
    link: 'https://hatchpath.io',
    year: '2023',
  },
  {
    id: 'virtua',
    title: 'Virtua Magazine',
    subtitle: 'NFT Publishing Platform',
    description:
      'Web3 marketplace for digital magazines with NFT minting, a drag-and-drop builder, and blockchain-based ownership verification.',
    technologies: ['React', 'Web3.js', 'NestJS', 'Ethereum', 'IPFS'],
    category: 'Web3',
    gradient: 'from-violet-500/15 to-fuchsia-500/15',
    link: 'https://virtua.com',
    year: '2023',
  },
  {
    id: 'designpro',
    title: 'DesignPro',
    subtitle: 'Design Collaboration Tool',
    description:
      'Real-time design feedback platform with Figma integration, version control, and team collaboration features.',
    technologies: ['React', 'Redux', 'Figma API', 'Node.js', 'Socket.io'],
    category: 'Productivity',
    gradient: 'from-blue-500/15 to-cyan-500/15',
    link: 'https://beta.designpro.ai',
    year: '2022',
  },
  {
    id: 'kayak',
    title: 'KAYAK',
    subtitle: 'Travel Search Platform',
    description:
      'Frontend development and E2E test automation for one of the world’s leading travel search engines, serving millions of users globally.',
    technologies: ['React', 'TypeScript', 'Jest', 'Cypress'],
    category: 'Travel Tech',
    gradient: 'from-cyan-500/15 to-teal-500/15',
    link: 'https://www.kayak.com',
    year: '2019–2020',
  },
];
