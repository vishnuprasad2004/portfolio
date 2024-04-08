import { Space_Mono } from "next/font/google"


const spaceMono = Space_Mono({ weight: "700", subsets: ["latin"] })

interface HeadingProps {
    text:string;
}

const Heading:React.FC<HeadingProps> = ({ text }) => {
    return (
        <p className={spaceMono.className + " text-5xl mb-4 text-rose-500"}>{text}</p>
    )
}

export default Heading