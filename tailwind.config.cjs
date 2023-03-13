/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        oran: "#FD7537",
        primary: {
          light: '#0C0F41',
          DEFAULT: '#040F28',
          dark: '#0e7490',
        }
      },
      fontFamily: {
        "cursive": 'Righteous',
        "fatface": 'Abril Fatface',
        "montserrat": 'Montserrat'
      },
      backgroundImage: {
        'homebg': "url('../assets/img/logo.png')"
      }
    },
  },
  plugins: [],
}
