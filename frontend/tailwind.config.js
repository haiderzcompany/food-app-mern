/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
    extend: {
      colors: {
        theme: {
          DEFAULT: '#11a882',
          dark: '#108769',
          action: '#f8fbfa',
          backgroundColor: '#e6edf0',
        },
      },
      animation: {
        fade: 'fade 1.5s',
      },
      keyframes: {
        fade: {
          from: {
            opacity: '.4',
          },
          to: {
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
