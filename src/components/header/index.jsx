import * as React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Link from 'components/link'
import Locales from 'components/locales'
import { withIntl } from 'components/with-intl'

import st from './styles.module.css'

@withIntl({ ns: 'header' })
class Header extends React.Component {
  static propTypes = {
    translate: PropTypes.func,
  }

  render() {
    const { translate: t } = this.props

    return (
      <StaticQuery
        query={graphql`
          query HeaderQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={({
          site: {
            siteMetadata: { title },
          },
        }) => (
          <header className={st.header}>
            <nav className={st.container}>
              <div>{title}</div>
              <div className={st.links}>
                <Locales />
                <Link to="/">{t('home')}</Link>
              </div>
            </nav>
          </header>
        )}
      />
    )
  }
}

export default Header
