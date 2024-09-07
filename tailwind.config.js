const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const {
  default: flattenColorPalette
} = require('tailwindcss/lib/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: '#fcbf49',
        darkest: '#212529',
        darker: '#343a40',
        dark: '#495057',
        medium: '#6c757d',
        light: '#a1a1aa',
        lighter: '#ced4da',
        lightest: '#dee2e6'
      },
      screens: {
        2500: '2500px',
        2200: '2200px',
        2000: '2000px',
        nav: '1920px',
        1800: '1800px',
        content: '1280px',
        500: '500px',
        xs: '450px',
        xxs: '425px'
      },
      fontFamily: {
        dank: ['Dank', 'monospace']
      },
      fontSize: {
        10: '.625rem',
        12: '.75rem',
        14: '.875rem',
        16: '1rem',
        18: '1.125rem',
        20: '1.25rem',
        22: '1.375rem',
        24: '1.5rem',
        28: '1.75rem',
        32: '2rem',
        48: '3rem',
        64: '4rem',
        80: '5rem',
        100: '6.25rem',
        128: '8rem'
      },
      animation: {
        'meteor-effect': 'meteor 5s linear infinite'
      },
      keyframes: {
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: '0'
          }
        }
      }
    }
  },
  plugins: [
    'prettier-plugin-tailwindcss',
    require('tailwind-scrollbar'),
    addVariablesForColors
  ]
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars
  });
}
