import * as React from 'react'
import { withIntl } from 'components/with-intl'

import st from './styles.module.css'


const Footer = withIntl({ ns: 'footer' })(({ translate: t }) => (
  <footer className={st.footer}>
    {t('made_by')} <a href="//akurganow.ru">{t('alex_kurganow')}</a>
  </footer>
))

Footer.propTypes = {}

export default Footer
