import Image from "next/image";
import { useState, useEffect } from "react"

const images = [
    "/Vishnu Prasad Korada DP 2.jpg",
    "/Vishnu Prasad Korada DP.jpg"
];


const ImageView = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
    
        return () => clearInterval(intervalId);
    }, []);
    

    return (
        <div className="relative rounded-full lg:w-72 m-2 w-2/3 select-none ring-around">
            {images.map((src,idx) => {
                return <Image className={`absolute transition-opacity duration-1000 ${idx === currentImageIndex ? 'opacity-100' : 'opacity-0'}`} src={src} key={idx} width={288} height={288} alt="my dp"/>
            })}
        </div>
    )
}


export default ImageView