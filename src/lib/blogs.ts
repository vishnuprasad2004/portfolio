// <BlogCard image="https://github.com/user-attachments/assets/5bcf3bc0-5b4b-4e60-b6ce-2f9a15666f7f" title="But ... What is JSON Schema" domains={["config","Backend"]} description="Have you ever wondered how in node.js, package.json and package-lock.json file's structure is predefined and prompts a description whenever we hover over a key ... also it has a set of predefined keys and values." link="https://vishnuprasadkorada.hashnode.dev/but-what-is-json-schema" platforms={FaHashnode} latest={false}/>

import { IconType } from "react-icons"
import { FaMediumM } from "react-icons/fa"
import { FaHashnode } from "react-icons/fa6"

type Blog = {
  image: string,
  domains?: string[]
  description: string,
  title: string,
  link: string,
  platform: IconType,
  created_at: Date
}


const blogs: Blog[] = [
  {
    image: "https://github.com/user-attachments/assets/5bcf3bc0-5b4b-4e60-b6ce-2f9a15666f7f",
    title: "But ... What is JSON Schema",
    domains: ["config","Backend", "JSON"],
    created_at: new Date("2023-08-23"),
    platform: FaHashnode,
    link: "https://vishnuprasadkorada.hashnode.dev/but-what-is-json-schema",
    description: "Have you ever wondered how in node.js, package.json and package-lock.json file's structure is predefined and prompts a description whenever we hover over a key ... also it has a set of predefined keys and values."
  }, 
  {
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*41nZUSHDOB9WHbpwCfioVQ.png",
    domains: ["Docker", "Container"],
    created_at: new Date("2026-05-19"),
    platform: FaMediumM,
    title: "Docker Made Simple: Build Once, Run Anywhere",
    link: "https://medium.com/@vishnuprasadkorada/docker-made-simple-build-once-run-anywhere-5a6e916c2232",
    description: "Building software applications has never been easier. With AI tools, you can go from idea to working code faster than ever. But writing code is only half the job. Making it to run reliably, anywhere, is still a different problem altogether.That’s where Docker comes in, let’s deep dive into a tool used by millions of developers worldwide to ship software."
  },
  {
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    domains: ["CLI", "Tools", "Node.js"],
    created_at: new Date("2024-01-05"),
    title: "Building Stylish Node.js CLI Applications",
    link: "https://vishnuprasadkorada.hashnode.dev/building-stylish-nodejs-cli-applications",
    description: "Welcome to the wonderful world of Command Line Interface (CLI) ... where you can make powerful and versatile tools as a developer. One can use CLI tools for easy debugging, making custom scripts, and presentable logging in the console, and also for showing off your cool terminal to your friends 🧑🏽‍💻🚀✨.",
    platform: FaHashnode
  }
]


export default blogs.sort(
  (a,b) => b.created_at.getTime() - a.created_at.getTime()
);