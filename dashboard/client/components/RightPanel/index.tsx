import React from 'react'

import Header from '../Header'

const RightPanel = ({ children }) => (
  <main className="main">
    <Header />
    <div>{children}</div>
  </main>
)

export default RightPanel
