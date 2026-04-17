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
    <section className="w-full py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6">
        <Heading text="Experience" />
        <div className="w-full space-y-5">
          {experiences.slice().reverse().map((experience, key) => (
            <ExperienceCard
              key={key}
              company={experience.company}
              description={experience.description}
              duration={experience.duration}
              position={experience.position}
              location={experience.location}
              technologies={experience.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection