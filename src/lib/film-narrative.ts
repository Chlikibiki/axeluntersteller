/**
 * Arc narratif du site : film de manufacture.
 * Chaque section porte une intention, un rythme et une personnalité.
 */

/** Marqueur de progression — phases de manufacture */
export const FILM_MARKER = "Phase" as const;

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
  | "materials"
  | "atelier"
  | "signature"
  | "partners"
  | "production"
  | "capabilities"
  | "process"
  | "testimonials"
  | "cta";

export const FILM_SECTIONS: Record<FilmSectionId, FilmSectionMeta> = {
  hero: {
    act: "I",
    chapter: "Ouverture",
    intention: "Manufacture de cuir depuis 1987",
    rhythm: "crescendo",
    personality: "Immersion",
    sense: "cuir",
  },
  trust: {
    act: "I",
    chapter: "Manufacture",
    intention: "Qui nous sommes",
    rhythm: "breath",
    personality: "Maison",
    sense: "temps",
  },
  materials: {
    act: "II",
    chapter: "Matières",
    intention: "Ce que l'on voit au toucher",
    rhythm: "contemplation",
    personality: "Macro",
    sense: "cuir",
  },
  atelier: {
    act: "II",
    chapter: "Atelier",
    intention: "Comment nous produisons",
    rhythm: "breath",
    personality: "Réel",
    sense: "main",
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
    act: "III",
    chapter: "Confiance",
    intention: "Pourquoi les marques nous choisissent",
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
    act: "I",
    chapter: "Produits",
    intention: "Ce que nous fabriquons",
    rhythm: "contrast",
    personality: "Catalogue",
    sense: "maitrise",
  },
  process: {
    act: "II",
    chapter: "Méthode",
    intention: "Cinq étapes, une exigence",
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
    chapter: "Contact",
    intention: "Démarrer un projet",
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
    line: "Le cuir exige du temps",
    whisper: "Chaque année grave la peau",
    rhythm: "silence",
  },
  hand: {
    id: "hand",
    act: "II",
    line: "La précision commence par le geste",
    whisper: "Entre technologie maîtrisée et finition à la main.",
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
