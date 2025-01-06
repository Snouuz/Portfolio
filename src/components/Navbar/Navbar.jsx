import React, { useState } from "react";
import "./Navbar.css";
import logo from "/icons/logoWhite.svg";
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <a
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <img src={logo} alt="" className="logo" />
          </a>
          <ul
            onClick={(event) => {
              event.preventDefault();
              const target = event.target;
              const id = target.getAttribute("href")?.replace("#", "");
              const element = document.getElementById(id);
              element?.scrollIntoView({ block: "center", behavior: "smooth" });
            }}
          >
            <li>
              <a
                className="menu-item"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="menu-item" href="#projects">
                Projets
              </a>
            </li>

            <button className="contact-btn" href="#contact">
              Hire Me
            </button>

            <li> 
              <a className="language_btn">
                EN 
              </a> 
            </li>
          </ul>

          <button
            className={`navbar-burger ${openMenu ? "cross" : ""} `}
            onClick={toggleMenu}
          >
            <span className="burger-line"></span>
          </button>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
