/**
 * Photographies locales (/public/images)
 */

const base = "/images";
const partners = `${base}/logo/partners`;

export const LOCAL = {
  hero: `${base}/hero/leather.jpg`,
  belt: `${base}/belts/belt.jpg`,
  leather: `${base}/leather/leather01.jpg`,
  workshop: `${base}/workshop/manifacture.jpg`,
  detail: `${base}/details/detail.jpg`,
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
    leica: "/images/logo/Leica_Camera_logo.png",
    boss: "/images/logo/boss.png",
    minox: `${partners}/minox.svg`,
    fossil: `${partners}/fossil.svg`,
    hauerGolf: `${partners}/hauer-golf.svg`,
    procterGamble: `${partners}/procter-gamble.png`,
    freitag: `${partners}/freitag.jpg`,
    brax: `${partners}/brax.svg`,
    cinque: `${partners}/cinque.svg`,
    royRobson: `${partners}/roy-robson.svg`,
  },
} as const;

export const PARTNER_LOGOS = [
  { id: "baldessarini", name: "Baldessarini", src: LOGO.partners.baldessarini, size: "lg" as const },
  {
    id: "betty-barclay",
    name: "Betty Barclay",
    src: LOGO.partners.bettyBarclay,
    wide: true,
    size: "lg" as const,
  },
  { id: "soliver", name: "s.Oliver", src: LOGO.partners.soliver, size: "lg" as const },
  { id: "olsen", name: "Olsen", src: LOGO.partners.olsen, size: "lg" as const },
  { id: "passeport", name: "Passeport", src: LOGO.partners.passeport, size: "lg" as const },
  {
    id: "leica",
    name: "Leica Camera AG",
    src: LOGO.partners.leica,
    color: true,
    size: "lg" as const,
  },
  {
    id: "boss",
    name: "BOSS",
    src: LOGO.partners.boss,
    color: true,
    size: "lg" as const,
  },
  { id: "minox", name: "Minox", src: LOGO.partners.minox, size: "lg" as const },
  { id: "fossil", name: "Fossil", src: LOGO.partners.fossil, size: "lg" as const },
  {
    id: "hauer-golf",
    name: "Hauer Golf",
    src: LOGO.partners.hauerGolf,
    wide: true,
    size: "lg" as const,
  },
  {
    id: "procter-gamble",
    name: "Procter & Gamble",
    src: LOGO.partners.procterGamble,
    color: true,
    size: "xs" as const,
  },
  {
    id: "freitag",
    name: "FREITAG lab.",
    src: LOGO.partners.freitag,
    wide: true,
    color: true,
  },
  { id: "brax", name: "BRAX", src: LOGO.partners.brax, size: "lg" as const },
  { id: "cinque", name: "CINQUE", src: LOGO.partners.cinque, size: "lg" as const },
  {
    id: "roy-robson",
    name: "ROY Robson",
    src: LOGO.partners.royRobson,
    wide: true,
    size: "lg" as const,
  },
] as const;

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
  belts: LOCAL.belt,
  pouches: LOCAL.detail,
  straps: LOCAL.leather,
  goods: LOCAL.processFinish,
  accessories: LOCAL.processStitch,
} as const;

export const CRAFT_IMAGES = {
  cutting: LOCAL.processCut,
  stitching: LOCAL.processStitch,
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
