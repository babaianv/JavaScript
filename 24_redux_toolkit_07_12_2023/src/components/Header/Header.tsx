import React from 'react'
import NavItem from '../navItem/NavItem'
import './headerStyle.css'

const Header = () => {
  return (
    <div className='header'>
        <NavItem link='/' textContent='Main'></NavItem>
        <NavItem link='/counter' textContent='Counter'></NavItem>
        <NavItem link='/Sandwich' textContent='Sandwich'></NavItem>
        <NavItem link='/library' textContent='Library'></NavItem>
    </div>
  )
}

export default Header