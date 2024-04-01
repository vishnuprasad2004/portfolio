"use client";

import { Space_Mono } from "next/font/google";
import { DiJava, DiJavascript1, DiPython, DiCss3, DiHtml5, DiNodejs, DiNpm, DiMongodb, DiReact, DiPhotoshop } from "react-icons/di";
import { SiInkscape, SiCanva, SiTypescript } from "react-icons/si";

const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] })

const SkillsSection = () => {
    return (
        <div className={spaceMono.className + " lg:text-3xl text-xl text-center lg:h-screen h-full w-screen flex flex-col justify-center items-center"}>
          <p className="">What I can work in</p>
          <div className="flex gap-7 lg:text-5xl text-2xl flex-wrap p-5">
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
            
          </div>
        </div>

    )
}


export default SkillsSection