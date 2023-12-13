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
        primary: {
          500: '#F09272',
          400: '#f4a286'
        },
        midblack: '#1F1F1F',
        tangerine: '#F5F5F5',
        midgrey: '#525966',
        disabled: {
          bg: '#f0f0f0',
          text: '#ccc'
        }
      },
      spacing: {
        1.5: '0.3125rem', //5px
        2.5: '0.625rem', // 10px
        4.5: '1.125rem', // 18px
        6.5: '1.625rem',  // 26px
        7.5: '1.875rem', // 30px
        12.5: '3.125rem', // 50px
        15: '3.75rem', // 60px
        22.5: '5.625rem', // 90px
        23: '5.375rem', // 92px
        24.5: '6.125rem', // 98px
        25: "6.25rem", // 100px
        33: '8.25rem', // 132px
        35: '8.75rem', // 140px
        77: '19.25rem', // 308px
        82: '20.5rem', // 328px
        86: '21.5rem', // 344px
        101: '25.25rem', // 404px
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
        custom: '0px 4px 50px 10px rgba(0, 0, 0, 0.03)',
        custom2: '0px 4px 24px 0px rgba(0, 0, 0, 0.07)'
      }
    }
  },
  plugins: [],
}