/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',  // Include all pages
    './components/**/*.{js,ts,jsx,tsx}',  // Include all components
    './app/**/*.{js,ts,jsx,tsx}',  // Include all app files (if using Next.js 13+ with the app directory)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


