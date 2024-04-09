"use client";

import { Alegreya, Space_Mono } from "next/font/google";
import Image, { ImageProps } from "next/image";
import Heading from "../Heading";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FC, useEffect, useRef, useState } from "react";
import SplitType from "split-type";

const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] })
const alegreya = Alegreya({ weight:"400", subsets: ["latin"] })
gsap.registerPlugin(ScrollTrigger);

interface SpecialTextProps {
  text:string;
}

const Special:FC<SpecialTextProps> = ({ text }) => {
  return (
    <i className="text-rose-400 bg-rose-400/10 lg:hover:bg-rose-800/100 lg:hover:text-white duration-150 lg:hover:brightness-150">{text}</i>
  )
}


const AboutSection:FC = () => {

  const [imageSrc, setImageSrc] = useState('');
  let [currentIndex,setCurrentIndex] = useState(0);
  let currentIdxRef = useRef(0);
  const animationRef = useRef<HTMLDivElement>(null)
  const displayPictureRef = useRef<HTMLImageElement>(null)

  const imageSources = ["/Vishnu Prasad Korada DP.jpg", "/Vishnu Prasad Korada DP 2.jpg"];
  
  useEffect(() => {
    const text = new SplitType("#content", { types:"chars,words" })
    console.log(text);

    gsap.from(text.words,{
      scrollTrigger: {
        trigger:text.words,
        start:"top 80%",
        end:"top 20%",
        scrub:true
      }, 
      stagger:0.1,
      opacity:0.2
    })
    
    if (animationRef.current) {
      gsap.to(animationRef.current, {
        x: '0%',
        opacity: 1,
        duration: 1,
        scale: 1,
        scrollTrigger: {
          trigger: animationRef.current,
          toggleActions: "reverse play restart play",
          start: 'top bottom',
          end: 'top 60%',
          // markers: true, // for development purpose only
          scrub: true,
        },

      });
    }

    // setInterval(() => {
    //   if (displayPictureRef.current && displayPictureRef.current.src == "/Vishnu Prasad Korada DP 2.jpg") {
    //     displayPictureRef.current.src = "/Vishnu Prasad Korada DP.jpg"
    //   } else if(displayPictureRef.current && displayPictureRef.current.src == "/Vishnu Prasad Korada DP.jpg") {
    //     displayPictureRef.current.src = "/Vishnu Prasad Korada DP 2.jpg"
    //   }
    // },1000)
  }, []);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setImageSrc(imageSources[currentIdxRef.current]);
  //     currentIdxRef.current = (currentIdxRef.current + 1) % imageSources.length; 
  //     return () => clearInterval(intervalId);
  //   }, 5000);
  // }, []);

  return (
    <div className="lg:h-screen h-[120%] w-screen flex flex-col text-center items-center justify-center snap-start" id="about">

      <Heading text="About Me" />

      <div className={spaceMono.className + " flex gap-3 lg:flex-row flex-col text-left items-center justify-evenly lg:pl-40 lg:pr-40 pl-9 pr-7 text-wrap opacity-0 scale-0 pb-10"} ref={animationRef}>
        <Image id="dp" ref={displayPictureRef} src={"/Vishnu Prasad Korada DP 2.jpg"} alt="my dp" className="rounded-full lg:w-72 m-2 w-2/3 select-none ring-around" width={288} height={288} />

        <p id="content">
          Hello 👋, I am <i className="text-rose-400 font-semibold decoration-rose-300 wavy-underline">Vishnu Prasad Korada</i>,<br />
          As a Computer Science sophomore with a passion for AI/ML, I am dedicated to pushing the boundaries of technology and innovation. I am working on understanding <Special text="Full Stack Development and Machine Learning Algorithms."/>🧑🏽‍💻
          <br />
          Beyond Programming, I also immerse myself in the world of <Special text="Graphic Designing "/> often as a creative outlet.🎨 I think there is more to design than aesthetics and I am constantly boosting my creative output by applying it in competitions, projects, and practical university scenarios.
          <br />
          {/* Beyond the digital realm, my fascination with geopolitics, space exploration and scientific research drives me to stay informed about the latest advancements. */}
          <br />
          <b>Let&apos;s connect and explore the limitless possibilities of Development and Design ... 😊✨✨</b>
        </p>
      </div>
    </div>
  )
}


export default AboutSection