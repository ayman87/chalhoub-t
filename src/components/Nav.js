import React, { useState } from "react";
import logo from "../images/logo.png";
import logob from "../images/logob.png";
import "./Navagation.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiMailSendFill } from "react-icons/ri";
import { IoIosGlobe } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import useWindowSize from "../Hooks/WindowSize";
import useWindowScroll from "../Hooks/WindowScroll";

function NavMob() {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => setShowMenu(!showMenu);
  const size = useWindowSize();
  const scroll = useWindowScroll();

  let navMenu;
  let navMenuMask;
  let navbar;

  if (showMenu) {
    navMenu = (
      <div className="active">
        <ul className="">
          <li className="active-links">Search</li>
          <li className="active-links">Find a store</li>
          <li className="active-links">News Letter</li>
          <li className="active-links">our group</li>
          <li className="active-links">our activities</li>
          <li className="active-links">Sustinability</li>
          <li className="active-links">Media library</li>
          <li className="active-links">careers</li>
          <li className="active-links">contact us</li>
        </ul>
      </div>
    );
    navMenuMask = <div className="active-mask" onClick={handleMenu} />;
  }
  const showNav = () => {
    if (size.width > 450) {
      navbar = (
        <nav
          className={scroll ? "desktop-scroll" : "desktop"}
          style={{
            transition: "1s ease",
            backgroundColor: scroll ? "white" : "transparent",
          }}
        >
          <div className="navbar-container container-top">
            <ul
              className={
                scroll
                  ? "nav-menu nav-top-left container-scroll"
                  : "nav-menu nav-top-left"
              }
            >
              <li className="nav-item">
                <HiOutlineLocationMarker />
                FIND A STORE
              </li>
              <li className="nav-item">
                <RiMailSendFill />
                NEWS LETTER
              </li>
            </ul>
            <ul
              className={
                scroll
                  ? "nav-menu nav-top-right container-scroll"
                  : "nav-menu nav-top-right"
              }
            >
              <li className="nav-item">
                <IoIosGlobe />
                LANG
              </li>
              <li className="nav-item">
                <FiSearch />
                SEARCH
              </li>
            </ul>
          </div>
          <div className="navbar-container container">
            <ul
              className={
                scroll
                  ? "nav-menu nav-left container-scroll"
                  : "nav-menu nav-left"
              }
            >
              <li className="nav-item">OUR GROUP</li>
              <li className="nav-item">OUR ACTIVITES</li>
              <li className="nav-item">SUSTINABILITY</li>
            </ul>
            <div className="nav-logo">
              <img src={scroll ? logob : logo} alt="Logo" />
            </div>
            <ul
              className={
                scroll
                  ? "nav-menu nav-right container-scroll"
                  : "nav-menu nav-right"
              }
            >
              <li className="nav-item">MEDIA LIBRARY</li>
              <li className="nav-item">CAREERS</li>
              <li className="nav-item">CONTACT US</li>
            </ul>
          </div>
        </nav>
      );
    } else {
      navbar = (
        <nav className="mobile">
          <div className="navbar container">
            <ul className="nav-menu">
              <li className="nav-item">
                <IoIosGlobe />
                LANG
              </li>
              <li className="nav-item">
                <div className="nav-logo">
                  <img src={logo} alt="logo" />
                </div>
              </li>
              <li className="nav-item">
                <div className="menu-icon" onClick={handleMenu}>
                  {showMenu ? <FaTimes /> : <FaBars />}
                </div>
              </li>
            </ul>
            {navMenuMask}
            {navMenu}
          </div>
        </nav>
      );
    }
  };

  showNav();
  return <>{navbar}</>;
}

export default NavMob;
