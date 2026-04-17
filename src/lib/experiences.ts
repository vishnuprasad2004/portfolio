type ExperienceType = {
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies?: string[];
  location?: string;
}

const experiences:ExperienceType[] = [
  {
    company:"KPMG India Services LLP",
    position:"Summer Intern",
    duration:"May 2025 - Jun 2025",
    description:"Worked on POCs using Power Automate, SharePoint to automate Onboarding processes and worked on understanding the use of Azure DevOps in the organization",
    technologies:["DevOps Fundamentals", "Power Automate", "CI/CD"],
    location:"Hyderabad, India",
  },
  {
    company:"MindX360 Technologies",
    position:"Trainee Consultant Intern",
    duration:"Jan 2026 - Mar 2026",
    description:`• Built enterprise backend services using Java 21 and Spring Boot, applying object-oriented design principles and RESTful API best practices in a collaborative agile environment\n
• Implemented fault-tolerant system design using Resilience4j Circuit Breaker patterns to handle external service failures gracefully\n
• Secured APIs using Spring Security with OAuth2 and granular RBAC, controlling access across multiple user roles\n
• Designed relational database schemas and managed data persistence using Hibernate JPA and MySQL, including concurrency handling with optimistic locking\n
• Delivered a production feature to parse XLSX data, transform it, and generate structured JSON outputs for downstream system consumption\n
• Applied reliability engineering practices including idempotency keys, correlation ID propagation for distributed tracing, and multi-tier caching strategies`,
    technologies:["Java", "Spring Boot", "Spring Security", "MySQL", "Hibernate JPA", "Postman", "REST APIs"],
    location:"Hyderabad, India",
  }
  // {
  //   company:"Google Developers Group on Campus, GIETU",
  //   description:"Organized and participated in various workshops and events to promote Google technologies among students",
  //   position:"Web Development Lead",
  //   duration:"Aug 2023 - Jun 2025",
  //   technologies:["JavaScript", "React", "Tailwind CSS"]
  // }
]

export default experiences