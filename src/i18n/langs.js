let locales = []

try {
  locales = require('./index') // eslint-disable-line global-require
} catch (ignore) {
  throw new Error("Can't find locales try to run `npm run build:i18n` first")
}

module.exports = locales
  .filter(loc => loc.lang)
  .map(loc => loc.lang)
