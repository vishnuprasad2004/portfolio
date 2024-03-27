"use client";

import React from "react";
import { Space_Mono } from "next/font/google";
// import socials from "@/lib/SocialsLinks";
import projects from "@/lib/projects";
import SocialIcon from "@/components/SocialsIcon";
import ProjectCard from "@/components/ProjectCard";
import { DiCss3, DiExtjs, DiFirebase, DiHtml5, DiJava, DiJavascript1, DiMongodb, DiNodejs, DiNpm, DiPhotoshop, DiPython, DiReact } from "react-icons/di";
import { SiCanva, SiInkscape, SiTypescript } from "react-icons/si";
import socials from "@/lib/socialsLinks";


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
      <div id="panel" className="fixed flex bottom-0 right-0 gap-4 bg-neutral-800 p-2 pl-9 rounded-ss-full text-xl">
        {socials.map(social => {
          return (
            <SocialIcon link={social.link} name={social.name} icon={social.icon} key={social.name}></SocialIcon>
          )
        })}
      </div>
      <img src="./barcode1.png" alt="" className="fixed bottom-3 left-3 h-20 select-none" draggable={"false"} />


      <main className="w-screen flex items-center flex-col scroll-smooth pb-14">

        {/* hero section */}
        <div className="min-h-screen flex justify-center items-center">

          <div className="flex flex-col justify-center items-center w-screen">

            <span className={spaceMono.className + " text-1xl select-none"}>Hello👋🏽, I am</span>
            <span className={spaceMono.className + " lg:text-8xl select-none text-3xl "}>VishnuPrasadKorada™</span>
            <span className={spaceMono.className + " text-1xl select-none"}>Web Developer || Graphic Designer</span>

          </div>
        </div>
        {/* Technologies I know */}
        <div className={spaceMono.className + " text-3xl text-center"}>
          <p>Tech Stack</p>
          <div className="flex gap-7 text-6xl">
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
        <div className="flex flex-grow pt-10">
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