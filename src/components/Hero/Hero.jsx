import React from "react";
import "./Hero.css";
import ia from "../../assets/ia.jpeg";
import cv from "../../assets/CV_Reda.pdf";

const Hero = () => {
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
        <h2>Quick description </h2>
        <p>
          I am a student looking for an apprenticeship for September in the
          field of full stack development. My goal is to combine my technical
          programming skills with my creativity to create innovative solutions.
          I am motivated, determined, and always eager to learn. My academic
          background has allowed me to acquire a solid understanding of the
          fundamental principles of web and software development. Additionally,
          I have developed practical skills using various programming languages,
          frameworks, and technological tools. If you are interested, please do
          not hesitate to contact me.
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
