"use client";

import React from "react";
import { Space_Mono } from "next/font/google";
import projects from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import { DiCss3,DiHtml5, DiJava, DiJavascript1, DiMongodb, DiNodejs, DiNpm, DiPhotoshop, DiPython, DiReact } from "react-icons/di";
import { SiCanva, SiInkscape, SiTypescript } from "react-icons/si";
import SidePanel from "@/components/SidePanel";


const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] })


const Home = () => {
  return (
    <>
      <svg className="hidden">
        <filter id="grainy">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.4"
          />
        </filter>
      </svg>

      {/* panel section */}
      <SidePanel/>
      
      <img src="./barcode1.png" alt="assest" className="fixed lg:bottom-3 lg:left-3 lg:h-20 h-14 left-2 translate-y-1 select-none" draggable={"false"} />


      <main className="w-screen flex items-center flex-col scroll-smooth pb-14 overflow-x-hidden">

        {/* hero section */}
        <div className="h-screen flex justify-center items-center">

          <div className="flex flex-col justify-center items-center w-screen">

            <span className={spaceMono.className + " text-1xl select-none"}>Hello👋🏽, I am</span>
            <span className={spaceMono.className + " lg:text-8xl select-none text-3xl "}>VishnuPrasadKorada™</span>
            <span className={spaceMono.className + " lg:text-2xl text-xl select-none"}>Developer & Designer</span>

          </div>
        </div>
        {/* Technologies I know */}
        <div className={spaceMono.className + " text-3xl text-center"}>
          <p>What I can work in</p>
          
          <div className="flex gap-7 text-3xl">
            <DiJava />
            <DiJavascript1 />
            <DiPython />
            <DiCss3 />
            <DiHtml5 />
            <DiNodejs />
            <DiNpm />
            <DiMongodb />
            <SiInkscape />
            <SiCanva />
            <SiTypescript />
            <DiReact />
            <DiPhotoshop />

          </div>
        </div>

        {/* Projects I Made */}
        <div className="flex flex-grow pt-10 flex-col lg:flex-row p-3 gap-3">
          {projects.map(project => {
            return (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
              />
            )
          })}
        </div>
      </main>
    </>
  );
}


export default Home