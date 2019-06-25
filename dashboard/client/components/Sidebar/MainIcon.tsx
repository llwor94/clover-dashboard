import React from 'react'

const MainIcon = ({ selected }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path
      fill={selected ? '#43B02A' : '#565656'}
      d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"
    />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
)

MainIcon.defaultProps = { selected: false }

export default MainIcon
