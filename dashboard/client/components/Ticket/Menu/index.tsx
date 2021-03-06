import React from 'react'

import CloseIcon from './CloseIcon'
import DeleteIcon from './DeleteIcon'
import OpenIcon from './OpenIcon'
import StarIcon from './StarIcon'
import Icon from './Icon'

const icons = [StarIcon, OpenIcon, DeleteIcon, CloseIcon]

const Menu: React.FC = () => (
  <div className="ticket__menu">
    {icons.map(({ component, type }, i) => (
      <Icon key={i} type={type}>
        {component}
      </Icon>
    ))}
  </div>
)

export default Menu
