import * as React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import st from './styles.module.css'

class Input extends React.Component {
  state = {
    value: this.props.value,
  }

  handleChange = (event) => {
    const { target: { value } } = event

    this.setState({ value })
  }

  render() {
    const {
      type, className, htmlType, label, ...rest
    } = this.props
    const { value } = this.state
    let typesClassName

    if (type) {
      typesClassName = typeof type === 'string' ? st[type] : type.map(tp => st[tp]).join(' ')
    }

    return (
      <input
        {...rest}
        aria-label={label}
        type={htmlType}
        defaultValue={value}
        className={cn(className, st.input, typesClassName)}
        onChange={this.handleChange}
      />
    )
  }
}

Input.propTypes = {
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  className: PropTypes.string,
  htmlType: PropTypes.oneOf([
    'text',
    'tel',
    'email',
    'password',
    'search',
    'url',
    'color',
    'date',
    'number',
    'datetime-local',
    'month',
    'time',
    'week',
  ]),
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
}

export default Input
