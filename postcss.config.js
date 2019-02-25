const config = () => ({
  plugins: {
    'autoprefixer': {
      add: true,
      remove: false,
    },
    'postcss-nested': true,
    'cssnano': {
      preset: 'default',
    },
  },
})

module.exports = config
