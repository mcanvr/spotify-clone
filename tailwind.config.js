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
        thin: ['PlusJakartaSans_200ExtraLight', 'sans-serif'],
        'thin-italic': ['PlusJakartaSans_200ExtraLight_Italic', 'sans-serif'],
        light: ['PlusJakartaSans_300Light', 'sans-serif'],
        'light-italic': ['PlusJakartaSans_300Light_Italic', 'sans-serif'],
        regular: ['PlusJakartaSans_400Regular', 'sans-serif'],
        'regular-italic': ['PlusJakartaSans_400Regular_Italic', 'sans-serif'],
        medium: ['PlusJakartaSans_500Medium', 'sans-serif'],
        'medium-italic': ['PlusJakartaSans_500Medium_Italic', 'sans-serif'],
        semibold: ['PlusJakartaSans_600SemiBold', 'sans-serif'],
        'semibold-italic': ['PlusJakartaSans_600SemiBold_Italic', 'sans-serif'],
        bold: ['PlusJakartaSans_700Bold', 'sans-serif'],
        'bold-italic': ['PlusJakartaSans_700Bold_Italic', 'sans-serif'],
        extrabold: ['PlusJakartaSans_800ExtraBold', 'sans-serif'],
        'extrabold-italic': ['PlusJakartaSans_800ExtraBold_Italic', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
