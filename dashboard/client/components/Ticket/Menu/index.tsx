import React from 'react'

import CloseIcon from './CloseIcon'
import DeleteIcon from './DeleteIcon'
import OpenIcon from './OpenIcon'
import StarIcon from './StarIcon'

const Menu = () => (
  <div className="ticket__menu">
    <StarIcon />
    <OpenIcon />
    <DeleteIcon />
    <CloseIcon />
  </div>
)

export default Menu
