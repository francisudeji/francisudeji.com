module.exports = {
  theme: {
    container: {
      center: true
    },
    backgroundColor: theme => ({
      primary: '#15202b',
      secondary: '#2d3748'
    }),
    screens: {
      sm: '576px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '960px'
      // => @media (min-width: 1024px) { ... }
    }
  },
  variants: {
    // backgroundColor: ['hover']
  },
  plugins: []
}
