import React from 'react'
import './StarWarsInfo.css'
import Posters from './Posters';
import {posts} from '../../utils'

const StarWarsInfo = () => {
    return (
        <div className='posters'>
          {posts.map((poster, index) => (
             <Posters key={index} poster={poster} index={index} />
           ))}
       
        </div>
       );
}

export default StarWarsInfo