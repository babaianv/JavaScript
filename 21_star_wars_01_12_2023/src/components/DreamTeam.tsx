import React from 'react'
import Friend from './Friend'
import { friends } from '../utils'



const DreamTeam = () => {
  return (
    <section className="right">
        <h2>Dream Team</h2>
        {friends.map((item, index) => (
            <Friend key={index} photo={item} i={index}/>
        ))}

      </section>
  )
}

export default DreamTeam