import type { NextPage } from 'next'
import { useAppContext } from '../../../context/AppContext'

const Hamburger: NextPage = () => {
  const { toggleAsideMenu } = useAppContext()
  return (
    <div
      className="p-4 space-y-2 md:hidden z-10 cursor-pointer"
      onClick={() => toggleAsideMenu()}
    >
      {[...Array(3)].map((_, index) => (
        <span key={index} className="block w-8 h-0.5 bg-green" />
      ))}
    </div>
  )
}

export default Hamburger
