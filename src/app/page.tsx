"use client";

import React, { useEffect, useRef, useState } from "react";
import { Lacquer, Space_Mono, UnifrakturCook } from "next/font/google";
import SidePanel from "@/components/SidePanel";
import AboutSection from "@/components/layout/AboutSection";
import ProjectsSection from "@/components/layout/ProjectsSection";
import HeroSection from "@/components/layout/HeroSection";
import SkillsSection from "@/components/layout/SkillsSection";
import Image from "next/image";


const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] })
const unifrakturCook = UnifrakturCook({ weight: "700", subsets: ["latin"] })
const lacquer = Lacquer({ weight: "400", subsets: ["latin"] })

interface CursorPosition {
  x: number;
  y: number;
}

const Home = () => {

  // const [cursorSize, setCursorSize] = useState({ height:0, width:0 })
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({ x: 28, y: 28 })
  const mouseRef = useRef<HTMLDivElement>(null)
  
  // const handleMouseMove = (e: MouseEvent) => {
  //   setCursorPosition({ x: e.clientX, y: e.clientY });
  //   mouseRef.current?.style.setProperty("top",`${cursorPosition.y-28}px`)
  //   mouseRef.current?.style.setProperty("left",`${cursorPosition.x-28}px`)
  // }

  // useEffect(() => {
  //   document.addEventListener('mousemove', handleMouseMove);
  //   return () => { document.removeEventListener('mousemove', handleMouseMove) }
  // });

  
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
      {/* <div className="hidden lg:block rounded-full bg-white mix-blend-difference absolute top-0 left-0 h-[56px] w-[56px] opacity-80" id="cursor" ref={mouseRef} style={{ left: cursorPosition.x, top: cursorPosition.y }}></div> */}

      <div className="h-1/2 w-screen absolute top-0 left-0 bg-gradient-1"></div>
      {/* <div className="rounded-full h-2/5 w-2/4 blur-2xl bg-gradient-2 absolute top-10 left-10"></div> */}

      {/* barcode wala image */}
      <Image src="/barcode1.png" alt="assest" className="fixed lg:bottom-3 lg:left-3 lg:h-20 h-14 w-fit left-2 translate-y-1 select-none" draggable={"false"} width={80} height={80}/>

      <main className="w-screen flex items-center flex-col scroll-smooth pb-14 overflow-x-hidden z-50">
        <SidePanel />
        <HeroSection />
        <AboutSection/>
        <SkillsSection/>
        <ProjectsSection/>
      </main>
    </>
  );
}

export default Home