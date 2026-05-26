/**
 * Photographies locales (/public/images)
 */

const base = "/images";

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
} as const;

export const PARTNER_LOGOS = [
  { id: "boss", name: "BOSS", src: LOGO.boss, width: 320, height: 112 },
  { id: "leica", name: "Leica", src: LOGO.leica, width: 280, height: 112 },
  { id: "freitag", name: "Freitag", src: LOGO.freitag, width: 340, height: 104 },
] as const;

export const HERO_IMAGES = {
  primary: LOCAL.hero,
  belt: LOCAL.belt,
  texture: LOCAL.leather,
  workshop: LOCAL.workshop,
} as const;

/** Section Héritage — artisan en atelier, lumière chaude */
export const TRUST_IMAGE = LOCAL.processStitch;

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
