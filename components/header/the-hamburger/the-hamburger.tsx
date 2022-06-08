import type { NextComponentType } from 'next'

const Hamburger: NextComponentType = () => {
  return (
    <div className="p-4 space-y-2 md:hidden">
      {[...Array(3)].map((_, index) => (
        <span key={index} className="block w-8 h-0.5 bg-green" />
      ))}
    </div>
  )
}

export default Hamburger
