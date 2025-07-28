import { Space_Mono } from 'next/font/google'
import React, { useState } from 'react'


const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] })

function ExperienceCard({company, position, duration, description}: {company: string, position: string, duration: string, description: string}) {
  const [isExpanded, setIsExpanded] = useState(false);


  return (
    <>
      <div
      className={spaceMono.className + ` w-[90%] lg:w-1/2 mx-auto bg-neutral-900 shadow-lg rounded-xl overflow-hidden transition-all duration-500 ease-in-out cursor-pointer ${
        isExpanded ? 'max-h-[170px]' : 'max-h-[100px] overflow-hidden'
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
    > 
      <div className="flex items-center justify-between">
        <div className="p-4">
          <h3 className="text-xl font-bold text-white ">{company}</h3>
          <p className="text-gray-400">{position}</p>
        </div>
        <div>
          <p className="text-gray-500 px-4">{duration}</p>
        </div>
      </div>
      <div
        className={`p-4 text-gray-600 transition-all duration-500 ease-in-out overflow-hidden bg-neutral-800 mx-2 mb-2 rounded-lg ${
          isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p>
          {description}
        </p>
      </div>
    </div>
    </>
  )
}

export default ExperienceCard