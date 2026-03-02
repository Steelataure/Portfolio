import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import { translations } from "../../portfolio";
import { useLanguage } from "../../contexts/LanguageContext";
import { Fade } from "react-reveal";

export default function Education() {
  const { language } = useLanguage();
  const t = translations[language];
  const educationInfo = t.educationInfo;

  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <Fade bottom duration={1500} distance="20px">
          <h1 className="education-heading">{t.header.education}</h1>
        </Fade>
        <div className="education-card-container">
          <div className="education-timeline-line"></div>
          {educationInfo.schools.map((school, index) => (
            <Fade bottom duration={1500} delay={index * 200} key={index}>
              <div className="education-timeline-item">
                <div className="education-timeline-node"></div>
                <EducationCard school={school} />
              </div>
            </Fade>
          ))}
        </div>
      </div>
    );
  }
  return null;
}
