import React from "react";
import "./Header.css"
import NavItem from "../NavItem/NavItem";

const Header = () => {
  return (
    <div className="header">
      <NavItem link="/" textContent="Home"></NavItem>
      <NavItem link="/about_me" textContent="About Me"></NavItem>
      <NavItem link="/star_wars" textContent="Star Wars"></NavItem>
      <NavItem link="/contact" textContent="Contact"></NavItem>
    </div>
  );
};

export default Header;
