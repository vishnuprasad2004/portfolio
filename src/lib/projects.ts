
type project = {
  title: string;
  slug?: string;
  description: string;
  image: string;
  sourceLink: string;
  deploymentLink?: string;
  technologiesUsed: {name: string, icon: string|null}[];
  latest: boolean;
};

const projects: project[] = [
  {
    title: "Vestera - Paper Trading Platform",
    slug:"vestera-paper-trading-platform",
    description: `A competitive paper trading platform for NYSE stocks with AI-guided insights, built using Spring Boot, Spring AI, and PostgreSQL. Implemented RBAC, whitelist validation, circuit breaker pattern, and Caffeine caching to ensure security, fault tolerance, and high performance.`,
    image:"https://images.unsplash.com/photo-1620266757065-5814239881fd?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRyYWRpbmd8ZW58MHx8MHx8fDA%3D",
    sourceLink:"https://gitlab.com/vishnuprasad2004/vestara-platform",
    technologiesUsed:[
      {name: "Spring Boot", icon: "https://cdn.simpleicons.org/springboot"}, 
      {name: "Spring Security", icon: "https://cdn.simpleicons.org/springsecurity"},
      {name: "Spring AI", icon: "https://cdn.simpleicons.org/spring"},
      {name: "Docker", icon: "https://cdn.simpleicons.org/docker"}, 
      {name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql"},
      {name: "Postman", icon: "https://cdn.simpleicons.org/postman"},
    ],
    latest:true
  },
  {
    title: "Ecommerce Microservices Backend with Kubernetes",
    slug:"ecommerce-microservices-kubernetes",
    description: `The application is split into independent services such as User Service, Product Service, Order Service, and supporting infrastructure components. Each service is developed, containerized, and deployed independently locally using minikube, allowing the system to scale specific services based on demand rather than scaling the entire application.\n
    I made this project to understand how scalable and large-scale software systems are designed, deployed, scaled, and managed in real-world environments. Instead of building a monolithic application, this project follows a microservices architecture similar to what is used in production-grade e-commerce platforms.`,
    image:"/Ecommerce-Microservices-Kubernetes.jpg",
    sourceLink:"https://gitlab.com/vishnuprasad2004/ecommerce-microservices",
    technologiesUsed:[
      {name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes"}, 
      {name: "Docker", icon: "https://cdn.simpleicons.org/docker"}, 
      {name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs"}, 
      {name: "Typescript", icon: "https://cdn.simpleicons.org/typescript"}, 
      {name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb"},
      {name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql"},
      {name: "Postman", icon: "https://cdn.simpleicons.org/postman"},
      {name: "AWS S3", icon: "https://cdn.simpleicons.org/aws"},
      {name: "Redis", icon: "https://cdn.simpleicons.org/redis"},
    ],
    latest: true
  },
  {
    title:"Momentum: Smart Task Manager",
    slug:"momentum-task-manager",
    description: "Momentum is a AI-powered task management app that goes beyond traditional to-do lists. Unlike standard apps where tasks get forgotten after the deadline, Momentum ensures you stay on track with AI-generated reminders inspired by Duolingo’s notification system.",
    image:"/Momentum.png",
    latest: false,
    // deploymentLink:"https://vishnuprasad2004.github.io/momentum-backend/",
    sourceLink:"https://gitlab.com/vishnuprasad2004/momentum/",
    technologiesUsed:[
      {name: "React Native Expo", icon: "https://cdn.simpleicons.org/expo"}, 
      {name: "Supabase", icon: " https://cdn.simpleicons.org/supabase"}, 
      {name: "React.js", icon: "https://cdn.simpleicons.org/react"}, 
      {name: "Typescript", icon: "https://cdn.simpleicons.org/typescript"}, 
      {name: "Redux-Toolkit", icon: "https://cdn.simpleicons.org/redux"},
    ]
  },
  {
    title: "Vidyasetu (Hackathon Winner)",
    slug:"vidyasetu",
    description: "Vidyasetu is an AI-powered gamified learning assistant designed for middle and higher secondary CBSE students. It simplifies complex concepts through real-time explanations, translations, and interactive support in multiple languages. Unlike generic AI tools, Vidyasetu stays aligned with the CBSE curriculum, ensuring accurate and syllabus-based tutoring.",
    image: "/VIDYASETU.png",
    sourceLink: "https://gitlab.com/vishnuprasad2004/vidyasetu",
    technologiesUsed: [
      {name: "React Native", icon: "https://cdn.simpleicons.org/react"}, 
      {name: "Typescript", icon: "https://cdn.simpleicons.org/typescript"}, 
      {name: "Supabase", icon: "https://cdn.simpleicons.org/supabase"}, 
      {name: "Expo", icon: "https://cdn.simpleicons.org/expo"}, 
      {name: "PostgresDB", icon: "https://cdn.simpleicons.org/postgresql"},
    ],
    latest: false
  },
  // {
  //   title: "Next Auth App",
  //   description: "A Nextjs application with user authentication using Json Web Tokens",
  //   image: "/nextjs image.jpeg",
  //   sourceLink: "https://github.com/vishnuprasad2004/",
    // technologiesUsed: ["NextJs", "Typescript", "ReactJs","MongoDB","JWT"],
  //   latest: false
  // },
  {
    title: "University Management System",
    slug:"university-management-system",
    description: "Developed a University Management API to manage Students, Departments, Instructors, and Courses using RESTful CRUD operations and MongoDB Aggregation. The system is designed to be scalable and maintainable, following backend engineering best practices with TypeScript, testing, and containerization.",
    image: "/Stock Image.jpg",
    sourceLink: "https://gitlab.com/vishnuprasad2004/student-management-system",
    technologiesUsed: [
      {name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs"}, 
      {name: "Typescript", icon: "https://cdn.simpleicons.org/typescript"}, 
      {name: "Docker", icon: "https://cdn.simpleicons.org/docker"},
      {name: "Express.js", icon: "https://cdn.simpleicons.org/express"}, 
      {name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb"}, 
      {name: "Jest", icon: "https://cdn.simpleicons.org/jest"}, 
    ],
    latest: false
  },
  // {
  //   title: "Space Invader Game",
  //   slug:"space-invader-game",
  //   description: "The Classic Space Invader Game, You can play now ... made with game classes and canvasAPI animation rendering",
  //   image: "/spaceInvader.png",
  //   sourceLink: "https://github.com/vishnuprasad2004/space-invader-game/",
  //   deploymentLink: "https://vishnuprasad2004.github.io/space-invader-game/",
  //   technologiesUsed: [
  //     {name: "HTML", icon: "https://cdn.simpleicons.org/html5"}, 
  //     {name: "CSS", icon: "https://cdn.simpleicons.org/css"}, 
  //     {name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript"}, 
  //     {name: "Canvas API", icon: null},
  //   ],
  //   latest: false
  // },
  // {
  //   title: "CLI Resume",
  //   slug:"cli-resume",
  //   description: "A Command line application which showcases your resume, made using Nodejs",
  //   image: "/CLIResumeScreenshot.png",
  //   sourceLink: "https://github.com/vishnuprasad2004/cli-resume",
  //   technologiesUsed: [
  //     {name: "Javascript", icon: "https://cdn.simpleicons.org/javascript"}, 
  //     {name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs"}, 
  //     {name: "npm", icon: "https://cdn.simpleicons.org/npm"},
  //   ],
  //   latest: false
  // }
];

export default projects;
