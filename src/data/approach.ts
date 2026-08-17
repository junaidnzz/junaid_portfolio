/**
 * Three claims, each one attached to evidence that already appears in the
 * career history. A claim with nothing under it is marketing; a claim with a
 * shipped result under it is a reference.
 *
 * Rule for editing this file: do not add a claim you cannot evidence.
 */
export interface Claim {
  id: string;
  claim: string;
  detail: string;
  evidence: { where: string; what: string }[];
}

export const claims: Claim[] = [
  {
    id: 'modernise',
    claim: 'Modernising systems while they stay in production',
    detail:
      'Rewrites that stop the business are not rewrites, they are outages. Legacy code moves onto modern foundations in slices, behind tests, with the old path still serving traffic.',
    evidence: [
      { where: 'Arbisoft', what: 'Migrated legacy code to React for KAYAK, a top global travel platform' },
      { where: 'Arena Club', what: 'Refactored legacy code to modern React patterns at 90% test coverage' },
      { where: 'Arbisoft', what: 'Built end to end test automation, lifting coverage by 70%' },
    ],
  },
  {
    id: 'performance',
    claim: 'Performance is a number, not an adjective',
    detail:
      'Every performance claim on this page has a figure attached, because the ones that do not are guesses. Measure first, fix the largest cost, then measure again.',
    evidence: [
      { where: 'Arena Club', what: 'Cut page load times by 40% on interactive React and Next.js surfaces' },
      { where: 'Mission', what: 'Built a reusable component library of 200+ components' },
    ],
  },
  {
    id: 'ai',
    claim: 'AI belongs in products, not in demos',
    detail:
      'A demo needs one path to work. A product needs the failure paths handled: fallbacks, cost ceilings, and an answer for what happens when the model is wrong.',
    evidence: [
      { where: 'Arena Club', what: 'Shipped LLM-backed features into core marketplace flows in production' },
      { where: 'Daily practice', what: 'Spec driven agent workflows, AI assisted review, agentic refactors' },
    ],
  },
];

/**
 * Listed once, as plain scannable text. Keyword screening is a real stage in
 * hiring, and a wall of logo chips is worse at it than a sentence.
 */
export const stack = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'Redux', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express', 'NestJS', 'GraphQL', 'Python'],
  Data: ['PostgreSQL', 'MongoDB', 'Prisma'],
  'AI engineering': ['Anthropic API', 'OpenAI API', 'RAG pipelines', 'Prompt and eval design'],
  Platform: ['Docker', 'Google Cloud', 'Firebase', 'Stripe'],
  Quality: ['Jest', 'Cypress'],
};
