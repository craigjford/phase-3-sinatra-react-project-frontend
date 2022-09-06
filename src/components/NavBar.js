import React from 'react'
import { NavLink } from "react-router-dom";

const navStyles = {
    display: "inline-block",
    width: "80px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

  function NavBar() {
    return (
      <div className="navbar">
        <NavLink
          to="/"
          exact
          style={navStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/vineyardform"
          exact
          style={navStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          VineyardForm
        </NavLink>
        <NavLink
          to="/vineyardlist"
          exact
          style={navStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          VineyardList
        </NavLink>
      </div>
    )
  }
  
export default NavBar;
