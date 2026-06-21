// ╔══════════════════════════════════════════════════════════════════╗
// ║   portfolio.js  —  EDIT THIS FILE TO UPDATE EVERYTHING          ║
// ║   Text · Images · Links · Colors · Section titles · Social      ║
// ╚══════════════════════════════════════════════════════════════════╝

import profile from "../assets/Profile.jpg"; // Main profile photo
import Blog from "../assets/Blog.webp";
import Calculator from "../assets/Calculator.webp";
import Car from "../assets/Car.webp";
import CCNA from "../assets/CCNA.webp";
import CRM from "../assets/CRM.webp";
import Currency from "../assets/Currency.webp";
import Ecommerce from "../assets/Ecommerce.webp";
import Health from "../assets/Health.webp";
import BMS from "../assets/BMS.webp";
import Notes from "../assets/Notes.webp";
import Quiz from "../assets/Quiz.webp";
import Task from "../assets/Task.webp";
import Weather from "../assets/Weather.webp";

export const personal = {
  firstName: "Shahzaib",
  lastName: "Ali",

  // ── Hero 3-line all-caps serif title
  heroLine1: "MERN STACK",
  heroLine2: "FULL STACK",
  heroLine3: "DEVELOPER.",

  // ── Short bio below hero title
  tagline:
    "MERN Stack Developer with hands-on industry experience building scalable web applications. BS Software Engineering — 6th Sem, CGPA 3.77 — shipping real products, one commit at a time.",

  // ── Profile photo — used in hero background (colorful, not B&W)
  photo: profile,

  location: "Sargodha, Punjab, Pakistan",
  email: "shahzaibali55531@email.com",
  phone: "+92-344-7859842",
  available: false, // true → shows green "Open to Work" badge
  cvLink:
    "https://drive.google.com/file/d/1Ng6XD-qW1oyeZHwJ27beRcWWzuF-fTnM/view?usp=drivesdk",

  social: {
    github: "https://github.com/shahzaib-mern",
    linkedin: "https://linkedin.com/in/shahzaib-ali-24671b363",
    facebook: "https://www.facebook.com/profile.php?id=100090707371781",
    instagram: "https://www.instagram.com/shahzaib_mern_dev/",
  },
};

// ─────────────────────────────────────────
//  STATS STRIP  (3 big numbers below hero)
// ─────────────────────────────────────────
export const stats = [
  { value: "14+", label: "Projects Built" },
  { value: "2.5+", label: "Years of Coding" },
  { value: "3.77", label: "CGPA / 4.0" },
];

// ─────────────────────────────────────────
//  VISION / ABOUT  (white split section)
// ─────────────────────────────────────────
export const vision = {
  subHeading: "TECHNICAL MINDSET & ROADMAP",
  heading: "My Technical Vision & Core Focus",

  body: [
    "I'm a MERN Stack Developer with hands-on experience building modern, scalable web applications using React.js, JavaScript, Tailwind CSS, Node.js, Express.js, and MongoDB. Starting from self-directed learning in October 2023, I've progressed from mastering frontend architecture to shipping full-stack solutions in production environments.",
    "I specialize in designing responsive user interfaces, developing RESTful APIs, integrating databases, and managing complete application deployment workflows — including VPS hosting, domain configuration, and CI/CD pipelines. I care about writing efficient, maintainable code and creating user-focused products that are as solid under the hood as they look on the surface.",
  ],

  ctaLabel: "SEE MY PROJECTS",
  ctaHref: "#projects",

  photo:
    "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=900&q=80",
};

// ─────────────────────────────────────────
//  SKILLS CATEGORIES (shown as cards)
// ─────────────────────────────────────────
export const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: "FE",
    skills: [
      "React.js",
      "JavaScript ES6+",
      "Tailwind CSS",
      "HTML5 & CSS3",
      "Responsive Design",
    ],
  },
  {
    title: "Backend Development",
    icon: "BE",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB & Mongoose",
      "REST APIs",
      "JWT Auth",
    ],
  },
  {
    title: "DevOps & Deployment",
    icon: "DO",
    skills: [
      "Git & GitHub",
      "Vercel",
      "Hostinger (VPS)",
      "Domain Configuration",
      "Environment Variables",
    ],
  },
  {
    title: "AI & Automation",
    icon: "AI",
    skills: [
      "Cursor AI",
      "Claude AI",
      "Lovable",
      "n8n Workflows",
      "Prompt Engineering",
    ],
  },
  {
    title: "Core CS Concepts",
    icon: "CS",
    skills: [
      "Data Structures",
      "Algorithms",
      "OOP Concepts",
      "Clean Code Principles",
      "SDLC",
    ],
  },
  {
    title: "Design & Prototyping",
    icon: "UX",
    skills: [
      "Figma",
      "UI/UX Basics",
      "Wireframing",
      "Component Architecture",
    ],
  },
];

