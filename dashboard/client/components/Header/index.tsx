import React from 'react'

import './styles.scss'

const Header = ({ name }: { name?: string }) => (
  <header>
    <div className="tickets__heading">{name}</div>
  </header>
)

export default Header
