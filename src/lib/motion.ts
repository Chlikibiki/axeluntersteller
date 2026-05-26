/** Courbes et constantes — motion design cinématographique (GPU: transform + opacity) */

export const EASE = {
  /** Sortie organique, poids de matière */
  out: [0.16, 1, 0.3, 1] as const,
  /** Entrée / sortie respirante */
  inOut: [0.45, 0, 0.15, 1] as const,
  /** GSAP — parallaxe & scrub */
  gsapOut: "power3.out",
  gsapInOut: "sine.inOut",
} as const;

export const CINE = {
  scrub: 1.85,
  scrubSlow: 2.2,
  parallaxStrength: 0.075,
  parallaxStrong: 0.11,
  scaleFrom: 1.065,
  scaleFromDeep: 1.09,
  revealY: 32,
  revealYSlow: 44,
  revealDuration: 1.55,
  floatY: 9,
  floatDuration: 11,
  lightPulseDuration: 7,
} as const;
