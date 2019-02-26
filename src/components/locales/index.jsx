import * as React from 'react'

import Context from 'customization/context'
import langs from 'src/i18n/langs'

import st from './styles.module.css'

const localesNames = {
  ru: 'Русский',
  en: 'English',
}

class Locales extends React.Component {
  state = {}

  render() {
    return (
      <Context.Consumer>
        {({ lang, changeLang }) => (
          <select
            className={st.locales}
            onChange={(event) => {
              const {
                target: { value },
              } = event

              changeLang(value)
            }}
            defaultValue={lang}
          >
            {langs.map(lng => (
              <option key={lng} value={lng}>
                {localesNames[lng]}
              </option>
            ))}
          </select>
        )}
      </Context.Consumer>
    )
  }
}

export default Locales
