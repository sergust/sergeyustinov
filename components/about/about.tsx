import type { NextComponentType } from 'next'
import BlockTitle from '../block-title/block-title'

const technologiesList = [
  'JavaScript',
  'TypeScript',
  'Angular',
  'Vue.js',
  'React.js',
  'Tailwind',
]

const About: NextComponentType = () => {
  return (
    <div className="py-64 container mx-auto flex items-center justify-center">
      <div
        id="about"
        className="lg:w-1/2 xl:w-1/2 2xl:w-1/2 md:w-full sm:w-full justify-start flex flex-col pt-2"
      >
        <BlockTitle text="About Me" number="01" className="mb-8" />
        <div className="flex flex-wrap-reverse sm:flex-nowrap gap-4">
          <div>
            <p>
              Hello, my name is Sergei Ustinov and I have a passion for building
              incredible things for the internet. My journey as a programmer
              began when I was just 7 years old, when my father brought me a PC
              from overseas. From a young age, I have been practicing building
              websites instead of playing video games. I am a proactive and
              detail-oriented problem solver, with a track record of delivering
              successful projects on time and within budget.
            </p>
            <p>
              I am currently focused on building an IoT platform for farmers at
              Sensand, a B2B SaaS platform that serves agriculture and land use
              managers as end users, with the entire AgTech ecosystem of tech
              providers working in one environment. As a software engineer with
              over 2 years of experience in developing and maintaining software
              applications, I have a strong foundation in front-end development
              using Angular, Vue, React, and TypeScript.
            </p>
            <p>
              In my free time, I enjoy staying up-to-date on the latest
              developments in the software industry and exploring new
              technologies. I am based in Sydney, Australia and am always open
              to new opportunities to join a dynamic and innovative company
              where I can make a positive impact on software development
              efforts.
            </p>
            <p>Here are technologies that I am most experienced with:</p>
            <ul className="font-mono text-sm grid grid-cols-2">
              {technologiesList.map((item, index) => {
                return (
                  <li key={`tech-item-${index}`}>
                    <span className="text-green mr-2">▷</span>
                    {item}
                  </li>
                )
              })}
            </ul>
          </div>

          <img
            src="/images/photo.jpeg"
            className="rounded-full w-1/3 h-1/3 mx-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default About
