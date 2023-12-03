import React from 'react'

const Friend: React.FC<{photo: string, i:number}> = ({photo, i}) => {
    return (
        <img
          className={i === 6 ? 'bottomLeft' : i === 8 ? 'bottomRight' : ''}
          src={photo}
          alt={`friend${i + 1}`}
        />
    )
}

export default Friend