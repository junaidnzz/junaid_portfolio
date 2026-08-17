/**
 * The Arena Club case study.
 *
 * Everything here comes from Junaid directly. The rule for this file: the
 * headline numbers are his measurements, and the technique descriptions say
 * what each technique does without inventing a per-technique saving, because
 * that breakdown was never measured separately.
 */

export const arenaClub = {
  company: 'Arena Club',
  role: 'Senior software engineer',
  period: '2024 to present',
  link: 'https://arenaclub.com',
  what: 'A sports card marketplace: graded card auctions, Slab Packs and collection management.',

  /** The claim a non-technical reader should take away in one breath. */
  claim: 'Buying a card took 35 seconds. Now it takes 15.',

  context:
    'Arena Club was running on a legacy front end that had grown faster than its structure. The checkout path was the worst of it: by the time a collector had committed to a card, the app was still working. On a marketplace, that gap is where sales are lost.',

  metric: {
    label: 'Time to buy an item',
    before: 35,
    after: 15,
    unit: 's',
  },

  /**
   * Four levers, in the order they were pulled. No per-technique figure is
   * claimed: the 20 seconds is the measured total, not a sum of parts.
   */
  techniques: [
    {
      name: 'Code splitting',
      plain: 'Load only what the current screen needs.',
      detail:
        'The buy flow was paying the download and parse cost of the entire application before it could render. Splitting on route and on interaction meant a collector opening checkout stopped waiting for code belonging to pages they were not on.',
    },
    {
      name: 'API management',
      plain: 'Ask the server fewer, better questions.',
      detail:
        'The path to purchase was making more round trips than it needed, several of them sequential when they could run together. Consolidating and parallelising those calls removed whole waves of waiting from the critical path.',
    },
    {
      name: 'API caching',
      plain: 'Stop re-fetching what has not changed.',
      detail:
        'Card, pricing and collection data was being requested again on every navigation. Caching it with sensible invalidation turned repeat views into instant ones and cut load off the backend at the same time.',
    },
    {
      name: 'Image optimisation',
      plain: 'Card photography is the heaviest thing on the page.',
      detail:
        'A card marketplace is images first. Right-sizing them, serving modern formats and deferring what was below the fold removed the largest single block of transfer weight in the buy flow.',
    },
  ],

  architecture: {
    claim: 'Moved off a legacy front end onto an architecture that could hold.',
    detail:
      'The performance work was possible because the structure changed underneath it. Led the migration from the legacy codebase to a modern React and Next.js architecture, incrementally, with the existing app still serving customers throughout. Splitting, caching and parallel data loading are all things the old structure could not have supported.',
  },

  stack: ['React', 'Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
};
