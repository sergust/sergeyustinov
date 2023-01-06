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
          I am a highly skilled software engineer with over 2 years of
          experience in developing and maintaining software applications. My
          focus is on front-end development using Angular, Vue, React, and
          TypeScript
        </p>
      </div>
    </div>
  )
}

export default Summary
