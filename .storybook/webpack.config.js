const aliases = require('../scripts/aliases')

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules[0].exclude = /node_modules\/(?!(gatsby)\/)/
  defaultConfig.resolve.alias = Object.assign({}, defaultConfig.resolve.alias, aliases)
  defaultConfig.resolve.extensions = defaultConfig.resolve.extensions.concat(['.css'])

  // postcss-loader
  delete defaultConfig.module.rules[2].use[2].options.plugins
  delete defaultConfig.module.rules[2].use[2].options.postcss
  defaultConfig.module.rules[2].use[2].options.config = {
    path: process.cwd()
  }

  // css-loader
  defaultConfig.module.rules[2].use[1].options.modules = true
  defaultConfig.module.rules[2].use[1].options.localIdentName = '[folder]__[local]_[hash:base64:8]'

  return defaultConfig
}
