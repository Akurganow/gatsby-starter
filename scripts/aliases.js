const path = require('path')

module.exports = {
  src: path.resolve(process.cwd(), 'src'),
  assets: path.resolve(process.cwd(), 'src/assets'),
  libs: path.resolve(process.cwd(), 'src/libs'),
  pages: path.resolve(process.cwd(), 'src/pages'),
  components: path.resolve(process.cwd(), 'src/components'),
  layouts: path.resolve(process.cwd(), 'src/layouts'),
  store: path.resolve(process.cwd(), 'src/store'),
  utils: path.resolve(process.cwd(), 'utils'),
}
