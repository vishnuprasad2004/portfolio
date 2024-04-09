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
        <div id="skills" className={spaceMono.className + " lg:text-3xl text-xl text-center lg:h-screen h-[110%] w-screen flex flex-col justify-center items-center snap-start"}>
          <Heading text="My Skills"/>
          <div className="flex flex-wrap gap-2 p-5 text-5xl justify-center items-center">

              <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
              <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
              <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
              <img src="https://img.shields.io/badge/Inkscape-e0e0e0?style=for-the-badge&logo=inkscape&logoColor=080A13" />
              <img src="https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white"/>
              <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white"/>
              <img src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"/>
              <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"/>
              <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"/>
              <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"/>
              <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/>
              <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/>
              <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
              <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
              <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"/>
            {/* <DiJava />
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
            <DiPhotoshop /> */}
          </div>
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=vishnuprasad2004&layout=compact&theme=dark"/>
           {/* <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=vishnuprasad2004&layout=compact&theme=dark" alt="" width={0} height={0}/> */}
        </div>

    )
}


export default SkillsSection