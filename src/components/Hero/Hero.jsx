import React from "react";
import "./Hero.css";
import ia from "/icons/ia.jpeg";
import cv_en from "/icons/CV_Reda_en.pdf";
import cv_fr from "/icons/CV_Reda_fr.pdf";
import { useLanguage } from "../LanguageContext";
import { translate } from "../translate";

const Hero = () => {
  const { language } = useLanguage();

  const handleDownload = () => {
    const link = document.createElement("a");
    language : 'en' ? link.href = cv_en: link.href = cv_fr;
    language : 'en' ? link.download = "CV_Reda_en.pdf" : link.download = "CV_Reda_fr.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h2>{translate("title_about", language)}</h2>
        <p>{translate("about", language)}</p>
      </div>
      <div className="hero-img">
        <div>
          <img
            src={ia}
            className="profile-pic"
            alt="Profile"
            onClick={handleDownload}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;