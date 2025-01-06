import React, { useState } from "react";
import "./Navbar.css";
import logo from "/icons/logoWhite.svg";
import MobileNav from "./MobileNav/MobileNav";
import { useLanguage } from "../LanguageContext"; 
import { translate } from "../translate";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { language, switchLanguage } = useLanguage(); // Access language context

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
            <img src={logo} alt="Logo" className="logo" />
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
                {translate("home", language)}
              </a>
            </li>
            <li>
              <a className="menu-item" href="#skills">
              {translate("skill", language)}
              </a>
            </li>
            <li>
              <a className="menu-item" href="#projects">
              {translate("project", language)}
              </a>
            </li>

            <button className="contact-btn" href="#contact">
            {translate("hire_me", language)}
            </button>

            <li>
              {language === "en" ? (
                <button
                  onClick={() => switchLanguage("fr")}
                  className="language-btn"
                >
                  EN
                </button>
              ) : (
                <button
                  onClick={() => switchLanguage("en")}
                  className="language-btn"
                >
                  FR
                </button>
              )}
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
