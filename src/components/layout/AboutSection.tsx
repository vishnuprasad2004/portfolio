"use client";

import { Alegreya, Space_Mono } from "next/font/google";
import Image from "next/image";
import Heading from "../Heading";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react";

const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] })
const alegreya = Alegreya({ weight:"400", subsets: ["latin"] })
gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {

  const animationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
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
  }, []);

  return (
    <div className="lg:h-screen h-full w-screen flex flex-col text-center items-center justify-center snap-start" id="about">

      <Heading text="About Me" />

      <div className={spaceMono.className + " flex gap-3 lg:flex-row flex-col text-left items-center justify-evenly lg:pl-40 lg:pr-40 pl-9 pr-7 text-wrap opacity-0 scale-0 pb-10"} ref={animationRef}>
        <Image src="/Vishnu Prasad Korada DP.jpg" alt="my dp" className="rounded-full lg:w-72 m-2 w-1/2 select-none ring-around" width={288} height={288} />

        <p>
          Hello 👋, I am <i className="text-rose-400 font-semibold decoration-rose-300 wavy-underline">Vishnu Prasad Korada</i>,<br />
          As a Computer Science sophomore with a passion for AI/ML, I am dedicated to pushing the boundaries of technology and innovation. I am working on understanding <i className="text-rose-400 bg-rose-300/10">Full Stack Development and Machine Learning Algorithms.</i>🧑🏽‍💻
          <br />
          Beyond Programming, I also immerse myself in the world of <i className="text-rose-400 bg-rose-400/10">design</i> often as a creative outlet.🎨 I think there is more to design than aesthetics and I am constantly boosting my creative output by applying it in competitions, projects, and practical university scenarios.
          <br />
          Beyond the digital realm, my fascination with geopolitics, space exploration and scientific research drives me to stay informed about the latest advancements.
          <br />
          <b>Let&apos;s connect and explore the limitless possibilities of Development and Design ... 😊✨✨</b>
        </p>
      </div>
    </div>
  )
}


export default AboutSection