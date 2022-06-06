module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Calibre', 'Inter', 'San Francisco', 'SF Pro Text', 'sans-serif'],
      mono: ['SF mono', 'Fira Code', 'Fira Mono', 'Roboto mono'],
    },
    colors: {
      green: '#64ffda',
      navy: '#0a192f',
    },
  },
  plugins: [],
}
