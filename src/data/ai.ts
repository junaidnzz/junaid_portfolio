export const aiHighlights = [
  {
    icon: 'sparkles',
    title: 'AI Features in Production',
    description:
      'Shipping LLM-powered product features at Arena Club — integrating AI into real marketplace flows used by collectors every day, not demos.',
    points: ['LLM API integration', 'AI-assisted product flows', 'Production reliability & fallbacks'],
  },
  {
    icon: 'claude',
    title: 'AI-Augmented Engineering',
    description:
      'My daily workflow is built around Claude Code and agentic tooling: spec → agent → review → ship. Faster delivery without lowering the quality bar.',
    points: ['Claude Code & agentic refactors', 'AI-assisted code review', 'Spec-driven agent workflows'],
  },
  {
    icon: 'brain',
    title: 'LLM Integration Toolbox',
    description:
      'Hands-on with the building blocks of applied AI — from prompt and eval design to retrieval pipelines and multi-step agent orchestration.',
    points: ['Anthropic & OpenAI APIs', 'Prompt & eval design', 'RAG pipelines'],
  },
];

export const terminalLines = [
  { prompt: true, text: 'claude "ship the new feature"' },
  { prompt: false, text: '✓ spec reviewed · plan approved' },
  { prompt: false, text: '✓ 14 files changed · tests passing' },
  { prompt: false, text: '✓ deployed to production' },
  { prompt: true, text: '_' },
];
