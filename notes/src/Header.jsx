import React from "react";
import logo from "./images/logo.ico";
import "./index.css";
const Header = () => {
  return (
    <>
      <div className="header">
        <a href="#default" className="logo">
          <img src={logo} alt="logo" width="40px" height="40px" />
        </a>
        <h3>Notes App</h3>
      </div>
    </>
  );
};

export default Header;
