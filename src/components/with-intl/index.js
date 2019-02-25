/* eslint-disable import/no-dynamic-require, global-require, react/no-multi-comp */
import * as React from 'react'
import PropTypes from 'prop-types'

import {
  IntlProvider, FormattedMessage, addLocaleData, intlShape as shape,
} from 'react-intl'

import locales from 'src/i18n'
import getUserLang from 'libs/user-lang'

locales.forEach(({
  locale, parentLocale, hasIntlData, intlLocaleData,
}) => {
  const data = hasIntlData
    ? require(`react-intl/locale-data/${locale}`)
    : {
      locale,
      parentLocale,
      fields: { ...intlLocaleData },
    }
  addLocaleData(data)
})

const defaultLang = 'en'

const localeData = locales.reduce(
  (memo, item) =>
    Object.assign(memo, {
      [item.locale]: require(`src/i18n/${item.fileName}`),
    }),
  {}
)

const translateMessage = (intl, ns) => (message, values) => {
  const id = `${ns}-${message}`
  let text = intl.messages[id] || id

  if (process.env.NODE_ENV !== 'production' && !intl.messages[id]) {
    console.warn(`Missing translation for ${id}`) // eslint-disable-line no-console
  }

  if (values) {
    const keys = Object.keys(values)

    if (keys.length) {
      keys.forEach((key) => {
        const reg = new RegExp(`{${key}}`, 'g')
        text = text.replace(reg, values[key])
      })
    }
  }

  return text
}

class WithIntl extends React.Component {
  static propTypes = {
    ns: PropTypes.string,
    children: PropTypes.node,
  }

  static contextTypes = {
    intl: shape,
  }

  render() {
    const { intl } = this.context
    const { ns } = this.props
    const translate = translateMessage(intl, ns)

    return React.cloneElement(this.props.children, {
      ...this.props,
      intl,
      translate,
    })
  }
}

export const withIntl = ({ ns } = { ns: 'global' }) => Component =>
  class WithIntlProvider extends React.Component {
    render() {
      const language = getUserLang() || defaultLang
      const languageWithoutRegionCode = locales.some(loc => loc.lang === language)
        ? language.toLowerCase().split(/[_-]+/)[0]
        : defaultLang
      const localeMessages = localeData[languageWithoutRegionCode] || localeData[language]

      return (
        <IntlProvider
          messages={localeMessages}
          locale={languageWithoutRegionCode}
          key={languageWithoutRegionCode}
        >
          <WithIntl ns={ns} {...this.props}>
            <Component />
          </WithIntl>
        </IntlProvider>
      )
    }
  }

export { FormattedMessage }
