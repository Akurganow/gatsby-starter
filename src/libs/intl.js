import langs from 'src/i18n/langs'

export function hrefToLocale(href, lang) {
  const rgx = new RegExp(`^/(?:(?:${langs.join('|')})/)?(.*)`, 'i')
  const localeHref = href.replace(rgx, `/${lang === 'en' ? '' : `${lang}/`}$1`)

  return localeHref
}
