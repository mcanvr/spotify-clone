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
        sans: ['PlusJakartaSans-Regular', 'sans-serif'],
        thin: ['PlusJakartaSans-200ExtraLight', 'sans-serif'],
        'thin-italic': ['PlusJakartaSans-200ExtraLight-Italic', 'sans-serif'],
        light: ['PlusJakartaSans-300Light', 'sans-serif'],
        'light-italic': ['PlusJakartaSans-300Light-Italic', 'sans-serif'],
        normal: ['PlusJakartaSans-400Regular', 'sans-serif'],
        'normal-italic': ['PlusJakartaSans-400Regular-Italic', 'sans-serif'],
        medium: ['PlusJakartaSans-500Medium', 'sans-serif'],
        'medium-italic': ['PlusJakartaSans-500Medium-Italic', 'sans-serif'],
        semibold: ['PlusJakartaSans-600SemiBold', 'sans-serif'],
        'semibold-italic': ['PlusJakartaSans-600SemiBold-Italic', 'sans-serif'],
        bold: ['PlusJakartaSans-700Bold', 'sans-serif'],
        'bold-italic': ['PlusJakartaSans-700Bold-Italic', 'sans-serif'],
        extrabold: ['PlusJakartaSans-800ExtraBold', 'sans-serif'],
        'extrabold-italic': ['PlusJakartaSans-800ExtraBold-Italic', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
