import type { NextComponentType } from 'next'
import Logo from './the-logo'
import Hamburger from './the-hamburger/the-hamburger'
import Aside from './aside/aside'
import Nav from './nav/nav'
import { useAppContext } from '../../context/AppContext'

export interface MenuItemInterface {
  text: string
}

export const menuItems: MenuItemInterface[] = [
  {
    text: 'about',
  },
  {
    text: 'experience',
  },
  {
    text: 'work',
  },
  {
    text: 'contact',
  },
]

const Header: NextComponentType = () => {
  const { showAsideMenu } = useAppContext()

  return (
    <div className="drop-shadow-md py-6 px-10">
      <div className="flex justify-between">
        <Logo />
        <nav className="flex font-mono">
          <div className="hidden sm:hidden md:flex">
            <Nav menuItems={menuItems} />
          </div>
          <Hamburger />
          {showAsideMenu && <Aside menuItems={menuItems}></Aside>}
        </nav>
      </div>
    </div>
  )
}

export default Header
