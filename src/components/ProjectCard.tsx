"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoFileDirectoryFill } from "react-icons/go";
import { LuExternalLink } from "react-icons/lu";
gsap.registerPlugin(ScrollTrigger)

interface ProjectCardProps {
    title:string;
    description:string;
    image: string,
    sourceLink: string,
    deploymentLink?: string,
    latest: boolean,
    technologiesUsed: { name: string, icon: string|null }[]
    onOpen?: () => void;
}


const ProjectCard: React.FC<ProjectCardProps> = ({title, description, image, sourceLink, latest, technologiesUsed, deploymentLink, onOpen}) => {

    const cardRef = React.useRef<HTMLDivElement>(null);
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
        <div ref={cardRef} className=" bg-neutral-900 p-2 rounded-3xl flex flex-col lg:w-1/4 w-[90%] lg:m-0 h-2/6 text-left opacity-0 scale-0">
            <div className="relative">
                <Image src={image} alt="image about project" className="rounded-2xl w-full h-[200px]" width={500} height={500}/>
                {latest && <div className="absolute inset-0 bg-gradient-to-bl from-black/75 to-transparent rounded-2xl"></div>}
                {latest && <div className="absolute top-2 right-2 rounded-lg bg-green-500/15 text-green-500 px-2 py-1 text-xs font-semibold">new</div>}
            </div>
            <div className="py-2 px-1">
                <div className="flex justify-between items-center gap-x-1">
                    <b>{title}</b><br/>
                </div>
                <span className="text-sm text-neutral-300 leading-none">{description.substring(0,200) + (description.length>200?" ...":"")}</span>
                <br />
                <div className="flex flex-wrap mt-1 items-center gap-2">
                    {technologiesUsed.map((technology, i) => {
                        if (i<3) return(
                            <span key={technology.name} className="bg-[#7275DE]/15 text-[#7275DE] p-1 px-2 rounded-xl text-xs font-semibold hover:bg-[#7275DE]/25 transition-colors">{technology.name}</span>
                        )
                    })}
                    {technologiesUsed.length > 3 && <span className="text-neutral-400 text-sm">+{technologiesUsed.length-3}</span>}
                </div>
                <br />
                <div className="flex flex-col gap-2">
                    {deploymentLink ? (
                        <>
                            <div className="flex gap-2">
                                <a href={sourceLink} className="flex gap-x-1 items-center justify-center text-xs flex-1 p-2 rounded-3xl bg-neutral-800" target="_blank">
                                    <GoFileDirectoryFill className="text-base"/>
                                    <span>Source Code</span>
                                </a>
                                <a href={deploymentLink || ""} className="flex gap-x-1 items-center justify-center text-xs flex-1 p-2 rounded-3xl bg-neutral-800" target="_blank">
                                    <LuExternalLink className="text-base"/>
                                    <span>Link</span>
                                </a>
                            </div>
                            <button onClick={() => onOpen && onOpen()} className="w-full p-2 bg-neutral-800 rounded-3xl text-sm">
                                Description
                            </button>
                        </>
                    ) : (
                        <div className="flex gap-2">
                            <a href={sourceLink} className="flex gap-x-1 items-center justify-center text-xs flex-1 p-2 rounded-3xl bg-neutral-800" target="_blank">
                                <GoFileDirectoryFill className="text-base"/>
                                <span>Source Code</span>
                            </a>
                            <button onClick={() => onOpen && onOpen()} className="flex-1 p-2 bg-neutral-800 rounded-3xl text-sm">
                                Description
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}


export default ProjectCard