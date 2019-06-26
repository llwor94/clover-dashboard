import Link from 'next/link'
import React from 'react'

import AnalyticsIcon from './AnalyticsIcon'
import AssignedIcon from './AssignedIcon'
import ProfileIcon from './ProfileIcon'
import TicketsIcon from './TicketsIcon'

const icons = [
  { name: '/', Icon: AnalyticsIcon },
  { name: 'tickets?space=12', Icon: TicketsIcon },
  { name: 'assigned', Icon: AssignedIcon },
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
