import { NextComponentType } from 'next'

const Footer: NextComponentType = () => {
  return (
    <div className="flex w-full justify-center mt-32">
      <span className="font-mono">
        ©{new Date().getFullYear()} Made in Sydney with ❤️
      </span>
    </div>
  )
}

export default Footer
