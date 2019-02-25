import { createContext } from 'react'

const Context = createContext({
  isAmp: false,
  lang: 'en',
  theme: 'default',
})

export default Context
