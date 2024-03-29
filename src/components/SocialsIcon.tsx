"use client";
import React from "react";
import { IconType } from "react-icons";

interface SocialIconProps  {
    name: string;
    icon: IconType;
    link: string;
    
}

const SocialIcon: React.FC<SocialIconProps> = ({name,icon: Icon, link}) => {
    return (
        <a 
            href={link}
            title={name} 
            target="_blank"
            className=" p-2 rounded-full lg:hover:scale-125 lg:duration-300">
                <Icon/>
        </a>
    )
}

export default SocialIcon