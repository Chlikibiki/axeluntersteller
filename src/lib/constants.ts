import { IMAGE_ALTS } from "./visual-direction";
import {
  CAPABILITY_IMAGES,
  HERO_IMAGES,
  MACRO_GALLERY_IMAGES,
  CONTACT_HERO_IMAGE,
  LOGO,
  TRUST_IMAGE,
  LOCAL,
} from "./images";
import { PARTNER_LOGOS } from "./partner-logos";

export const SITE = {
  name: "ST★RLIGHT",
  legalName: "Starlight, Manufacture de cuir",
  tagline: "Manufacture de cuir · Europe · Depuis 1987",
  established: 1987,
  email: "Z.I.7080 BizerteTunisie - Responsable : Axel Untersteller",
  inquiryEmail: "axunt@aol.com",
  phone: "+49 123 456 7890",
  address: {
    street: "Z.I.7080",
    city: "Bizerte",
    region: "Bizerte",
    country: "Tunisie",
    postal: "7080",
  },
  coordinates: { lat: 50.0956, lng: 8.7761 },
} as const;

export const HERO_STATEMENT =
  "Depuis 1987, Starlight transforme les plus belles peaux en cuirs d'exception pour les maisons internationales." as const;

export { HERO_IMAGES, CONTACT_HERO_IMAGE, LOGO, TRUST_IMAGE };
export { PARTNER_LOGOS } from "./partner-logos";

export const HERO_COPY = {
  eyebrow: "Manufacture de cuir · Europe",
  established: "Depuis 1987 · Design en Allemagne · Fabrication en Tunisie",
  headline: ["LE CUIR,", "NOTRE HÉRITAGE,", "VOTRE SIGNATURE."],
  manifesto:
    "Notre héritage façonne la matière. Votre vision en devient la signature.",
  subhead:
    "Depuis 1987, nous sélectionnons les plus belles peaux et les transformons en cuirs d'exception. Pour les maisons qui exigent l'excellence.",
  ctaPrimary: "Démarrer un projet",
  ctaSecondary: "Nos partenaires",
  trust: [
    { label: "Depuis", value: "1987" },
    { label: "Pour", value: "Maisons du monde" },
    { label: "Atelier", value: "Europe" },
  ],
  referencesLabel: "Aux côtés de",
  references: PARTNER_LOGOS.map((p) => p.name),
  visualCaptions: [
    { label: "01", text: "Sangle · Quincaillerie" },
    { label: "02", text: "Peau · Sélection" },
  ],
} as const;

