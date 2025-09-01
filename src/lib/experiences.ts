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
    description:"Worked on POCs using Power Automate, SharePoint to automate Onboarding processes and worked on understanding the use of Azure DevOps in the organization",
  },
  // {
  //   company:"Google Developers Group on Campus, GIETU",
  //   description:"Organized and participated in various workshops and events to promote Google technologies among students",
  //   position:"Web Development Lead",
  //   duration:"Aug 2023 - Jun 2025",
  //   technologies:["JavaScript", "React", "Tailwind CSS"]
  // }
]

export default experiences