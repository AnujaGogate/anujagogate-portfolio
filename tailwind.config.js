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
        // Keep your original accent color
        accent: "#64ffda",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'sky-cycle': 'sky-cycle 20s infinite alternate',
        'breathing-zoom': 'breathing-zoom 20s infinite alternate',
      },
      keyframes: {
        'sky-cycle': {
          '0%': { backgroundColor: 'rgba(10, 25, 47, 0.3)' },
          '50%': { backgroundColor: 'rgba(147, 51, 234, 0.4)' },
          '100%': { backgroundColor: 'rgba(249, 115, 22, 0.5)' },
        },
        'breathing-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.15)' },
        },
      },
    },
  },
  plugins: [],
}
