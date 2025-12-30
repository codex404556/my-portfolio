import { link } from "fs";

export const navItems = [
  { name: "About Me", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experiences", link: "#experiences" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "My highest priority is joining a company that adopts modern tools and maintains flexibility in continuous improvement.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Open to relocating anywhere in Germany.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently learning backend to become a full-stack",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Would you like me to join your team?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Innovative Electronics E-Commerce Website",
    des: "A modern and innovative electronics website designed to deliver a seamless, fast, and user-friendly experience.",
    img: "/project1.png",
    iconLists: [
      "/next-js.svg",
      "/tail.svg",
      "/ts.svg",
      "/shad.png",
      "/sanity.png",
    ],
    link: "https://e-store-wliz.vercel.app/",
    name: "E_STORE",
  },
  {
    id: 2,
    title: "Shop with Ease at Tomato Store",
    des: "Experience a smooth user journey and high-performance speed powered by clean, well-structured code.",
    img: "/project2.png",
    iconLists: [
      "/react.jpg",
      "/tail.svg",
      "/javascript.png",
      "/html5.png",
      "/css3.png",
    ],
    link: "https://tomatoes-store-p7d3.vercel.app/",
    name: "TOMATO_STORE",
  },
  {
    id: 3,
    title: "Easy & Flexible Hotel Booking",
    des: "Enjoy a seamless hotel booking experience built with a simple architecture and clean, high-performance code.",
    img: "/project3.png",
    iconLists: [
      "/react.jpg",
      "/tail.svg",
      "/javascript.png",
      "/html5.png",
      "/css3.png",
    ],
    link: "majestic-hotel-six.vercel.app",
    name: "MAJESTIC_HOTEL",
  },
];

export const testimonials = [
  {
    quote:
      "I graduated in 2018 from Shatt Al-Arab University after completing four years of academic study, earning a research-based Bachelor’s degree in Computer Science. Shatt Al-Arab University is considered one of the leading universities in my home country, and my degree is officially recognized as equivalent to a German Bachelor’s degree by the German Central Office for Foreign Education (ZAB).",
    name: "Shatt Al-Arab University",
    title: "2018 Graduate",
    image: "/university.jpg",
  },
  {
    quote:
      "I completed an intensive training program in HTML, CSS, JavaScript, and React with the objective of securing a position in my field within my home country.",
    name: "Self-Taught",
    title: "Self-taught through independent learning and practical projects.",
    image: "/practise2.jpg",
  },
  {
    quote:
      "Three years of collaborative experience working with a backend developer, dedicating up to 58 hours per week to building frontend interfaces from scratch using JavaScript, HTML5, CSS3, React, and Tailwind CSS.",
    name: "IRAQ Site Company",
    title: "2020-2023",
    image: "/work.jpg",
  },
  {
    quote:
      "Self-directed professional training in preparation for employment in Germany, with hands-on experience in JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, React, Next.js, TypeScript, headless CMS solutions such as Sanity, state management with Zustand, API integration, Framer Motion, UI/UX collaboration using Figma, and version control with Git and GitHub.",
    name: "Self-Taught",
    title: "2023-Present",
    image: "/practise.jpg",
  },
];

export const companies = [
  {
    id: 1,
    name: "Next.js",
    img: "/next.png",
  },
  {
    id: 2,
    name: "TypeScript",
    img: "/type.png",
  },
  {
    id: 3,
    name: "React",
    img: "/react-icon.png",
  },
  {
    id: 4,
    name: "Tailwind CSS",
    img: "/tailwend.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Ability to Work Under Pressure",
    desc: "I can work for long hours at the computer without fatigue or loss of focus, maintaining calmness and concentration under pressure.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Time Management",
    desc: "I manage my time by setting clear schedules for each task and working extra hours when necessary to meet deadlines.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Working with AI Tools",
    desc: "Strong expertise in using AI tools for clean code and efficient debugging.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Fast Learning & Adaptability",
    desc: "Fast learner with strong self-learning skills and quick adaptation to new tools and workflows.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/codex404556",
  },
  {
    id: 2,
    img: "/wa.png",
    link: "https://wa.me/+4915214760899",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/error-best-381303331",
  },
];
