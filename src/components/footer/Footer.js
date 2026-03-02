import React, { useContext } from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  const { language } = useLanguage();
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          © {new Date().getFullYear()} Alexandre Buisset. {language === "fr" ? "Tous droits réservés." : "All rights reserved."}
        </p>
      </div>
    </Fade>
  );
}
