"use client";

import { Space_Mono } from "next/font/google";
import Heading from "../Heading";
import { useEffect } from "react";
import gsap from "gsap";
import skills from "@/lib/skill";
import { IconType } from "react-icons";

const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] })

interface SkillChipProps {
  skillName: String;
  skillIcon:IconType;
  color: string
}

const SkillChip: React.FC<SkillChipProps> = ({ skillName, skillIcon:Icon, color }) => {
  return (
    <div
      className="opacity-0 skill flex items-center backdrop-blur-md gap-2 rounded-full border-2 border-[#FFB355]/50 bg-white/5 px-4 py-2 text-sm transition duration-200 ease-out hover:border-[#FFB355] hover:bg-[#FFB355]/10 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB355]/60"
      aria-label={`${skillName} skill`}
    >
      <Icon color={color} size={20} />
      <p className="whitespace-nowrap">{skillName}</p>
    </div>
  )
}


const SkillsSection = () => {

  useEffect(() => {
    gsap.to(".skill",{
      scrollTrigger: {
        trigger:"#skills-container",
        start:"top 60%",
        end:"top 40%",
        scrub:true,
      },
      stagger:0.1,
      opacity:1,
    })
  })

    return (
        <div id="skills" className={spaceMono.className + " lg:text-3xl text-xl text-center lg:h-screen h-screen mb-10 w-screen flex flex-col justify-center items-center lg:pl-44 lg:pr-44"}>
          <Heading text="My Skills"/>
          <div className="flex flex-wrap gap-2 p-5 text-5xl justify-center items-center" id="skills-container">
              {skills.map((skill, idx) => <SkillChip skillName={skill.name} skillIcon={skill.icon} key={idx} color={skill.color}/>)}
          </div>
            {/* <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=vishnuprasad2004&layout=compact&theme=dark"/> */}
           {/* <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=vishnuprasad2004&layout=compact&theme=dark" alt="" width={0} height={0}/> */}
        </div>

    )
}


export default SkillsSection