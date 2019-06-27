import Link from 'next/link'
import React from 'react'

import { withRouter } from 'next/router'

import AnalyticsIcon from './AnalyticsIcon'
import AssignedIcon from './AssignedIcon'
import ProfileIcon from './ProfileIcon'
import TicketsIcon from './TicketsIcon'

const icons = [
  { name: '/', Icon: AnalyticsIcon, path: '/' },
  { name: '/tickets', Icon: TicketsIcon, path: '/tickets?space=12' },
  { name: '/assigned', Icon: AssignedIcon, path: '/assigned' },
  { name: '/profile', Icon: ProfileIcon, path: '/profile' }
]

const MenuIcons = ({ router }) => {
  return (
    <>
      {icons.map(({ Icon, name, path }) => (
        <Link key={name} href={path}>
          {
            <div className={router.pathname === name ? 'selected' : ''}>
              <Icon />
            </div>
          }
        </Link>
      ))}
    </>
  )
}

export default withRouter(MenuIcons)
