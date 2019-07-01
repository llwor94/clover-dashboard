import * as React from 'react'

const OpenIcon = {
  component: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="
        M19 19
        H5
        V5
        h7
        V3
        H5
        c-1.11 0-2 .9-2 2
        v14
        c0 1.1.89 2 2 2
        h14
        c1.1 0 2-.9 2-2
        v-7
        h-2
        v7
        z
        M14 3
        v2
        h3.59
        l-9.83 9.83 1.41 1.41
        L19 6.41
        V10
        h2
        V3
        h-7
        z"
      />
    </svg>
  ),
  name: 'open',
  modal: 'modal__full'
}

export default OpenIcon
