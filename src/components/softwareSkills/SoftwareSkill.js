import React, { useContext } from "react";
import "./SoftwareSkill.scss";
import { translations } from "../../portfolio";
import { useLanguage } from "../../contexts/LanguageContext";
import StyleContext from "../../contexts/StyleContext";

export default function SoftwareSkill() {
  const { isDark } = useContext(StyleContext);
  const { language } = useLanguage();
  const t = translations[language];
  const skillsSection = t.skillsSection;

  return (
    <div>
      <div className="software-skills-main-div">
        {skillsSection.softwareSkills.map((category, index) => {
          return (
            <div key={index} className="software-skill-category">
              <h3 className="category-title">{category.categoryName}</h3>
              <ul className="dev-icons">
                {category.skills.map((skill, i) => {
                  return (
                    <li
                      key={i}
                      className={
                        isDark
                          ? "dark-mode software-skill-inline skill-card"
                          : "software-skill-inline skill-card"
                      }
                      name={skill.skillName}
                    >
                      <i className={skill.fontAwesomeClassname}></i>
                      <p className="skill-name">{skill.skillName}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
