const { fontFamily } = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)', ...fontFamily.sans],
        custom: "'Lora', 'serif', 'Zilla Slab Highlight', 'Open Sans', 'Spectral', 'Slabo 27px', 'Lato', 'Roboto Condensed', 'Oswald', 'Source Sans Pro', 'Raleway', 'Zilla Slab', 'Montserrat', 'PT Sans', 'Roboto Slab', 'Merriweather', 'Saira Condensed', 'Saira', 'Saira Stencil One', 'Julee', 'Archivo', 'Ubuntu', 'Lora', 'Manuale', 'Asap Condensed', 'Faustina', 'Playfair Display', 'Noto Sans', 'PT Serif', 'Arimo', 'Poppins', 'Sedgwick Ave Display', 'Titillium Web', 'Sedgwick Ave', 'Indie Flower', 'Mada', 'PT Sans Narrow', 'Noto Serif', 'Bitter', 'Dosis', 'Josefin Sans', 'Inconsolata', 'Bowlby One SC', 'Oxygen Mono', 'Arvo', 'Hind', 'Cabin Sketch', 'Fjalla One', 'Anton', 'Allan', 'Acme', 'Playball', 'EB Garamond', 'Passion One', 'Francois One', 'Archivo Black', 'Pathway Gothic One', 'Vollkorn', 'Vollkorn SC', 'Alegreya', 'Sevillana'"
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
