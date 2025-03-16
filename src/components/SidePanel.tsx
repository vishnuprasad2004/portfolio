"use client";
import socials from "@/lib/socialsLinks"
import SocialIcon from "./SocialsIcon"
import { BiMenu } from "react-icons/bi"
import { useEffect, useRef, useState } from "react"
import { Space_Mono } from "next/font/google";
import Link from "next/link";

const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] })


const SidePanel = () => {
  const [menuVisible, setMenuVisible] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeDialogModel = () => {
    if (dialogRef.current && dialogRef.current.open) {
      dialogRef.current.close()
      dialogRef.current.style.setProperty("opacity", "0")
    }
  }
  const openDialogModel = () => {
    if (dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal()
      dialogRef.current.style.setProperty("display", "flex")
      dialogRef.current.style.setProperty("opacity", "1")
    }
  }

  useEffect(() => {
    closeDialogModel()
  })

  return (
    <>
      <div id="panel" className="panel z-40 fixed flex bottom-0 right-0 gap-4 bg-neutral-800 p-2 lg:pl-9 lg:rounded-ss-full lg:w-fit justify-around items-center w-screen text-xl border-solid border-2 border-neutral-600 border-b-0 border-r-0 border-l-0">
        {socials.map(social => {
          return (
            <SocialIcon
              link={social.link}
              name={social.name}
              icon={social.icon}
              key={social.name}
            ></SocialIcon>
          )
        })}
        <BiMenu className="text-4xl lg:hidden" onClick={() => { openDialogModel() }} />
      </div>
      <dialog ref={dialogRef} className={spaceMono.className + " lg:hidden hidden flex-col p-5 bg-neutral-800 rounded-lg border border-neutral-700 text-neutral-200 w-3/4 focus:outline-none duration-700"}>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-[#55dfaf]">Menu</span>
          <span className="font-bold text-sm select-none" onClick={() => { closeDialogModel() }}>✕</span>
        </div>
        <div className="flex flex-col gap-1 text-3xl duration-100">
          <Link href="#home" onClick={() => { closeDialogModel() }}># Home</Link>
          <Link href="#about" onClick={() => { closeDialogModel() }}># About</Link>
          <Link href="#skills" onClick={() => { closeDialogModel() }}># Skills</Link>
          <Link href="#projects" onClick={() => { closeDialogModel() }}># Projects</Link>
        </div>
      </dialog>
    </>
  )
}


export default SidePanel