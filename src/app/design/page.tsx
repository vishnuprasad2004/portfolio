"use client";
import SidePanel from "@/components/SidePanel";
import { Space_Grotesk, Fraunces } from "next/font/google";
import { FC, useEffect, useRef } from "react";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap";
import Image from "next/image";
import designs from "@/lib/designs";
gsap.registerPlugin(ScrollTrigger);

interface DesignPosterProp {
    index: number
    src: string,
    orientation: "portrait" | "landscape" | "square",
    alt: string
}
const DesignPoster:FC<DesignPosterProp> = ({index, src, orientation, alt}: DesignPosterProp) => {

    if(orientation === "landscape") return <Image key={index} src={src} alt={alt} title={alt} draggable={false} onContextMenu={() => { return false }} height={0} width={200} loading="lazy" className="w-full lg:w-fit h-auto row-span-1 col-span-1 object-cover select-none lg:hover:scale-105 duration-300 rounded-sm card"/>
    else if(orientation === "portrait") return <Image key={index} src={src} alt={alt} title={alt} draggable={false} onContextMenu={() => { return false }} height={0} width={200} loading="lazy" className="w-full lg:w-fit h-auto row-span-2 object-cover select-none lg:hover:scale-105 duration-300 rounded-sm card"/>
    else return <Image key={index} src={src} alt={alt} title={alt} draggable={false} onContextMenu={() => { return false }} height={0} width={200} loading="lazy" className="w-full lg:w-fit h-auto row-span-2 object-cover select-none lg:hover:scale-105 duration-300 rounded-sm"/>

}

const spaceGrotesk = Space_Grotesk({weight:"700", subsets: ["latin"]})
const fraunces = Fraunces({weight: "variable", subsets: ["latin"], style:"italic"})

const DesignPage = () => {
    const headingText = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            headingText.current!,
            { scale: 0.2, opacity: 1 },
            {
                scale: 1.2,
                opacity: 0,
                scrollTrigger: {
                    trigger: headingText.current!,
                    toggleActions: "reverse play restart play",
                    start: 'top top', 
                    end: '+=100',    
                    scrub: true,  
                    // markers: true,    
                },
            }
        );
    })
    return(
        <>
            <div className="px-4">
                <SidePanel/>
                <div className="text-center pt-4">
                    <span className={fraunces.className + " lg:text-8xl text-4xl font-bold italic sticker select-none"} ref={headingText}>Gallery of Designs</span>
                    <p className={spaceGrotesk.className+" my-5 text-xs lg:text-base"}>These are all the posters/banners I created for events or for club instagram using tools like Canva, Inkscape, and Photoshop.</p>
                </div>
                {/* The display grid */}

                <div className="grid lg:gap-6 gap-2 lg:grid-cols-5 md:grid-cols-3 grid-cols-2 grid-auto-rows lg:px-4 py-16 w-full text-center grid-flow-dense">
                    {designs.map((design,i) => {
                        return <DesignPoster key={i} index={i} src={design.src} orientation={design.orientation} alt={design.alt}/>
                    })}
                </div>
            </div>
            <footer className={spaceGrotesk.className + " text-rose-500 text-center lg:pt-10 pt-4 lg:pb-2 pb-16 backdrop-blur-sm lg:text-base text-xs"}>
                ❤️ Designed and Implemented by Vishnu Prasad Korada <br/> © 2024 All rights reserved.
            </footer>
        </>
    )
}


export default DesignPage