import React from "react";
import Navigator from "./Navigator";

const Header: React.FC<{changePage: (title: string) => void}> = ({changePage}) => {
  return (
    <header>
      <Navigator changePage={changePage}/>
      <h1>Luke Skywalker</h1>
    </header>
  );
};

export default Header;
