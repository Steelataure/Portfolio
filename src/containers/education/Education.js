import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import { translations } from "../../portfolio";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Education() {
  const { language } = useLanguage();
  const t = translations[language];
  const educationInfo = t.educationInfo;

  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">{t.header.education}</h1>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
