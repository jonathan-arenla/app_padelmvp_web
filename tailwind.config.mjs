/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Energy blue (acento principal estilo Playtomic)
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
        // Coral / amber accent
        coral: {
          50: '#fff5ed',
          100: '#ffe8d4',
          200: '#ffcca8',
          300: '#ffa770',
          400: '#ff7a3a',
          500: '#ff5a17',
          600: '#f1410d',
          700: '#c8300d',
          800: '#9e2913',
          900: '#7f2513',
        },
        // Soft greens for accents secundarios
        court: {
          50: '#effef3',
          100: '#d8ffe1',
          200: '#b3fec5',
          300: '#76fb96',
          400: '#36ed62',
          500: '#0dd13c',
          600: '#05a82d',
          700: '#078427',
          800: '#0a6824',
          900: '#0a5520',
        },
        // Neutrales claros
        ink: {
          900: '#0b1020',
          800: '#161c2f',
          700: '#2a3147',
          500: '#4a5170',
          300: '#8189a3',
        },
        cream: '#fbf9f5',
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 25px 60px -20px rgba(47, 95, 255, 0.45)',
        'glow-coral': '0 25px 60px -20px rgba(255, 90, 23, 0.45)',
        soft: '0 24px 60px -32px rgba(15, 23, 42, 0.30)',
        card: '0 10px 30px -10px rgba(15, 23, 42, 0.15), 0 2px 6px -2px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
};
