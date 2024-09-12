/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "{html,js}", './index.html'
  ], 
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
      'body': ['"Abril Fatface", "serif"'],
    },



    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '992px',
      'xl': '1110px',
    },

    fontSize: {
      sm2: '14px',
      sm: '16px',
      base: '18px',
      xl: '21px',
      '2xl': '30px',
      '2xll': '40px',
      '3xl': '130px',
    },


    extend: {

      colors: {
        //Primary colors
        blue: "#4ca9b4",
        main_dark: "#0B0140",
        main_light: "#F5F3FD",

        //Secondary Color
        secondary: "#4AF8E3",
        secondary_shade: "#FFF3EE",
        secondary_light: "#F3EADA",

        //Dark Color
        dark1: "#06021C",
        dark2: "#33313E",


      },

    },
  },
  plugins: [],
}
