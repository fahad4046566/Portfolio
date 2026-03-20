import { IoLogoReact } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { GiMatterStates } from "react-icons/gi";
import { TbViewportShort } from "react-icons/tb";
import { MdWebhook } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { GiDaisy } from "react-icons/gi";
import { SiShadcnui } from "react-icons/si";
import { MdAnimation } from "react-icons/md";

export const skills = [
  {
    id: 1,
    category: "Frontend",
    skills: [
      { name: "React", level: 90, icon: <IoLogoReact /> },
      { name: "JavaScript", level: 85, icon: <TbBrandJavascript /> },
      { name: "CSS3", level: 80, icon: <FaCss3Alt /> },
      { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss /> },
      { name: "HTML5", level: 95, icon: <TiHtml5 /> },
    ],
  },
  {
    id: 2,
    category: "State Management",
    skills: [
      { name: "Context API", level: 85, icon: <GiMatterStates /> },
      { name: "useReducer", level: 80, icon: <TbViewportShort /> },
      { name: "Custom Hooks", level: 75, icon: <MdWebhook /> },
    ],
  },
  {
    id: 3,
    category: "Tools",
    skills: [
      { name: "Git & GitHub", level: 80, icon: <FaGithub /> },
      { name: "Vercel", level: 85, icon: <IoLogoVercel /> },
      { name: "VS Code", level: 90, icon: <VscVscode /> },
    ],
  },
  {
    id: 4,
    category: "UI Libraries",
    skills: [
      { name: "DaisyUI", level: 90, icon: <GiDaisy /> },
      { name: "ShadCN UI", level: 85, icon: <SiShadcnui /> },
      { name: "Framer Motion", level: 70, icon: <MdAnimation /> },
    ],
  },
];

export default skills;
