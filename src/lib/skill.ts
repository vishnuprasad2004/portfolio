import { RiSupabaseLine } from "react-icons/ri";
import { FaReact, FaJsSquare, FaHtml5, FaPython, FaCss3 } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { SiPostman, SiExpo, SiTypescript, SiExpress, SiInkscape, SiFlask, SiVercel, SiNextdotjs, SiTailwindcss, SiSqlite, SiCanva, SiDocker, SiKubernetes, SiAmazonaws, } from "react-icons/si";
import { DiJava, DiMongodb } from "react-icons/di";
import { IconType } from "react-icons";
import { IoLogoNodejs } from "react-icons/io5";

type Skill = {
    name:string;
    icon: IconType;
}

const skills:Skill[] = [
    { name: "JavaScript", icon: FaJsSquare },
    { name:"Node.js", icon: IoLogoNodejs },
    { name: "Express.js", icon: SiExpress }, 
    { name: "Typescript", icon: SiTypescript },
    { name: "Java", icon: DiJava },
    { name: "Docker", icon: SiDocker },
    { name: "Kubernetes", icon: SiKubernetes },
    // { name: "C", icon: DIC},
    { name: "MongoDB", icon: DiMongodb },
    { name: "mySQL",icon: SiSqlite },
    { name: "Python", icon: FaPython },
    { name: "HTML", icon: FaHtml5},
    { name: "CSS3", icon: FaCss3 },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Next.JS", icon: SiNextdotjs },
    { name: "React.JS", icon: FaReact },
    { name: "Vercel", icon: SiVercel },
    { name: "Flask", icon: SiFlask},
    { name: "Postman", icon: SiPostman },
    { name: "React Native Expo", icon: SiExpo},
    { name: "Redux-Toolkit", icon: TbBrandRedux },
    { name: "Canva", icon: SiCanva},
    { name: "Inkscape", icon: SiInkscape },
    { name:"Supabase", icon: RiSupabaseLine },
    { name: "AWS", icon: SiAmazonaws } 
]


export default skills