export const skillTags = [
  "React.js",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "JWT Auth",
  "Git & GitHub",
  "Vercel",
  "Hostinger (VPS)",
  "CI/CD Basics",
  "Figma",
  "Cursor AI",
  "Prompt Engineering",
];

// ─────────────────────────────────────────
//  EXPERIENCE SECTION
// ─────────────────────────────────────────
export const experiences = [
  {
    company: "Innovative Brain",
    role: "Full Stack Developer",
    type: "Hybrid · Full-time",
    period: "June 2026 – Present",
    duration: "Ongoing",
    note: "Promoted from Internship",
    badge: "Current",
    color: "emerald",
    desc: "Promoted to Full Stack Developer after demonstrating consistent output and technical growth during the internship phase. Building and maintaining production-grade MERN stack applications, designing scalable REST APIs, integrating third-party services, and actively contributing to system design discussions in a hybrid team environment.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Git",
      "Hostinger",
    ],
  },
  {
    company: "Innovative Brain",
    role: "Frontend Developer Intern",
    type: "Remote · Internship",
    period: "March 2026 – May 2026",
    duration: "3 months",
    note: null,
    badge: "Completed",
    color: "indigo",
    desc: "Joined as a Frontend Intern and rapidly became a reliable contributor. Built responsive, pixel-perfect UIs with React and Tailwind CSS, collaborated closely with senior developers, and shipped client-facing features with minimal revisions. Delivered consistent quality that led to a full-time offer before the internship concluded.",
    skills: ["React.js", "Tailwind CSS", "Vite", "JavaScript", "Figma"],
  },
  {
    company: "Growistan Ventures",
    role: "Frontend Web Dev Intern",
    type: "Remote · Internship",
    period: "Mid May 2026 – Mid June 2026",
    duration: "1 month",
    note: null,
    badge: "Completed",
    color: "violet",
    desc: "Contributed to production web interfaces as a Frontend Intern, developing and refining user-facing features aligned with business requirements. Gained practical exposure to real-world client workflows, agile-style development cycles, and cross-functional team collaboration in a remote setting.",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design"],
  },
];

// ─────────────────────────────────────────
//  SERVICES  (3×2 card grid)
// ─────────────────────────────────────────
export const services = [
  {
    icon: "MERN",
    title: "Full-Stack Web Development",
    desc: "End-to-end web applications built with MongoDB, Express, React, and Node.js. From database schema design to polished user interfaces — I cover the full stack.",
  },
  {
    icon: "FE",
    title: "Frontend Development",
    desc: "Responsive, performant UIs with React and Tailwind CSS. I focus on clean component architecture, smooth interactions, and pixel-perfect layouts across all screen sizes.",
  },
  {
    icon: "API",
    title: "Backend & API Development",
    desc: "Well-structured REST APIs with Node.js and Express. Secure JWT authentication, clean routing, proper middleware, and reliable MongoDB data management — done right from the start.",
  },
  {
    icon: "DEPLOY",
    title: "Deployment & Hosting",
    desc: "Full deployment on Vercel, Railway, and Hostinger VPS — including environment configuration, domain setup, SSL, and post-launch stability checks to keep your app running smoothly.",
  },
  {
    icon: "GIT",
    title: "Version Control & Workflow",
    desc: "Clean Git practices with meaningful commits, disciplined branching strategies, and well-maintained project history. I treat version control as a professional discipline, not an afterthought.",
  },
  {
    icon: "AI",
    title: "AI-Assisted Development",
    desc: "Strategic use of AI tools like Claude and Cursor AI to accelerate development, prototype faster, and solve complex problems. AI is a force multiplier in my workflow — not a shortcut.",
  },
];

