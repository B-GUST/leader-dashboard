const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Use a slate/gray scale as the primary neutral palette
        gray: colors.slate,
      },
      fontFamily: {
        sans: ['Lato', 'ui-sans-serif', 'system-ui'],
        serif: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
