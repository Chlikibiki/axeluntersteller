/**
 * Direction visuelle — manufacture cuir premium Starlight.
 * Référence pour alt textes, briefs photo et génération d’assets.
 *
 * Ton : cinéma éditorial, atelier authentique, luxe silencieux.
 * Jamais e-commerce, jamais stock photo.
 */

export const VISUAL_DIRECTION = {
  mood: [
    "authentic",
    "expensive",
    "cinematic",
    "warm",
    "handcrafted",
    "quiet confidence",
  ],
  palette: {
    primary: "deep black",
    secondary: "rich brown",
    accent: "warm amber highlights",
  },
  lighting:
    "dramatic shadows, soft warm highlights, moody cinematic contrast, deep blacks, golden reflections on leather grain, subtle haze, editorial studio quality",
  camera:
    "macro details, shallow depth of field, cinematic close-ups, wide atmospheric workshop shots, ultra realistic textures",
  materials: [
    "full grain leather",
    "aged leather patina",
    "burnished edges",
    "brass tools",
    "dark walnut wood",
    "matte black metal",
    "precision stitching",
  ],
  avoid: [
    "generic ecommerce look",
    "bright white backgrounds",
    "cheap fashion mood",
    "visible logos",
    "text overlays",
    "people looking at camera",
    "stock-photo feeling",
  ],
  imageRules: "No text. No typography. No branding. No watermark.",
} as const;

/** Suffixe commun pour prompts de génération d’images */
export const IMAGE_PROMPT_SUFFIX = [
  "ultra premium leather manufacturing maison website",
  "cinematic editorial photography",
  "dark luxury atmosphere",
  "deep black and rich brown color palette",
  "warm amber highlights",
  "sophisticated low-key lighting",
  "artisanal leather workshop",
  "German precision, handcrafted Tunisian savoir-faire",
  "timeless luxury, quiet confidence",
  "minimal powerful composition",
  "ultra realistic textures",
  "no text, no typography, no branding, no watermark",
].join(", ");

/** Briefs par type de scène — pour remplacement / génération d’assets */
export const IMAGE_BRIEFS = {
  hero:
    "Quiet leather workshop interior with artisan tables, cutting tools, leather rolls and warm cinematic light through industrial windows, wide atmospheric shot, dramatic shadows, deep black atmosphere, ultra premium editorial photography",
  workshop:
    "Quiet leather workshop interior with artisan tables, cutting tools, leather rolls and warm cinematic light through industrial windows, industrial atelier atmosphere, dark walnut workbenches, moody cinematic contrast, quiet discipline, no text, no branding, no watermark",
  trust:
    "Artisan stitching leather strap close-up, shallow depth of field, golden grain reflections, warm low-key light, hands at work not facing camera",
  belts:
    "Luxury handcrafted leather belts inspired by Boss accessories arranged on dark walnut wood with polished metal buckles, cinematic warm lighting, ultra premium editorial photography, deep black atmosphere, full grain leather, burnished edges, no text, no branding, no watermark",
  pouches:
    "Premium handcrafted leather camera accessories inspired by vintage Leica craftsmanship with aged leather patina and cinematic shadows, ultra premium editorial photography, dark walnut surface, millimeter-fit precision, deep black atmosphere, no text, no branding, no watermark",
  straps:
    "Luxury handcrafted leather straps and handles with refined handmade details, full grain leather, precision stitching macro, warm amber edge light on dark walnut wood, cinematic warm low-key lighting, ultra premium editorial photography, no text, no branding, no watermark",
  maroquinerie:
    "Minimal premium leather wallet and small leather goods flat lay, timeless masculine pieces, full grain aged patina, burnished edges, dark walnut surface, cinematic warm lighting, ultra premium editorial photography, quiet premium composition, no text, no branding, no watermark",
  accessories:
    "Refined handmade leather accessory with precision sellier stitching, golden grain reflections, dark walnut wood, brass tools, cinematic warm shadows, ultra premium editorial flat lay, no text, no branding, no watermark",
  cutting:
    "Artisan cutting leather with precision tool, prototype papers nearby, process and mastery, cinematic close-up",
  stitching:
    "Sellier stitching close-up, thread tension visible, brass awl, shallow depth of field, warm highlights on grain",
  finishing:
    "Edge finishing and burnishing leather, artisan hands, burnished edge detail, slow precise moment",
  contact:
    "Leather cutting in atelier, dramatic shadow, warm side light, manufacturing mastery, no faces to camera",
  texture:
    "Macro full grain leather texture, golden reflections, deep blacks, aged patina, ultra realistic",
} as const;

/** Alt textes éditoriaux — accessibilité + cohérence SEO */
export const IMAGE_ALTS = {
  hero: "Atelier de maroquinerie en lumière rasante, cuir pleine fleur et geste artisanal",
  heroPrimary:
    "Couture sellier en gros plan sur cuir pleine fleur, lumière chaude d'atelier",
  workshop:
    "Intérieur d'atelier cuir silencieux, établis, outils de coupe et rouleaux de peau, lumière chaude à travers les fenêtres industrielles",
  trustArtisan:
    "Mains d'artisan cousant une sangle en cuir, lumière ambrée et contraste cinématographique",
  belt: "Ceinture en cuir pleine fleur, tranche brunie et quincaillerie",
  leatherTexture: "Macro du grain de cuir pleine fleur, reflets dorés sur fond sombre",
  belts:
    "Ceintures cuir artisanal sur bois de noyer sombre, boucles métal poli, lumière chaude cinématographique, photographie éditoriale premium",
  pouches:
    "Accessoires cuir pour appareil photo, finition vintage patinée, ombres cinématographiques, savoir-faire de précision",
  straps:
    "Sangles et anses en cuir, couture et grain en gros plan, finition artisanale",
  goods:
    "Petite maroquinerie en cuir, portefeuille et pièces discrètes, flat lay premium",
  accessories:
    "Accessoire cuir raffiné, couture de précision et détail de matière",
  craft: {
    cutting: "Découpe du cuir à la main, outil de précision et patron",
    stitching: "Couture sellier en gros plan, fil tendu sur cuir pleine fleur",
    finishing: "Finition des bords brunis et pose de quincaillerie",
  },
  contact: "Découpe de cuir dans l'atelier, lumière latérale chaude et ombres profondes",
  capability: (title: string) => {
    const map: Record<string, string> = {
      Ceintures: IMAGE_ALTS.belts,
      "Pochettes & étuis": IMAGE_ALTS.pouches,
      "Sangles & anses": IMAGE_ALTS.straps,
      "Petite maroquinerie": IMAGE_ALTS.goods,
      Accessoires: IMAGE_ALTS.accessories,
    };
    return map[title] ?? `${title}, manufacture cuir premium en lumière d'atelier`;
  },
  craftStep: (title: string) => {
    if (title.includes("coupe")) return IMAGE_ALTS.craft.cutting;
    if (title.includes("couture")) return IMAGE_ALTS.craft.stitching;
    if (title.includes("finition")) return IMAGE_ALTS.craft.finishing;
    return `${title}, geste artisanal en atelier Starlight`;
  },
} as const;

/** Prompt complet pour génération — scène + suffixe direction */
export function imageGenerationPrompt(
  scene: keyof typeof IMAGE_BRIEFS
): string {
  return `${IMAGE_BRIEFS[scene]}, ${IMAGE_PROMPT_SUFFIX}`;
}
