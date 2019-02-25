import * as React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'

const Link = ({
  children, to, external = false, ...rest
}) => {
  const file = /\.[0-9a-z]+$/i.test(to)
  const internal = !external && /^\/(?!\/)/.test(to)

  if (file) {
    return (
      <a href={to} download {...rest}>
        {children}
      </a>
    )
  }

  if (internal) {
    return (
      <GatsbyLink to={to} {...rest}>
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a href={to} {...rest}>
      {children}
    </a>
  )
}

Link.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  external: PropTypes.bool,
}

export default Link
