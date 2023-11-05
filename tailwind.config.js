export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 2 column grid
        'dash': '16.5rem, 1fr'
      },
      gridTemplateRows: {
        'dash': 'auto 1fr'
      },
      gridTemplateColumns: {
        // Simple 1 column grid
        'dash-sm': '1fr'
      },
    },
  },
  plugins: [],
}