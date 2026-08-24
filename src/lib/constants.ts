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
  tagline: "Premium Leather Manufacturing · B2B · Depuis 1987",
  established: 1987,
  email: "axunt@aol.com",
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
  "Depuis 1987, Starlight conçoit et fabrique des accessoires en cuir pour les marques : du prototype à la production en série. Design en Allemagne, fabrication en Tunisie." as const;

export { HERO_IMAGES, CONTACT_HERO_IMAGE, LOGO, TRUST_IMAGE };
export { PARTNER_LOGOS } from "./partner-logos";

export const HERO_COPY = {
  eyebrow: "Premium Leather Manufacturing",
  established: "Depuis 1987 · Design en Allemagne · Fabrication en Tunisie",
  headline: ["ACCESSOIRES CUIR", "POUR LES MARQUES.", "DEPUIS 1987."],
  manifesto:
    "Starlight accompagne les marques de la conception du prototype jusqu'à la production en série.",
  subhead:
    "Manufacture B2B d'accessoires et d'articles en cuir pour entreprises et marques. Développement produit, prototype, fabrication et contrôle qualité — en Allemagne et en Tunisie.",
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
    title: "Une manufacture B2B, au service des marques.",
    body: "Depuis 1987, nous développons et fabriquons des accessoires en cuir pour les entreprises et les marques. Design et accompagnement en Allemagne, fabrication en Tunisie : prototype validé, production en série, qualité contrôlée.",
  },
  capabilities: {
    label: "Produits",
    title: "Ce que nous fabriquons.",
    body: "Accessoires et articles en cuir pour marques et entreprises — cinq familles de produits, une même discipline de fabrication.",
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
    title: "Développement, prototype, série.",
  },
  partners: {
    title: "Des marques qui nous font confiance",
    body: "Depuis 1987, Starlight accompagne des marques internationales dans le développement et la fabrication de leurs accessoires en cuir.",
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
    body: "Présentez votre marque, le produit, les volumes et le planning. Nous accompagnons le développement du prototype jusqu'à la série.",
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
    storyTitle: "Notre histoire",
    storyP1:
      "Depuis 1987, Starlight construit son savoir-faire entre l'Allemagne et la Tunisie.",
    storyP2:
      "Derrière chaque projet, il y a une équipe, un atelier, des années d'expérience et une exigence partagée : créer des accessoires en cuir qui répondent aux standards des plus grandes marques.",
    storyP3:
      "L'esprit Starlight : une entreprise familiale, authentique et profondément attachée à son histoire.",
    storySignature: "Starlight · Allemagne · Tunisie · Depuis 1987",
  },
  footer: {
    act: "Phase IV · Fin",
    closing: "Le cuir continue.",
    subline: "Starlight · Allemagne · Tunisie",
    body: "Manufacture B2B d'accessoires en cuir pour les marques. Design en Allemagne, fabrication en Tunisie. Depuis 1987.",
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
    prevTestimonial: "Témoignage précédent",
    nextTestimonial: "Témoignage suivant",
    home: "Accueil",
  },
  contact: {
    pageTitle: "Contact",
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
  { label: "Contact", href: "/contact#contact-form" },
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
    src: LOCAL.starlightProcessDev,
    alt: IMAGE_ALTS.starlightProcessDev,
  },
  {
    src: LOCAL.hero02,
    alt: IMAGE_ALTS.heroPrimary,
  },
] as const;

export const MATERIALS_GALLERY = [
  { src: LOCAL.leather, alt: IMAGE_ALTS.leatherTexture, label: "Cuir" },
  { src: LOCAL.detail, alt: IMAGE_ALTS.craft.stitching, label: "Couture" },
  { src: LOCAL.belt, alt: IMAGE_ALTS.belt, label: "Tranche" },
  { src: LOCAL.processFinish, alt: IMAGE_ALTS.craft.finishing, label: "Finition" },
  { src: LOCAL.heroPhoto, alt: IMAGE_ALTS.heroPrimary, label: "Quincaillerie" },
  { src: LOCAL.accessoires, alt: IMAGE_ALTS.accessories, label: "Accessoires" },
] as const;

export const ATELIER_SCENES = [
  {
    src: LOCAL.workshop,
    alt: IMAGE_ALTS.workshop,
    title: "Atelier principal",
    caption: "Organisation rigoureuse, production en série maîtrisée.",
  },
  {
    src: LOCAL.starlightProcessDev,
    alt: IMAGE_ALTS.starlightProcessDev,
    title: "Couture & assemblage",
    caption: "Machines et main, selon l'exigence du produit.",
  },
  {
    src: LOCAL.starlightProcessMachine,
    alt: IMAGE_ALTS.workshopMachine,
    title: "Machines de production",
    caption: "Fendage, finition des bords et cadence de série.",
  },
  {
    src: LOCAL.starlightProcessLoops,
    alt: IMAGE_ALTS.workshopDetail,
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
    image: LOCAL.starlightProcessAnalyse,
    imageAlt: IMAGE_ALTS.starlightProcessAnalyse,
  },
  {
    step: "02",
    title: "Développement",
    description:
      "Prototype et échantillons jusqu'à validation complète du produit, des finitions et du comportement matière.",
    image: LOCAL.processStitch,
    imageAlt: IMAGE_ALTS.trustArtisan,
  },
  {
    step: "03",
    title: "Fabrication",
    description:
      "Production artisanale ou mécanisée selon les volumes, les délais et le niveau de finition recherché.",
    image: LOCAL.starlightProcessMachine,
    imageAlt: IMAGE_ALTS.workshopMachine,
  },
  {
    step: "04",
    title: "Contrôle",
    description:
      "Régularité, couture, tenue, précision et qualité d'exécution vérifiées sur chaque série.",
    image: LOCAL.starlightProcessControl,
    imageAlt: IMAGE_ALTS.starlightProcessControl,
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
  successTitle: "Message envoyé.",
  successBody:
    "Votre demande a bien été envoyée. L'atelier vous répondra rapidement.",
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
    "Impossible d'envoyer le message actuellement. Veuillez réessayer ou nous écrire directement à axunt@aol.com.",
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
  "Manufacture B2B d'accessoires en cuir depuis 1987. Starlight accompagne les marques du prototype à la production en série. Design en Allemagne, fabrication en Tunisie." as const;

export const SEO_KEYWORDS = [
  "fabricant cuir b2b",
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
