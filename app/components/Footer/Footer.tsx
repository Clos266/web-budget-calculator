import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <h1>Footer Footer Footer Footer Footer</h1>
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
export default Footer;
