import React from 'react'
import { Link } from 'react-router-dom'
import './navItemStyle.css'

const NavItem: React.FC<{link:string, textContent: string}> = ({link, textContent}) => {
  
    return (
    <div>
        <Link className='navItem' to={link}>{textContent}</Link>
    </div>
  )
}

export default NavItem