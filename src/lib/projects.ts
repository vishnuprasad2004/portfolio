
type project = {
  title: string;
  description: string;
  image: string;
  sourceLink: string;
  deploymentLink?: string;
  technologiesUsed: string[];
  latest:boolean;
};

const projects: project[] = [
  {
    title:"Momentum",
    description: "Momentum is a task management app that goes beyond traditional to-do lists. Unlike standard apps where tasks get forgotten after the deadline, Momentum ensures you stay on track with AI-generated reminders inspired by Duolingo’s notification system.",
    image:"https://github.com/user-attachments/assets/9e1a2cf3-492f-43ce-b5ba-0a597ea76408",
    latest: true,
    sourceLink:"https://github.com/vishnuprasad2004/momentum",
    technologiesUsed:["React Native Expo", "Supabase", "React.js", "Typescript", "Redux-Toolkit"]
  },
  {
    title: "Finage",
    description: "A Nextjs application with user authentication using Json Web Tokens",
    image: "https://github.com/user-attachments/assets/15e0d496-14a3-42ed-9722-d5f540bfb73c",
    sourceLink: "https://github.com/vishnuprasad2004/finage",
    technologiesUsed: ["React Native", "Typescript", "Supabase", "Expo"],
    latest: true
  },
  {
    title: "Next Auth App",
    description: "A Nextjs application with user authentication using Json Web Tokens",
    image: "/nextjs image.jpeg",
    sourceLink: "https://github.com/vishnuprasad2004/",
    technologiesUsed: ["NextJs", "Typescript", "ReactJs","MongoDB","JWT"],
    latest: false
  },
  {
    title: "Student Management API System",
    description: "An RESTful API service to manage Students, Departments, Instructors and Courses using CRUD operations and MongoDB Aggregation operations",
    image: "/Stock Image.jpg",
    sourceLink: "https://github.com/vishnuprasad2004/StudentManagementAPI-TS",
    technologiesUsed: ["NodeJs", "Typescript", "ExpressJs", "MongoDB", "Jest"],
    latest: false
  },
  {
    title: "Space Invader Game",
    description:
      "The Classic Space Invader Game, You can play now ... made with game classes and canvasAPI animation rendering",
    image: "/spaceInvader.png",
    sourceLink: "https://github.com/vishnuprasad2004/space-invader-game/",
    deploymentLink: "https://vishnuprasad2004.github.io/space-invader-game/",
    technologiesUsed: ["HTML", "CSS", "JavaScript","canvasAPI Animations"],
    latest: false
  },
  {
    title: "CLI Resume",
    description: "A Command line application which showcases your resume, made using Nodejs",
    image: "/CLIResumeScreenshot.png",
    sourceLink: "https://github.com/vishnuprasad2004/cli-resume",
    technologiesUsed: ["Javascript", "NodeJs","npm"],
    latest: false
  }
];

export default projects;
