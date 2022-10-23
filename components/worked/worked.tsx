import type { NextComponentType } from 'next'
import BlockTitle from '../block-title/block-title'
import { experienceList, IExperience } from './work-experience'
import { useState } from 'react'

const Worked: NextComponentType = () => {
  const [selectedExperience, setSelectedExperience] = useState(
    experienceList[0]
  )

  const isActive = (item: IExperience) => {
    return selectedExperience.id === item.id
  }

  return (
    <div className=" container mx-auto flex items-center justify-center">
      <div className="lg:w-1/2 xl:w-1/2 2xl:w-1/2 md:w-full sm:w-full justify-start flex flex-col">
        <BlockTitle
          text="Where I have worked before"
          number="02"
          className="mb-8"
        />
        <div className="flex gap-4">
          <div className="flex flex-col w-36">
            {experienceList.map((item) => (
              <button
                key={`company-${item.id}`}
                onClick={() => setSelectedExperience(item)}
                className={`
                transition-all font-mono hover:bg-green hover:bg-opacity-5 hover:text-green py-2 text-sm w-full ${
                  isActive(item) && 'text-green bg-green bg-opacity-5'
                }
                `}
              >
                {item.company}
              </button>
            ))}
          </div>
          <div>
            <h3>
              {selectedExperience.title}{' '}
              <span className="text-green">
                @{' '}
                <a href={selectedExperience.companyLink}>
                  {selectedExperience.company}
                </a>
              </span>
            </h3>
            <p className="font-mono my-2">
              {selectedExperience.startDay} – {selectedExperience.endDay}
            </p>
            <ul>
              {selectedExperience.responsibilities.map(
                (responsibility, index) => {
                  return (
                    <li key={`r-${index}`}>
                      <span className="text-green mr-2">▷</span>
                      {responsibility}
                    </li>
                  )
                }
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Worked
