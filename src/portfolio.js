/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Alexandre Buisset",
  title: "Alexandre Buisset",
  subTitle: emoji(
    "Etudiant ingénieur passionné par la programmation et les nouvelles technologies, curieux, avec une solide expérience en développement informatique"
  ),
  resumeLink:
    "https://drive.google.com/file/d/14K7imp7aCZmEOYvRKz_PYOLHOnvDpg2K/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Steelataure",
  linkedin: "https://www.linkedin.com/in/alexandre-buisset/",
  gmail: "alexandre0312@orange.fr",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "ESIEA",
      logo: require("./assets/images/esiea.png"),
      subHeader: "Cycle ingénieur",
      duration: "2023 - 2016",
      desc: "Software Engineering",
      descBullets: [
      "En cours"
      ]
    },
    {
      schoolName: "EFREI",
      logo: require("./assets/images/efrei_paris.jpg"),
      subHeader: "Bachelor Developpement Web & Application",
      duration: "2022 - 2023",
      desc: "RNCP Concepteur Développeur d'Applications",
      descBullets: ["Obtenu"]
    },
    {
      schoolName: "Fénelon Sup",
      logo: require("./assets/images/fenelon.jpg"),
      subHeader: "BTS Systèmes Numériques",
      duration: "2020 - 2022",
      desc: "Option Informatique et Réseaux",
      descBullets: ["Obtenu"]
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [

    // {
    //   role: "Développeur",
    //   company: "BNP Paribas",
    //   companylogo: require("./assets/images/bnp.jpg"),
    //   date: "2023 - Maintenant",
    //   desc: "",
    // },
    {
      role: "Développeur",
      company: "Harmonie Mutuelle",
      companylogo: require("./assets/images/HM.jpg"),
      date: "2022 - 2023",
      desc: "J'ai contribué au développement d'applications web, à la gestion de bases de données, et à l'automatisation des tâches",
      descBullets: [
        "Développement d'applications web sous le Framework Zend Framework/Laminas",
        "Déploiement et maintenance d'applications sur des serveurs Linux",
        "Administration de bases de données et la gestion des tables",
        "Création d'une application de gestion des habilitations",
        "Création de scripts Bash pour l'automatisation de tâches système",
        "Élaboration de documentation technique",
      ]
    },
    {
      role: "Développeur de contenu e-learning",
      company: "Orange",
      companylogo: require("./assets/images/orange.png"),
      date: "2020 - 2022",
      desc: "J'ai collaboré avec l'École des Métiers Techniques (EMT) d'Orange pour produire diverses ressources numériques, dont :",
      descBullets: [
        "Vidéo : Scénarisation, captation, montage, post-production, mise en ligne sur notre système d'information",
        "Mobile Learning : Création de micro-modules et campagnes de quiz",
        "Immersive Learning : Conception de modules en réalité augmentée et réalité virtuelle",
        "Mise en conformité avec la charte Orange pour aligner les normes de l'entreprise",
        "Déploiement de formations sur Orange Learning",
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projets",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/game1.gif"),
      projectName: "Game of Steel",
      projectDesc: "",
      footerLink: [
        {
          name: "Site web",
          url: "https://github.com/Steelataure/GameOfSteel"
        }
      ]
    },
    {
      image: require("./assets/images/cooktail.png"),
      projectName: "Cooktail",
      projectDesc: "Site de création et partage de cocktails",
      footerLink: [
        {
          name: "Site web",
          url: "cooktail.rf.gd/cocktail/"
        }
      ]
    },
    {
      image: require("./assets/images/defoncecube.gif"),
      projectName: "DefonceCube3D",
      projectDesc: "",
      footerLink: [
        {
          name: "Site web",
          url: ""
        }
      ]
    },
    {
      image: require("./assets/images/Targus.png"),
      projectName: "Jauge Covid",
      projectDesc: "Site de mesure de clients",
      footerLink: [
        {
          name: "Site web",
          url: ""
        }
      ]
    },
    {
      image: require("./assets/images/pokedex.PNG"),
      projectName: "Pokedex",
      projectDesc: "",
      footerLink: [
        {
          name: "Site web",
          url: ""
        }
      ]
    },
    {
      image: require("./assets/images/habilitation.png"),
      projectName: "Gestion des habilitations",
      projectDesc: "",

    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        },

      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};



const contactInfo = {
  title: "Me contacter",//emoji("Contact Me")
  subtitle:
    "",
  number: "+33640815099",
  email_address: "alexandre0312@orange.fr"
};


const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  educationInfo,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable
};
