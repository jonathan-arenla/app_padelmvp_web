/** Alineado con app/api/src/lib/ranking.ts y app/src/theme/index.ts */

export type ProfileTier = 'Bronce' | 'Plata' | 'Oro' | 'Diamante';

export const TIER_THRESHOLDS = {
  Bronce: { min: 0, max: 30 },
  Plata: { min: 31, max: 55 },
  Oro: { min: 56, max: 80 },
  Diamante: { min: 81, max: 100 },
} as const;

export const RANK_PALETTE = {
  Bronce: { main: '#A87446', light: '#C4956A', dark: '#6E4925' },
  Plata: { main: '#9AA0AB', light: '#D8DCE2', dark: '#5C6068' },
  Oro: { main: '#D4A82A', light: '#F2C84A', dark: '#9A7209' },
  Diamante: { main: '#5BC4F1', light: '#A6E1F5', dark: '#3D1F73' },
} as const;

export interface ProfileTierInfo {
  name: ProfileTier;
  icon: string;
  range: string;
  desc: string;
  perks: string[];
  current?: boolean;
}

export const PROFILE_TIERS: ProfileTierInfo[] = [
  {
    name: 'Bronce',
    icon: '🥉',
    range: '0 – 30',
    desc: 'Iniciación. Foco en empuñaduras, consistencia de peloteos y posicionamiento básico.',
    perks: ['Acceso a partidos abiertos', 'Badge de iniciación'],
  },
  {
    name: 'Plata',
    icon: '🥈',
    range: '31 – 55',
    desc: 'Intermedio. Buen posicionamiento, dominio de bandejas y voleas básicas.',
    perks: ['Partidos por nivel validado', 'Stats básicas de juego'],
  },
  {
    name: 'Oro',
    icon: '🥇',
    range: '56 – 80',
    desc: 'Avanzado. Excelente consistencia, saques agresivos y buena toma de decisiones.',
    perks: ['Ranking visible en el club', 'Acceso a ligas avanzadas'],
    current: true,
  },
  {
    name: 'Diamante',
    icon: '💎',
    range: '81 – 100',
    desc: 'Élite. Precisión milimétrica, control táctico impecable y lectura de pista superior.',
    perks: ['Featured en el club', 'Acceso a torneos premium'],
  },
];
