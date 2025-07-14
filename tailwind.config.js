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
        'outfit-thin': ['Outfit_100Thin'],
        'outfit-extralight': ['Outfit_200ExtraLight'],
        'outfit-light': ['Outfit_300Light'],
        'outfit-regular': ['Outfit_400Regular'],
        'outfit-medium': ['Outfit_500Medium'],
        'outfit-semibold': ['Outfit_600SemiBold'],
        'outfit-bold': ['Outfit_700Bold'],
        'outfit-extrabold': ['Outfit_800ExtraBold'],
        'outfit-black': ['Outfit_900Black'],
      },
    },
  },
  plugins: [],
};
