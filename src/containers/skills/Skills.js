import React, { useContext } from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { illustration, translations } from "../../portfolio";
import { useLanguage } from "../../contexts/LanguageContext";
import { Fade } from "react-reveal";
import buildAnimation from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const { isDark } = useContext(StyleContext);
  const { language } = useLanguage();
  const t = translations[language];
  const skillsSection = t.skillsSection;

  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1500}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={buildAnimation} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
            <div className="skills-bullet-points">
              {skillsSection.skills.map((skills, i) => {
                return (
                  <Fade left duration={1500} delay={i * 200} key={i}>
                    <p
                      className={
                        isDark
                          ? "dark-mode subTitle skills-text"
                          : "subTitle skills-text"
                      }
                    >
                      {skills}
                    </p>
                  </Fade>
                );
              })}
            </div>
          </div>
        </Fade>
        <Fade right duration={1500}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
          </div>
        </Fade>
      </div>
    </div>
  );
}
