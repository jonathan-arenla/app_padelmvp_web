/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand blue
        brand: {
          50: '#eef4ff',
          100: '#dbe6ff',
          200: '#bdd0ff',
          300: '#8eb1ff',
          400: '#5b87ff',
          500: '#2f5fff',
          600: '#1c41f5',
          700: '#1731d8',
          800: '#192cae',
          900: '#1b2c89',
          950: '#141b53',
        },
        // Electric indigo
        electric: {
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
        // Gold / ranking
        gold: {
          300: '#fde68a',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        // Coral
        coral: {
          50: '#fff5ed',
          100: '#ffe8d4',
          200: '#ffcca8',
          300: '#ffa770',
          400: '#ff7a3a',
          500: '#ff5a17',
          600: '#f1410d',
          700: '#c8300d',
        },
        // Court green
        court: {
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
        },
        // Dark/midnight
        night: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          700: '#1a2640',
          800: '#0f1829',
          900: '#080e1c',
          950: '#04070f',
        },
        // Neutrals
        ink: {
          900: '#0b1020',
          800: '#161c2f',
          700: '#2a3147',
          500: '#4a5170',
          400: '#6b7399',
          300: '#8189a3',
          200: '#b0b8cc',
          100: '#e4e7f0',
        },
        cream: '#fbf9f5',
        surface: '#f4f6fb',
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 60px -15px rgba(47, 95, 255, 0.50)',
        'glow-sm': '0 10px 30px -10px rgba(47, 95, 255, 0.40)',
        'glow-gold': '0 20px 60px -15px rgba(245, 158, 11, 0.50)',
        'glow-electric': '0 20px 60px -15px rgba(99, 102, 241, 0.50)',
        'glow-coral': '0 20px 60px -15px rgba(255, 90, 23, 0.45)',
        soft: '0 24px 60px -32px rgba(15, 23, 42, 0.30)',
        card: '0 4px 24px -4px rgba(15, 23, 42, 0.12), 0 1px 4px -1px rgba(15, 23, 42, 0.08)',
        'card-dark': '0 4px 24px -4px rgba(0, 0, 0, 0.4)',
        xl: '0 32px 80px -20px rgba(15, 23, 42, 0.20)',
      },
    },
  },
  plugins: [],
};
