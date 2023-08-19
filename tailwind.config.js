/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: 'class',
  theme: {
    screens: {
      'lg': {'max': '992px'},
      'md': {'max': '768px'},
      'sm': {'max': '480px'}
    },
    container: {
      padding: '20px',
      center: true
    },
    listStyleType: {
      circle: 'circle',
    },
    extend: {
      fontFamily: {
        sans: [
          '-apple-system', 
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Oxygen-Sans"',
          'Ubuntu',
          'Cantarell',
          '"Helvetica Neue"',
          'sans-serif'
        ]
      },
      colors: {
        lightblue: '#28a8e9',
        lightblack: '#12263f',
        lightgray: '#617692',
        buttongray: '#f5f7fa',
        buttonblue: '#179de1',
        buttonborder: '#d2ddec',
        buttonborderblue: '#179de1',
        herotheme: './src/img/hero_main_theme.png'
      },
      boxShadow: {
        customblue: 'inset 0 1px hsla(0,0%,100%,.2), 0 3px 3px rgba(0,0,0,.05)'
      },
      lineHeight: {
        'extra-loose': '2.5'
      },
    },
  },
  plugins: [],
}

