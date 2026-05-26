/**
 * Arc narratif du site : film de manufacture.
 * Chaque section porte une intention, un rythme et une personnalité.
 */

export type FilmRhythm =
  | "silence"
  | "breath"
  | "tension"
  | "crescendo"
  | "contrast"
  | "contemplation";

export type FilmSense = "cuir" | "temps" | "main" | "maitrise" | "rarete";

export interface FilmSectionMeta {
  act: string;
  chapter: string;
  intention: string;
  rhythm: FilmRhythm;
  personality: string;
  sense: FilmSense;
}

export type FilmSectionId =
  | "hero"
  | "trust"
  | "signature"
  | "partners"
  | "production"
  | "capabilities"
  | "craft"
  | "philosophy"
  | "process"
  | "testimonials"
  | "cta";

export const FILM_SECTIONS: Record<FilmSectionId, FilmSectionMeta> = {
  hero: {
    act: "I",
    chapter: "Ouverture",
    intention: "La matière d'abord",
    rhythm: "crescendo",
    personality: "Immersion",
    sense: "cuir",
  },
  trust: {
    act: "I",
    chapter: "Héritage",
    intention: "Le temps gravé",
    rhythm: "breath",
    personality: "Mémoire",
    sense: "temps",
  },
  signature: {
    act: "I",
    chapter: "Décision",
    intention: "L'instant où la main tranche le doute",
    rhythm: "tension",
    personality: "Seuil",
    sense: "main",
  },
  partners: {
    act: "II",
    chapter: "Confiance",
    intention: "La rareté reconnue par les maisons",
    rhythm: "silence",
    personality: "Mur discret",
    sense: "rarete",
  },
  production: {
    act: "II",
    chapter: "Preuve",
    intention: "La maîtrise rendue visible",
    rhythm: "tension",
    personality: "Témoin",
    sense: "maitrise",
  },
  capabilities: {
    act: "II",
    chapter: "Discipline",
    intention: "Cinq gestes, une seule exigence",
    rhythm: "contrast",
    personality: "Structure",
    sense: "maitrise",
  },
  craft: {
    act: "III",
    chapter: "Gestes",
    intention: "Le rythme lent de l'atelier",
    rhythm: "contemplation",
    personality: "Proximité",
    sense: "main",
  },
  philosophy: {
    act: "III",
    chapter: "Conviction",
    intention: "Un silence pour laisser penser",
    rhythm: "silence",
    personality: "Vérité nue",
    sense: "temps",
  },
  process: {
    act: "III",
    chapter: "Méthode",
    intention: "La ligne droite du savoir-faire",
    rhythm: "breath",
    personality: "Clarté",
    sense: "maitrise",
  },
  testimonials: {
    act: "IV",
    chapter: "Voix",
    intention: "Ce que disent ceux qui nous connaissent",
    rhythm: "contemplation",
    personality: "Écho",
    sense: "rarete",
  },
  cta: {
    act: "IV",
    chapter: "Seuil",
    intention: "Passer de la contemplation à l'acte",
    rhythm: "crescendo",
    personality: "Invitation",
    sense: "cuir",
  },
};

export type FilmBridgeId = "time" | "hand" | "rarity";

export interface FilmBridgeMeta {
  id: FilmBridgeId;
  act: string;
  line: string;
  whisper: string;
  rhythm: Extract<FilmRhythm, "silence" | "contemplation">;
}

export const FILM_BRIDGES: Record<FilmBridgeId, FilmBridgeMeta> = {
  time: {
    id: "time",
    act: "I",
    line: "Le temps",
    whisper: "Chaque année grave la peau",
    rhythm: "silence",
  },
  hand: {
    id: "hand",
    act: "II",
    line: "La main",
    whisper: "Entre machine et jugement",
    rhythm: "contemplation",
  },
  rarity: {
    id: "rarity",
    act: "III",
    line: "La rareté",
    whisper: "Peu de places, beaucoup d'exigence",
    rhythm: "silence",
  },
};

export function filmSectionAttrs(id: FilmSectionId) {
  const meta = FILM_SECTIONS[id];
  return {
    "data-film-section": id,
    "data-film-act": meta.act,
    "data-film-rhythm": meta.rhythm,
    "data-film-sense": meta.sense,
  } as const;
}

export function filmRhythmClass(rhythm: FilmRhythm) {
  return `film-rhythm-${rhythm}`;
}
