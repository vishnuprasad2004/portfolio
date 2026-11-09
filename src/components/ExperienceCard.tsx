'use client'

import { Space_Mono } from 'next/font/google'
import React, { useId, useState } from 'react'

// Real bold weight so headings aren't faux-bolded by the browser
const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'] })

type ExperienceCardProps = {
  company: string
  position: string
  duration: string
  /** Array of bullets, or a string (one bullet per line; leading "•", "-" or "*" is stripped) */
  description: string | string[]
  location?: string
  technologies?: string[]
}

const COLLAPSED_TECH_LIMIT = 5

/** "Jun 2026 - Present" -> { start: "Jun 2026", end: "Present", isCurrent: true } */
function splitDuration(duration: string) {
  const [start, end] = duration.split(/\s+[-–—]\s+/)
  return { start, end, isCurrent: Boolean(end) && /present|current|now/i.test(end) }
}

/** Normalises a description into clean bullet lines */
function toBullets(description: string | string[]) {
  const lines = Array.isArray(description) ? description : description.split('\n')
  return lines.map((line) => line.replace(/^\s*[•\-*]\s*/, '').trim()).filter(Boolean)
}

function ExperienceCard({
  company,
  position,
  duration,
  description,
  location,
  technologies,
}: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const panelId = useId()
  const { start, end, isCurrent } = splitDuration(duration)

  const allTech = technologies ?? []
  const shownTech = isExpanded ? allTech : allTech.slice(0, COLLAPSED_TECH_LIMIT)
  const hiddenCount = allTech.length - shownTech.length

  const bullets = toBullets(description)
  const hasDetails = bullets.length > 0 || allTech.length > COLLAPSED_TECH_LIMIT

  // Full class strings (not interpolated) so Tailwind can see them.
  // Resting = raised plate. Hover = lifts. Expanded = pressed flat.
  const plate = isCurrent
    ? {
        border: 'border-rose-500',
        raised: 'shadow-[6px_6px_0_0_#f43f5e] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_#f43f5e]',
        pressed: 'translate-x-1.5 translate-y-1.5 shadow-[0_0_0_0_#f43f5e]',
        toggle: 'text-rose-400 border-rose-500/60',
      }
    : {
        border: 'border-neutral-700',
        raised: 'shadow-[6px_6px_0_0_#262626] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_#262626]',
        pressed: 'translate-x-1.5 translate-y-1.5 shadow-[0_0_0_0_#262626]',
        toggle: 'text-neutral-400 border-neutral-600',
      }

  return (
    <li
      className={`${spaceMono.className} relative list-none pl-9 sm:pl-11
        after:absolute after:left-[7px] after:top-8 after:h-[calc(100%+36px)] after:border-l after:border-dashed after:border-neutral-700 last:after:hidden`}
    >
      {/* Timeline node + stub connecting it to the card */}
      <span aria-hidden className="absolute left-0 top-8 z-10 h-[15px] w-[15px]">
        {isCurrent && (
          <span className="absolute inset-0 animate-ping bg-rose-500/60 motion-reduce:animate-none" />
        )}
        <span
          className={`absolute inset-0 border-2 ${
            isCurrent ? 'border-rose-500 bg-rose-500' : 'border-neutral-600 bg-neutral-950'
          }`}
        />
      </span>
      <span
        aria-hidden
        className={`absolute left-[15px] top-[39px] h-px w-[21px] sm:w-[29px] ${
          isCurrent ? 'bg-rose-500' : 'bg-neutral-700'
        }`}
      />

      <article
        className={`relative rounded-sm border-2 bg-neutral-900 transition-[transform,box-shadow] duration-200 ease-out motion-reduce:transition-none ${plate.border} ${
          isExpanded ? plate.pressed : plate.raised
        }`}
      >
        <div className="px-5 py-5 sm:px-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
                {hasDetails ? (
                  /* Stretched button: the whole card is the click target */
                  <button
                    type="button"
                    onClick={() => setIsExpanded((v) => !v)}
                    aria-expanded={isExpanded}
                    aria-controls={panelId}
                    className="text-left after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-rose-400"
                  >
                    {position}
                  </button>
                ) : (
                  position
                )}
              </h3>
              <p className="mt-1 text-sm text-neutral-300">{company}</p>
            </div>

            {hasDetails && (
              <span
                aria-hidden
                className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-sm border text-lg leading-none ${plate.toggle}`}
              >
                <span
                  className={`block transition-transform duration-300 motion-reduce:transition-none ${
                    isExpanded ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </span>
            )}
          </div>

          <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-400">
            <span className="inline-flex items-center gap-2">
              <span>{start}</span>
              {end && (
                <>
                  <span className="sr-only">to</span>
                  <span aria-hidden className="h-px w-4 bg-neutral-600" />
                  <span className={isCurrent ? 'text-rose-400' : undefined}>{end}</span>
                </>
              )}
            </span>
            {location && <span>{location}</span>}
          </p>

          {shownTech.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {shownTech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-sm bg-neutral-800 px-2 py-0.5 text-xs text-neutral-300"
                >
                  {tech}
                </li>
              ))}
              {hiddenCount > 0 && (
                <li className="rounded-sm border border-dashed border-neutral-700 px-2 py-0.5 text-xs text-neutral-500">
                  +{hiddenCount} more
                </li>
              )}
            </ul>
          )}

          {/* Animated height via grid rows; `invisible` keeps collapsed text out of tab/AT order */}
          {bullets.length > 0 && (
            <div
              id={panelId}
              className={`grid transition-[grid-template-rows,visibility] duration-300 ease-out motion-reduce:transition-none ${
                isExpanded ? 'visible grid-rows-[1fr]' : 'invisible grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="mt-5 border-t border-dashed border-neutral-700 pt-5">
                  {bullets.length === 1 ? (
                    <p className="max-w-[62ch] text-sm leading-7 text-neutral-300">{bullets[0]}</p>
                  ) : (
                    <ul className="max-w-[62ch] space-y-3 text-sm leading-7 text-neutral-300">
                      {bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className={`relative pl-5 before:absolute before:left-0 before:top-[11px] before:h-1.5 before:w-1.5 ${
                            isCurrent ? 'before:bg-rose-500' : 'before:bg-neutral-500'
                          }`}
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </article>
    </li>
  )
}

export default ExperienceCard