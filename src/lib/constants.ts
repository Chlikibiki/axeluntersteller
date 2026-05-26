import {
  CAPABILITY_IMAGES,
  CRAFT_IMAGES,
  HERO_IMAGES,
  MANUFACTURING_IMAGES,
  MACRO_GALLERY_IMAGES,
  CONTACT_HERO_IMAGE,
  LOGO,
  PARTNER_LOGOS,
  TRUST_IMAGE,
} from "./images";

export const SITE = {
  name: "ST★RLIGHT",
  legalName: "Starlight, Manufacture de cuir",
  tagline: "Manufacture de cuir · Europe · Depuis 1987",
  established: 1987,
  email: "projects@starlight-leather.com",
  phone: "+49 123 456 7890",
  whatsapp: "491234567890",
  address: {
    street: "Industriestraße 12",
    city: "Offenbach am Main",
    region: "Hessen",
    country: "Allemagne",
    postal: "63065",
  },
  coordinates: { lat: 50.0956, lng: 8.7761 },
} as const;

export const HERO_STATEMENT =
  "Depuis 1987, Starlight transforme les plus belles peaux en cuirs d'exception pour les maisons internationales." as const;

export { HERO_IMAGES, CONTACT_HERO_IMAGE, LOGO, PARTNER_LOGOS, TRUST_IMAGE };

export const HERO_COPY = {
  eyebrow: "Manufacture de cuir · Europe",
  established: "Depuis 1987 · Allemagne · Tunisie",
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
  references: PARTNER_LOGOS,
  visualCaptions: [
    { label: "01", text: "Sangle · Quincaillerie" },
    { label: "02", text: "Peau · Sélection" },
  ],
} as const;

export const SECTION_COPY = {
  trust: {
    label: "Héritage",
    title: "Créateurs d'excellence",
    body: [
      "Depuis 1987, le geste façonne la matière pour les maisons les plus exigeantes. Allemagne, Tunisie : une même exigence, du prototype à la série.",
    ],
    bodyExtended:
      "Nos ateliers couvrent plus de 5 000 m² dédiés à la fabrication et au contrôle qualité.",
    tags: ["Atelier allemand", "Sur mesure", "Maisons internationales"],
  },
  production: {
    label: "Réalisations",
    title: "Fabriqué ici. Porté ailleurs.",
    body: "Ce qui quitte notre atelier est conçu pour les marques, jamais pour l'étalage.",
    tag: "Référence atelier",
    cta: "Nous écrire",
  },
  macro: {
    label: "Gros plan",
    title: "Le langage du cuir.",
  },
  capabilities: {
    label: "Savoir-faire",
    title: "Cinq disciplines. Une exigence.",
    body: "Du premier prototype à la série, toujours à la main, toujours à la mesure.",
    tag: "Production atelier",
  },
  craft: {
    label: "L'atelier",
    title: "Là où la main tranche.",
    body: "La machine aide. Le jugement reste humain.",
  },
  process: {
    label: "Méthode",
    title: "Cinq gestes. Une fin.",
    body: "Simple, lent, sans détour.",
  },
  partners: {
    title: "Marques partenaires",
    body: "Des maisons qui nous confient leur exigence.",
    tagline: "Manufacture européenne depuis 1987.",
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
    label: "Commencer",
    title: "Tout commence en silence.",
    body: "Décrivez ce que vous imaginez. Nous écoutons d'abord.",
    formTitle: "Votre message",
    guaranteeLabel: "Réponse",
    guarantee:
      "Nous répondons sous vingt-quatre heures. Les premiers échanges sont sans engagement.",
    email: "Écrire",
    whatsapp: "WhatsApp",
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
    act: "Acte IV · Fin",
    closing: "Le cuir continue.",
    subline: "Starlight · Allemagne · Tunisie",
    body: "Manufacture de cuir pour les maisons internationales. Depuis 1987.",
    navigation: "Navigation",
    contact: "Contact",
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
    heroAlt: "Découpe d'une peau dans l'atelier Starlight",
    since: "Depuis",
  },
  images: {
    heroPrimary:
      "Couture en gros plan sur cuir pleine fleur, atelier Starlight",
    belt: "Fabrication de ceinture en cuir",
    leatherTexture: "Grain du cuir en lumière rasante",
    workshop: "Atelier de maroquinerie, cuir et fabrication Starlight",
    manufacturing: (title: string) =>
      `${title}, réalisation atelier Starlight`,
    manufacturingDetail: (category: string) =>
      `${category}, détail du cuir`,
    craft: (title: string) => `${title}, atelier Starlight`,
    capability: (title: string) => `${title}, savoir-faire Starlight`,
    partnerLogo: (name: string) => `Logo ${name}`,
    trustArtisan:
      "Artisan cousant une sangle en cuir pleine fleur à la main, lumière chaude d'atelier Starlight",
  },
} as const;

export const NAV_LINKS = [
  { label: "Réalisations", href: "/#production" },
  { label: "Savoir-faire", href: "/#capabilities" },
  { label: "Atelier", href: "/#craftsmanship" },
  { label: "Partenaires", href: "/#partners" },
  { label: "Contact", href: "/contact" },
] as const;

