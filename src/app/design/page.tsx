"use client";
import SidePanel from "@/components/SidePanel";
import { Space_Grotesk, Fraunces } from "next/font/google";
import { useEffect, useRef } from "react";
import SplitType from "split-type";
// import gsap from "gsap";
import Image from "next/image";
import designs from "@/lib/designs";


const spaceGrotesk = Space_Grotesk({weight:"700", subsets: ["latin"]})
const fraunces = Fraunces({weight: "variable", subsets: ["latin"]})

const DesignPage = () => {
    const headingText = useRef(null);

    useEffect(() => {
        const split = new SplitType(headingText.current!, { types: 'chars' });
    })
    return(
        <div className={"px-4"}>
            <SidePanel/>
            <div className="text-center pt-4">
                <span className={fraunces.className + " text-8xl font-bold sticker select-none"} ref={headingText}>Gallery of Designs</span>
                <p className={spaceGrotesk.className+" my-2"}>These are all the posters/banners I created for events or for club instagram using tools like Canva, Inkscape, and Photoshop.</p>
            </div>
            {/* The display grid */}

            <div className="grid gap-6 lg:grid-cols-5 md:grid-cols-3 grid-cols-1 grid-auto-rows px-4 py-16 w-full text-center grid-flow-dense">
                {designs.map((design,i) => {
                    if(design.orientation === "landscape") return <Image key={i} src={design.src} alt={design.alt} height={0} width={200} objectFit="cover" loading="lazy" className="w-full lg:w-fit h-auto row-span-1 col-span-1 object-cover select-none hover:scale-105 duration-300 rounded-sm card"/>
                    else if(design.orientation === "portrait") return <Image key={i} src={design.src} alt={design.alt} height={0} width={200} objectFit="cover" loading="lazy" className="w-full lg:w-fit h-auto row-span-[2] object-cover select-none hover:scale-105 duration-300 rounded-sm card"/>
                    else return <Image key={i} src={design.src} alt={design.alt} height={0} width={200} objectFit="cover" loading="lazy" className="w-full lg:w-fit h-auto row-span-2 object-cover select-none hover:scale-105 duration-300 rounded-sm"/>
                })}
            </div>
        </div>
    )
}


export default DesignPage