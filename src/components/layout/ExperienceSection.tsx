import React from 'react'
import Heading from '../Heading'
import ExperienceCard from '../ExperienceCard'
import experiences from '@/lib/experiences'

/**
 * Experience timeline, newest role first.
 * Each ExperienceCard renders its own <li> (node + connector + card).
 */
function ExperienceSection() {
  return (
    <section className="w-full px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-10">
        <Heading text="Experience" />
        {/* pr-2 leaves room for the cards' offset shadows */}
        <ol className="flex w-full flex-col gap-9 pr-2">
          {experiences
            .slice()
            .reverse()
            .map((experience) => (
              <ExperienceCard
                key={`${experience.company}-${experience.position}-${experience.duration}`}
                company={experience.company}
                description={experience.description}
                duration={experience.duration}
                position={experience.position}
                location={experience.location}
                technologies={experience.technologies}
              />
            ))}
        </ol>
      </div>
    </section>
  )
}

export default ExperienceSection