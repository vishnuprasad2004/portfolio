
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
    description: "A Nextjs application with user authentication using Json Web Tokens",
    image: "/nextjs image.jpeg",
    link: "https://github.com/vishnuprasad2004/next-auth-app",
    technologiesUsed: ["NextJs", "Typescript", "ReactJs","MongoDB","JWT"],
    latest: true
  },
  {
    title: "Student Manager API",
    description: "An API service to manage Students and their details based on their Roll number as the primary key, stored in MongoDB",
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
    description: "A Command line application which showcases your resume, made using Nodejs",
    image: "/CLIResumeScreenshot.png",
    link: "https://github.com/vishnuprasad2004/cli-resume",
    technologiesUsed: ["Javascript", "NodeJs","npm"],
    latest: false
  }
];

export default projects;
