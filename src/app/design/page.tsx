"use client";
import SidePanel from "@/components/SidePanel";
import { Space_Grotesk, Fraunces, Archivo } from "next/font/google";
import { FC, useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap";
import Image from "next/image";
import {appDesigns, designs} from "@/lib/designs";
gsap.registerPlugin(ScrollTrigger);

interface DesignPosterProp {
    index: number
    src: string,
    orientation: "portrait" | "landscape" | "square",
    alt: string
}

interface PhoneMockupProps {
    src: string;
    alt: string;
}

const spaceGrotesk = Space_Grotesk({weight:"700", subsets: ["latin"]})
const fraunces = Fraunces({weight: "variable", subsets: ["latin"], style:"italic"})
const archivo = Archivo({weight: "variable", subsets: ["latin"]})

const orientationConfig = {
  landscape: { span: "row-span-1", aspect: "aspect-video" },
  portrait:  { span: "row-span-2", aspect: "aspect-[2/3]" },
  square:    { span: "row-span-2", aspect: "aspect-square" },
} as const;

const DesignPoster: FC<DesignPosterProp> = ({ index, src, orientation, alt }) => {
    const [loaded, setLoaded] = useState(false);
    const { span, aspect } = orientationConfig[orientation];

    return (
        <div className={`relative w-full ${span} col-span-1 overflow-hidden rounded-sm`}>
            {!loaded && (
            <div className={`absolute inset-0 shimmer ${aspect} rounded-sm`} />
        )}
        <Image
            key={index}
            src={src}
            alt={alt}
            title={alt}
            draggable={false}
            onContextMenu={() => false}
            height={0}
            width={200}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            className={`w-full lg:w-fit h-auto object-cover select-none rounded-sm card
            transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        />
    </div>
  );
};




const PhoneMockup: FC<PhoneMockupProps> = ({ src, alt }) => {
    return (
        <div className="phone-frame">
        <div className="phone-notch" />
        <div className="phone-screen">
            <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            draggable={false}
            />
        </div>
        <div className="phone-button phone-button-power" />
        <div className="phone-button phone-button-volume-up" />
        <div className="phone-button phone-button-volume-down" />
        </div>
    );
};

const DesignPage = () => {
    const headingText = useRef(null);
    //   const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const split = new SplitType(headingText.current!, { types: "chars" });
        return () => split.revert(); // cleanup on unmount
    }, []);
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

    // useEffect(() => {
    // const timeout = setTimeout(() => {
    //     setLoading(false)
    // }, 2000) // 2 seconds

    // return () => clearTimeout(timeout)
    // }, [])

    // if (loading) return <Loader />

    
    return(
        <>
            <div className="px-4 bg-black/1 backdrop-blur-sm">
                <div className="pt-5 p-2 pb-0 ">
                    <span className={archivo.className + " text-left font-[600] lg:hover:font-[800] lg:w-10 transition-[font-weight] lg:text-8xl text-4xl select-none"} ref={headingText}>GALLERY OF <br className="hidden lg:block" />DESIGNS</span>
                    <p className={spaceGrotesk.className+" text-right my-5 text-xs lg:text-base"}>Hey there! I&apos;m Vishnu Prasad Korada, a passionate designer and developer. <br/> Welcome to my smaller version of design pinterest! </p>
                </div>
                {/* The display grid */}

                <div className="grid lg:gap-6 gap-2 lg:grid-cols-5 md:grid-cols-3 grid-cols-2 grid-auto-rows lg:px-4 py-16 w-full text-center grid-flow-dense">
                    {designs.map((design,i) => {
                        return <DesignPoster key={i} index={i} src={design.src} orientation={design.orientation} alt={design.alt}/>
                    })}
                </div>
                {/* scroll the app designs */}
                <div className="lg:px-4 py-16 w-full">
                    <div>
                        <span className={archivo.className + " text-left font-[600] lg:hover:font-[800] lg:w-10 transition-[font-weight] lg:text-8xl text-4xl select-none"} ref={headingText}>FROM FIGMA <br className="hidden lg:block" />TO FRAME</span>
                        <p className={archivo.className + " my-5 text-xs lg:text-base italic"}>Interfaces I designed along with designing software for hackathons and personal projects. Turns out wireframes and system diagrams 
    aren&apos;t that different — both are just boxes with arrows, lying 
    to you about how simple the real thing will be.</p>
                    </div>
                    <div className="screenshot-scroll">
                        {appDesigns.map((app, i) => (
                            <PhoneMockup key={i} src={app.src} alt={app.alt} />
                        ))}
                    </div>
                </div>
            </div>

            <SidePanel/>
            <footer className={spaceGrotesk.className + " text-rose-500 text-center lg:pt-10 pt-4 lg:pb-2 pb-16 backdrop-blur-sm lg:text-base text-xs"}>
                ❤️ Designed and Implemented by Vishnu Prasad Korada <br/> © {new Date().getFullYear()} All rights reserved.
            </footer>
        </>
    )
}


export default DesignPage