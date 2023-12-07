// import React from 'react'
// import {Link} from 'react-router-dom'


// const NavItem: React.FC<{link: string,children: string }> = ({ link, children }) => {
//     return <li 
//     className="commonButton">
//         <a href={link}>{children}
//         </a>
//         </li>;
//   };

// export default NavItem

import React,{useContext} from 'react';
import { FullPageContext } from '../../App';

interface IProps{
    itemTitle: string;
    changePage: (title: string) => void;
}


const NavItem: React.FC<IProps> = ({itemTitle, changePage}) => {

  // const myContextFunction = useContext(ChangePageContext);
  const {change} = useContext(FullPageContext);

  return (
    <li className='commonButton' onClick={() => change(itemTitle)} >{itemTitle}</li>
  )
}

export default NavItem