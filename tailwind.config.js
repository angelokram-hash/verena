/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        paper:   '#f3efe7',
        paper2:  '#eae4d8',
        ink:     '#1a1814',
        ink2:    '#3a342c',
        ink3:    '#6e665a',
      },
      fontFamily: {
        display: ['Fraunces', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      borderColor: {
        hairline: 'rgba(26,24,20,.14)',
      },
      borderRadius: {
        sm: '2px',
        DEFAULT: '3px',
      },
    },
  },
  plugins: [],
};
