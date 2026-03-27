/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FDF6EC",
          dark:  "#F5E9D4",
          mid:  "#EDD9B8",
          50:  '#FDFBF7',
          100: '#F9F6F0',
          200: '#F5F0E6',
          300: '#EDE5D8',
        },
        brown: {
          DEFAULT: "#3C1F0A",
          mid:     "#6B3A1F",
          light:   "#9B6B47",
        },
        gold: {
          DEFAULT: "#C49A3C",
          light:   "#E2C27D",
        },
        coffee: {
          400: '#8B6914',
          500: '#6B4423',
          600: '#5D3A1A',
          700: '#4A3728',
          800: '#3D2B1F',
          900: '#2C1810',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};