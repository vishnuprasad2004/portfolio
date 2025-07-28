import { Space_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] })

export default function Loader() {
  // const [n, setN] = useState(0);

  // useEffect(() => {
  //   setN(n+1);
  // });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center text-white flex-col wscreen h-screen">
      <Image src={"/pixel-cat.gif"} alt="fire" height={200} width={200} className=""/>
      <div className={spaceMono.className +" text-xl font-bold animate-pulse"}>Welcome to My Portfolio</div>
    </div>
  );
}