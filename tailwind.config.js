/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1280px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#BFAFF2',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#D9EFEB',
      'yellow': '#F8D57E',
      'gray-dark': '#273444',
      'gray': '#808080',
      'gray-light': '#d3dce6',
      'black': '#2B2B2B',
      'white': '#fff',
    },
    fontFamily: {
      serif: ['Lato', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}

