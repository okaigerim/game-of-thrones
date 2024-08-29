import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/dragons.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/main">Characters</Link>
        </li>
      </ul>
    </div>
  );
};
