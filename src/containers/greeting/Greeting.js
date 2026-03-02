import React, { useContext } from "react";
import { Fade } from "react-reveal";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import Terminal from "../../components/terminal/Terminal";

import { illustration, translations } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  const { language } = useLanguage();
  const t = translations[language];
  const greeting = t.greeting;

  const terminalSteps = language === "fr" ? [
    { type: "command", text: "whoami", delay: 500 },
    { type: "output", text: "Alexandre Buisset", delay: 800 },
    { type: "command", text: "expertise --current", delay: 500 },
    { type: "output", text: "Ingénieur Logiciel & DevOps", delay: 800 },
    { type: "command", text: "ls /stack", delay: 500 },
    { type: "output", text: "Java, Spring, DevOps, Cloud...", delay: 2000 }
  ] : [
    { type: "command", text: "whoami", delay: 500 },
    { type: "output", text: "Alexandre Buisset", delay: 800 },
    { type: "command", text: "expertise --current", delay: 500 },
    { type: "output", text: "Software & DevOps Engineer", delay: 800 },
    { type: "command", text: "ls /stack", delay: 500 },
    { type: "output", text: "Java, Spring, DevOps, Cloud...", delay: 2000 }
  ];

  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title} <span className="wave-emoji"></span>
              </h1>
              <div className="greeting-research-div">
                <h2>{greeting.lookingfor} </h2>
              </div>
              <Terminal steps={terminalSteps} />
              <div className="terminal-social-gap">
                <SocialMedia />
              </div>
              <div className="button-greeting-div">
                <Button text={language === "fr" ? "Me contacter" : "Contact Me"} href="#contact" />
                {greeting.resumeLink && (
                  <Button
                    text={language === "fr" ? "Mon CV" : "My Resume"}
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
