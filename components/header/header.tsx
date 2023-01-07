import type { NextComponentType } from 'next'
import Logo from './the-logo'
import Hamburger from './the-hamburger/the-hamburger'
import Aside from './aside/aside'
import Nav from './nav/nav'
import { useAppContext } from '../../context/AppContext'

export interface MenuItemInterface {
  text: string
  href: string
}

export const menuItems: MenuItemInterface[] = [
  {
    text: 'about',
    href: '#about',
  },
  {
    text: 'experience',
    href: '#experience',
  },
  {
    text: 'contact',
    href: '#contact',
  },
]

const Header: NextComponentType = () => {
  const { showAsideMenu } = useAppContext()

  return (
    <div className="drop-shadow-md py-6 container mx-auto">
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
