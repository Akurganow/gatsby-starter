import * as React from 'react'
import PropTypes from 'prop-types'
import { withIntl } from 'components/with-intl'

const TranslateMessage = withIntl({ ns: 'global' })(({
  message, values, translate: t, component: Component = 'span', ...rest
}) => (
  <Component {...rest}>{t(message, values)}</Component>
))

TranslateMessage.propTypes = {
  translate: PropTypes.func,
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  message: PropTypes.string,
  values: PropTypes.shape({}),
}

export default TranslateMessage
