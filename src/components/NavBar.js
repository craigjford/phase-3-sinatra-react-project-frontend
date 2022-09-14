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
          exact="true"
          style={navStyles}
        >
          Home
        </NavLink>     
        <NavLink
          to="/vineyards"
          exact="true"
          style={navStyles}
        >
          Vineyards
        </NavLink>   
        <NavLink
          to="/vineyardform"
          exact="true"
          style={navStyles}
        >
          VineyardForm
        </NavLink>
        <NavLink
          to="/wines"
          exact="true"
          style={navStyles}
        >
          Wines
        </NavLink>
      </div>
    )
  }
  
export default NavBar;
