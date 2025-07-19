import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
        <h1 className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Logotip Pressuposta" className="w-48 h-auto" />
          </Link>
        </h1>

        <nav className="flex flex-wrap items-center gap-6 hidden md:flex ">
          <ul className="flex gap-6">
            <li>
              <Link
                to="/"
                className="text-blue-600 dark:text-white hover:underline hover:text-blue-800 dark:hover:text-blue-400 transition"
              >
                Com funciona
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-blue-600 dark:text-white hover:underline hover:text-blue-800 dark:hover:text-blue-400 transition"
              >
                Què obtens
              </Link>
            </li>
            <li>
              <Link
                to="/calculate"
                className="text-blue-600 dark:text-white hover:underline hover:text-blue-800 dark:hover:text-blue-400 transition"
              >
                Començar amb Pressuposta
              </Link>
            </li>
          </ul>

          <div className="flex gap-3">
            <Link
              to="/login"
              className="px-4 py-2 rounded-full bg-blue-600 w-28 text-center text-white hover:bg-blue-700 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 rounded-full border border-blue-600 w-28 text-center text-blue-600 dark:text-white hover:bg-blue-600 hover:text-white transition"
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
