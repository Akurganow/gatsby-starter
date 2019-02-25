import langs from 'src/i18n/langs'

export default function getUserLang() {
  const chosenLang = window.localStorage.getItem('akw:user-lang')
  const navigatorLang = window.navigator.language.split('-')[0]
  const navigatorAcceptedLang = window.navigator.languages.find(lang =>
    langs.includes(lang.split('-')[0]))

  return chosenLang || (langs.includes(navigatorLang) ? navigatorLang : null) || navigatorAcceptedLang || 'en'
}
