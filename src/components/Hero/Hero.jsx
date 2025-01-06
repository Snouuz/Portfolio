import React from "react";
import "./Hero.css";
import ia from "/icons/ia.jpeg";
import cv from "/icons/CV_Reda.pdf";
import {FR, EN} from "../../utils/translate"

const Hero = (isActive) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "CV_Reda.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h2> About Me</h2>
        <p>
          {EN[0]}
        </p>
      </div>
      <div className="hero-img">
        <div>
          <img
            src={ia}
            className="profile-pic"
            alt=""
            onClick={handleDownload}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div></div>
      </div>
    </section>
  );
};
export default Hero;
