const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: ['src/sites/**/*.tsx', 'src/sites/**/*.tsx', 'src/shared/components/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        '3xl': '2000px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
