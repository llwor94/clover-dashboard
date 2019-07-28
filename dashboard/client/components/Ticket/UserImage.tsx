import React from 'react'

const UserImage = ({ assignedTo, handleClick }) => (
  <div id="user">
    {assignedTo.id ? (
      <img onClick={handleClick} src={`/static/${assignedTo.image_url}`} />
    ) : (
      <div />
    )}
  </div>
)

export default UserImage
