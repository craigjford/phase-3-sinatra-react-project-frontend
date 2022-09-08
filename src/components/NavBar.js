import React from 'react'
import { NavLink } from "react-router-dom";

  function NavBar() {

    const navStyles = ({ isActive }) => {
      return {  
        display: "inline-block",
        width: "100px",
        padding: "12px",
        margin: "0 6px 6px",
        background: isActive ? "darkblue" : "blue",
        textDecoration: "none",
        color: "white",
      };
    };  

    return (
      <div className="navbar">
        <NavLink
          to="/"
          exact
          style={navStyles}
        >
          Home
        </NavLink>     
        <NavLink
          to="/vineyards"
          exact
          style={navStyles}
        >
          Vineyards
        </NavLink>   
        <NavLink
          to="/vineyardform"
          exact
          style={navStyles}
        >
          VineyardForm
        </NavLink>
      </div>
    )
  }
  
export default NavBar;
