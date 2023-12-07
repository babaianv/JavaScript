import React, { useContext } from "react";
import { navItems } from "../utils";
import AboutMe from "../pages/AboutMe";
import StarWars from "../pages/StarWars";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import { FullPageContext } from "../App";

const Main:React.FC<{currentPage: string}> = ({ currentPage }) => {

//  const page = useContext(PageContext);
 const {page} = useContext(FullPageContext);

  switch (page) {
    case navItems[1]:
      return <AboutMe/>
    case navItems[2]:
      return <StarWars/>
      case navItems[3]:
      return <Contact/>
    default:
      return<Home/>
      
  }
};

export default Main;

