"use client";
import { Lacquer, Plus_Jakarta_Sans, Space_Mono, Unbounded, UnifrakturCook } from "next/font/google";
import { FC, useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';
import Image from "next/image";
import { HiDownload } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";

const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] })
const unifrakturCook = UnifrakturCook({ weight: "700", subsets: ["latin"] })
const lacquer = Lacquer({ weight: "400", subsets: ["latin"] })
const unbounded = Unbounded({ weight: "400", subsets: ["latin"] })



const HeroSection: FC = () => {

  // attempt to change the fonts every once in a few seconds
  const fontClassNames = [spaceMono.className, unifrakturCook.className]
  const [currentFontIdx, setCurrentFontIdx] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFontIdx(prevIdx => (prevIdx + 1) % fontClassNames.length)
    }, 2000)
    return () => clearInterval(interval)
  })

  // gsap animations
  const nameRef = useRef<HTMLSpanElement>(null)
  const handWaveRef = useRef<HTMLDivElement>(null)
  const subTitleRef = useRef<HTMLSpanElement>(null)

  const developerTextRef = useRef<HTMLDivElement>(null)
  const designerTextRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (nameRef.current) {
      gsap.to(nameRef.current, {
        duration: 1,
        scale: 1,
        opacity: 1,
        ease: "power1.inOut",
      });
    }

    if (subTitleRef.current) {
      gsap.to(subTitleRef.current, {
        duration: 1.5,
        opacity: 1,
        ease: "power1.inOut"
      })
    }

    if(developerTextRef.current) {
      gsap.to(developerTextRef.current, {
        x:"",
        opacity:0.8,
        ease:"power1.inOut",
        duration:1
      })
    }

    if(designerTextRef.current) {
      gsap.to(designerTextRef.current, {
        x:"",
        opacity:0.8,
        ease:"power1.inOut",
        duration:1
      })
    }

  }, []);

  // useEffect(() => {
  //   if (handWaveRef.current) {
  //     gsap.to(handWaveRef.current, {
  //       repeat:0,
  //       duration:5,
  //       ease:"back.inOut",
  //       rotation:360
  //     })
  //   }
  // }, [])

  return (
    <>
      {/* The low opacity accent texts that are only visible on mobile view */}
      {/* <div className={spaceMono.className + " absolute text-8xl font-bold select-none text-white/10 italic top-[30%] -left-52 rotate-90 lg:hidden opacity-0"} ref={developerTextRef}>Developer</div>
      <div className={unifrakturCook.className + " absolute text-9xl font-bold select-none text-white/10 italic top-[60%] rotate-90 -right-48 lg:hidden opacity-0"} ref={designerTextRef}>Designer</div> */}
      
      <div className="h-screen flex justify-center items-center snap-start relative" id="hero">
          {/* <Image src={"/worm.png"} alt="worm" height={100} width={100} className="absolute hidden lg:block bottom-16 left-0 rotate-45 lg:hover:rotate-[-60deg] scale-110 lg:hover:translate-y-11 lg:hover:-translate-x-7 duration-500"/> */}
        <div className="flex flex-col justify-center items-center w-screen duration-700">
          <span className={spaceMono.className + " lg:text-2xl text-xl select-none"}>Hello <div className="wave-hand inline-block" ref={handWaveRef}><Image src="/hand-wave.png" height={32} width={32} alt="hello"/></div>, I am</span>
          <span className={spaceMono.className + " lg:text-8xl select-none text-3xl my-name brightness-150 scale-0 opacity-0"} ref={nameRef} aria-label="Vishnu Prasad Korada">VishnuPrasadKorada™</span>
          <span className={spaceMono.className + " lg:text-2xl text-xl select-none opacity-0"} ref={subTitleRef} aria-label="Developer and Designer">Software Engineer & Designer</span>

          <div className="flex lg:flex-row flex-col mt-5 ">
            <a href="./Vishnu Prasad Korada Resume.pdf" download="./Vishnu Prasad Korada Resume.pdf" className={`${spaceMono.className} flex items-center py-2 px-5 rounded-full bg-white text-black hover:bg-gray-100 transition-colors duration-300 select-none m-1`}>
              <HiDownload className="inline-block mr-2" />
              <p>Download My Resume</p>
            </a>
            <a href="" 
              onClick={(e) => {e.preventDefault(); document.getElementById("projects")?.scrollIntoView({behavior:"smooth"})}} 
              className={`${spaceMono.className} flex items-center py-2 px-5 rounded-full border border-white hover:bg-white hover:text-black transition-colors duration-300 select-none m-1`}>
              <p>Check out my Projects</p>
            </a>
          </div>

          <div>
            {/* linkedin icon button */}
            <a href="https://www.linkedin.com/in/vishnu-prasad-korada/" target="_blank" rel="noopener noreferrer" className={`${spaceMono.className} flex items-center py-4 px-4 rounded-full border border-white hover:bg-white hover:text-black transition-colors duration-300 select-none m-1`}>
              <FaLinkedinIn />
            </a>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection