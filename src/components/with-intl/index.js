/* eslint-disable import/no-dynamic-require, global-require, react/no-multi-comp */
import * as React from 'react'
import PropTypes from 'prop-types'

import {
  IntlProvider, FormattedMessage, addLocaleData, intlShape as shape,
} from 'react-intl'

import locales from 'src/i18n'
import Context from 'customization/context'

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
      return (
        <Context.Consumer>
          {({ lang }) => {
            const languageWithoutRegionCode = locales.some(loc => loc.lang === lang)
              ? lang.toLowerCase().split(/[_-]+/)[0]
              : 'en'
            const localeMessages = localeData[languageWithoutRegionCode] || localeData[lang]

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
          }}
        </Context.Consumer>
      )
    }
  }

export { FormattedMessage }
