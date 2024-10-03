/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#f7d002',
          100: '#312900',
          200: '#635301',
          300: '#947c01',
          400: '#c6a502',
          500: '#f7d002',
          600: '#fddb31',
          700: '#fde465',
          800: '#feed98',
          900: '#fef6cc'
        },
        'secondary': {
          DEFAULT: '#000000',
          100: '#000000',
          200: '#000000',
          300: '#000000',
          400: '#000000',
          500: '#000000',
          600: '#333333',
          700: '#666666',
          800: '#999999',
          900: '#cccccc'
        },
        'mint_cream': {
          DEFAULT: '#f3fffc',
          100: '#00644b',
          200: '#00c896',
          300: '#2dffca',
          400: '#91ffe3',
          500: '#f3fffc',
          600: '#f7fffd',
          700: '#f9fffd',
          800: '#fbfffe',
          900: '#fdfffe'
        },
        'brandeis_blue': {
          DEFAULT: '#256eff',
          100: '#00133a',
          200: '#002774',
          300: '#003aae',
          400: '#004ee9',
          500: '#256eff',
          600: '#508aff',
          700: '#7ba7ff',
          800: '#a7c5ff',
          900: '#d3e2ff'
        },
        'cadet_gray': {
          DEFAULT: '#829399',
          100: '#191d1f',
          200: '#323b3e',
          300: '#4c585d',
          400: '#65757b',
          500: '#829399',
          600: '#9aa7ac',
          700: '#b3bdc1',
          800: '#cdd3d6',
          900: '#e6e9ea'
        }
      }
    },
  },
  plugins: [],
}

