/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // enables dark mode toggling via a CSS class
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#34d399', // green-400
          DEFAULT: '#10b981', // green-500
          dark: '#065f46', // green-800
        },
        darkBg: '#111827', // for dark mode backgrounds
        lightBg: '#f9fafb', // for light mode backgrounds
      },
      boxShadow: {
        'soft': '0 4px 12px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
};
