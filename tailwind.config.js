module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'valentino': '#f080ae',
        'shockingPink': '#cf1453',
        'brillux': '#817c8e',
        'pantone': '#232125',
      },
      fontWeight: {
        hairline: 100,
        'extra-light': 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      }
    },
  },
  plugins: [],
}