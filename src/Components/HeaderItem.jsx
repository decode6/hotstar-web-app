import React from 'react'

const HeaderItem = ({name,Icon}) => {
  return (
    <div>
        <Icon/>
        <h2>{name}</h2>
    </div>
  )
}

export default HeaderItem