import type { NextPage } from 'next'

interface Button {
  children: string
  onClick: any
}

const Button: NextPage<Button> = ({ children, onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className="text-green border-green px-6 border rounded-md font-light hover:bg-green/20 transition-colors"
    >
      {children}
    </button>
  )
}

export default Button
