
type project = {
  title: string;
  description: string;
  image: string;
  link: string;
  technologiesUsed?: string[];
};

const projects: project[] = [
  {
    title: "Space Invader Game",
    description:
      "The Classic Space Invader Game, You can play now ... made with game classes and canvasAPI animation rendering",
    image: "./spaceInvader.png",
    link: "https://vishnuprasad2004.github.io/space-invader-game/",
    technologiesUsed: ["HTML", "CSS", "JavaScript - canvasAPI Animations"],
  },
  {
    title: "Student Manager API",
    description: "yada",
    image: "./spaceInvader.png",
    link: "https://github.com/vishnuprasad2004/StudentManagementAPI-TS",
    technologiesUsed: ["NodeJs", "Typescript", "ExpressJs"],
  },
  {
    title: "Next Auth App",
    description: "A Next app with user authentication using JWT",
    image: "./spaceInvader.png",
    link: "https://github.com/vishnuprasad2004/next-auth-app",
    technologiesUsed: ["NextJs", "Typescript", "ReactJs"]
  },
  {
    title: "Next Auth App",
    description: "A Next app with user authentication using JWT",
    image: "./spaceInvader.png",
    link: "https://github.com/vishnuprasad2004/next-auth-app",
    technologiesUsed: ["NextJs", "Typescript", "ReactJs"]
  }
];

export default projects;
