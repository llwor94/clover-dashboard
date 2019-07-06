import React from 'react'

const UserImage = ({ assignedTo, handleClick }) => (
  <div id="user">
    <img onClick={handleClick} src={`/static/${assignedTo.image_url}`} />
  </div>
)

export default UserImage
