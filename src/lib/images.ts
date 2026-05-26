/**
 * Photographies locales (/public/images)
 */

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
  pochettes03: `${base}/pochettes/pochettes03.jpg`,
  sanglesAnses: `${base}/sangles/sangles_anses.jpg`,
  processCut: `${base}/process/process00.jpg`,
  processStitch: `${base}/process/process01.jpg`,
  processFinish: `${base}/process/process02.jpg`,
} as const;

export const LOGO = {
  starlight: "/images/logo/starlight-logo.png",
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
  pouches: LOCAL.pochettes03,
  straps: LOCAL.sanglesAnses,
  goods: LOCAL.processFinish,
  accessories: LOCAL.processStitch,
} as const;

export const CRAFT_IMAGES = {
  cutting: LOCAL.heroPhoto,
  stitching: LOCAL.detail,
  finishing: LOCAL.processFinish,
} as const;

export const MACRO_GALLERY_IMAGES = [
  {
    src: LOCAL.leather,
    alt: "Grain de cuir pleine fleur en lumière rasante",
    label: "Grain",
  },
  {
    src: LOCAL.detail,
    alt: "Couture sellier sur cuir",
    label: "Couture",
  },
  {
    src: LOCAL.belt,
    alt: "Détail de tranche et quincaillerie",
    label: "Tranche",
  },
  {
    src: LOCAL.processCut,
    alt: "Découpe de la peau à la main",
    label: "Coupe",
  },
  {
    src: LOCAL.processStitch,
    alt: "Mains à l'établi de l'atelier",
    label: "Main",
  },
  {
    src: LOCAL.processFinish,
    alt: "Tracé du patron sur le cuir",
    label: "Patron",
  },
] as const;
