import type { Competency, Stat } from './types';

export const aboutNarrative = [
  'I’m a senior software engineer who has spent the last 8+ years building web products across e-commerce, travel, healthcare, and Web3 — and the last two shipping AI-powered features into production.',
  'These days my work centers on two things: integrating LLMs into real product experiences at Arena Club, and engineering with an AI-augmented workflow — using tools like Claude Code to move from spec to shipped feature dramatically faster without sacrificing quality.',
];

export const coreCompetencies: Competency[] = [
  {
    id: 'ai-integration',
    icon: 'brain',
    title: 'AI Integration',
    description:
      'Integrating LLMs, RAG systems, and evaluation pipelines to build intelligent, context-aware product features.',
    skills: ['Anthropic & OpenAI APIs', 'RAG', 'Prompt Design', 'Evals'],
  },
  {
    id: 'fullstack',
    icon: 'zap',
    title: 'Full-Stack Development',
    description:
      'End-to-end delivery — pixel-perfect UIs with React/Next.js, robust Node.js APIs, and optimized data layers.',
    skills: ['React/Next.js', 'Node.js', 'Database Design', 'API Development'],
  },
  {
    id: 'architecture',
    icon: 'layers',
    title: 'System Architecture',
    description:
      'Designing microservice architectures, distributed systems, and cloud-native applications that scale.',
    skills: ['Microservices', 'Cloud Architecture', 'System Design', 'Scalability'],
  },
  {
    id: 'leadership',
    icon: 'users',
    title: 'Technical Leadership',
    description:
      'Leading cross-functional teams, mentoring developers, and fostering a culture of continuous improvement.',
    skills: ['Team Management', 'Mentoring', 'Code Reviews', 'Agile'],
  },
  {
    id: 'performance',
    icon: 'gauge',
    title: 'Performance Optimization',
    description:
      'Cutting load times, implementing efficient caching strategies, and keeping applications smooth at scale.',
    skills: ['Web Vitals', 'Caching', 'Bundle Optimization', 'Monitoring'],
  },
  {
    id: 'innovation',
    icon: 'lightbulb',
    title: 'Innovation',
    description:
      'Exploring emerging technologies early and turning them into practical competitive advantages.',
    skills: ['R&D', 'Prototyping', 'Agentic Tooling', 'Problem Solving'],
  },
];

export const aboutStats: Stat[] = [
  { value: '8+', label: 'Years Experience' },
  { value: '4', label: 'Companies · 3 Countries' },
  { value: '25+', label: 'Production Projects' },
  { value: '2+', label: 'Years Shipping AI Features' },
];
