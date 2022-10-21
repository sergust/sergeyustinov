import type { NextComponentType } from 'next'

const About: NextComponentType = () => {
  return (
    <div
      className="flex w-full items-center justify-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="max-w-5xl">
        <div className="mb-4">
          <h1 className="font-mono text-green mb-4 text-green">
            Hi, my name is
          </h1>
          <h1 className="text-7xl font-black mb-4 text-header">
            Sergey Ustinov
          </h1>
          <h1 className="text-7xl font-black">I do Front End</h1>
        </div>

        <div className="text-base text-paragraph w-2/3">
          I am a Senior Software Engineer with 3 years of experience and strong
          fundamentals in Front End technologies. Likes building scalable web
          infrastructure and making websites fast. Passionate about programming
          languages, designs, and developer tooling.
        </div>
      </div>
    </div>
  )
}

export default About
