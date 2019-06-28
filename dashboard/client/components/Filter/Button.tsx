import * as React from 'react'

const Button = ({ name, selected = false }) => (
  <div className={'filter__button' + (selected ? '-selected' : '')}>{name}</div>
)

export default Button
