import { Space_Mono } from 'next/font/google'
import React, { useState } from 'react'

const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] })

function ExperienceCard({company, position, duration, description, location, technologies}: {company: string, position: string, duration: string, description: string, location?: string, technologies?: string[]}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleTechnologies = technologies ? technologies.slice(0, 5) : [];
  const remainingTechnologyCount = technologies ? Math.max(0, technologies.length - visibleTechnologies.length) : 0;

  return (
    <article
      className={`${spaceMono.className} w-full max-w-3xl mx-auto bg-neutral-900 ring-1 ring-white/5 shadow-2xl rounded-[32px] overflow-hidden transition-all duration-300 ease-in-out cursor-pointer`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="grid gap-4 px-5 py-5 lg:grid-cols-[1fr_auto] lg:px-6">
        <div className="space-y-3">
          <div className="inline-flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-sky-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-sky-200">Experience</span>
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-neutral-300">{duration}</span>
            {location ? <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-neutral-300">{location}</span> : null}
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-semibold text-white">{position}</h3>
            <p className="text-sm text-neutral-300">{company}</p>
          </div>
          {technologies?.length ? (
            <div className="flex flex-wrap gap-2">
              {visibleTechnologies.map((tech) => (
                <span key={tech} className="rounded-full bg-white/5 px-3 py-1 text-xs text-neutral-300">{tech}</span>
              ))}
              {remainingTechnologyCount > 0 && (
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-neutral-400">+{remainingTechnologyCount} more</span>
              )}
            </div>
          ) : null}
        </div>
        <div className="flex items-center justify-start lg:justify-end">
          <span className="text-xs uppercase tracking-[0.24em] text-neutral-500">{isExpanded ? 'Tap to collapse' : 'Tap to expand'}</span>
        </div>
      </div>

      <div className={`border-t border-white/10 bg-neutral-950 transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[420px] opacity-100 py-5 px-5' : 'max-h-0 opacity-0 py-0 px-5'}`}>
        <p className="text-sm leading-7 text-neutral-300">{description}</p>
      </div>
    </article>
  )
}

export default ExperienceCard