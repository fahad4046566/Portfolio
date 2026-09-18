import { IoLogoReact } from "react-icons/io5";
import { TbBrandJavascript, TbBrandMysql, TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss, SiMongodb, SiShadcnui, SiTypescript, SiPrisma, SiPostgresql, SiSocketdotio, SiReactquery, SiZod, SiRedis, SiNestjs } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt, FaGithub, FaNodeJs } from "react-icons/fa";
import { GiMatterStates, GiDaisy } from "react-icons/gi";
import { TbViewportShort } from "react-icons/tb";
import { MdWebhook, MdAnimation } from "react-icons/md";
import { IoLogoVercel } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { FaPhp, FaLaravel, FaFlutter } from "react-icons/fa6";

export const skills = [
  {
    id: 1,
    category: "Frontend",
    skills: [
      { name: "React", icon: <IoLogoReact /> },
      { name: "Next.js", icon: <TbBrandNextjs /> },
      { name: "JavaScript", icon: <TbBrandJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Flutter", icon: <FaFlutter /> },
      { name: "HTML5", icon: <TiHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    id: 2,
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <FaNodeJs /> },
      { name: "NestJS", icon: <SiNestjs /> },
      { name: "PHP", icon: <FaPhp /> },
      { name: "Laravel", icon: <FaLaravel /> },
      { name: "Socket.io", icon: <SiSocketdotio /> },
    ],
  },
  {
    id: 3,
    category: "Database & ORM",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Mongoose", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Prisma", icon: <SiPrisma /> },
      { name: "MySQL", icon: <TbBrandMysql /> },
      { name: "Redis", icon: <SiRedis /> },
    ],
  },
  {
    id: 4,
    category: "State & Data",
    skills: [
      { name: "Context API", icon: <GiMatterStates /> },
      { name: "useReducer", icon: <TbViewportShort /> },
      { name: "Custom Hooks", icon: <MdWebhook /> },
      { name: "TanStack Query", icon: <SiReactquery /> },
      { name: "Zod", icon: <SiZod /> },
    ],
  },
  {
    id: 5,
    category: "UI Libraries",
    skills: [
      { name: "DaisyUI", icon: <GiDaisy /> },
      { name: "ShadCN UI", icon: <SiShadcnui /> },
      { name: "Framer Motion", icon: <MdAnimation /> },
    ],
  },
  {
    id: 6,
    category: "Tools",
    skills: [
      { name: "Git & GitHub", icon: <FaGithub /> },
      { name: "Vercel", icon: <IoLogoVercel /> },
      { name: "VS Code", icon: <VscVscode /> },
    ],
  },
];

export default skills;