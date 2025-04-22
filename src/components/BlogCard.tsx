"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaHashnode } from "react-icons/fa6";
import { IconType } from "react-icons";
gsap.registerPlugin(ScrollTrigger)

interface BlogCardProps {
    title:string;
    description:string;
    image: string,
    link: string,
    latest: boolean,
    domains: string[],
    platforms: IconType,
}


const BlogCard: React.FC<BlogCardProps> = ({title, description, image, link, latest, domains, platforms}) => {
    
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
        <div ref={cardRef} className=" bg-neutral-900 p-2 rounded-2xl flex flex-col lg:w-1/4 w-[90%] lg:m-0 h-2/6 text-left opacity-0 scale-0">
            <Image src={image} alt="image about project" className="rounded-xl w-full h-[200px]" width={500} height={500}/>
            <div className="py-2 px-1">
                <div className="flex justify-between items-center gap-x-1">
                    <b>{title}</b><br/>
                    {latest && <div className="rounded-sm bg-[#FFB355]/15 text-yellow-300 px-1">New</div>}
                </div>
                <span className="text-sm text-neutral-300">{description}</span>
                <br />
                <div className="flex flex-wrap mt-1 gap-2">
                    {domains.map(domain => {
                        return(
                            <span key={domain} className="text-xs p-1 px-2 rounded-full bg-[#7275DE]/15 text-[#7275DE] font-semibold">{domain}</span>
                        )
                    })}
                </div>
                <br />
                <div>
                    <a href={link} className="flex gap-x-1 items-center justify-center text-xs w-fit p-2 rounded-xl bg-neutral-800" target="_blank">
                        <FaHashnode className="text-base"/>
                        <span>Blog Link</span>
                    </a>
                </div>
            </div>
        </div>
    )
}


export default BlogCard