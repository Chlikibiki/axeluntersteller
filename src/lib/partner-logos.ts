/**
 * Mur de marques — SVG monochromes, poids optique calibré individuellement.
 * scale : ajuste la masse visuelle (typo bold, hauteur de glyphes)
 * maxWidth : contraint la largeur selon le ratio réel du logo
 */

const p = "/images/logo/partners";

export interface PartnerLogoEntry {
  id: string;
  name: string;
  src: string;
  /** Ajustement de masse optique — 1 = référence */
  scale: number;
  /** Largeur max du conteneur (rem) */
  maxWidth: number;
}

export const PARTNER_LOGOS: readonly PartnerLogoEntry[] = [
  { id: "baldessarini", name: "Baldessarini", src: `${p}/baldessarini.svg`, scale: 1.04, maxWidth: 7.75 },
  { id: "betty-barclay", name: "Betty Barclay", src: `${p}/betty-barclay.svg`, scale: 1.08, maxWidth: 8.25 },
  { id: "soliver", name: "s.Oliver", src: `${p}/soliver.svg`, scale: 0.94, maxWidth: 6.5 },
  { id: "olsen", name: "Olsen", src: `${p}/olsen.svg`, scale: 0.8, maxWidth: 5.25 },
  { id: "passeport", name: "Passeport", src: `${p}/passeport.svg`, scale: 1, maxWidth: 7.25 },
  { id: "leica", name: "Leica Camera AG", src: `${p}/leica.svg`, scale: 0.92, maxWidth: 6.25 },
  { id: "boss", name: "BOSS", src: `${p}/boss.svg`, scale: 0.74, maxWidth: 4.75 },
  { id: "minox", name: "Minox", src: `${p}/minox.svg`, scale: 0.84, maxWidth: 5.5 },
  { id: "fossil", name: "Fossil", src: `${p}/fossil.svg`, scale: 0.86, maxWidth: 5.75 },
  { id: "hauer-golf", name: "Hauer Golf", src: `${p}/hauer-golf.svg`, scale: 1.06, maxWidth: 8 },
  { id: "procter-gamble", name: "Procter & Gamble", src: `${p}/procter-gamble.svg`, scale: 1.02, maxWidth: 5.25 },
  { id: "freitag", name: "FREITAG lab.", src: `${p}/freitag.svg`, scale: 1, maxWidth: 8.5 },
  { id: "brax", name: "BRAX", src: `${p}/brax.svg`, scale: 0.7, maxWidth: 4.5 },
  { id: "cinque", name: "CINQUE", src: `${p}/cinque.svg`, scale: 0.8, maxWidth: 5.25 },
  { id: "roy-robson", name: "ROY Robson", src: `${p}/roy-robson.svg`, scale: 1.05, maxWidth: 7.75 },
] as const;
