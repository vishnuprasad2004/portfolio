"use client";

import { Space_Mono } from "next/font/google";
const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] })

const AboutSection = () => {
    return (
        <div className="lg:h-screen h-full w-screen flex flex-col text-center items-center justify-center" id="about">

          <p className={spaceMono.className + " text-3xl mb-4 "}>About Me</p>
          <div className="flex gap-3 lg:flex-row flex-col text-left items-center justify-evenly lg:pl-40 lg:pr-40 pl-9 pr-5 text-wrap">
            <img src="./Vishnu Prasad Korada DP.jpg" alt="my dp" className="rounded-full lg:w-72 m-2 w-24" />
            <p>
              Hello 👋, I am Vishnu Prasad Korada,<br />
              As a Computer Science sophomore with a passion for AI/ML, I am dedicated to pushing the boundaries of technology and innovation. I am working on understanding Full Stack Development and Machine Learning Algorithms.🧑🏽‍💻
              <br />
              Beyond Programming, I also immerse myself in the world of design often as a creative outlet.🎨 I think there is more to design than aesthetics and I am constantly boosting my creative output by applying it in competitions, projects, and practical university scenarios.
              <br />
              Beyond the digital realm, my fascination with geopolitics, space exploration and scientific research drives me to stay informed about the latest advancements.🚀
              <br />
              <b>Let's connect and explore the limitless possibilities of Development and Design ... 😊✨✨</b>
            </p>
          </div>
        </div>
    )
}


export default AboutSection