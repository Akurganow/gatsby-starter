import locales from 'src/i18n'

const langs = locales.filter(loc => loc.lang).map(loc => loc.lang)

export default function getUserLang() {
  const chosenLang = window.localStorage.getItem('akw:user-lang')
  const navigatorLang = window.navigator.language.split('-')[0]
  const navigatorAcceptedLang = window.navigator.languages.find(lang =>
    langs.includes(lang.split('-')[0]))

  return chosenLang || (langs.includes(navigatorLang) ? navigatorLang : null) || navigatorAcceptedLang || 'en'
}
