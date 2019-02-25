/* @flow */
import * as React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import st from './styles.module.css'

const Button = ({
  type, htmlType = 'button', className, children, label, ...rest
}) => {
  let typesClassName

  if (type) {
    typesClassName = typeof type === 'string'
      ? st[type]
      : type.map(tp => st[tp]).join(' ')
  }

  /* eslint-disable react/button-has-type */
  return (
    <button {...rest} aria-label={label} type={htmlType} className={cn(className, st.button, typesClassName)}>
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  htmlType: PropTypes.oneOf(['button', 'submit', 'reset']),
  label: PropTypes.string.isRequired,
}

export default Button
