/**
 * Mur de marques — fichiers SVG inchangés.
 * crop : recadre sur le dessin
 * opticalH : hauteur visuelle cible (rem)
 * maxWidthPct : largeur max dans la cellule — les wordmarks longs
 * sont un peu plus bas, les marques compactes un peu plus hautes.
 */

const p = "/images/logo/partners";

export interface PartnerLogoEntry {
  id: string;
  name: string;
  src: string;
  canvas: { w: number; h: number };
  crop: { x: number; y: number; w: number; h: number };
  /** Hauteur optique cible (rem, desktop) */
  opticalH: number;
  /** Largeur max dans la cellule (%) */
  maxWidthPct: number;
}

export const PARTNER_LOGOS: readonly PartnerLogoEntry[] = [
  { id: "baldessarini", name: "Baldessarini", src: `${p}/baldessarini.svg`, canvas: { w: 280, h: 56 }, crop: { x: 48, y: 16, w: 184, h: 26 }, opticalH: 2.45, maxWidthPct: 86 },
  { id: "betty-barclay", name: "Betty Barclay", src: `${p}/betty-barclay.svg`, canvas: { w: 320, h: 56 }, crop: { x: 18, y: 10, w: 284, h: 42 }, opticalH: 2.45, maxWidthPct: 86 },
  { id: "soliver", name: "s.Oliver", src: `${p}/soliver.svg`, canvas: { w: 200, h: 56 }, crop: { x: 24, y: 10, w: 152, h: 38 }, opticalH: 2.62, maxWidthPct: 74 },
  { id: "olsen", name: "Olsen", src: `${p}/olsen.svg`, canvas: { w: 180, h: 56 }, crop: { x: 16, y: 8, w: 148, h: 40 }, opticalH: 2.52, maxWidthPct: 66 },
  { id: "passeport", name: "Passeport", src: `${p}/passeport.svg`, canvas: { w: 240, h: 56 }, crop: { x: 36, y: 16, w: 168, h: 26 }, opticalH: 2.42, maxWidthPct: 82 },
  { id: "leica", name: "Leica Camera AG", src: `${p}/leica.svg`, canvas: { w: 200, h: 52 }, crop: { x: 36, y: 2, w: 128, h: 48 }, opticalH: 2.5, maxWidthPct: 56 },
  { id: "boss", name: "BOSS", src: `${p}/boss.svg`, canvas: { w: 160, h: 52 }, crop: { x: 12, y: 6, w: 136, h: 42 }, opticalH: 2.48, maxWidthPct: 54 },
  { id: "minox", name: "Minox", src: `${p}/minox.svg`, canvas: { w: 180, h: 56 }, crop: { x: 8, y: 8, w: 164, h: 40 }, opticalH: 2.46, maxWidthPct: 72 },
  { id: "fossil", name: "Fossil", src: `${p}/fossil.svg`, canvas: { w: 200, h: 56 }, crop: { x: 12, y: 8, w: 176, h: 40 }, opticalH: 2.46, maxWidthPct: 72 },
  { id: "hauer-golf", name: "Hauer Golf", src: `${p}/hauer-golf.svg`, canvas: { w: 260, h: 56 }, crop: { x: 48, y: 16, w: 164, h: 24 }, opticalH: 2.52, maxWidthPct: 94 },
  { id: "procter-gamble", name: "Procter & Gamble", src: `${p}/procter-gamble.svg`, canvas: { w: 120, h: 52 }, crop: { x: 16, y: 4, w: 88, h: 44 }, opticalH: 2.52, maxWidthPct: 48 },
  { id: "freitag", name: "FREITAG lab.", src: `${p}/freitag.svg`, canvas: { w: 320, h: 56 }, crop: { x: 64, y: 10, w: 192, h: 42 }, opticalH: 2.68, maxWidthPct: 82 },
  { id: "brax", name: "BRAX", src: `${p}/brax.svg`, canvas: { w: 160, h: 56 }, crop: { x: 10, y: 6, w: 140, h: 42 }, opticalH: 2.5, maxWidthPct: 56 },
  { id: "cinque", name: "CINQUE", src: `${p}/cinque.svg`, canvas: { w: 180, h: 56 }, crop: { x: 4, y: 8, w: 172, h: 40 }, opticalH: 2.62, maxWidthPct: 74 },
  { id: "roy-robson", name: "ROY Robson", src: `${p}/roy-robson.svg`, canvas: { w: 280, h: 56 }, crop: { x: 58, y: 16, w: 164, h: 24 }, opticalH: 2.52, maxWidthPct: 94 },
] as const;
