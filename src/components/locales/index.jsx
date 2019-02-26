import * as React from 'react'

import Context from 'customization/context'
import locales from 'src/i18n'

import st from './styles.module.css'

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
            {locales.map(loc => (
              <option key={loc.lang} value={loc.lang}>
                {loc.localName}
              </option>
            ))}
          </select>
        )}
      </Context.Consumer>
    )
  }
}

export default Locales
