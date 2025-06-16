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
  mule1,
  terraverde1,
  viajelogico,
} from "../assets/assets";

const navLinks = [
  { id: "hero", title: "Home" },
  { id: "about", title: "About Me" },
  { id: "experience", title: "Experience" },
  { id: "tech", title: "Technologies" },
  { id: "works", title: "Projects" },
  { id: "contact", title: "Contact" },
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
    name: "Mule Shipments",
    description:
      "A technological solution designed to facilitate the fast and cost-effective shipping of items within the city or nationwide. This platform allows users to easily request and schedule pickups, optimizing time and reducing logistics costs. In addition, the package recipient receives email notifications about the shipment status, even if they are not registered on the platform.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSql",
        color: "green-text-gradient",
      },
    ],
    image: mule1,
    source_code_link: "https://github.com/Imcamiloup/Mule-Backend",
  },
  {
    name: "Terra Verde",
    description:
      "Web design of an easy-to-use dashboard that manages and monitors the supply chain of a premium coffee company, view for customers, products, harvests and shipments, ready to integrate with a backend, attractive visual elements and different graphs and interactive tables are added that allow to analyze the status of the business.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: terraverde1,
    source_code_link: "https://github.com/Imcamiloup/Terra-verde",
  },
  {
    name: "The Logical Travel Blog",
    description:
      "A scientific outreach blog entirely in HTML, CSS, and JavaScript, with an attractive, responsive design that allows users to explore articles on science and technology topics.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: viajelogico,
    source_code_link: "https://github.com/Imcamiloup/Un-Viaje-Logico",
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
