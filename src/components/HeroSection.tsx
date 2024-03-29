import { Lacquer, Space_Mono, UnifrakturCook } from "next/font/google";

const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] })
const unifrakturCook = UnifrakturCook({ weight: "700", subsets: ["latin"] })
const lacquer = Lacquer({ weight: "400", subsets: ["latin"] })

const HeroSection = () => {
    return (
        <div className="h-screen flex justify-center items-center" id="hero">
          <div className="flex flex-col justify-center items-center w-screen">

            <span className={spaceMono.className + " lg:text-2xl text-xl select-none"}>Hello <span className="wave-hand">👋🏽</span>, I am</span>
            <span className={spaceMono.className + " lg:text-8xl select-none text-3xl my-name brightness-150"}>VishnuPrasadKorada™</span>
            <span className={spaceMono.className + " lg:text-2xl text-xl select-none"}>Developer & Designer</span>

          </div>
        </div>
    )
}

export default HeroSection