export const profile = {
  name: 'Benjamin Brochard',
  title: 'Curieux, ouvert &',
  titleHighlight: 'touche-à-tout',
  subtitle: 'Gestion de projet · Automatisation · Création de produits',
  description:
    "J'aime comprendre, construire et connecter les choses. IoT, SaaS, automatisation, reporting — ce qui m'anime, c'est de résoudre des problèmes concrets.",
  objective:
    'Ouvert aux opportunités CDI ou missions freelance en pilotage de projets, delivery, automatisation et reporting.',
  email: 'benjamin.brochard@gmail.com',
  location: 'France',
  linkedin: 'https://linkedin.com/in/benjaminbrochard',
  github: 'https://github.com/benjaminbrochard',
};

export const stats = [
  { value: '200+', label: 'capteurs déployés' },
  { value: '12', label: 'langues (ResTranslate)' },
  { value: '3+', label: "ans pilotage IoT" },
  { value: '6', label: 'projets publiés' },
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Heyliot',
    role: 'Chef de projet IoT (indépendant)',
    period: '2021 — 2024',
    description:
      'Pilotage end-to-end de déploiements IoT multi-clients (collectivités, industrie, tertiaire).',
    highlights: [
      '+200 capteurs déployés (LoRaWAN, Sigfox)',
      'Coordination équipes techniques & terrain',
      'Suivi projet, recette, mise en production',
      'Reporting clients via Looker Studio',
    ],
  },
  {
    company: 'Sensing Vision',
    role: 'Business Engineer IoT (CDI)',
    period: '2019 — 2021',
    description:
      'Développement commercial et technique sur le marché IoT B2B.',
    highlights: [
      'Prospection et qualification de leads B2B',
      'Réalisation de POC et démonstrations clients',
      'Déploiements capteurs et intégrations plateformes',
      "Réponses aux appels d'offres publics",
    ],
  },
  {
    company: 'ResTranslate',
    role: 'Fondateur',
    period: 'Depuis 2020',
    description:
      "Création et développement d'un SaaS B2B de menus digitaux multilingues pour la restauration.",
    highlights: [
      'Conception produit de A à Z',
      'Traduction automatique en 12 langues',
      'Diffusion multi-canaux (QR, Google, réseaux)',
      'Acquisition et gestion clients CHR',
    ],
  },
  {
    company: 'Enseignement',
    role: 'Vacataire IoT & Objets connectés',
    period: 'Ponctuel',
    description:
      "Interventions en école d'ingénieurs sur l'IoT et les réseaux LPWAN.",
    highlights: [
      'Cours sur les réseaux LPWAN (LoRa, Sigfox)',
      'Ateliers pratiques déploiement capteurs',
    ],
  },
];

export interface SkillCategory {
  category: string;
  icon: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Gestion de projet',
    icon: '🎯',
    items: ['Cadrage', 'Pilotage', 'Recette', 'Planning', 'Coordination'],
  },
  {
    category: 'IoT & Réseaux',
    icon: '📡',
    items: ['LoRaWAN', 'Sigfox', 'NB-IoT', 'Capteurs', 'Plateformes IoT'],
  },
  {
    category: 'Automatisation',
    icon: '⚡',
    items: ['Google Sheets', 'Apps Script', 'Zapier', 'Make', 'OCR'],
  },
  {
    category: 'Reporting & Data',
    icon: '📊',
    items: ['Looker Studio', 'Dashboards', 'KPIs', 'QGIS'],
  },
  {
    category: 'Commercial & CRM',
    icon: '💼',
    items: ['Salesforce', 'HubSpot', 'Pipedrive', 'Prospection B2B'],
  },
  {
    category: 'Design & Outils',
    icon: '🎨',
    items: ['Figma', 'Canva', 'Webflow', 'Pennylane'],
  },
];

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  url?: string;
  tags: string[];
  gradient: string;
  image?: string;
  isPublic: boolean;
}

