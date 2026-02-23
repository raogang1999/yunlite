/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"LXGW WenKai"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        warm: {
          50:  '#FFFDF7',
          100: '#FEF7E0',
          200: '#FDEDB8',
          300: '#FBDF85',
          400: '#F5C843',
          500: '#E5A91B',
          600: '#C8860F',
          700: '#A66511',
          800: '#884F15',
          900: '#714117',
        },
        sage: {
          50:  '#F6F8F4',
          100: '#E9EFE4',
          200: '#D3DFCB',
          300: '#B2C7A5',
          400: '#8DAA7B',
          500: '#6E8E5D',
          600: '#577248',
          700: '#455A3A',
          800: '#394932',
          900: '#303E2B',
        },
        cream: {
          50:  '#FEFDFB',
          100: '#FAF8F4',
          200: '#F3EFE8',
          300: '#E8E2D8',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
