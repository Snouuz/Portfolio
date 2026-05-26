import React, { useState } from "react";
import "./ExperienceCard.css";
import { translate } from "../../translate";

const ExperienceCard = ({ details, language }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="work-experience-card">
      <h6>{details.title}</h6>
      <div className="work-duration">{details.date}</div>
      <ul>
        {details.responsibilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {details.stack && details.stack.length > 0 && (
        <div className="work-stack">
          {details.stack.map((tech) => (
            <span key={tech} className="stack-badge">{tech}</span>
          ))}
        </div>
      )}

      {details.description && (
        <>
          {isExpanded && (
            <p className="work-description">{details.description}</p>
          )}
          <button
            className="work-toggle"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded
              ? translate("see_less", language)
              : translate("see_more", language)}
            <span className="material-symbols-outlined">
              {isExpanded ? "expand_less" : "expand_more"}
            </span>
          </button>
        </>
      )}
    </div>
  );
};

export default ExperienceCard;
