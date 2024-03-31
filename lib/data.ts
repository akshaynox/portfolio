import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
// import { LuGraduationCap } from "react-icons/lu";
import spotifyVisImg from "@/public/spotifyVisImg.jpg";
import noxdocsImg from "@/public/noxdocsImg.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Software Engineer",
    location: "TA Digital",
    description: "I'm working as a Frontend Engineer at TA Digital.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  },
  {
    title: "Software Development Engineer",
    location: "yellow.ai",
    description:
      "I worked as a front-end developer for a year in the Product Led Growth team.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
  {
    title: "Software Engineer",
    location: "HCL Technologies",
    description:
      "I worked as a developer working on DryIce AIOps projects including iAutomate & AEX",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2022",
  },
  // {
  //   title: "Bachelor of Technology in Computer Science & Engineering",
  //   location: "AKGEC, Ghaziabad",
  //   description: "",
  //   icon: React.createElement(LuGraduationCap),
  //   date: "2018",
  // },
] as const;

export const projectsData = [
  {
    title: "NoxDocs",
    description:
      "Workspace App with Realtime cursors, Nextjs 13, Stripe, Drizzle ORM, Tailwind, Supabase, Sockets",
    tags: [
      "React",
      "Next.js 13",
      "Typescript",
      "Tailwind",
      "Sockets",
      "Drizzle ORM",
    ],
    imageUrl: noxdocsImg,
  },
  {
    title: "Spotify Visualize",
    description:
      "A web app to visualize user's personalized Spotify data using Spotify Web APIs.",
    tags: ["React", "Express", "Styled Components", "Spotify API"],
    imageUrl: spotifyVisImg,
  },
  // {
  //   title: "NoxDocs2",
  //   description:
  //     "Workspace App with Realtime cursors, Nextjs 13, Stripe, Drizzle ORM, Tailwind, Supabase, Sockets",
  //   tags: [
  //     "React",
  //     "Next.js 13",
  //     "Typescript",
  //     "Tailwind",
  //     "Sockets",
  //     "Drizzle ORM",
  //   ],
  //   imageUrl: noxdocsImg,
  // },
  // {
  //   title: "Tweedle",
  //   description: "",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: "",
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Electron.js",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;
