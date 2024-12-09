/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Specify the paths to all of your template and TypeScript files
  ],
  theme: {
    screens:{
    'mobile':{ max:'640px'}
    },
    extend: {},
  },
  plugins: [],
};
