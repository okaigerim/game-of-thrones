import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="hero">
        <div className="hero-banner">
          <h1>Game of Thrones</h1>
          <p>
            When people ask you what happened here, tell them the North
            remembers.
          </p>
          <Link to="/characters" className="hero-button">
            Characters
          </Link>
        </div>
      </div>
    </header>
  );
};
