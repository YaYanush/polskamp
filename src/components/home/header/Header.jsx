import React from "react";
import "./Header.css";
import HeaderUp from "./headerUp/HeaderUp";
import HeaderDown from "./headerDown/HeaderDown";

const Header = () => {
  return (
    <div className="headerApp">
      <HeaderUp />
    </div>
  );
};

export default Header;
