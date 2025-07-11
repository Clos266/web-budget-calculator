import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h1>header header header header</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/calculate">Calculate</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Header;
