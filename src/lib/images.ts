/**
 * Photographies locales — uniquement /public/images
 * (jamais /out : c’est un export statique, pas la source du site)
 */

import { IMAGE_ALTS } from "./visual-direction";

const base = "/images";
const partners = `${base}/logo/partners`;

export const LOCAL = {
  hero: `${base}/hero/leather.png`,
  heroPhoto: `${base}/hero/hero.png`,
  hero02: `${base}/hero/hero02.png`,
  belt: `${base}/belts/belt.png`,
  beltCeinture: `${base}/belts/ceinture.png`,
  leather: `${base}/leather/leather01.png`,
  workshop: `${base}/workshop/starlight-03.png`,
  detail: `${base}/details/detail.png`,
  pochettes: `${base}/pochettes/pochettes.png`,
  sangles: `${base}/sangles/sangles.png`,
  maroquinerie: `${base}/maroquinerie/maroquinerie.png`,
  accessoires: `${base}/accessoires/accessoires.png`,
  coqTel: `${base}/accessoires/coq_tel.png`,
  processCut: `${base}/process/process00.png`,
  processStitch: `${base}/process/process01.png`,
  processFinish: `${base}/process/process02.png`,
  processAnalyseLeathers: `${base}/process/analyse-leathers.png`,
  impressionStarlight: `${base}/details/impression_starlight.png`,
  starlightProcessAnalyse: `${base}/process/starlight-detail.png`,
  starlightProcessDev: `${base}/process/starlight-06.png`,
  starlightProcessMake: `${base}/process/starlight-05.png`,
  starlightProcessControl: `${base}/process/starlight-04.png`,
  starlightProcessMachine: `${base}/process/starlight-07.png`,
  starlightProcessLoops: `${base}/process/starlight-detail-02.png`,
  starlightWorkshopFloor: `${base}/workshop/starlight-03.png`,
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
  accessories: LOCAL.coqTel,
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
