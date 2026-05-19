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
    created_at: Date,
    domains: string[],
    platform: IconType,
}

const isLatest = (date: string | Date): boolean => {
  const inputDate = new Date(date);
  const now = new Date();

  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(now.getMonth() - 1);

  return inputDate > oneMonthAgo;
};


const BlogCard: React.FC<BlogCardProps> = ({title, description, image, created_at, link, domains, platform:Icon}) => {
    
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
                    end: "top 70%",
                    scrub: true,
                    // markers: true
                }
            })
        }
    },[])


    return(
        <div ref={cardRef} className=" bg-neutral-900 p-2 rounded-2xl flex flex-col lg:w-1/3 w-[90%] lg:m-0 h-2/6 text-left opacity-0 scale-0">
            <div className="relative">
                <Image src={image} alt="image about project" className="rounded-2xl w-full h-[200px]" width={500} height={500}/>
                {isLatest(created_at) && <div className="absolute inset-0 bg-gradient-to-bl from-black/65 to-transparent rounded-2xl"></div>}
                {isLatest(created_at) && <div className="absolute top-2 right-2 rounded-lg bg-green-500/15 text-green-500 px-2 py-1 text-xs font-semibold">new</div>}
            </div>
            <div className="py-2 px-1">
                <div className="flex justify-between items-center gap-x-1">
                    <b>{title}</b><br/>
                </div>
                <span className="text-sm text-neutral-300">{description.slice(0, 300)}</span>
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
                        <Icon className="text-base"/> 
                        <span>Read More</span>
                    </a>
                </div>
            </div>
        </div>
    )
}


export default BlogCard