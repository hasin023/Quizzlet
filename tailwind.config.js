/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        codystar: ["Codystar", 'sans-serif'],
      },
      colors: {
        primary: '#1098ad',
        accent: '#ffa94d',
        light: '#f1f3f5',
        medium: '#ced4da',
        dark: '#495057',
        darkest: '#343a40',
      },
    },
  },
  plugins: [],
}

