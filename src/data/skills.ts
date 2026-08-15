import type { SkillCategory } from './types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'ai',
    title: 'AI Engineering',
    icon: 'brain',
    highlight: true,
    skills: [
      { name: 'LLM Feature Integration', icon: 'sparkles' },
      { name: 'Anthropic API', icon: 'anthropic' },
      { name: 'OpenAI API', icon: 'bot' },
      { name: 'Claude Code', icon: 'claude' },
      { name: 'Agentic Workflows', icon: 'workflow' },
      { name: 'Prompt & Eval Design', icon: 'terminal' },
      { name: 'RAG Pipelines', icon: 'database' },
      { name: 'AI-Assisted Development', icon: 'zap' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'code',
    skills: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Redux', icon: 'redux' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'Material UI', icon: 'mui' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'layers',
    skills: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express', icon: 'express' },
      { name: 'NestJS', icon: 'nestjs' },
      { name: 'GraphQL', icon: 'graphql' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'Prisma', icon: 'prisma' },
      { name: 'Python', icon: 'python' },
    ],
  },
  {
    id: 'infra',
    title: 'Infra & Tooling',
    icon: 'cloud',
    skills: [
      { name: 'Docker', icon: 'docker' },
      { name: 'Google Cloud', icon: 'googlecloud' },
      { name: 'Firebase', icon: 'firebase' },
      { name: 'Git', icon: 'git' },
      { name: 'Jest', icon: 'jest' },
      { name: 'Cypress', icon: 'cypress' },
      { name: 'Stripe', icon: 'stripe' },
    ],
  },
];
