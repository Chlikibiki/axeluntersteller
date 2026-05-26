/**
 * Photographies locales (/public/images)
 * Direction visuelle : src/lib/visual-direction.ts
 */

import { IMAGE_ALTS } from "./visual-direction";

const base = "/images";
const partners = `${base}/logo/partners`;

export const LOCAL = {
  hero: `${base}/hero/leather.jpg`,
  heroPhoto: `${base}/hero/hero.jpg`,
  belt: `${base}/belts/belt.jpg`,
  beltCeinture: `${base}/belts/ceinture.jpg`,
  leather: `${base}/leather/leather01.jpg`,
  workshop: `${base}/workshop/manifacture.jpg`,
  detail: `${base}/details/detail.jpg`,
  pochettes: `${base}/pochettes/pochettes.jpg`,
  sangles: `${base}/sangles/sangles.jpg`,
  maroquinerie: `${base}/maroquinerie/maroquinerie.jpg`,
  accessoires: `${base}/accessoires/accessoires.jpg`,
  processCut: `${base}/process/process00.jpg`,
  processStitch: `${base}/process/process01.jpg`,
  processFinish: `${base}/process/process02.jpg`,
  processAnalyseLeathers: `${base}/process/analyse-leathers.jpg`,
  impressionStarlight: `${base}/details/impression_starlight.jpg`,
} as const;

export const LOGO = {
  starlight: "/images/logo/starlight-logo.png",
  starlightHeader: "/images/logo/Logo_starlight.png",
  boss: "/images/logo/boss.png",
  leica: "/images/logo/Leica_Camera_logo.png",
  freitag: "/images/logo/freitag_logo-01.jpg",
  partners: {
    baldessarini: `${partners}/baldessarini.svg`,
    bettyBarclay: `${partners}/betty-barclay.svg`,
    soliver: `${partners}/soliver.svg`,
    olsen: `${partners}/olsen.svg`,
    passeport: `${partners}/passeport.svg`,
    leica: `${partners}/leica.svg`,
    boss: `${partners}/boss.svg`,
    minox: `${partners}/minox.svg`,
    fossil: `${partners}/fossil.svg`,
    hauerGolf: `${partners}/hauer-golf.svg`,
    procterGamble: `${partners}/procter-gamble.svg`,
    freitag: `${partners}/freitag.svg`,
    brax: `${partners}/brax.svg`,
    cinque: `${partners}/cinque.svg`,
    royRobson: `${partners}/roy-robson.svg`,
  },
} as const;

export const HERO_IMAGES = {
  primary: LOCAL.hero,
  belt: LOCAL.belt,
  texture: LOCAL.leather,
  workshop: LOCAL.workshop,
} as const;

/** Section Héritage — artisan en atelier, lumière chaude */
export const TRUST_IMAGE = LOCAL.processStitch;

/** Section iconique — atelier immersif */
export const SIGNATURE_ATELIER_IMAGE = LOCAL.workshop;

export const CONTACT_HERO_IMAGE = LOCAL.processCut;

export const MANUFACTURING_IMAGES = {
  belts: { main: LOCAL.belt, macro: LOCAL.detail },
  optics: { main: LOCAL.detail, macro: LOCAL.leather },
  carry: { main: LOCAL.workshop, macro: LOCAL.detail },
} as const;

export const CAPABILITY_IMAGES = {
  belts: LOCAL.beltCeinture,
  pouches: LOCAL.pochettes,
  straps: LOCAL.sangles,
  goods: LOCAL.maroquinerie,
  accessories: LOCAL.accessoires,
} as const;

export const CRAFT_IMAGES = {
  cutting: LOCAL.heroPhoto,
  stitching: LOCAL.detail,
  finishing: LOCAL.processFinish,
} as const;

export const MACRO_GALLERY_IMAGES = [
  {
    src: LOCAL.leather,
    alt: IMAGE_ALTS.leatherTexture,
    label: "Grain",
  },
  {
    src: LOCAL.detail,
    alt: IMAGE_ALTS.craft.stitching,
    label: "Couture",
  },
  {
    src: LOCAL.belt,
    alt: IMAGE_ALTS.belt,
    label: "Tranche",
  },
  {
    src: LOCAL.processCut,
    alt: IMAGE_ALTS.craft.cutting,
    label: "Coupe",
  },
  {
    src: LOCAL.processStitch,
    alt: IMAGE_ALTS.trustArtisan,
    label: "Main",
  },
  {
    src: LOCAL.processFinish,
    alt: IMAGE_ALTS.craft.finishing,
    label: "Patron",
  },
] as const;