// ─────────────────────────────────────────
//  PROJECTS
// ─────────────────────────────────────────
export const projects = [
  // ── React + Tailwind (Featured Web Apps)
  {
    title: "CCNA Prep Hub",
    type: "Web Application",
    featured: true,
    thumb: CCNA,
    desc: "An interactive preparation platform for CCNA 200-301 students. Includes network diagrams, subnetting tools, and comprehensive study modules for networking excellence.",
    tags: ["React.js", "Tailwind CSS", "Vite"],
    live: "https://ccna-blog-web-oih1.vercel.app",
    github: "https://github.com/shahzaib-mern/ccna-blogs",
  },
  {
    title: "Banking Management System Dashboard",
    type: "Web App",
    featured: true,
    thumb: BMS,
    desc: "Feature-rich React banking dashboard showcasing real-world financial system UI. Includes modules for accounts, customers, transactions, loans, and analytics.",
    tags: ["React.js", "Tailwind CSS", "Vercel", "Financial Dashboard"],
    live: "https://banking-management-system-ochre.vercel.app",
    github: "https://github.com/shahzaib-mern/banking-management-system",
  },
  {
    title: "Hospital Management System",
    type: "Web App",
    featured: true,
    thumb: Health,
    desc: "A modern, responsive hospital management web application built with React, Tailwind CSS, and Vite. Provides comprehensive dashboards for patients, doctors, appointments, and billing.",
    tags: ["React.js", "Tailwind CSS", "Vite", "Hospital Management"],
    live: "https://hospital-management-system-steel-ten.vercel.app",
    github: "https://github.com/shahzaib-mern/hospital-management-system",
  },
  {
    title: "Responsive Frontend E-Commerce",
    type: "Web App",
    featured: true,
    thumb: Ecommerce,
    desc: "Responsive frontend e-commerce application with clean UI and smooth UX. Features product listings, detailed pages, cart system, and basic authentication using React Router.",
    tags: ["React.js", "Tailwind CSS", "React Router", "Cart System"],
    live: "https://ecommerce-nine-chi-37.vercel.app",
    github: "https://github.com/shahzaib-mern/ecommerce",
  },
  {
    title: "Client CRM Management System",
    type: "Web App",
    featured: false,
    thumb: CRM,
    desc: "Responsive React-based CRM app for managing clients, deals, and workflows. Features interactive data tables, workflow modals, and dynamic insights.",
    tags: ["React.js", "Tailwind CSS", "CRM", "Modals"],
    live: "https://client-management-system-blue.vercel.app/",
    github: "https://github.com/shahzaib-mern/client-management-system",
  },
  {
    title: "Car Rental Platform",
    type: "Web App",
    featured: true,
    thumb: Car,
    desc: "A modern and responsive car rental website built with React 19, Vite, and Tailwind CSS. Offers visual animations (AOS), smooth React Router page switching, and a complete booking flow.",
    tags: ["React.js", "Tailwind CSS", "React Router", "Vite"],
    live: "https://car-rental-abnp-5y25v04ax-shahzaib-merns-projects.vercel.app/",
    github: "https://github.com/shahzaib-mern/car-rental",
  },

  // ── Vanilla HTML / CSS / JS Projects
  {
    title: "Networks Blogging Platform & CMS",
    type: "Website",
    featured: false,
    thumb: Blog,
    desc: "A Computer Networks–focused blogging platform featuring a client-side CMS, dark/light theme toggle, LocalStorage persistence, and a modern glassmorphism UI — built entirely with Vanilla JavaScript.",
    tags: ["HTML5", "CSS3", "JavaScript", "CMS"],
    live: "https://shahzaib-mern.github.io/blogging-web/",
    github: "https://github.com/shahzaib-mern/blogging-web",
  },
  {
    title: "Global Currency Converter",
    type: "Website",
    featured: false,
    thumb: Currency,
    desc: "Real-time currency converter supporting 200+ global currencies, built with Vanilla JavaScript. Fetches live exchange rates and displays country flags for a polished UX.",
    tags: ["HTML5", "CSS3", "JavaScript", "REST API"],
    live: "https://shahzaib-mern.github.io/currency-converter/",
    github: "https://github.com/shahzaib-mern/currency-converter",
  },
  {
    title: "Real-Time Weather Dashboard",
    type: "Website",
    featured: false,
    thumb: Weather,
    desc: "Real-time weather dashboard focused on Pakistan cities, built with Vanilla JavaScript. Uses live APIs with dynamic weather icons and a modern glassmorphism UI.",
    tags: ["HTML5", "CSS3", "JavaScript", "Weather API"],
    live: "https://shahzaib-mern.github.io/weather-app/",
    github: "https://github.com/shahzaib-mern/weather-app",
  },
  {
    title: "Offline-First Notes App",
    type: "Website",
    featured: false,
    thumb: Notes,
    desc: "A modern, offline-first note-taking application featuring priority-based notes, tag categorization, live search and filtering, theme switching, and persistent LocalStorage.",
    tags: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
    live: "https://shahzaib-mern.github.io/notes-app/",
    github: "https://github.com/shahzaib-mern/notes-app",
  },
  {
    title: "Interactive QuizMaster App",
    type: "Website",
    featured: false,
    thumb: Quiz,
    desc: "A multi-category quiz application with timed rounds, multiple difficulty levels, scoring, leaderboard tracking, and end-of-quiz question review — all in Vanilla JS.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    live: "https://shahzaib-mern.github.io/quiz-app/",
    github: "https://github.com/shahzaib-mern/quiz-app",
  },
  {
    title: "Smart Task To-Do Manager",
    type: "Website",
    featured: false,
    thumb: Task,
    desc: "Smart task management app with 3 synced views, duplicate prevention, live task counters, smooth animations, and a clean, intuitive UI — built in Vanilla JavaScript.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    live: "https://shahzaib-mern.github.io/todo-list/",
    github: "https://github.com/shahzaib-mern/todo-list",
  },
  {
    title: "Scientific Calculator",
    type: "Website",
    featured: false,
    thumb: Calculator,
    desc: "A responsive scientific calculator with advanced operations, dual display, and robust error handling — built with pure Vanilla JavaScript.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    live: "https://shahzaib-mern.github.io/calculator-app/",
    github: "https://github.com/shahzaib-mern/calculator-app",
  },
];

