/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        esmPrimary: '#1B84E7',
        esmSecondary: '#7C3AED'
      }
    }
  },
  plugins: []
};
