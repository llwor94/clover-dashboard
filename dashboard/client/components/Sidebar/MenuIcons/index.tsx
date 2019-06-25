import React from 'react'

import AnalyticsIcon from './AnalyticsIcon'
import AssignedIcon from './AssignedIcon'
import MainIcon from './MainIcon'
import ProfileIcon from './ProfileIcon'

const icons = ['analytics', 'assigned', 'main', 'profile']

const selector = item => {
  switch (item) {
    case icons[0]:
      return <AnalyticsIcon />
    case icons[1]:
      return <AssignedIcon />
    case icons[2]:
      return <MainIcon />
    case icons[3]:
      return <ProfileIcon />
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
        {selector(icon)}
      </div>
    ))}
  </>
)

export default MenuIcons
