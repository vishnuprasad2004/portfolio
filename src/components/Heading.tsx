import { Space_Mono } from "next/font/google"


const spaceMono = Space_Mono({ weight: "700", subsets: ["latin"] })

interface HeadingProps {
    text:string;
}

const Heading:React.FC<HeadingProps> = ({ text }) => {
    return (
        <div className={spaceMono.className + " lg:text-6xl text-5xl mb-4 shiny-text"}>{text}</div>
    )
}

export default Heading