/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B3D91',
          50: '#f0f5ff',
          100: '#d9e6ff',
          200: '#bcd4ff',
          300: '#91b8ff',
          400: '#5c94ff',
          500: '#0B3D91',
          600: '#082f75',
          700: '#06225a',
          800: '#04163f',
          900: '#020b26',
        },
        secondary: {
          DEFAULT: '#D4AF37',
          50: '#fefcf0',
          100: '#fdf7d9',
          200: '#f9edb4',
          300: '#f4de83',
          400: '#edcb4f',
          500: '#D4AF37',
          600: '#b28e27',
          700: '#8e6d1c',
          800: '#6a4f13',
          900: '#4c370a',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 
