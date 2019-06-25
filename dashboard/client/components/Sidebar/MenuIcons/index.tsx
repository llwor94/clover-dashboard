import React from 'react'

import AnalyticsIcon from './AnalyticsIcon'
import AssignedIcon from './AssignedIcon'
import MainIcon from './MainIcon'
import ProfileIcon from './ProfileIcon'

const icons = [
  { name: 'analytics', Component: AnalyticsIcon },
  { name: 'assigned', Component: AssignedIcon },
  { name: 'main', Component: MainIcon },
  { name: 'profile', Component: ProfileIcon }
]

const MenuIcons = ({ selected, toggleSelected }) => (
  <>
    {icons.map(({ Component, name }) => (
      <div
        key={name}
        onClick={toggleSelected(name)}
        className={selected === name ? 'selected' : ''}
      >
        {<Component />}
      </div>
    ))}
  </>
)

export default MenuIcons
