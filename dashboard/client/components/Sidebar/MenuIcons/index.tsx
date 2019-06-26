import Link from 'next/link'
import React from 'react'

import AnalyticsIcon from './AnalyticsIcon'
import AssignedIcon from './AssignedIcon'
import MainIcon from './MainIcon'
import ProfileIcon from './ProfileIcon'

const icons = [
  { name: '/', Icon: MainIcon },
  { name: 'assigned', Icon: AssignedIcon },
  { name: 'tickets', Icon: AnalyticsIcon },
  { name: 'profile', Icon: ProfileIcon }
]

const MenuIcons = ({ selected, toggleSelected }) => (
  <>
    {icons.map(({ Icon, name }) => (
      <Link key={name} href={name}>
        {
          <div className={selected === name ? 'selected' : ''} onClick={toggleSelected(name)}>
            <Icon />
          </div>
        }
      </Link>
    ))}
  </>
)

export default MenuIcons
