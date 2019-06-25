import React from 'react'

const AnalyticsIcon = ({ selected }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path
      fill={selected ? '#43B02A' : '#565656'}
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"
    />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
)

AnalyticsIcon.defaultProps = { selected: false }

export default AnalyticsIcon
