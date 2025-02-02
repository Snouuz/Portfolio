import React, { useRef } from "react";
import "./WorkExperience.css";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import translations from "../../utils/translations.json";
import Slider from "react-slick";
import { useLanguage } from "../LanguageContext"; 
import { translate } from "../translate";

const WorkExperience = () => {
  const sliderRef = useRef();
  const { language } = useLanguage();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const workExperiences = translations[language]?.Work_Experience || [];

  const slideRight = () => {
    sliderRef.current.slickNext();
  };
  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <>
      <section id="projects" className="experience-container">
        <h5>{translate("title_Work_Experience", language)}</h5>
        <div className="experience-content">
          <div className="arrow-right" onClick={slideRight}>
            <span class="material-symbols-outlined">chevron_right</span>
          </div>
          <div className="arrow-left" onClick={slideLeft}>
            <span class="material-symbols-outlined">chevron_left</span>
          </div>
          <Slider ref={sliderRef} {...settings}>
            {workExperiences.map((item) => (
              <ExperienceCard key={item.title} details={item} />
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};
export default WorkExperience;
