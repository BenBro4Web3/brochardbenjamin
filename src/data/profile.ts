export const profile = {
  name: 'Benjamin Brochard',
  title: 'Gestion de projet &',
  titleHighlight: 'automatisation',
  subtitle: 'Technico-commercial · Delivery · Digitalisation',
  description:
    "Je suis technico-commercial avec une forte composante gestion de projet / delivery, spécialisé dans la digitalisation de process, l'automatisation (Google Sheets / Apps Script) et l'outillage interne / reporting (Looker Studio).",
  objective:
    '🎯 Objectif : CDI ou missions freelance (pilotage, cadrage, déploiement, automatisations, reporting).',
  email: 'benjamin.brochard@gmail.com',
  location: 'France',
  linkedin: 'https://linkedin.com/in/benjaminbrochard',
  github: 'https://github.com/benjaminbrochard',
};

export const skills = [
  { name: 'Google Sheets', icon: '📊' },
  { name: 'Apps Script', icon: '⚙️' },
  { name: 'Looker Studio', icon: '📈' },
  { name: 'Pennylane', icon: '💰' },
  { name: 'QGIS', icon: '🗺️' },
];

export const services = [
  {
    title: 'Cadrage & Pilotage',
    description:
      'Recueil besoin, chiffrage, planning, coordination, recette, mise en prod.',
    icon: '🎯',
  },
  {
    title: 'Automatisation & Data',
    description:
      'Flux semi-automatiques, OCR, génération de documents, intégrations compta.',
    icon: '⚡',
  },
  {
    title: 'Reporting',
    description:
      "Suivi d'usage, métriques produit, dashboards (Looker Studio).",
    icon: '📊',
  },
];

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  url?: string;
  tags: string[];
  image?: string;
  isPublic: boolean;
}

export const publicProjects: ProjectItem[] = [
  {
    id: 'restranslate',
    title: 'ResTranslate',
    subtitle: 'Menu digital traduit (B2B CHR)',
    description:
      'Menu digital traduit (12 langues) + diffusion multi-canaux (QR, Google, réseaux, etc.).',
    url: 'https://restranslate.com/',
    tags: ['SaaS', 'Multi-langues', 'QR Code', 'Google'],
    isPublic: true,
  },
  {
    id: 'breizh-car-clean',
    title: 'Breizh Car Clean',
    subtitle: 'Service local (auto à domicile)',
    description:
      'Présence web + acquisition locale / prise de contact (service nettoyage automobile).',
    url: 'https://breizh-car-clean.fr/',
    tags: ['Site vitrine', 'SEO local', 'Acquisition'],
    isPublic: true,
  },
  {
    id: 'generation-auto-passion',
    title: 'Génération Auto Passion',
    subtitle: "Véhicules d'exception (achat / vente / import)",
    description:
      'Présentation offre + parcours de contact / estimation de reprise.',
    url: 'https://generationautopassion.fr/',
    tags: ['Site vitrine', 'Lead gen', 'Automobile'],
    isPublic: true,
  },
  {
    id: 'privatememe',
    title: 'Privatememe',
    subtitle: 'Projet en accès restreint',
    description: 'Application web en accès restreint (démo via captures).',
    url: 'https://privatememe.com/',
    tags: ['App web', 'Accès restreint'],
    isPublic: true,
  },
];

export const internalProjects: ProjectItem[] = [
  {
    id: 'ocr-menus',
    title: 'OCR semi-automatique',
    subtitle: 'Adaptation menus/cartes clients',
    description:
      'Système OCR pour adapter automatiquement les menus et cartes des clients ResTranslate.',
    tags: ['OCR', 'Automatisation', 'Apps Script'],
    isPublic: false,
  },
  {
    id: 'quittances-pennylane',
    title: 'Génération quittances & factures',
    subtitle: 'Intégration Pennylane',
    description:
      'Génération semi-automatique de quittances de loyers et factures reliées à Pennylane.',
    tags: ['Pennylane', 'Facturation', 'Automatisation'],
    isPublic: false,
  },
  {
    id: 'qgis-converter',
    title: 'Convertisseur calques QGIS',
    subtitle: 'Visualisation réseaux',
    description:
      'Outil de conversion de calques pour QGIS (visualisation réseaux sur une vue unique).',
    tags: ['QGIS', 'SIG', 'Data'],
    isPublic: false,
  },
];

export const metrics = [
  {
    title: 'Statistiques ResTranslate',
    description: 'Consultation des menus en temps réel via Looker Studio',
    url: 'https://lookerstudio.google.com/reporting/a55e5f53-ebc9-462d-bccc-0afcbc853588',
  },
];
