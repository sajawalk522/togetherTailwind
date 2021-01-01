module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    backgroundColor: theme => ({
          ...theme('colors'),
           'purplecolor': '#8c30f5',
            }),
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    }
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
