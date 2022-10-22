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
      <div className="w-1/2 justify-start flex flex-col">
        <BlockTitle text="About Me" number="01" className="mb-8" />
        <div className="flex gap-4">
          <div>
            <p>
              Hello, my name is Sergey Ustinov and I am enjoying building
              awesome things for the internet. I started my journey as a
              programmer when I was 7 years old when my father brought me a PC
              from overseas. Since then, I have been practicing building
              websites instead of playing video games in my childhood.
            </p>
            <p>
              Currently, I am focused on building incredible IoT platform for
              farmers Sensand which is a B2B SaaS platform that will serve
              agriculture and land use managers as the end users, with the
              entire AgTech ecosystem of tech providers working in one
              environment.
            </p>
            <p>Here are technologies that I am most experienced with:</p>
            <ul className="font-mono text-sm grid grid-cols-2">
              {technologiesList.map((item, index) => {
                return (
                  <li key={`tech-item-${index}`}>
                    <img src="" alt="" />
                    <span className="text-green mr-2">▷</span>
                    {item}
                  </li>
                )
              })}
            </ul>
          </div>

          <img src="/images/photo.jpeg" className="rounded-full w-1/3 h-fit" />
        </div>
      </div>
    </div>
  )
}

export default About
