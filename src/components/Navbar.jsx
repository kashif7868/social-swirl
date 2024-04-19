import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../asset/css/navbar.css";
import Logo from "../asset/images/siwir-logo.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="nav-main-container">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <FaBars className="menu-icon" onClick={toggleMenu} />
      <ul className={`navbar ${showMenu ? "active" : ""}`}>
        <li>
          <NavLink
            exact
            className="text-white hover:text-gray-300"
            to="/"
            activeClassName="active"
          >
            HOME
          </NavLink>
        </li>
        <li>
          <Link className="text-white hover:text-gray-300" to="/service">
            SERVICE
          </Link>
        </li>
        <li>
          <Link className="text-white hover:text-gray-300" to="/partner">
            PARTNER
          </Link>
        </li>
        <li>
          <Link className="text-white hover:text-gray-300" to="/about">
            ABOUT US
          </Link>
        </li>
        <li>
          <Link className="text-white hover:text-gray-300" to="/contact">
            CONTACT US
          </Link>
        </li>
        <li>
          {/* <Link className="text-white hover:text-gray-300" to="/test">
           Test Page
          </Link> */}
        </li>
        <div className="btn-container">
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-5 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce mx-3">
            <NavLink to="/sign_up"> Sign Up</NavLink>
          </button>
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
            <NavLink to="/login"> Login</NavLink>
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
