export const ranks = [
  { name: 'Bronce', color: '#cd7f32', min: 0 },
  { name: 'Plata', color: '#c0c0c0', min: 1200 },
  { name: 'Oro', color: '#d4a82a', min: 1400 },
  { name: 'Platino', color: '#e5e4e2', min: 1600 },
  { name: 'Diamante', color: '#9b6bff', min: 1800 },
] as const;

export const attributes = [
  { key: 'SAQ', label: 'Saque' },
  { key: 'RES', label: 'Resto' },
  { key: 'VOL', label: 'Volea' },
  { key: 'SMA', label: 'Smash' },
  { key: 'DEF', label: 'Defensa' },
  { key: 'MEN', label: 'Mentalidad' },
] as const;

export const badges = [
  { name: 'El Muro', emoji: '🧱', category: 'Defensiva' },
  { name: 'El Cañonero', emoji: '💥', category: 'Ofensiva' },
  { name: 'La Pluma', emoji: '🪶', category: 'Técnica' },
  { name: 'Fair Play', emoji: '🤝', category: 'Social' },
  { name: 'El Clutch', emoji: '⚡', category: 'Clutch' },
  { name: 'MVP', emoji: '👑', category: 'Social' },
] as const;
