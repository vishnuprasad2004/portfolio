"use client";

import React, { useEffect, useRef, useState } from "react";
import { Lacquer, Space_Mono, UnifrakturCook } from "next/font/google";
import SidePanel from "@/components/SidePanel";
import AboutSection from "@/components/layout/AboutSection";
import ProjectsSection from "@/components/layout/ProjectsSection";
import HeroSection from "@/components/layout/HeroSection";
import SkillsSection from "@/components/layout/SkillsSection";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap"
import BlogCard from "@/components/BlogCard";
import { FaHashnode } from "react-icons/fa6";
import Heading from "@/components/Heading";
import Loader from "@/components/Loader";


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
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.to("#duck", {
      x: '+=1000px',
      duration: 15,
      ease: 'linear',
      repeat: -1,
      stagger: {
        amount: 0.8,
        from: 'start',
        grid: 'auto',
      },
    });

  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 2000) // 2 seconds

    return () => clearTimeout(timeout)
  }, [])

  if (loading) return <Loader />
  
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
      <Image id="duck" unoptimized src="/duck-ducky.gif" className="fixed -bottom-5 -left-20 lg:-bottom-20 z-30 scale-[30%] lg:scale-[40%] select-none" width={200} height={100} alt="meow"/>
      <div className="h-1/2 w-screen absolute top-0 left-0 bg-gradient-1"></div>
      {/* <div className="rounded-full h-2/5 w-2/4 blur-2xl bg-gradient-2 absolute top-10 left-10"></div> */}

      {/* barcode wala image */}
      <Image src="/barcode1.png" alt="assest" className="fixed lg:bottom-3 lg:left-3 lg:h-20 h-14 w-fit left-2 translate-y-1 select-none z-50" draggable={"false"} width={80} height={80}/>

      <main className="w-screen flex items-center flex-col scroll-smooth mb-40 overflow-x-hidden z-50 snap-mandatory snap-y">
        <SidePanel />
        <HeroSection />
        <AboutSection/>
        <SkillsSection/>
        <ProjectsSection/>
        {/* <ContactSection/> */}
        {/* Design Section */}
        {/* Blogs Section */}
        <br />
        <br />
        <Heading text="Blogs"/>
        <BlogCard image="https://github.com/user-attachments/assets/5bcf3bc0-5b4b-4e60-b6ce-2f9a15666f7f" title="But ... What is JSON Schema" domains={["config","Backend"]} description="Have you ever wondered how in node.js, package.json and package-lock.json file's structure is predefined and prompts a description whenever we hover over a key ... also it has a set of predefined keys and values." link="https://vishnuprasadkorada.hashnode.dev/but-what-is-json-schema" platforms={FaHashnode} latest={false}/>
      </main>
      <footer className={spaceMono.className + " text-rose-500 text-center pt-10 lg:pb-2 pb-16 backdrop-blur-sm"}>
          ©{new Date().getFullYear()} ❤️ Designed and Implemented by <i><Link href="https://github.com/vishnuprasad2004/portfolio">Vishnu Prasad Korada</Link></i>
      </footer>
    </>
  );
}

export default Home