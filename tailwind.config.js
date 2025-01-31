/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      fontFamily: {
        // Classic serif font for headings
        'heading': ['Playfair Display', 'Georgia', 'serif'],
        // Elegant sans-serif for body text
        'body': ['Lato', 'Roboto', 'sans-serif'],
        // Sophisticated script for special accents
        'accent': ['Cormorant Garamond', 'Baskerville', 'serif']
      },
      fontSize: {
        // Slightly larger base sizes for better readability
        'base': '1.125rem',
        'lg': '1.25rem',
        'xl': '1.5rem',
      },
      letterSpacing: {
        // Refined letter spacing for classic feel
        'wider': '0.05em',
        'widest': '0.1em'
      }
    },
  },
  plugins: [],
}
