module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    // LH colors
    colors: {
      'lh-jungle-green': '#012d26',
      'lh-caribean-green': '#3ecfaf',
      'lh-green-gray': '#5B6866',
      'lh-bg-gray': '#e5f0ee',
      white: '#fff',
      black: '#000',
    },
    extend: {
      // Card height
      height: {
        card: '12rem',
      },
      // Custom padding for total estates on last card image in
      // card component when there is more than 3 estates
      padding: {
        custom: '12%',
      },
      // Values for navigation components
      zIndex: {
        100: '100',
        150: '150',
        200: '200',
      },
      // Bigger screens
      screens: {
        '3xl': '1850px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
