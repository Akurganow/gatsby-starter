/* eslint-disable import/no-dynamic-require */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Context from 'src/customization/context'

import Header from 'components/header'
import Footer from 'components/footer'

import './styles.css'
import 'src/customization/default.css'

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    const { children } = this.props

    return (
      <Context.Provider
        value={{}}
      >
        <Header />
        <div className="container">{children}</div>
        <Footer />
      </Context.Provider>
    )
  }
}

export default Layout
