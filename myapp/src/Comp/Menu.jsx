import React from "react";
import { Search } from "@material-ui/icons";
import { NavLink } from "react-router-dom";

// import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <>
      <div className="menu">
        <NavLink exact activeClassName="active_class" to="/">
          Home
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/about">
          About Us
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/contact">
          Contact Us
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/services/React/5">
          Services
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/search">
          <Search></Search>
        </NavLink>
      </div>

      {/* <Link to="/">About Us</Link>
            <Link to="/contact">Contact Us</Link> */}

      {/* <a href="/">About Us</a>
            <a href="/contact">Contact Us</a> */}
    </>
  );
};
export default Menu;
