"use client";
import React from "react";

interface ProjectCardProps {
    title:string;
    description:string;
    image?: string,
    link: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({title, description, image, link}) => {
    return(
        <a href={link} className=" bg-neutral-900 p-2 rounded-2xl flex flex-col lg:w-1/4 m-2 lg:m-0">
            <img src={image} alt="image about project" className="rounded-xl"/>
            <div className="p-3">
                <b>{title}</b><br/>
                <span>{description}</span>
            </div>
        </a>
    )
}


export default ProjectCard