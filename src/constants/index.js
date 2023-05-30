import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  sbu,
  wcbhs,
  codingdojo,
  java,
  sql,
  python,
  budgetapp,
  fiscalfit,
  bugtracker
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Python Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Java Developer",
    icon: backend,
  },
  {
    title: "C#/.NET Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: java,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "SQL",
    icon: sql,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "William Cullen Bryant HS",
    company_name: "High School Diploma Completed",
    icon: wcbhs,
    iconBg: "#FFFFFF",
    date: "November 2015 - June 2019",
    points: [
      "HS Diploma in Math and Science Program",
      "Top 3% of Graduating Class",
      "Relevant Coursework: AP Computer Science Principles",
    ],
  },
  {
    title: "Stony Brook University",
    company_name: "BSc in Computer Science Expected 2024",
    icon: sbu,
    iconBg: "#E6DEDD",
    date: "Aug 2019 - May 2024",
    points: [
      "Relevant Coursework: Object-Oriented Programming, Data Structures, Discrete Mathematics, Programming Abstractions, Theory of Computations, Analysis of Algorithms, System Fundamentals I, System Fundamentals (C Programming), Computer Networking, Scripting Languages, Software Security",
      "Residential Safety Program (2019-2020)",
      "Residential Hall Council Senator (2019-2020)",
      "MSA Vice President (2021-2022)",
    ],
  },
  {
    title: "Coding Dojo",
    company_name: "Software Developer Bootcamp",
    icon: codingdojo,
    iconBg: "#383E56",
    date: "Nov 2022 - Mar 2023",
    points: [
      "Full Stack Developer Certificate",
      "Immersive 4-month training program in Python, Java, Mongo, Express, React, Node js",
      "Built CRUD applications in under 5 hours",
      "Spent 1000+ hours on intensive coursework through all phases of project development of full-stack application including building, testing, debugging, and deploying",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Bug Tracker",
    description:
      "Web application for project managers to monitor software bugs across projects. User authentication & management, project management, and admin capabilities. Demo login to try it out!",
    tags: [
      {
        name: "fullstack",
        color: "white",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "materialUI",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: bugtracker,
    front_code_link: "https://github.com/hasan-huda/bugtracker-frontend",
    back_code_link: "https://github.com/hasan-huda/bugtracker-backend",
    live_link: "https://hasan-bugtracker-app.onrender.com"
  },
  {
    name: "FiscalFit",
    description:
      "Frontend display promoting a financial tracker. The product is promoted with a modern design, complete with interactive navbar, highlighting stats, features, testimonials, and much more.",
    tags: [
      {
        name: "frontend",
        color: "white",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
    ],
    image: fiscalfit,
    front_code_link: "https://github.com/hasan-huda/bank-app",
    back_code_link: "https://github.com/hasan-huda/bank-app",
    live_link: "https://hasan-fiscalfit.onrender.com/"
  },
  {
    name: "Budget App",
    description:
      "Web application for users to manage their expenses, budgets, income and financial goals. User authentication implemented. Demo login to try it out!",
    tags: [
      {
        name: "fullstack",
        color: "white",
      },
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "javaSpring",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: budgetapp,
    front_code_link: "https://github.com/hasan-huda/budget-frontend",
    back_code_link: "https://github.com/hasan-huda/budget-backend",
    live_link: "https://hasan-budget-app.onrender.com"
  },
];

export { services, technologies, experiences, testimonials, projects };
