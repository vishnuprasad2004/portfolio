"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

interface ProjectCardProps {
    title:string;
    description:string;
    image: string,
    link: string,
    latest: boolean,
    technologiesUsed:string[]
}


const ProjectCard: React.FC<ProjectCardProps> = ({title, description, image, link, latest, technologiesUsed}) => {
    
    const cardRef = React.useRef<HTMLAnchorElement>(null);
    useEffect(() => {
        if(cardRef.current) {
            gsap.to(cardRef.current, {
                opacity:1,
                duration:1,
                scale:1,
                scrollTrigger: {
                    trigger: cardRef.current,
                    toggleActions: "reverse play restart play",
                    start: "top bottom",
                    end: "top 60%",
                    scrub: true
                }
            })
        }
    },[])


    return(
        <a href={link} ref={cardRef} className=" bg-neutral-900 p-2 rounded-2xl flex flex-col lg:w-1/4 m-2 lg:m-0 h-2/6 text-left opacity-0 scale-0">
            <Image src={image} alt="image about project" className="rounded-xl w-full h-[200px]" width={500} height={500}/>
            <div className="p-3">
                <div className="flex justify-between items-center">
                    <b>{title}</b><br/>
                    {latest && <div className="rounded-sm bg-[#FFB355]/15 text-yellow-300 pl-1 pr-1">New</div>}
                </div>
                <span className="text-sm text-neutral-300">{description}</span>
                <br />
                {technologiesUsed.map(technology => {
                    return(
                        <span key={technology} className="text-xs pl-1 pr-1 m-1 rounded-full bg-[#7275DE]/15 text-[#7275DE]">{technology}</span>
                    )
                })}
                <br />
                <span className="italic text-xs text-neutral-600 text-left m-0 p-0">*click to go to the project repo or deployed link</span>
            </div>
        </a>
    )
}


export default ProjectCard