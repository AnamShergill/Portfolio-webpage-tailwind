import autoprefixer from 'autoprefixer';

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins:  [
    'tailwindcss',
    'autoprefixer',
    process.env.NODE_ENV === 'production' ? '@fullhuman/postcss-purgecss' : null,
  ],
}

export default config;
