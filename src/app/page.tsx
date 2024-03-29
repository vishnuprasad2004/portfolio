"use client";

import React, { MouseEventHandler, useEffect, useState } from "react";
import { Lacquer, Space_Mono, UnifrakturCook } from "next/font/google";
import { DiCss3, DiHtml5, DiJava, DiJavascript1, DiMongodb, DiNodejs, DiNpm, DiPhotoshop, DiPython, DiReact } from "react-icons/di";
import { SiCanva, SiInkscape, SiTypescript } from "react-icons/si";
import SidePanel from "@/components/SidePanel";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import HeroSection from "@/components/HeroSection";


const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] })
const unifrakturCook = UnifrakturCook({ weight: "700", subsets: ["latin"] })
const lacquer = Lacquer({ weight: "400", subsets: ["latin"] })

interface CursorPosition {
  x: number;
  y: number;
}

const Home = () => {


  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);



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
      <div className="rounded-full bg-white bg-blend-difference absolute top-0 left-0" id="cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }}></div>

      <div className="h-1/2 w-screen absolute top-0 left-0 bg-gradient-1"></div>
      {/* <div className="rounded-full h-2/5 w-2/4 blur-2xl bg-gradient-2 absolute top-10 left-10"></div> */}

      {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="scale-50 absolute top-10 left-10 bg-gradient-2">
        <path fill="#FF0066" d="M26.9,-35.6C38.6,-22.2,54.5,-17.3,56.6,-9.4C58.7,-1.5,47.1,9.5,38.9,21.3C30.7,33.1,26,45.8,14.7,57.4C3.3,69,-14.7,79.4,-24.8,73.4C-35,67.5,-37.2,45.1,-37.9,29.1C-38.6,13,-37.7,3.3,-41.5,-12.8C-45.2,-28.9,-53.6,-51.4,-47.4,-65.8C-41.3,-80.3,-20.7,-86.7,-6.5,-78.9C7.6,-71.2,15.1,-49.1,26.9,-35.6Z" transform="translate(100 100)" />
      </svg> */}

      {/* panel section */}
      <img src="./barcode1.png" alt="assest" className="fixed lg:bottom-3 lg:left-3 lg:h-20 h-14 left-2 translate-y-1 select-none" draggable={"false"} />


      <main className="w-screen flex items-center flex-col scroll-smooth pb-14 overflow-x-hidden z-50">
        <SidePanel />

        {/* hero section */}
        <HeroSection/>

        {/* About Me */}
        <AboutSection/>

        {/* Technologies I know */}
        <div className={spaceMono.className + " lg:text-3xl text-xl text-center"}>
          <p>What I can work in</p>
          <div className="flex gap-7 lg:text-5xl text-2xl">
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

        <br /><br />

        {/* Projects I Made */}
        <ProjectsSection/>
      </main>
    </>
  );
}

export default Home