/**
 * Cinéma avant interface : temps lent, matière, silence.
 * GPU uniquement — transform & opacity.
 */

export const EASE = {
  /** Sortie organique, poids de matière */
  out: [0.16, 1, 0.3, 1] as const,
  /** Respiration entre les plans */
  inOut: [0.45, 0, 0.15, 1] as const,
  /** Apparition presque imperceptible */
  silence: [0.22, 1, 0.32, 1] as const,
  gsapOut: "power3.out",
  gsapInOut: "sine.inOut",
} as const;

export const CINE = {
  scrub: 2.2,
  scrubSlow: 2.6,
  parallaxStrength: 0.045,
  parallaxStrong: 0.065,
  scaleFrom: 1.036,
  scaleFromDeep: 1.05,
  revealY: 24,
  revealYSlow: 18,
  revealDuration: 1.85,
  floatY: 6,
  floatDuration: 14,
  lightPulseDuration: 9,
} as const;

/** Durées Lenis & loader — rythme du film */
export const CINEMA_TIME = {
  scrollDuration: 1.65,
  scrollDurationMobile: 1.28,
  loaderHold: 2200,
  loaderExit: 1.05,
} as const;
