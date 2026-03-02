import React, { useContext } from "react";
import "./StartupProjects.scss";
import { translations, socialMediaLinks } from "../../portfolio";
import { useLanguage } from "../../contexts/LanguageContext";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const { isDark } = useContext(StyleContext);
  const { language } = useLanguage();
  const t = translations[language];
  const bigProjects = t.bigProjects;

  if (!bigProjects.display) {
    return null;
  }
  return (
    <div className="main" id="projects">
      <div className="projects-main">
        <h1 className="skills-heading">{bigProjects.title}</h1>
        <p
          className={
            isDark
              ? "dark-mode project-subtitle"
              : "subTitle project-subtitle"
          }
        >
          {bigProjects.subtitle}
        </p>

        <div className="projects-container">
          {bigProjects.projects.map((project, i) => {
            return (
              <Fade bottom duration={1500} delay={i * 150} key={i}>
                <div
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  {project.image ? (
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="card-image"
                      ></img>
                    </div>
                  ) : null}
                  <div className="project-detail">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>

                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark ? "dark-mode project-tag" : "project-tag"
                              }
                              onClick={() => openUrlInNewTab(link.url)}
                            >
                              {link.name.toLowerCase().includes("github") && <i className="fab fa-github" style={{ marginRight: "6px" }}></i>}
                              {link.name.toLowerCase().includes("site") && <i className="fas fa-external-link-alt" style={{ marginRight: "6px" }}></i>}
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}

                    {project.footerdesc ? (
                      <div className="project-card-footer">
                        {project.footerdesc.map((name, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark ? "dark-mode project-tag2" : "project-tag2"
                              }
                            >
                              {name.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>

        {bigProjects.footer ? (
          <div className="projects-footer">
            <span
              className={isDark ? "dark-mode project-footer-button" : "project-footer-button"}
              onClick={() => openUrlInNewTab(require("../../portfolio").socialMediaLinks.github)}
            >
              <i className="fab fa-github" style={{ marginRight: "10px" }}></i>
              {bigProjects.footer}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
