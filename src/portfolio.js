import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to remove lottie
};

const greeting = {
  username: "Alexandre Buisset",
  title: "Alexandre Buisset",
  subTitle: "Ingénieur Logiciel & DevOps passionné par l'industrialisation, l'architecture distribuée et la haute disponibilité des systèmes critiques.",
  // lookingfor: "Recherche d'un contrat d'apprentissage de 2 ans",
  resumeLink: "https://drive.google.com/file/d/1X9-zZraq_5g6Q2Hl4tkxfUVZ73XDdGGS/view?usp=sharing",
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

// Skills Section

const skillsSection = {
  title: "Expertise Technique",
  subTitle: "Maîtrise du cycle de vie complet du développement logiciel, de l'architecture distribuée à l'orchestration cloud.",
  skills: [
    "Conception et déploiement d'architectures logicielles évolutives pour des environnements distribués",
    "Automatisation complète du cycle de vie des applications via des pipelines CI/CD et orchestration Cloud",
    "Création d'interfaces utilisateur modernes, réactives et centrées sur l'exploitation des données",
    "Monitoring proactif, analyse de logs et optimisation continue de la performance et de la fiabilité des systèmes"
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      categoryName: "Langages",
      skills: [
        { skillName: "Python", fontAwesomeClassname: "devicon-python-plain colored" },
        { skillName: "Java", fontAwesomeClassname: "devicon-java-plain colored" },
        { skillName: "PHP", fontAwesomeClassname: "devicon-php-plain colored" },
        { skillName: "JavaScript", fontAwesomeClassname: "devicon-javascript-plain colored" },
        { skillName: "Bash", fontAwesomeClassname: "devicon-bash-plain colored" }
      ]
    },
    {
      categoryName: "Frameworks & Bibliothèques",
      skills: [
        { skillName: "Spring Boot", fontAwesomeClassname: "devicon-spring-plain colored" },
        { skillName: "Laravel", fontAwesomeClassname: "devicon-laravel-plain colored" },
        { skillName: "Flask", fontAwesomeClassname: "devicon-flask-original colored" },
        { skillName: "React", fontAwesomeClassname: "devicon-react-original colored" },
        { skillName: "Node.js", fontAwesomeClassname: "devicon-nodejs-plain colored" },
        { skillName: "Zend/Laminas", fontAwesomeClassname: "devicon-zend-plain colored" }
      ]
    },
    {
      categoryName: "Outils & DevOps",
      skills: [
        { skillName: "Git", fontAwesomeClassname: "devicon-git-plain colored" },
        { skillName: "GitLab", fontAwesomeClassname: "devicon-gitlab-plain colored" },
        { skillName: "Ansible", fontAwesomeClassname: "devicon-ansible-plain colored" },
        { skillName: "Docker", fontAwesomeClassname: "devicon-docker-plain colored" },
        { skillName: "Jenkins", fontAwesomeClassname: "devicon-jenkins-plain colored" },
        { skillName: "Prometheus", fontAwesomeClassname: "devicon-prometheus-plain colored" },
        { skillName: "Grafana", fontAwesomeClassname: "devicon-grafana-plain colored" },
        { skillName: "AWS", fontAwesomeClassname: "devicon-amazonwebservices-plain-wordmark colored" },
        { skillName: "SQL", fontAwesomeClassname: "fas fa-database" }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "ESIEA",
      logo: require("./assets/images/esiea.png"),
      subHeader: "Ingénieur en Informatique",
      duration: "2023 - 2026",
      desc: "Majeure Génie Logiciel & Systèmes d'Information",
      descBullets: ["En cours"]
    },
    {
      schoolName: "UQAC",
      logo: require("./assets/images/uqac.png"),
      subHeader: "Mobilité Internationale",
      duration: "Mai 2024 - Juillet 2024",
      desc: "Chicoutimi, Canada",
      descBullets: ["Échange universitaire au Canada"]
    },
    {
      schoolName: "EFREI",
      logo: require("./assets/images/efrei_paris.jpg"),
      subHeader: "Bachelor Conception et Développement logiciel",
      duration: "2022 - 2023",
      desc: "Concepteur Développeur d'Applications (RNCP 6)",
      descBullets: ["Obtenu"]
    },
    {
      schoolName: "Fénelon Sup",
      logo: require("./assets/images/fenelon.png"),
      subHeader: "BTS Systèmes Numériques",
      duration: "2020 - 2022",
      desc: "Option Informatique et Réseaux",
      descBullets: ["Obtenu"]
    }
  ]
};
// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Ingénieur logiciel",
      company: "BNP Paribas CIB",
      companylogo: require("./assets/images/bnp.jpg"),
      date: "2024 - 2026",
      desc: "Industrialisation et maintenance d'applications Java critiques au sein de l'environnement Corporate & Institutional Banking.",
      descBullets: [
        "Modernisation de l'architecture logicielle : migration d'applications vers Java 17 et Spring Boot 3.",
        "Automatisation DevOps : mise en place de pipelines CI/CD robustes avec Jenkins et Bitbucket pour fiabiliser les déploiements.",
        "Observabilité & Monitoring : conception et déploiement de solutions de supervision avec Grafana et Prometheus pour garantir la haute disponibilité.",
        "Qualité Logicielle : renforcement de la couverture de tests (unitaires/intégration) et revue de code collaborative.",
        "Gestion Agile : pilotage des évolutions techniques via Jira en coordination avec les équipes métiers."
      ],
      techStack: ["Java 17", "Spring Boot", "Microservices", "Jenkins", "Grafana", "Prometheus", "Bitbucket"]
    },
    {
      role: "Ingénieur logiciel",
      company: "BNP Paribas Partners For Innovation",
      companylogo: require("./assets/images/bnp.jpg"),
      date: "2023 - 2024",
      desc: "Amélioration de l'efficacité opérationnelle par l'automatisation et l'analyse de données système.",
      descBullets: [
        "Automatisation de rapports complexes : développement de scripts Python pour industrialiser la génération de metrics de performance.",
        "Analyse de données Mainframe : extraction et traitement de gros volumes de données via SQL pour fournir des insights de consommation.",
        "Maintenance préventive : supervision des opérations de métrologie quotidienne pour assurer la stabilité des systèmes hybrides.",
        "Support technique de niveau 2 : résolution d'incidents critiques et optimisation des workflows de données."
      ],
      techStack: ["Python", "SQL", "Shell/Bash", "Mainframe", "Data Analysis"]
    },
    {
      role: "Ingénieur logiciel",
      company: "Harmonie Mutuelle",
      companylogo: require("./assets/images/HM.jpg"),
      date: "2022 - 2023",
      desc: "Développement full-stack d'outils internes pour la gestion des habilitations et l'automatisation système.",
      descBullets: [
        "Développement Web : création d'une application de gestion des habilitations sous Zend Framework (Laminas).",
        "Administration Linux : installation, configuration et maintenance préventive de serveurs d'application Linux.",
        "Automatisation Système : écriture de scripts Bash pour la gestion des tâches planifiées et la fiabilisation des sauvegardes.",
        "Architecture de données : modélisation et administration de bases de données relationnelles."
      ],
      techStack: ["PHP", "Laminas/Zend", "JavaScript", "Linux", "SQL", "Bash"]
    },
    {
      role: "Développeur E-Learning",
      company: "Orange",
      companylogo: require("./assets/images/orange.png"),
      date: "2020 - 2022",
      desc: "Conception et déploiement de solutions pédagogiques innovantes utilisant les technologies immersives.",
      descBullets: [
        "Innovation Pédagogique : conception de modules en Réalité Augmentée (AR) et Réality Virtuelle (VR).",
        "Ingénierie Multimédia : gestion du cycle de vie complet de production vidéo (scénarisation à la post-production).",
        "Digital Learning : déploiement et administration de formations sur la plateforme Orange Learning.",
        "Gestion de projet : mise en conformité des contenus avec la charte graphique et accessibilité du groupe Orange."
      ],
      techStack: ["VR/AR", "E-Learning", "Suite Adobe", "Production Multimédia"]
    }
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
  title: "Quelques projets",
  footer: "Plein d'autres disponibles sur mon GitHub",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/leaders.png"),
      projectName: "Leaders",
      projectDesc: "Version numérique modernisée du célèbre jeu de stratégie Leaders. Architecture distribuée avec moteur de jeu en Java et interface réactive en TypeScript/React.",
      footerdesc: [
        {
          name: "Projet personnel",
        },
        {
          name: "Java / TypeScript / React / PostgreSQL / Docker",
        },

      ],
      footerLink: [
        {
          name: "Site web",
          url: "https://leaders-frontend-production.up.railway.app/"
        },
        {
          name: "Github",
          url: "https://github.com/Steelataure/Leaders"
        }
      ],
    },
    {
      image: require("./assets/images/gamesteel.png"),
      projectName: "Game of Steel",
      projectDesc: "Réalisation d'un jeu de plateforme 2D développé en Python, mettant en avant des mécaniques de combat et d'exploration.",
      footerdesc: [
        {
          name: "Projet personnel",
        },
        {
          name: "Python / HTML",
        },

      ],
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/Steelataure/GameOfSteel"
        }
      ],

    },
    {
      image: require("./assets/images/cooktail.jpg"),
      projectName: "Cooktail",
      projectDesc: "Site de création et de partage de cocktails avec gestion de communauté, recettes et conseils de mixologie.",
      footerdesc: [
        {
          name: "Projet scolaire",
        },
        {
          name: "PHP / CSS / SCSS / HTML / Javascript",
        },
      ],
      footerLink: [
        {
          name: "Site web",
          url: "http://cooktail.free.nf/"
        },
        {
          name: "Github",
          url: "https://github.com/Steelataure/Cooktail"
        }
      ]
    },


    {
      image: require("./assets/images/webrunners.jpg"),
      projectName: "WebRunners",
      projectDesc: "Solutions de présence en ligne sur mesure : conception, développement et vente de sites web personnalisés à haute performance.",
      footerdesc: [
        {
          name: "Projet personnel",
        },
        {
          name: "HTML / PHP / SCSS / Javascript",
        },
      ],
      footerLink: [
        {
          name: "Site web",
          url: "http://161.97.68.235/"
        },
        {
          name: "Github",
          url: "https://github.com/Steelataure/WebRunners"
        }
      ]
    },

    {
      image: require("./assets/images/Targus.png"),
      projectName: "Jauge Covid",
      projectDesc: "Système de gestion et de visualisation d'affluence en temps réel pour assurer le respect des jauges sanitaires.",
      footerdesc: [
        {
          name: "Projet scolaire",
        },
        {
          name: "PHP / HTML / CSS / JavaScript",
        }

      ],
      footerLink: [
        {
          name: "Site web",
          url: "http://jaugecovid.rf.gd/index.php?i=1"
        },
        {
          name: "Github",
          url: "https://github.com/Steelataure/Jauge-Covid"
        }
      ]
    },
    {
      image: require("./assets/images/overwatch_stats.png"),
      projectName: "Overwatch Stats",
      projectDesc: "Analyse approfondie de données de jeu via Python et Pandas, générant des statistiques et visualisations de performance complexes.",
      footerdesc: [
        {
          name: "Projet personnel",
        },
        {
          name: "Python / Pandas / Jupyter Notebook",
        }
      ],
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/Steelataure/Overwatch_stats"
        }
      ]
    },
    // {
    //   image: require("./assets/images/calcul.png"),
    //   projectName: "Générateur de calcul mental",
    //   projectDesc: "",
    //   footerdesc: [
    //     {
    //       name: "Projet scolaire",
    //     },
    //     {
    //       name: "Python",
    //     }
    //   ],
    //   footerLink: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/Steelataure/Mental-Arithmetic-Generator"
    //     }
    //   ]
    // },
    // {
    //   image: require("./assets/images/Trailer downloader.png"),
    //   projectName: "Trailer Downloader",
    //   projectDesc: "",
    //   footerdesc: [
    //     {
    //       name: "Projet personnel",
    //     },
    //     {
    //       name: "Python",
    //     }
    //   ],
    //   footerLink: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/Steelataure/Trailer-downloader"
    //     }
    //   ]
    // },
    // {
    //   image: require("./assets/images/IA.gif"),
    //   projectName: "Machine Learning",
    //   projectDesc: "",
    //   footerdesc: [
    //     {
    //       name: "Projet personnel",
    //     },
    //     {
    //       name: "Python",
    //     }
    //   ],
    //   footerLink: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/Steelataure/Q-learning"
    //     }
    //   ]
    // },



  ],
  display: true // Set false to hide this section, defaults to true
};
// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Certifications",
  subtitle: "Validation officielle de mes compétences techniques.",
  achievementsCards: [
    {
      title: "AWS Academy: Cloud Foundations",
      subtitle: "Amazon Web Services",
      image: require("./assets/images/Cloud Foundations - Training Badge.png"),
      imageAlt: "AWS Foundations",
      footerLink: [{ name: "Badge", url: "https://www.credly.com/badges/4eb0a186-2e3a-49b9-af14-b2cd88291fe3/public_url" }]
    },
    {
      title: "AWS Academy: Microservices & CI/CD",
      subtitle: "Amazon Web Services",
      image: require("./assets/images/badge aws microservice.png"),
      imageAlt: "AWS Microservices",
      footerLink: [{ name: "Badge", url: "https://www.credly.com/badges/2246b65f-b3fe-498d-ad54-573f486bc5e4/public_url" }]
    },
    {
      title: "AWS Cloud Quest: Cloud Practitioner",
      subtitle: "Amazon Web Services",
      image: require("./assets/images/Cloud Practitioner.png"),
      imageAlt: "AWS Cloud Quest",
      footerLink: [{ name: "Badge", url: "https://www.credly.com/badges/d4732072-60cb-4b16-b5a4-d3b651226965/public_url" }]
    },
    {
      title: "TOEIC Listening and Reading",
      subtitle: "Score: 850 / 990",
      image: require("./assets/images/toeic.png"),
      imageAlt: "ETS Logo",
      footerLink: [{ name: "Site Officiel", url: "https://www.ets.org/toeic" }]
    },
    {
      title: "Concepteur Développeur d'Applications",
      subtitle: "Titre RNCP Niveau 6",
      image: require("./assets/images/efrei_paris.jpg"),
      imageAlt: "EFREI Logo",
      footerLink: [
        { name: "RNCP 31678", url: "https://www.francecompetences.fr/recherche/rncp/31678/" }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
// Blogs Section

const blogSection = {};

// Talks Sections

const talkSection = {
  title: "",
  subtitle: "",

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: "",
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Me contacter",
  subtitle: "Disponible pour discuter de vos projets techniques ou d'opportunités de collaboration en ingénierie logicielle.",
  number: "+33640815099",
  email_address: "alexandre0312@orange.fr"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};