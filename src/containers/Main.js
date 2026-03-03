import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import CommandPalette from "../components/commandPalette/CommandPalette";
import { splashScreen } from "../portfolio";
import { StyleProvider } from "../contexts/StyleContext";
import { LanguageProvider } from "../contexts/LanguageContext";
import "./Main.scss";

const Main = () => {
  const [isDark] = useState(true);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      // Automatic failsafe in case onComplete isn't reached
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration + 2000 // Buffer
      );
      return () => {
        clearTimeout(splashTimer);
      };
    } else {
      setIsShowingSplashAnimation(false);
    }
  }, []);

  const handleBootComplete = () => {
    setIsShowingSplashAnimation(false);
  };

  const changeTheme = () => {
    // Theme is now permanently dark
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <LanguageProvider>
        <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
          <CommandPalette />
          {isShowingSplashAnimation && splashScreen.enabled ? (
            <SplashScreen onComplete={handleBootComplete} />
          ) : (
            <>
              <Header />
              <Greeting />
              <Skills />
              <StackProgress />
              <Education />
              <WorkExperience />
              <Projects />
              <StartupProject />
              <Achievement />
              <Blogs />
              <Talks />
              <Twitter />
              <Podcast />
              <Profile />
              <Footer />
              <ScrollToTopButton />
            </>
          )}
        </StyleProvider>
      </LanguageProvider>
    </div>
  );
};

export default Main;
