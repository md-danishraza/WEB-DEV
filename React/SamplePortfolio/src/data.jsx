import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-cyan-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-cyan-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-cyan-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

import unsplash from "./assets/unsplash.png";
import mixmaster from "./assets/mixmaster.png";

export const projects = [
  {
    id: nanoid(),
    img: unsplash,
    url: "https://unsplash-api-image.netlify.app/",
    github: "https://github.com/md-danishraza",
    title: "Unsplash",
    text: "Find any image assets from the unsplash. Created using the API of unplash and react Query for caching. It includes loading and error handling state with custom hooks",
  },
  {
    id: nanoid(),
    img: mixmaster,
    url: "https://mix-master-cocktaildb.netlify.app/",
    github: "https://github.com/md-danishraza",
    title: "Mix master",
    text: "Created using the free cocktailDB API. it implements fetching, filtering, caching, routing (react router dom) and form submission with loader and action methods for fetching of data pre page rendering.",
  },
];
