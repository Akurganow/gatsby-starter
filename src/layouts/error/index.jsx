/*  @flow */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from 'components/header'
import Footer from 'components/footer'

import './styles.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query ErrorLayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="container">
          {children}
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
