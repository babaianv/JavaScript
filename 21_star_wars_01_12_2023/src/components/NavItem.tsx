import React from 'react'



const NavItem: React.FC<{link: string,children: string }> = ({ link, children }) => {
    return <li 
    className="commonButton">
        <a href={link}>{children}
        </a>
        </li>;
  };

export default NavItem