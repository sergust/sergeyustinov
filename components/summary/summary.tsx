import type { NextComponentType } from 'next'

const Summary: NextComponentType = () => {
  return (
    <div className="mt-64 flex container items-center justify-center">
      <div className="w-full sm:max-w-5xl">
        <div className="mb-4">
          <h3 className="font-mono text-green mb-4 text-green">
            Hi, my name is
          </h3>
          <h1 className="mb-4 text-header">Sergey Ustinov</h1>
          <h1 className="font-black">I do Front End</h1>
        </div>

        <p className="w-full sm:w-2/3">
          I am a Senior Software Engineer with 3 years of experience and strong
          fundamentals in Front End technologies. Likes building scalable web
          infrastructure and making websites fast. Passionate about programming
          languages, designs, and developer tooling.
        </p>
      </div>
    </div>
  )
}

export default Summary
