import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Register once, here, so no component has to remember to. Importing this
 * module is the only supported way to reach gsap in this project.
 */
gsap.registerPlugin(ScrollTrigger);

/** Fonts change metrics, which invalidates every trigger position. */
if (typeof document !== 'undefined' && 'fonts' in document) {
  document.fonts.ready.then(() => ScrollTrigger.refresh());
}

export { gsap, ScrollTrigger };
