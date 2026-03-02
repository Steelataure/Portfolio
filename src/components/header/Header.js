import React from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import { translations } from "../../portfolio";
import { useLanguage } from "../../contexts/LanguageContext";
import StyleContext from "../../contexts/StyleContext";

function Header() {
  const { language, changeLanguage } = useLanguage();
  const { isDark } = React.useContext(StyleContext);
  const t = translations[language];

  const viewExperience = t.workExperiences.display;
  const viewSkills = t.skillsSection.display;

  return (
    <Headroom>
      <header className={"dark-menu header"}>
        <a href="/" className="logo">
          <span className="logo-name">{t.greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={"navicon navicon-dark"}></span>
        </label>
        <ul className={"dark-menu menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">{t.header.skills}</a>
            </li>
          )}

          <li>
            <a href="#education">{t.header.education}</a>
          </li>
          {viewExperience && (
            <li>
              <a href="#experience">{t.header.experience}</a>
            </li>
          )}

          <li>
            <a href="#projects">{t.header.projects}</a>
          </li>
          <li>
            <a href="#achievements">{t.header.achievements}</a>
          </li>
          <li>
            <button
              className="search-trigger"
              onClick={() => window.dispatchEvent(new CustomEvent("toggle-command-palette"))}
              title="Rechercher (Ctrl+K)"
            >
              <i className="fas fa-search"></i>
            </button>
          </li>
          <li>
            <button
              className="lang-switcher"
              onClick={() => changeLanguage(language === "fr" ? "en" : "fr")}
            >
              {language === "fr" ? "EN" : "FR"}
            </button>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
