"use client";

import projects from "@/lib/projects";
import ProjectCard from "../ProjectCard";
import { Space_Mono } from "next/font/google";
import Heading from "../Heading";
const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] })

const ProjectsSection = () => {
    return (
        <div className=" text-center lg:h-screen h-full w-screen p-5">
          <Heading text="Recent Projects"/>
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