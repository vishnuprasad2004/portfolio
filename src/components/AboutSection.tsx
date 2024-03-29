"use client";

import { Space_Mono } from "next/font/google";
const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] })

const AboutSection = () => {
    return (
        <div className="h-screen w-screen flex flex-col text-center" id="about">

          <p className={spaceMono.className + " lg:text-3xl text-xl"}>About Me</p>
          <div className="flex gap-3 lg:flex-row flex-col text-left items-center justify-evenly lg:pl-20 lg:pr-20">
            <img src="./Vishnu Prasad Korada DP.jpg" alt="my dp" className="rounded-full lg:w-72 place-content-around" />
            <p>
              Hello 👋, I am Vishnu Prasad Korada,<br />
              As a Computer Science sophomore with a passion for AI/ML, I am dedicated to pushing the boundaries of technology and innovation. I am actively honing my skills in technologies like Python, Java, JavaScript, Typescript, Node.js, Express.js, Next.js, and Mongo DB. I am working on understanding Full Stack Development and Machine Learning Algorithms.🧑🏽‍💻
              <br />
              Beyond Programming, I also immerse myself in the world of design often as a creative outlet.🎨 I think there is more to design than aesthetics and I am constantly boosting my creative output by applying it in competitions, projects, and practical university scenarios.
              <br />
              Beyond the digital realm, my fascination with geopolitics, space exploration and scientific research drives me to stay informed about the latest advancements.🚀
              <br />
              Let's connect and explore the limitless possibilities of Development and Design ... 😊✨✨
            </p>
          </div>
        </div>
    )
}


export default AboutSection