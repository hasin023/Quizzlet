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
      animation: {
        loader: 'loader',
      },
      keyframes: {
        loader: {
          '20%': { backgroundPosition: '0% 0%, 50% 50%, 100% 50%' },
          '40%': { backgroundPosition: '0% 100%, 50% 0%, 100% 50%' },
          '60%': { backgroundPosition: '0% 50%, 50% 100%, 100% 0%' },
          '80%': { backgroundPosition: '0% 0%, 50% 50%, 100% 100%' },
        }
      }
    },
  },
  plugins: [],
}

