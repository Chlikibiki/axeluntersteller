/**
 * Mur de marques — SVG monochromes, poids optique calibré.
 */

const p = "/images/logo/partners";

export interface PartnerLogoEntry {
  id: string;
  name: string;
  src: string;
  /** 1 = référence visuelle ; <1 réduit, >1 agrandit */
  scale: number;
}

export const PARTNER_LOGOS: readonly PartnerLogoEntry[] = [
  { id: "baldessarini", name: "Baldessarini", src: `${p}/baldessarini.svg`, scale: 1.02 },
  { id: "betty-barclay", name: "Betty Barclay", src: `${p}/betty-barclay.svg`, scale: 0.94 },
  { id: "soliver", name: "s.Oliver", src: `${p}/soliver.svg`, scale: 1.06 },
  { id: "olsen", name: "Olsen", src: `${p}/olsen.svg`, scale: 1.08 },
  { id: "passeport", name: "Passeport", src: `${p}/passeport.svg`, scale: 1.02 },
  { id: "leica", name: "Leica Camera AG", src: `${p}/leica.svg`, scale: 0.96 },
  { id: "boss", name: "BOSS", src: `${p}/boss.svg`, scale: 0.9 },
  { id: "minox", name: "Minox", src: `${p}/minox.svg`, scale: 1.1 },
  { id: "fossil", name: "Fossil", src: `${p}/fossil.svg`, scale: 1.08 },
  { id: "hauer-golf", name: "Hauer Golf", src: `${p}/hauer-golf.svg`, scale: 0.92 },
  { id: "procter-gamble", name: "Procter & Gamble", src: `${p}/procter-gamble.svg`, scale: 0.74 },
  { id: "freitag", name: "FREITAG lab.", src: `${p}/freitag.svg`, scale: 0.94 },
  { id: "brax", name: "BRAX", src: `${p}/brax.svg`, scale: 1.1 },
  { id: "cinque", name: "CINQUE", src: `${p}/cinque.svg`, scale: 1.1 },
  { id: "roy-robson", name: "ROY Robson", src: `${p}/roy-robson.svg`, scale: 0.96 },
] as const;
