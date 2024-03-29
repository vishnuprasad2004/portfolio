import socials from "@/lib/socialsLinks"
import SocialIcon from "./SocialsIcon"
import { BiMenu } from "react-icons/bi"
import { BsMenuAppFill, BsMenuButton } from "react-icons/bs"




const SidePanel = () => {

  return (
    <div id="panel" className="panel fixed flex bottom-0 right-0 gap-4 bg-neutral-800 p-2 lg:pl-9 lg:rounded-ss-full lg:w-fit justify-around items-center w-screen text-xl border-solid border-2 border-neutral-600 border-b-0 border-r-0 border-l-0">
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
      <BiMenu className="text-4xl lg:hidden"/>

    </div>
  )
}


export default SidePanel