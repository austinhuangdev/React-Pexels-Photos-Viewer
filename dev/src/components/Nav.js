import { Link } from "react-router-dom";
import React from "react";

const Nav = () => {
  return (
    <div className="nav">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-me">About Me</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
