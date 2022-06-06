import type { NextPage } from 'next'

interface Button {
  children: string
}

const Button: NextPage<Button> = ({ children }) => {
  return (
    <button className="text-green border-green px-6 border rounded-md font-light hover:bg-green/20 transition-colors">
      {children}
    </button>
  )
}

export default Button
