/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'dark-background': '#121212',
        brand: '#1ED760',
      },
      fontFamily: {
        sans: ['CircularStd-Book'],
        book: ['CircularStd-Book'],
        'book-italic': ['CircularStd-BookItalic'],
        medium: ['CircularStd-Medium'],
        'medium-italic': ['CircularStd-MediumItalic'],
        bold: ['CircularStd-Bold'],
        'bold-italic': ['CircularStd-BoldItalic'],
        black: ['CircularStd-Black'],
        'black-italic': ['CircularStd-BlackItalic'],
      },
    },
  },
  plugins: [],
};
