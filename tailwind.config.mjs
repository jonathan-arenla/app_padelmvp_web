/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef3ff',
          100: '#dce7ff',
          200: '#bad1ff',
          300: '#8ab2ff',
          400: '#5488ff',
          500: '#2a63ff',
          600: '#1040f5',
          700: '#0d30e0',
          800: '#1228b5',
          900: '#142890',
          950: '#0d1a57',
        },
        orange: {
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
        },
        lime: {
          400: '#c8e600',
          500: '#b8d900',
        },
        gold: {
          400: '#e8c547',
          500: '#d4a82a',
          600: '#b8891f',
        },
        diamond: '#9b6bff',
        night: {
          900: '#0d1a3e',
          800: '#122057',
          700: '#1a2d6b',
          600: '#1e3480',
        },
        cream: '#f0f5ff',
        surface: '#f8faff',
        salseo: '#e07a5f',
        victory: '#5ba838',
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Bebas Neue"', 'Anton', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 60px -15px rgba(16, 64, 245, 0.50)',
        'glow-sm': '0 10px 30px -10px rgba(16, 64, 245, 0.35)',
        'glow-orange': '0 20px 60px -15px rgba(249, 115, 22, 0.45)',
        'glow-orange-sm': '0 10px 30px -10px rgba(249, 115, 22, 0.35)',
        'glow-gold': '0 20px 60px -15px rgba(212, 168, 42, 0.40)',
        card: '0 4px 24px -4px rgba(10, 10, 11, 0.12)',
        'card-dark': '0 8px 32px -8px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
};