export const SECTION_COPY = {
  manufacture: {
    label: "Manufacture",
    title: "Starlight, manufacture de cuir.",
    body: "Depuis 1987, nous développons et produisons des accessoires cuir pour les maisons internationales. Deux sites, une exigence : prototype validé, série tenue, qualité contrôlée.",
  },
  capabilities: {
    label: "Produits",
    title: "Ce que nous fabriquons.",
    body: "Cinq familles de produits, une même discipline de fabrication.",
  },
  materials: {
    label: "Matières",
    title: "Matières & finitions.",
    body: "Cuir, couture, tranches, quincaillerie : chaque détail est pensé pour la durée et la constance en série.",
  },
  atelier: {
    label: "Atelier",
    title: "L'atelier, au quotidien.",
    body: "Artisans, machines, tables de coupe et contrôle manuel. Une fabrication réelle, sans mise en scène.",
  },
  process: {
    label: "Méthode",
    title: "Cinq étapes. Un même niveau d'exigence.",
  },
  partners: {
    title: "Des maisons qui exigent la constance.",
    body: "Références internationales en marque blanche et sous licence.",
    disclaimer:
      "Noms cités à titre de référence. Toutes les marques appartiennent à leurs propriétaires.",
  },
  collaborations: {
    label: "Alliances",
    title: "Des partenaires choisis. Un travail durable.",
    body: "Des liens qui se mesurent en années, bâtis sur une fiabilité discrète.",
    disclaimer:
      "Noms cités à titre de référence. Toutes les marques appartiennent à leurs propriétaires.",
  },
  testimonials: {
    label: "Parole",
    title: "Ceux qui nous connaissent",
  },
  philosophy: {
    label: "Conviction",
    cta: "Prendre contact",
    established: "Depuis 1987 · Allemagne · Tunisie",
  },
  cta: {
    label: "Contact",
    title: "Parler à l'atelier.",
    body: "Décrivez votre projet, vos volumes et vos contraintes. Nous répondons avec précision.",
    formTitle: "Votre message",
    guaranteeLabel: "Réponse",
    guarantee:
      "Nous répondons sous vingt-quatre heures. Les premiers échanges sont sans engagement.",
    email: "Écrire",
  },
  contact: {
    label: "Contact",
    title: "Parler à l'atelier.",
    body: HERO_STATEMENT,
    subtitle: "Ligne directe",
    formTitle: "Votre message",
    facilityLabel: "Atelier",
    facility: "Offenbach am Main · Allemagne",
  },
  footer: {
    act: "Phase IV · Fin",
    closing: "Le cuir continue.",
    subline: "Starlight · Allemagne · Tunisie",
    body: "Manufacture de cuir pour les maisons internationales. Depuis 1987.",
    navigation: "Navigation",
    contact: "Contact",
    contactManager: "Axel Untersteller",
    contactAddress: "Z.I.7080 Bizerte Tunisie",
    rights: "Tous droits réservés.",
  },
} as const;

export const UI = {
  aria: {
    mainNav: "Navigation principale",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    craftGallery: "Détails de fabrication",
    facilityMap: "Localisation de l'atelier",
    prevTestimonial: "Témoignage précédent",
    nextTestimonial: "Témoignage suivant",
    home: "Accueil",
  },
  contact: {
    pageTitle: "Contact",
    mapTitle: "Atelier Starlight, Offenbach am Main, Allemagne",
    heroAlt: IMAGE_ALTS.contact,
    since: "Depuis",
  },
  images: {
    heroPrimary: IMAGE_ALTS.heroPrimary,
    belt: IMAGE_ALTS.belt,
    leatherTexture: IMAGE_ALTS.leatherTexture,
    workshop: IMAGE_ALTS.workshop,
    manufacturing: (title: string) =>
      `${title}, réalisation atelier, lumière éditoriale sombre`,
    manufacturingDetail: (category: string) =>
      `${category}, macro cuir pleine fleur, reflets ambrés`,
    craft: (title: string) => IMAGE_ALTS.craftStep(title),
    capability: (title: string) => IMAGE_ALTS.capability(title),
    partnerLogo: (name: string) => `Logo ${name}`,
    trustArtisan: IMAGE_ALTS.trustArtisan,
  },
} as const;

export const NAV_LINKS = [
  { label: "Manufacture", href: "/#manufacture" },
  { label: "Produits", href: "/#products" },
  { label: "Méthode", href: "/#process" },
  { label: "Partenaires", href: "/#partners" },
  { label: "Contact", href: "/contact" },
] as const;

export const MANUFACTURE_PILLARS = [
  "Depuis 1987",
  "Allemagne · Tunisie",
  "+5 000 m² fabrication & stockage",
  "Développement prototype → série",
  "Fabrication artisanale & mécanisée",
  "Contrôle qualité manuel",
] as const;

export const MANUFACTURE_GALLERY = [
  {
    src: LOCAL.workshop,
    alt: IMAGE_ALTS.workshop,
  },
  {
    src: LOCAL.processCut,
    alt: IMAGE_ALTS.craft.cutting,
  },
  {
    src: LOCAL.processStitch,
    alt: IMAGE_ALTS.craft.stitching,
  },
] as const;