// ─────────────────────────────────────────
//  TESTIMONIALS
// ─────────────────────────────────────────
export const testimonials = [
  {
    quote:
      "Shahzaib joined us as an intern and immediately stood out. He delivered clean, production-ready React interfaces that needed minimal review, communicated proactively, and consistently went beyond his assigned tasks. It was an easy decision to bring him on full-time — he is exactly the kind of developer you want on a team building real products.",
    name: "Muhammad Usman",
    role: "CEO, Innovative Brain",
    initials: "MU",
    photo: null,
  },
  {
    quote:
      "In just one month, Shahzaib contributed meaningfully to our web interfaces with a level of professionalism we rarely see from interns. He asked the right questions, understood our requirements quickly, and delivered responsive, well-structured frontend work without needing hand-holding. A focused and reliable developer — I would not hesitate to work with him again.",
    name: "Nazeer Ahmad",
    role: "CEO, Growistan Ventures",
    initials: "NA",
    photo: null,
  },
];

// ─────────────────────────────────────────
//  CONTACT INFO
// ─────────────────────────────────────────
export const contactInfo = {
  address: "Sargodha, Punjab, Pakistan",
  email: "shahzaibali55531@email.com",
  phone: "+92-344-7859842",
};

// ─────────────────────────────────────────
//  SECTION TITLES
// ─────────────────────────────────────────
export const sectionTitles = {
  skills: {
    sub: "Expertise",
    heading: "Technical",
    accent: "Capabilities",
    desc: "My full technical stack — from frontend engineering and backend development to deployment workflows, AI tooling, and the soft skills that make collaboration actually work.",
  },
  services: {
    sub: "What I Offer",
    heading: "My",
    accent: "Services",
    desc: "End-to-end web development services — from UI design to backend APIs and live deployment. Built to deliver, not just to demo.",
  },
  projects: {
    sub: "What I've Built",
    heading: "My Recent",
    accent: "Projects",
    desc: "14+ projects across Vanilla JS and the MERN stack — dashboards, management systems, API-driven apps, and full-stack platforms.",
  },
  experience: {
    sub: "Where I've Worked",
    heading: "Professional",
    accent: "Experience",
    desc: "Real industry experience — from remote internships to a promoted full-time role — building production applications and learning what actually matters when shipping software.",
  },
  testimonials: {
    sub: "Client Feedback",
    heading: "Industry",
    accent: "Endorsements",
    desc: "Words from the people I've worked with directly on real, shipped products.",
  },
  contact: {
    sub: "Open to Work",
    heading: "Get in",
    accent: "Touch",
    desc: "Available for full-time roles, freelance projects, and junior MERN Stack positions. Let's build something together.",
    followHeading: "Find Me Online",
  },
};

// ─────────────────────────────────────────
//  FOOTER
// ─────────────────────────────────────────
export const footerData = {
  copy: `© ${new Date().getFullYear()} Shahzaib Ali. All rights reserved.`,
  stack: "Built with React & Tailwind CSS",
};
