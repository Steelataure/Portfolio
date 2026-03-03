import React, { useState, useEffect, useContext, Suspense, lazy } from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import { socialMediaLinks } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import { useLanguage } from "../../contexts/LanguageContext";
import Loading from "../../containers/loading/Loading";
export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);
  const { isDark } = useContext(StyleContext);
  const { language } = useLanguage();
  const openSource = {
    showGithubProfile: "true",
    display: false
  };

  useEffect(() => {
    const getRepoData = () => {
      fetch("/profile.json")
        .then(result => {
          if (result.ok) {
            return result.json();
          }
          throw result;
        })
        .then(response => {
          if (response && response.data && response.data.user && response.data.user.pinnedItems) {
            setrepoFunction(response.data.user.pinnedItems.edges);
          } else {
            console.warn("Incomplete profile.json data for projects");
            setrepoFunction([]);
          }
        })
        .catch(function (error) {
          console.error("Fetch error:", error);
          setrepoFunction([]);
        });

    };
    getRepoData();
  }, []);

  function setrepoFunction(array) {
    setrepo(array);
  }
  if (
    !(typeof repo === "string" || repo instanceof String) &&
    openSource.display
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">{language === "fr" ? "Projets Open Source" : "Open Source Projects"}</h1>
          <div className="repo-cards-div-main">
            {repo.map((v, i) => {
              if (!v) {
                console.error(
                  `Github Object for repository number : ${i} is undefined`
                );
              }
              return (
                <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
              );
            })}
          </div>
          <Button
            text={language === "fr" ? "Plus de projets" : "More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
