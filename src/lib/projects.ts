
type project = {
  title: string;
  description: string;
  image: string;
  link: string;
  technologiesUsed: string[];
  latest:boolean;
};

const projects: project[] = [
  {
    title: "Next Auth App",
    description: "A Next app with user authentication using JWT",
    image: "/nextjs image.jpeg",
    link: "https://github.com/vishnuprasad2004/next-auth-app",
    technologiesUsed: ["NextJs", "Typescript", "ReactJs","MongoDB","JWT"],
    latest: true
  },
  {
    title: "Student Manager API",
    description: "An API service to manage Students and their details, stored in MongoDB",
    image: "/Stock Image.jpg",
    link: "https://github.com/vishnuprasad2004/StudentManagementAPI-TS",
    technologiesUsed: ["NodeJs", "Typescript", "ExpressJs", "MongoDB"],
    latest: false
  },
  {
    title: "Space Invader Game",
    description:
      "The Classic Space Invader Game, You can play now ... made with game classes and canvasAPI animation rendering",
    image: "/spaceInvader.png",
    link: "https://vishnuprasad2004.github.io/space-invader-game/",
    technologiesUsed: ["HTML", "CSS", "JavaScript","canvasAPI Animations"],
    latest: false
  },
  {
    title: "CLI Resume",
    description: "A Command line application with showcases your resume, made using Nodejs",
    image: "/CLIResumeScreenshot.png",
    link: "https://github.com/vishnuprasad2004/cli-resume",
    technologiesUsed: ["Javascript", "NodeJs"],
    latest: false
  }
];

export default projects;
