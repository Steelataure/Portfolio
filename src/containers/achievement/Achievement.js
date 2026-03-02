import React, { useContext } from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import { translations } from "../../portfolio";
import { useLanguage } from "../../contexts/LanguageContext";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Achievement() {
  const { isDark } = useContext(StyleContext);
  const { language } = useLanguage();
  const t = translations[language];
  const achievementSection = t.achievementSection;

  if (!achievementSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1500} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {achievementSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {achievementSection.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
            {achievementSection.achievementsCards.map((card, i) => {
              return (
                <Fade bottom duration={1500} delay={i * 200} key={i}>
                  <AchievementCard
                    isDark={isDark}
                    cardInfo={{
                      title: card.title,
                      description: card.subtitle,
                      image: card.image,
                      imageAlt: card.imageAlt,
                      footer: card.footerLink
                    }}
                  />
                </Fade>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
