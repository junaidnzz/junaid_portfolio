/**
 * Small deterministic PRNG (mulberry32).
 *
 * The hero layout must be identical on every resize and every reload, so it
 * cannot use Math.random. A fixed seed means the composition is authored, not
 * rolled fresh each visit.
 */
export function createRng(seed: number) {
  let state = seed >>> 0;
  return function next() {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
