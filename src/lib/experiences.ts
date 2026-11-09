type ExperienceType = {
  company: string;
  position: string;
  duration: string;
  /** One string per bullet point */
  description: string | string[];
  technologies?: string[];
  location?: string;
}

const experiences: ExperienceType[] = [
  {
    company: "KPMG India Services LLP",
    position: "Summer Intern",
    duration: "May 2025 - Jun 2025",
    description: [
      "Worked on POCs using Power Automate and SharePoint to automate onboarding processes",
      "Worked on understanding the use of Azure DevOps in the organization",
    ],
    technologies: ["DevOps Fundamentals", "Power Automate", "CI/CD"],
    location: "Hyderabad, India - Onsite",
  },
  {
    company: "MindX360 Technologies",
    position: "Trainee Consultant Intern",
    duration: "Jan 2026 - Mar 2026",
    description: [
      "Built enterprise backend services using Java 21 and Spring Boot, applying object-oriented design principles and RESTful API best practices in a collaborative agile environment",
      "Implemented fault-tolerant system design using Resilience4j Circuit Breaker patterns to handle external service failures gracefully",
      "Secured APIs using Spring Security with OAuth2 and granular RBAC, controlling access across multiple user roles",
      "Designed relational database schemas and managed data persistence using Hibernate JPA and MySQL, including concurrency handling with optimistic locking",
      "Delivered a production feature to parse XLSX data, transform it, and generate structured JSON outputs for downstream system consumption",
      "Applied reliability engineering practices including idempotency keys, correlation ID propagation for distributed tracing, and multi-tier caching strategies",
    ],
    technologies: ["Java", "Spring Boot", "Spring Security", "MySQL", "Hibernate JPA", "Postman", "REST APIs"],
    location: "Hyderabad, India - Onsite",
  },
  {
    company: "MindX360 Technologies",
    position: "Associate Software Engineer",
    duration: "Jun 2026 - Present",
    description: [
      "Developed and enhanced React.js interfaces for enterprise hospitality management applications, implementing new features and improving client-side functionality",
      "Implemented Redux-based state management for application workflows and handled UI defects, functional issues and QA feedback",
      "Worked on MERN-stack proof of concepts, building application features using React.js, Node.js, Express.js, MongoDB and REST APIs",
      "Collaborated in client discussions, analysed existing application workflows and translated business requirements into Figma UI designs for enterprise applications",
    ],
    technologies: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB", "REST APIs", "Figma"],
    location: "Hyderabad, India - Onsite",
  },
  // {
  //   company: "Google Developers Group on Campus, GIETU",
  //   position: "Web Development Lead",
  //   duration: "Aug 2023 - Jun 2025",
  //   description: ["Organized and participated in various workshops and events to promote Google technologies among students"],
  //   technologies: ["JavaScript", "React", "Tailwind CSS"],
  // },
]

export default experiences