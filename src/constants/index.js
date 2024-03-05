import { gls, uni, oberholz, ZMS, starbucks } from "../assets/images"; // zero logic
import {
    ruby,
    figma,
    heroku,
    vue,
    rails,
    postgresql,
    // car,
    contact,
    css,
    estate,
    // express,
    git,
    github,
    html,
    javascript,
    linkedin,
    // nextjs,
    nodejs,
    pricewise,
    react,
    // redux,
    sass,
    snapgram,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: rails,
        name: "rails",
        type: "Backend",
    },
    {
      imageUrl: postgresql,
      name: "postgresql",
      type: "Frontend",
    },
    {
        imageUrl: ruby,
        name: "ruby",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: vue,
        name: "Vue",
        type: "Frontend",
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: heroku,
        name: "Heroku",
        type: "Host",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
  ];

  export const experiences = [
    {
        title: "Full-Stack Web Developer",
        company_name: "Freelance",
        icon: ZMS,
        iconBg: "#f2f230",
        date: "Feb 2024 - Present",
        points: [
          "Creating responsive web design using Figma.",
          "GitHub for version control.",
          "Deploying websites on Heroku and managing media with Cloudinary.",
        ],
      },
    {
      title: "Store Lead",
      company_name: "St Oberholz Coworking and Cafe",
      icon: oberholz,
      iconBg: "#f92c57",
      date: "Jan 2021 - Oct 2023",
      points: [
        "Colaborated on the development of a company-wide barista training program",
        "Managed staff shift schedules of circa 2 employees across three different locations",
        "Initiated and oversaw significant conceptual changes within the coworking space and cafe enhancing operational efficiency",
        "Executed human resources responsibilities within the managerial capacity",
      ],
    },
      {
        title: "Biochemistry Ba.Sc (Incomplete)",
        company_name: "Freie Universität, Berlin",
        icon: uni,
        iconBg: "#cbff00",
        date: "2019-2022",
        points: [
          "Advanced in Chem, Phys, and Maths, despite an incomplete degree",
          "Showcased resilience and tenacity throughout 6 semesters of rigorous academic pursuit",
          "Demonstrated decision-making skills and keen self-awareness, opting to explore a new path aligned more with my current aspirations",
        ],
      },
      {
        title: "Camp Counsellor / Teacher",
        company_name: "GLS - German Language School",
        icon: gls,
        iconBg: "#00c2c8",
        date: "Jun 2018 - Jul 2018",
        points: [
          "Supervised a group of 50 students aged 12-15 within a collaborative team setting",
          "Adapted to assume whichever role was needed on short notice",
          "Served as a guide, providing city tours and navigating public transportation with large groups of students",
          "Developed and organized activities while effectively managing budget and expectations",
        ],
      },
    ];

    export const socialLinks = [
      // {
        //     name: 'Contact',
        //     iconUrl: contact,
        //     link: '/contact',
        // },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/zoems',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/zoe-mawby-smart',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Portfolio Website',
        description: 'Developed a JS + React website alongside a youube tutorial using new 3d modeling tech with email functionality',
        link: 'https://github.com/zoems/3d_portfolio',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'SkillSwap',
        description: 'From concept to product in 2 weeks! SkillShare is a Rails 7 Web app where users can share their knowledge and materials with other peers to reduce the threshold for starting new hobbies. Match to swap your skills. Implemented swiping functionality both frontend with JavaScript and backend with Ruby',
        link: 'https://github.com/IratxeGarrido/skill-swap',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Warm and Furries',
        description: "From concept to product in 1 week! A Web app featuring user-friendly booking and rental processes for pets on both the main page and map view. Made with Ruby on Rails 7 Devise Js.. and more. Features a user Dashboard for members' bookings and offers.",
        link: 'https://github.com/zoems/warmandfurries',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'SmartAqua',
        description: 'Work in progress.',
        link: 'https://github.com/zoems/smartaqua',
    },
        {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Tart Twins Online Store',
        description: 'Work in progress.',
        link: 'https://github.com/zoems/tart-twins',
    },


];
