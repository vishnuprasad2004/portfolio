type ExperienceType = {
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies?: string[];
}

const experiences:ExperienceType[] = [
  {
    company:"KPMG India Services LLP",
    position:"Summer Intern",
    duration:"May 2025 - Jun 2025",
    description:"Worked on a project that involved developing a web application using React and Tailwind CSS"
  },
  {
    company:"Google Developers Group on Campus, GIETU",
    description:"Organized and participated in various workshops and events to promote Google technologies among students",
    position:"Core Team Member",
    duration:"Aug 2023 - Present",
    technologies:["JavaScript", "React", "Tailwind CSS"]
  }
]

export default experiences