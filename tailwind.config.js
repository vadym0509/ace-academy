/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
      serif: ['Manrope', 'serif'],
    },
    extend: {
      colors: {
        primary: '#F09272',
        midblack: '#1F1F1F',
        tangerine: '#F5F5F5',
        midgrey: '#525966',
      },
      spacing: {
        1.5: '0.3125rem', //5px
        2.5: '0.625rem', // 10px
        4.5: '1.125rem', // 18px
        6.5: '1.625rem',  // 26px
        7.5: '1.875rem', // 30px
        15: '3.75rem', // 60px
        23: '5.375rem', // 92px
        33: '8.25rem', // 132px
        35: '8.75rem', // 140px
        86: '21.5rem', // 344px
        131: '32.75rem' // 524px
      },
      borderRadius: {
        'semimd': '0.25rem', // 4px
        'semixl': '0.625rem', // 10px
        '2.5xl': '1.25rem', // 20px;
        'semilg': '1.875rem', // 30px
        'extralg': '9.375rem' // 150px
      },
      fontSize: {
        30: '30px'
      },
      boxShadow: {
        custom: '0px 4px 50px 10px rgba(0, 0, 0, 0.03)'
      }
    }
  },
  plugins: [],
}