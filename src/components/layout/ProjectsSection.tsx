"use client";

import projects from "@/lib/projects";
import ProjectCard from "../ProjectCard";
import { Space_Mono } from "next/font/google";
const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] })

const ProjectsSection = () => {
    return (
        <div className=" text-center lg:h-screen h-full w-screen p-5">
          <p className={spaceMono.className + " lg:text-3xl text-xl"}>Some of the recent Projects I made</p>
          <div className="flex flex-grow pt-10 flex-col lg:flex-row justify-evenly flex-wrap p-3 gap-3">
            {projects.map((project,i) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                />
              )
            })}
          </div>
        </div>
    )
}

export default ProjectsSection