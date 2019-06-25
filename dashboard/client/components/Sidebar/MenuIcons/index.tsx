import React from 'react'

import AnalyticsIcon from './AnalyticsIcon'
import AssignedIcon from './AssignedIcon'
import MainIcon from './MainIcon'
import ProfileIcon from './ProfileIcon'

const icons = ['analytics', 'assigned', 'main', 'profile']

const selector = (item, selected) => {
  switch (item) {
    case icons[0]:
      return <AnalyticsIcon selected={selected} />
    case icons[1]:
      return <AssignedIcon selected={selected} />
    case icons[2]:
      return <MainIcon selected={selected} />
    case icons[3]:
      return <ProfileIcon selected={selected} />
    default:
      return null
  }
}

const MenuIcons = ({ selected, toggleSelected }) => (
  <>
    {icons.map(icon => (
      <div
        key={icon}
        onClick={toggleSelected(icon)}
        className={selected === icon ? 'selected' : ''}
      >
        {selector(icon, selected === icon)}
      </div>
    ))}
  </>
)

export default MenuIcons
