const path = require('path')

module.exports = dirname => ({
  src: path.resolve(dirname, 'src'),
  assets: path.resolve(dirname, 'src/assets'),
  libs: path.resolve(dirname, 'src/libs'),
  pages: path.resolve(dirname, 'src/pages'),
  components: path.resolve(dirname, 'src/components'),
  layouts: path.resolve(dirname, 'src/layouts'),
  types: path.resolve(dirname, 'src/types'),
  customization: path.resolve(dirname, 'src/customization'),
})
