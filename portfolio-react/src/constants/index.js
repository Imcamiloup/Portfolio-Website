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
  git,
  docker,
  carrent,
  jobit,
  tripguide,
  csi,
  unix,
  express,
  python,
  java,
  sql,
} from "../assets/assets";

const navLinks = [
  {
    id: "sobre-mi",
    title: "About Me",
  },
  {
    id: "experiencia",
    title: "Experience",
  },
  {
    id: "tecnologias",
    title: "Technologies",
  },
  {
    id: "proyectos",
    title: "Projects",
  },
  {
    id: "contacto",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Dev Ops",
    icon: docker,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Flask and React Native Developer",
    company_name: "CSI Business Services",
    icon: csi,
    iconBg: "#383E56",
    date: "November 2024 - March 2025",
    points: [
      "I developed the API for a crop management system, facilitating the scheduling of harvesting, receiving, and delivery of agricultural products. I also implemented services for the efficient collection and management of the system's operational data.",
      "In the React Native application for drivers, I designed and implemented a secure registration system with offline functionality, ensuring the integrity of the collected data. I also developed a user shift synchronization mechanism and optimized the transmission of collected information, ensuring its availability and consistency across the platform.",
      "Python using the Flask framework, MySQL database, and JavaScript using the React Native framework.",
      "Test endpoints using Jest testing framework.",
    ],
  },
  {
    title: "TypeScript and Java Developer",
    company_name: "Unix Telemetría",
    icon: unix,
    iconBg: "#E6DEDD",
    date: "January 2023 - Actuality",
    points: [
      "Development and optimization of a dashboard and web service for managing operational data for a vehicle fleet, including real-time monitoring, traceability, and inventory management.",
      "Implemented microservices in NestJS and Spring Boot, improving system scalability and maintainability.",
      "Optimizing SQL queries in MySQL, reducing response times and improving data access efficiency.",
      "Third-party API integration for vehicle tracking, payment processing, and automated reporting.",
      "Security and authentication, using JWT and OAuth to protect endpoints and manage role-based access.",
      "Continuous deployment (CI/CD) on AWS using Docker and Kubernetes, ensuring system availability and stability.",
      "Mentoring and documentation, guiding new developers and generating technical documentation to facilitate the adoption of best practices.",
    ],
  },
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  navLinks,
};
