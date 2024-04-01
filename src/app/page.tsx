"use client";

import React, { MouseEventHandler, useEffect, useState } from "react";
import { Lacquer, Space_Mono, UnifrakturCook } from "next/font/google";
import { DiCss3, DiHtml5, DiJava, DiJavascript1, DiMongodb, DiNodejs, DiNpm, DiPhotoshop, DiPython, DiReact } from "react-icons/di";
import { SiCanva, SiInkscape, SiTypescript } from "react-icons/si";
import SidePanel from "@/components/SidePanel";
import AboutSection from "@/components/layout/AboutSection";
import ProjectsSection from "@/components/layout/ProjectsSection";
import HeroSection from "@/components/layout/HeroSection";
import SkillsSection from "@/components/layout/SkillsSection";


const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] })
const unifrakturCook = UnifrakturCook({ weight: "700", subsets: ["latin"] })
const lacquer = Lacquer({ weight: "400", subsets: ["latin"] })

interface CursorPosition {
  x: number;
  y: number;
}

const Home = () => {


  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({ x: 0, y: 0 });

  const [totalY, setTotalY] = useState(0); 
  const [scrollBar, setScrollBar] = useState(0); 
  
  if(typeof window !== 'undefined') {
    const [y, setY] = useState(window.scrollY!)

    useEffect(() => {
      window.addEventListener("scroll", () => setY(window.scrollY));
      const element = document.getElementsByTagName("body")[0];
      setTotalY(element.clientHeight);
      setScrollBar(window.innerHeight);
    }, [y]);
  
  }
    // const scroll = `${((y + scrollBar) / totalY) * 100}%`;

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

      {/* {if(typeof window !== 'undefined') }
      <div className="hidden lg:block fixed top-0 left-0 h-1 bg-yellow-500 z-30" style={{ }} id="bar"></div> */}

      <div className="h-1/2 w-screen absolute top-0 left-0 bg-gradient-1"></div>
      {/* <div className="rounded-full h-2/5 w-2/4 blur-2xl bg-gradient-2 absolute top-10 left-10"></div> */}


      {/* panel section */}
      <img src="./barcode1.png" alt="assest" className="fixed lg:bottom-3 lg:left-3 lg:h-20 h-14 left-2 translate-y-1 select-none" draggable={"false"} />


      <main className="w-screen flex items-center flex-col scroll-smooth pb-14 overflow-x-hidden z-50">
        <SidePanel />

        {/* hero section */}
        <HeroSection/>

        {/* About Me */}
        <AboutSection/>

        {/* Technologies I know */}
        <SkillsSection/>

        {/* Projects I Made */}
        <ProjectsSection/>

        
      </main>
    </>
  );
}

export default Home