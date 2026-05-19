import { BsGithub, BsGitlab, BsInstagram, BsLinkedin, BsMedium, BsTwitterX } from "react-icons/bs";
import { FaMediumM } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import { SiHackerrank, SiLeetcode } from "react-icons/si";

const socials = [
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/vishnu-prasad-korada/",
    icon: BsLinkedin,
  },
  // {
  //   name: "Github",
  //   link: "https://github.com/vishnuprasad2004",
  //   icon: BsGithub,
  // },
  {
    name: "GitLab",
    link: "https://gitlab.com/vishnuprasad2004",
    icon: BsGitlab
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/the_vishnupk",
  //   icon: BsTwitterX,
  // },
  {
    name: "Hashnode",
    link: "https://vishnuprasadkorada.hashnode.dev/",
    icon: FaHashnode
  },
  {
    name: "Leetcode",
    link: "https://leetcode.com/vishnuprasadkorada/",
    icon: SiLeetcode
  },
  // {
  //   name: "Instagram",
  //   link: "https://instagram.com/the_vishnuprasadkorada",
  //   icon: BsInstagram,
  // },
  {
    name: "Medium",
    link: "https://medium.com/@vishnuprasadkorada",
    icon: FaMediumM
  },
  {
    name: "HackerRank",
    link: "https://www.hackerrank.com/profile/vishnuprasadkor1",
    icon: SiHackerrank
  }
];

export default socials
