"use client ";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaFigma,
  FaGithub,
  FaGit,
  FaReact,
} from "react-icons/fa";

import { MdTranslate } from "react-icons/md"; // i18next
import { DiDatabase } from "react-icons/di"; // SQL
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si"; // TypeScript
import { FaSyncAlt } from "react-icons/fa"; // React Query
import { IoStarOutline } from "react-icons/io5"; // Redux
import { MdSearch } from "react-icons/md"; // Axios
import { title } from "process";
import { describe } from "node:test";
// about data
const about = {
  title: "About me ",
  description:
    "I am a Frontend Web Developer specializing in Next.js, React, TypeScript, and TailwindCSS, with hands-on experience building responsive, dynamic, and user-friendly web applications. My expertise extends to SQL, Redux, React Query, Axios, i18next, and backend integration, giving me the ability to connect frontend development with server-side operations seamlessly.I have a strong foundation in creating intuitive UI/UX designs and delivering smooth user experiences using modern tools and frameworks. Passionate about clean code, efficient workflows, and continuous learning, I strive to solve technical challenges with innovative solutions.",
  info:[
    {
      fieldName:"Name",
      fieldValue:"Hadil Yahi",

    },
    {
      fieldName:"Phone",
      fieldValue:"0660717211",

    },
    {
      fieldName:"Experience",
      fieldValue:"1 Years ",

    },
    {
      fieldName:"Email",
      fieldValue:"hadil",

    },
    {
      fieldName:"Instagram",
      fieldValue:"hadil.yh404",

    },
    {
      fieldName:"Nationality",
      fieldValue:"Algeria",

    },
    {
      fieldName:"Freelance",
      fieldValue:"Available",

    },
    {
      fieldName:"Language",
      fieldValue:"Arabic , English",

    },
  ]
  };
// experience data 
 const experience ={
  icon :'/assets/resume/badge.svg'
 }

const Resume = () => {
  return <div>Resume page</div>;
};

export default Resume;
