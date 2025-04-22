import { Space_Mono } from "next/font/google";
import Link from "next/link";

const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] })

export default function Loader() {
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center text-white">
      <div className={spaceMono.className +" text-2xl font-bold animate-pulse"}>Welcome to My Portfolio...</div>
    </div>
  );
}