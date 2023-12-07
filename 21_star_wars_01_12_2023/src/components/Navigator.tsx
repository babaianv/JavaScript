import React from 'react'
import NavItem from './NavItem/NavItem'
import { navItems } from '../utils'




const Navigator : React.FC<{changePage: (title: string) => void}> = ({changePage}) => {
  return (
    <nav>
    <ul>
      {navItems.map((navItems, index) => (
        <NavItem key={index} itemTitle={navItems} changePage={changePage} />
      ))}

    
    </ul>
  </nav>
  )
}

export default Navigator
