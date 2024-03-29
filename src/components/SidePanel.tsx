import socials from "@/lib/socialsLinks"
import SocialIcon from "./SocialsIcon"




const SidePanel = () => {

    return (
        <div id="panel" className="panel fixed flex bottom-0 right-0 gap-4 bg-neutral-800 p-2 lg:pl-9 lg:rounded-ss-full lg:w-fit justify-around items-center w-screen text-xl">
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
      </div>
    )
}


export default SidePanel