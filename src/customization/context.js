import { createContext } from 'react'
import getUserLang from 'libs/user-lang'

const lang = getUserLang()
const Context = createContext({
  lang,
  changeLang: () => { console.warn('No handler') }, // eslint-disable-line no-console
})

export default Context
