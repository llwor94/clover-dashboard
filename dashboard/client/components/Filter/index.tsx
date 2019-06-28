import * as React from 'react'

import Button from './Button'

import './styles.scss'

const Filter = () => (
  <div className="filter">
    <Button name="No response" selected={true} />
    <Button name="Last response by us" />
    <Button name="All" />
  </div>
)

export default Filter