export const MATERIALS_GALLERY = [
  { src: LOCAL.leather, alt: IMAGE_ALTS.leatherTexture, label: "Cuir" },
  { src: LOCAL.detail, alt: IMAGE_ALTS.craft.stitching, label: "Couture" },
  { src: LOCAL.belt, alt: IMAGE_ALTS.belt, label: "Tranche" },
  { src: LOCAL.processFinish, alt: IMAGE_ALTS.craft.finishing, label: "Finition" },
  { src: LOCAL.heroPhoto, alt: IMAGE_ALTS.heroPrimary, label: "Quincaillerie" },
  { src: LOCAL.processStitch, alt: IMAGE_ALTS.trustArtisan, label: "Grain" },
] as const;

export const ATELIER_SCENES = [
  {
    src: LOCAL.workshop,
    alt: IMAGE_ALTS.workshop,
    title: "Atelier principal",
    caption: "Organisation rigoureuse, production en série maîtrisée.",
  },
  {
    src: LOCAL.processCut,
    alt: IMAGE_ALTS.craft.cutting,
    title: "Découpe",
    caption: "Tables de coupe, gabarits et précision millimétrique.",
  },
  {
    src: LOCAL.processStitch,
    alt: IMAGE_ALTS.craft.stitching,
    title: "Couture & assemblage",
    caption: "Machines et main, selon l'exigence du produit.",
  },
  {
    src: LOCAL.detail,
    alt: IMAGE_ALTS.craft.stitching,
    title: "Contrôle qualité",
    caption: "Vérification manuelle de chaque série avant expédition.",
  },
] as const;

export const TRUST_METRICS = [
  { value: "40", label: "Années", suffix: "+" },
  { value: "150", label: "Employés", suffix: "" },
  { value: "3", label: "Sites", suffix: "" },
  { value: "10", label: "Marques", suffix: "" },
  { value: "100", label: "Fabriqué en Tunisie", suffix: "%" },
  { value: "200", label: "RÉF. CUIR & FINITIONS", suffix: "+" },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Analyse",
    description:
      "Usages, contraintes techniques, matières et objectifs de fabrication sont étudiés avec précision.",
    image: LOCAL.processAnalyseLeathers,
    imageAlt: IMAGE_ALTS.analyseLeathers,
  },
  {
    step: "02",
    title: "Développement",
    description:
      "Prototype et échantillons jusqu'à validation complète du produit, des finitions et du comportement matière.",
    image: LOCAL.processFinish,
    imageAlt: IMAGE_ALTS.craft.finishing,
  },
  {
    step: "03",
    title: "Fabrication",
    description:
      "Production artisanale ou mécanisée selon les volumes, les délais et le niveau de finition recherché.",
    image: LOCAL.processStitch,
    imageAlt: IMAGE_ALTS.craft.stitching,
  },
  {
    step: "04",
    title: "Contrôle",
    description:
      "Régularité, couture, tenue, précision et qualité d'exécution vérifiées sur chaque série.",
    image: LOCAL.detail,
    imageAlt: IMAGE_ALTS.craft.stitching,
  },
  {
    step: "05",
    title: "Suivi",
    description:
      "Délais, ajustements, réassorts et continuité de fabrication dans la durée du partenariat.",
    image: LOCAL.impressionStarlight,
    imageAlt: IMAGE_ALTS.impressionStarlight,
  },
] as const;

export const CAPABILITIES = [
  {
    id: "belts",
    title: "Ceintures",
    description: "Sangles, boucles et finitions selon votre ligne.",
    image: CAPABILITY_IMAGES.belts,
  },
  {
    id: "goods",
    title: "Petite maroquinerie",
    description: "Portefeuilles, porte-cartes et pièces clés en marque blanche.",
    image: CAPABILITY_IMAGES.goods,
  },
  {
    id: "pouches",
    title: "Pochettes & étuis",
    description: "Protection optique et instruments — Leica et maisons exigeantes.",
    image: CAPABILITY_IMAGES.pouches,
  },
  {
    id: "straps",
    title: "Sangles & anses",
    description: "Composants cuir pour sacs, bagagerie et transport.",
    image: CAPABILITY_IMAGES.straps,
  },
  {
    id: "accessories",
    title: "Accessoires",
    description: "Pièces sur mesure pour bagagerie, optique et lifestyle.",
    image: CAPABILITY_IMAGES.accessories,
  },
] as const;

