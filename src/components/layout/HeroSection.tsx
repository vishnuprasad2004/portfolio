"use client";
import { Lacquer, Space_Mono, UnifrakturCook } from "next/font/google";
import { FC, useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';

const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] })
const unifrakturCook = UnifrakturCook({ weight: "700", subsets: ["latin"] })
const lacquer = Lacquer({ weight: "400", subsets: ["latin"] })


const HeroSection:FC = () => {

    // attempt to change the fonts every once in a few seconds
    const fontClassNames = [spaceMono.className, unifrakturCook.className]
    const [ currentFontIdx, setCurrentFontIdx ] = useState(0)
    
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentFontIdx(prevIdx => (prevIdx + 1) % fontClassNames.length)
      },2000)
      return () => clearInterval(interval)
    })

    // gsap animations
    const nameRef = useRef<HTMLSpanElement>(null)
    const handWaveRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
      if (nameRef.current) {
        gsap.to(nameRef.current, {
          duration: 1,
          scale: 1,
          opacity: 1,
          ease: "power1.inOut",
        });
      }
    }, []);

    useEffect(()=> {
      if (handWaveRef.current) {
        const t1 = gsap.timeline({ repeat: -1 })
        t1.to(handWaveRef.current, {
          rotateX:"30", 
          duration:2, 
          ease:"power1"
        })
      }
    },[])

    return (
        <div className="h-screen flex justify-center items-center" id="hero">
          <div className="flex flex-col justify-center items-center w-screen">

            <span className={spaceMono.className + " lg:text-2xl text-xl select-none"}>Hello <span className="wave-hand" ref={handWaveRef}>👋🏽</span>, I am</span>
            <span className={spaceMono.className + " lg:text-8xl select-none text-3xl my-name brightness-150 scale-0 opacity-0"} ref={nameRef}>VishnuPrasadKorada™</span>
            <span className={spaceMono.className + " lg:text-2xl text-xl select-none"}>Developer & Designer</span>

            <a href="./Vishnu Prasad Korada Resume.pdf" download="./Vishnu Prasad Korada Resume.pdf" className="p-3 pt-1 pb-1 rounded-full m-3 border-2 border-solid border-neutral-600 border-opacity-80 bg-neutral-800 select-none">Download My Resume</a>
          </div>
        </div>
    )
}

export default HeroSection