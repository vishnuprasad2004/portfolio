import React from 'react'
import Heading from '../Heading'
import ExperienceCard from '../ExperienceCard'
import experiences from '@/lib/experiences'


/**
 * 
 * @returns Company name, title, duration, description
 */
function ExperienceSection() {
  return (
    <div className='h-full w-full flex flex-col items-center justify-center gap-y-4 p-4'>
      <Heading text="Experience" />
      {experiences.map((experience) => {
        return (<ExperienceCard company={experience.company} description={experience.description} duration={experience.duration} position={experience.position}/>)
      })}
    </div>

  )
}

export default ExperienceSection