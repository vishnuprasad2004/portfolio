"use client";

import projects from "@/lib/projects";
import ProjectCard from "../ProjectCard";
import { Space_Mono } from "next/font/google";
import Heading from "../Heading";
import React from "react";
const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] })

const ProjectsSection: React.FC = () => {
    return (
        <div id="projects" className={spaceMono.className + " text-center h-full w-screen p-5"}>
          <Heading text="Recent Projects"/>
          <div className="flex flex-grow pt-10 flex-col lg:flex-row justify-evenly flex-wrap gap-4 items-center">
            {projects.map((project,i) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                  latest={project.latest}
                  technologiesUsed={project.technologiesUsed}
                />
              )
            })}
          </div>
        </div>
    )
}

export default ProjectsSection