export const MACRO_GALLERY = [...MACRO_GALLERY_IMAGES];

export const BRAND_REFERENCES = [
  "Baldessarini",
  "Betty Barclay",
  "s.Oliver",
  "Olsen",
  "Passeport",
  "Leica Camera AG",
  "BOSS",
  "Minox",
  "Fossil",
  "Hauer Golf",
  "Procter & Gamble",
  "FREITAG lab.",
  "BRAX",
  "CINQUE",
  "ROY Robson",
] as const;

export const COLLABORATIONS = [
  {
    name: "BOSS",
    logo: LOGO.boss,
    context: "Ceintures : sangle, boucle, répétabilité en série.",
    detail: "Ceintures · Quincaillerie · Volume",
  },
  {
    name: "Leica",
    logo: LOGO.leica,
    context:
      "Étuis et protections pour l'optique de précision : ajustement, grain, finition.",
    detail: "Étuis · Ajustement · Finition",
  },
  {
    name: "Freitag",
    logo: LOGO.freitag,
    context:
      "Composants cuir pour la maroquinerie : exigence matière, profondeur de fabrication.",
    detail: "Composants · Matières · Volume",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Série après série, le même cuir, la même couture, la même mesure. C'est pour cela que nous restons.",
    role: "Direction produit",
    industry: "Mode",
  },
  {
    quote:
      "Ils lisent un cahier des charges techniques comme nous lisons un plan. Rare, dans ce métier.",
    role: "Direction des opérations",
    industry: "Optique",
  },
  {
    quote:
      "Ni le moins cher. Ni le plus rapide. Celui que l'on appelle quand il faut que ce soit juste.",
    role: "Direction créative",
    industry: "Maroquinerie",
  },
] as const;

export const FORM_COPY = {
  successTitle: "Reçu.",
  successBody: "Nous vous répondrons sous vingt-quatre heures.",
  name: "Nom",
  company: "Maison / Marque",
  email: "Courriel",
  phone: "Téléphone",
  inquiryType: "Objet",
  message: "Message",
  files: "Pièces jointes",
  filesHint: "PDF, AI, EPS, PNG, JPG, ZIP (25 Mo max)",
  submit: "Envoyer",
  privacy: "Traité en toute confidentialité.",
  submitting: "Envoi en cours…",
  errorSubmit:
    "L'envoi a échoué. Réessayez ou écrivez-nous directement à axunt@aol.com.",
  placeholders: {
    name: "Votre nom",
    company: "Nom de la maison",
    email: "courriel@maison.com",
    phone: "Facultatif",
    message: "Produit, matières, quantités, échéance…",
  },
  inquiryOptions: {
    production: "Production",
    consultation: "Échange",
    prototype: "Échantillonnage",
    quote: "Devis",
  },
} as const;

export const META_DESCRIPTION =
  "Manufacture de cuir allemande depuis 1987. Ceintures, pochettes et accessoires pour les maisons internationales. Ateliers en Allemagne et en Tunisie." as const;

export const SEO_KEYWORDS = [
  "fabricant cuir allemagne",
  "manufacture cuir europe",
  "maroquinerie luxe oem",
  "marque blanche cuir",
  "accessoires cuir sur mesure",
  "fabricant ceintures cuir",
  "fabricant poches cuir",
  "fabrication cuir europe",
  "production cuir haut de gamme",
] as const;
