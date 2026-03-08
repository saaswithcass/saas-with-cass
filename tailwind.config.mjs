/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        violet: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
