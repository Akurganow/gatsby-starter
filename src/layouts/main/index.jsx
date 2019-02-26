/* eslint-disable import/no-dynamic-require */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Context from 'customization/context'

import getUserLang from 'libs/user-lang'

import Header from 'components/header'
import Footer from 'components/footer'

import './styles.css'
import 'src/customization/default.css'

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  state = {
    lang: getUserLang(),
  }

  changeLang = (lang) => {
    this.setState({ lang })

    window.localStorage.setItem('akw:user-lang', lang)
  }

  render() {
    const { children } = this.props
    const { lang } = this.state

    return (
      <Context.Provider
        value={{
          lang,
          changeLang: this.changeLang,
        }}
      >
        <div className="container">
          <Header />
          <div className="content">{children}</div>
          <Footer />
        </div>
      </Context.Provider>
    )
  }
}

export default Layout
