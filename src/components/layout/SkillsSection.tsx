"use client";

import { Space_Mono } from "next/font/google";
import Image from "next/image";
import { DiJava, DiJavascript1, DiPython, DiCss3, DiHtml5, DiNodejs, DiNpm, DiMongodb, DiReact, DiPhotoshop } from "react-icons/di";
import { SiInkscape, SiCanva, SiTypescript } from "react-icons/si";
import Heading from "../Heading";
import ProgressBar from "../ProgressBar";

const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] })

const SkillsSection = () => {
    return (
        <div id="skills" className={spaceMono.className + " lg:text-3xl text-xl text-center lg:h-screen h-full w-screen flex flex-col justify-center items-center snap-start"}>
          <Heading text="My Skills"/>
          <div className="flex gap-7 flex-wrap p-5 text-5xl justify-around items-center">
            {/* <span>Here are the skills I am actively working on ...</span> */}
            <ProgressBar percentage={100}/>

            <DiJava />
            <DiJavascript1 />
            <DiPython />
            <DiCss3 />
            <DiHtml5 />
            <DiNodejs />
            <DiNpm />
            <DiReact />
            <DiMongodb />
            <SiTypescript />
            <SiCanva />
            <SiInkscape />
            <DiPhotoshop />
            {/* <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=vishnuprasad2004&layout=compact&theme=dark"/> */}
          </div>
        </div>

    )
}


export default SkillsSection