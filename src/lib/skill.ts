import { RiSupabaseLine } from "react-icons/ri";
import { FaReact, FaJsSquare, FaHtml5, FaPython, FaCss3 } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { SiPostman, SiExpo, SiTypescript, SiExpress, SiInkscape, SiFlask, SiVercel, SiNextdotjs, SiTailwindcss, SiCanva, SiDocker, SiKubernetes, SiAmazonaws, } from "react-icons/si";
import { DiJava, DiMongodb } from "react-icons/di";
import { IconType } from "react-icons";
import { IoLogoNodejs } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";

type Skill = {
    name:string;
    icon: IconType;
    color: string;
}

const skills:Skill[] = [
    { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
    { name:"Node.js", icon: IoLogoNodejs, color: "#339933" },
    { name: "Express.js", icon: SiExpress, color: "#FFFFFF" }, 
    { name: "Typescript", icon: SiTypescript, color: "#3178C6" },
    { name: "Java", icon: DiJava,  color: "#007396" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    // { name: "C", icon: DIC},
    { name: "MongoDB", icon: DiMongodb, color: "#47A248" },
    { name: "PostgreSQL",icon: BiLogoPostgresql, color: "#316192" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "HTML", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS", icon: FaCss3, color: "#1572B6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Next.JS", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "React.JS", icon: FaReact, color: "#61DAFB" },
    { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
    { name: "Flask", icon: SiFlask, color: "#FFFFFF" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "React Native Expo", icon: SiExpo, color: "#DDDDDD" },
    { name: "Redux-Toolkit", icon: TbBrandRedux, color: "#764ABC" },
    { name: "Canva", icon: SiCanva, color: "#00C4CC" },
    { name: "Inkscape", icon: SiInkscape, color: "#AAAAAA" },
    { name:"Supabase", icon: RiSupabaseLine, color: "#3ECF8E" },
    { name: "AWS (S3, EC2)", icon: SiAmazonaws, color: "#FF9900" }, 
]


export default skills