import React from "react";
import "./MobileNav.css";
import logo from "/icons/logoWhite.svg";
import { translate } from "../../translate";

const MobileNav = ({ isOpen, toggleMenu, language, switchLanguage }) => {

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
              <li
                className="language-btn"
                onClick={() => switchLanguage(language === "en" ? "fr" : "en")}
              >
                {language === "en" ? "EN" : "FR"}
              </li>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default MobileNav;
