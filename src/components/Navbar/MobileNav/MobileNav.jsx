import React from "react";
import "./MobileNav.css";
import logo from "/icons/logoWhite.svg";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""} `}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
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
          </ul>
        </div>
      </div>
    </>
  );
};
export default MobileNav;
