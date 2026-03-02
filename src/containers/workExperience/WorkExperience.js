import React, { useContext } from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { translations } from "../../portfolio";
import { useLanguage } from "../../contexts/LanguageContext";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const { isDark } = useContext(StyleContext);
  const { language } = useLanguage();
  const t = translations[language];
  const workExperiences = t.workExperiences;

  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1500} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">{t.header.experience}</h1>
              <div className="experience-cards-div">
                <div className="experience-timeline-line"></div>
                {workExperiences.experience.map((card, i) => {
                  return (
                    <div key={i} className="experience-timeline-item">
                      <div className="experience-timeline-node"></div>
                      <ExperienceCard
                        isDark={isDark}
                        cardInfo={{
                          company: card.company,
                          desc: card.desc,
                          date: card.date,
                          companylogo: card.companylogo,
                          role: card.role,
                          descBullets: card.descBullets,
                          techStack: card.techStack
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