export const publicProjects: ProjectItem[] = [
  {
    id: 'restranslate',
    title: 'ResTranslate',
    subtitle: 'SaaS B2B — Menus digitaux multilingues',
    description:
      'Plateforme de menus digitaux traduits en 12 langues avec diffusion multi-canaux (QR Code, Google Business, réseaux sociaux). Dashboard Looker Studio intégré.',
    url: 'https://restranslate.com/',
    tags: ['SaaS', 'Multi-langues', 'QR Code', 'Looker Studio'],
    gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    image: '/images/projects/restranslate.png',
    isPublic: true,
  },
  {
    id: 'breizh-car-clean',
    title: 'Breizh Car Clean',
    subtitle: 'Site vitrine — Nettoyage auto à domicile',
    description:
      'Présence web + acquisition locale pour un service de nettoyage automobile à domicile. SEO local et parcours de prise de contact.',
    url: 'https://breizh-car-clean.fr/',
    tags: ['Site vitrine', 'SEO local', 'Acquisition'],
    gradient: 'linear-gradient(135deg, #10b981, #22c55e)',
    image: '/images/projects/breizh-car-clean.png',
    isPublic: true,
  },
  {
    id: 'generation-auto-passion',
    title: 'Génération Auto Passion',
    subtitle: "Véhicules d'exception — Achat, vente, import",
    description:
      "Vitrine premium + parcours de contact et estimation de reprise pour un négociant automobile haut de gamme.",
    url: 'https://generationautopassion.com/',
    tags: ['Site vitrine', 'Lead gen', 'Automobile'],
    gradient: 'linear-gradient(135deg, #f59e0b, #f97316)',
    image: '/images/projects/generation-auto-passion.png',
    isPublic: true,
  },
  {
    id: 'rennes-pneus',
    title: 'Rennes Pneus',
    subtitle: 'Site vitrine — Garage & spécialiste pneus',
    description:
      'Site vitrine avec agent IA multi-canaux intégré, capable de gérer la logique métier du garage (devis, RDV, références produits) et d\'alimenter le CRM en temps réel depuis le chat, WhatsApp ou téléphone.',
    url: 'https://rennes-wheel-revival.lovable.app/',
    tags: ['Site vitrine', 'Automobile', 'Services locaux'],
    gradient: 'linear-gradient(135deg, #ef4444, #f97316)',
    image: '/images/projects/rennes-pneus.png',
    isPublic: true,
  },
  {
    id: 'bidsight',
    title: 'BidSight',
    subtitle: 'SaaS — Veille & réponse aux appels d\'offres par IA',
    description:
      'Plateforme de détection automatique des appels d\'offres publics avec scoring de pertinence et assistance IA à la rédaction des réponses. Suivi complet du cycle : signaux, opportunités, soumissions.',
    tags: ['SaaS', 'IA', 'Marchés publics', 'Veille'],
    gradient: 'linear-gradient(135deg, #1e3a5f, #3b82f6)',
    image: '/images/projects/bidsight.png',
    isPublic: true,
  },
  {
    id: 'privatememe',
    title: 'Privatememe',
    subtitle: 'Application web — Cartes postales & memes personnalisés',
    description:
      'Application permettant de créer et envoyer des cartes postales personnalisées avec vos photos, intégrant le FaceSwap pour transformer vos meilleurs memes et les partager avec vos proches.',
    url: 'https://privatememe.com/',
    tags: ['App web', 'React', 'Communauté'],
    gradient: 'linear-gradient(135deg, #a855f7, #ec4899)',
    image: '/images/projects/privatememe.png',
    isPublic: true,
  },
];

export const internalProjects: ProjectItem[] = [
  {
    id: 'ocr-menus',
    title: 'OCR semi-automatique',
    subtitle: 'Adaptation menus/cartes clients',
    description:
      'Pipeline OCR pour extraire et adapter automatiquement les menus et cartes des clients ResTranslate.',
    tags: ['OCR', 'Automatisation', 'Apps Script'],
    gradient: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
    isPublic: false,
  },
  {
    id: 'quittances-pennylane',
    title: 'Quittances & factures',
    subtitle: 'Intégration Pennylane',
    description:
      'Génération semi-automatique de quittances de loyers et factures avec synchronisation Pennylane.',
    tags: ['Pennylane', 'Facturation', 'Automatisation'],
    gradient: 'linear-gradient(135deg, #14b8a6, #06b6d4)',
    isPublic: false,
  },
  {
    id: 'qgis-converter',
    title: 'Convertisseur QGIS',
    subtitle: 'Visualisation réseaux',
    description:
      'Outil de conversion et fusion de calques QGIS pour visualiser les réseaux sur une vue cartographique unique.',
    tags: ['QGIS', 'SIG', 'Data'],
    gradient: 'linear-gradient(135deg, #6366f1, #3b82f6)',
    isPublic: false,
  },
];
