import React from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import {
  greeting,
  workExperiences,
} from "../../portfolio";

function Header() {
  const viewExperience = workExperiences.display;
  //const viewSkills = skillsSection.display;

  return (
    <Headroom>
      <header className={"dark-menu header"}>
        <a href="/" className="logo">
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={"navicon navicon-dark"}></span>
        </label>
        <ul className={"dark-menu menu"}>
{/*           
          {viewSkills && (
            <li>
              <a href="#skills">Compétences</a>
            </li>
          )} */}

          <li>
            <a href="#education">Formations</a>
          </li>
          {viewExperience && (
            <li>
              <a href="#experience">Expériences</a>
            </li>
          )}

          <li>
            <a href="#projects">Projets</a>
          </li>
          <li>

          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