export const TRUST_METRICS = [
  { value: "40", label: "Années", suffix: "+" },
  { value: "150", label: "Employés", suffix: "" },
  { value: "3", label: "Sites", suffix: "" },
  { value: "10", label: "Marques", suffix: "" },
  { value: "100", label: "Fabriqué en Tunisie", suffix: "%" },
] as const;

export const MANUFACTURING_EXAMPLES = [
  {
    id: "belts",
    category: "Ceintures",
    reference: "Maisons de mode",
    title: "La sangle",
    inspiration: "Portée chaque jour. Jugée pour toujours.",
    description:
      "Cuir pleine fleur. Quincaillerie selon vos cahiers des charges. Coupe, couture et finition en série, sans perdre la main.",
    image: MANUFACTURING_IMAGES.belts.main,
    macro: MANUFACTURING_IMAGES.belts.macro,
    specs: ["Cuir pleine fleur", "Quincaillerie", "Collections sur mesure"],
  },
  {
    id: "optics",
    category: "Cuir technique",
    reference: "Maisons de précision",
    title: "L'étui",
    inspiration: "Protéger avec présence.",
    description:
      "Pochettes et étuis calqués au millimètre. Grain choisi. Bords travaillés. Pour les instruments qui n'admettent aucun jeu.",
    image: MANUFACTURING_IMAGES.optics.main,
    macro: MANUFACTURING_IMAGES.optics.macro,
    specs: ["Ajustement exact", "Protection", "Finition de marque"],
  },
  {
    id: "carry",
    category: "Maroquinerie",
    reference: "Maisons contemporaines",
    title: "L'assemblage",
    inspiration: "Des pièces qui tiennent leur rang.",
    description:
      "Sangles, pans, montages complets, le cuir traité avec la même rigueur, qu'il s'agisse d'une pièce ou de dix mille.",
    image: MANUFACTURING_IMAGES.carry.main,
    macro: MANUFACTURING_IMAGES.carry.macro,
    specs: ["Composants & montage", "Choix des matières", "Production en volume"],
  },
] as const;

export const MACRO_GALLERY = [...MACRO_GALLERY_IMAGES];

export const CAPABILITIES = [
  {
    id: "belts",
    title: "Ceintures",
    subtitle: "Cœur de métier",
    description:
      "Sangles et boucles selon votre ligne, cuir choisi, cotes tenues, série après série.",
    image: CAPABILITY_IMAGES.belts,
  },
  {
    id: "pouches",
    title: "Pochettes & étuis",
    subtitle: "Précision technique",
    description:
      "Formes de protection pour les objets et instruments qui exigent le millimètre juste.",
    image: CAPABILITY_IMAGES.pouches,
  },
  {
    id: "straps",
    title: "Sangles & anses",
    subtitle: "Composants",
    description:
      "Grain accordé. Tenue éprouvée. Finition qui s'efface au profit du produit.",
    image: CAPABILITY_IMAGES.straps,
  },
  {
    id: "goods",
    title: "Petite maroquinerie",
    subtitle: "Marque blanche",
    description:
      "Portefeuilles, porte-cartes, pièces clés, petites par la taille, absolues par l'exigence.",
    image: CAPABILITY_IMAGES.goods,
  },
  {
    id: "accessories",
    title: "Accessoires",
    subtitle: "Sur mesure",
    description:
      "Pièces pour bagagerie, optique et transport, dessinées, jamais devinées.",
    image: CAPABILITY_IMAGES.accessories,
  },
] as const;

export const CRAFT_STEPS = [
  {
    title: "La coupe",
    description: "La peau est lue avant que la lame ne s'avance.",
    image: CRAFT_IMAGES.cutting,
  },
  {
    title: "La couture",
    description: "Fil tendu. Main là où elle compte.",
    image: CRAFT_IMAGES.stitching,
  },
  {
    title: "La finition",
    description:
      "Bords brunis. Quincaillerie posée. Puis seulement, elle part.",
    image: CRAFT_IMAGES.finishing,
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Écoute",
    description: "Votre projet. Votre matière. Votre échéance.",
  },
  {
    step: "02",
    title: "Échantillon",
    description: "Affiné jusqu'à ce qu'il ne reste plus de question.",
  },
  {
    step: "03",
    title: "Fabrication",
    description: "La série : même main, même regard.",
  },
  {
    step: "04",
    title: "Contrôle",
    description: "Grain. Couture. Mesure. Encore.",
  },
  {
    step: "05",
    title: "Livraison",
    description: "À la date convenue. Sans réserve.",
  },
] as const;

export const BRAND_REFERENCES = [
  "Baldessarini",
  "Betty Barclay",
  "s.Oliver",
  "Olsen",
  "Passeport",
  "Leica Camera AG",
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

export const SIGNATURE_COPY = {
  line1: "La machine répète.",
  line2: "La main décide.",
} as const;

export const PHILOSOPHY = {
  headline: "La confiance se construit lentement.",
  body: "Nous travaillons avec peu de partenaires, longtemps. Le cuir s'affine avec la relation.",
} as const;

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
